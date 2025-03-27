# RegularDraw API Schema Design

You're working for **RegularDraw**, an app where users can place, edit, and delete Regular Shapes on a Canvas. Your assignment is to design the schema of an endpoint where clients will send the operations executed.

## Shape Object Characteristics

**Shape:**

- **Sides:**
  - `0` = Dot (no size)
  - `1` = Circle
  - `2` = Line
  - `3+` = Regular polygon with this number of sides (Triangle, Square, Pentagon, etc.)
- **Center:** (Position of the shape in the canvas)
  - `X`: Number
  - `Y`: Number
- **Radius:** Number (Radius, distance from each point to the center)
- **Rotation:** Number
- **ID:** String (ID of the shape)

## Supported Operations

- **Add a shape**
- **Remove a shape**
- **Edit a shape** (sides, center, radius, rotation, etc.)

## Considerations

Take each of these scenarios into consideration, and explain why your design handles each of them:

**Idempotent**
What happens if the client thinks the operation failed and tries again, but the server receives two operations? Make sure that only one is accounted for.

**Versioning**
What if the user’s changes were made on top of an older version? Ensure that simultaneous operations can be properly merged or that conflicts can be reported.

**Batching**
What if the user made many changes in a short period of time? Ensure operations can be batched.

**Error Handling**
What if the user sends multiple operations, but one of them results in an error? Ensure that errors are reported only for operations that failed.

Feel free to change or add fields if you need them.

---

##  Solution 

**1. Shape Schema**

```typescript
interface Shape {
  id: string; // Unique identifier (UUID v4 recommended)
  sides: number; // 0=Dot, 1=Circle, 2=Line, 3+=Polygon
  center: {
    x: number; // X-coordinate
    y: number; // Y-coordinate
  };
  radius: number; // Distance from center to vertices
  rotation: number; // Degrees (0-360)
  version: number; // Incremented with each edit
  lastModified: string; // ISO 8601 timestamp
}
```

---

**2. Operations Endpoint**


**Endpoint**
```http
POST /api/v1/operations
```

**Request Schema**
```typescript
interface OperationBatch {
  clientId: string; // Unique client identifier (UUID v4)
  operations: Array<{
    type: "ADD" | "REMOVE" | "EDIT";
    operationId: string; // Unique per operation (UUID v4)
    shapeId?: string; // Required for REMOVE/EDIT
    shape?: Partial<Shape>; // Required for ADD/EDIT
    expectedVersion?: number; // Required for EDIT
  }>;
}
```

**Response Schema**
```typescript
interface OperationResult {
  success: boolean;
  newVersion: number; // Latest server version
  conflicts: Array<{
    operationId: string;
    errorType: "VERSION_MISMATCH" | "SHAPE_NOT_FOUND" | "INVALID_OPERATION";
    currentState?: Shape; // For conflict resolution
  }>;
  appliedOperations: string[]; // IDs of successful operations
}
```

---

## 3. Scenario Handling

**A. Idempotency**
**Implementation:**  
- Each operation includes a unique `operationId`
- Server maintains a registry of processed IDs (TTL 24h)
- Duplicate `operationId` → Operation ignored (not reprocessed)

**Example Flow:**  
```
Client sends ADD operation (id: abc123)
Server processes → Returns success
Client retries ADD operation (id: abc123)
Server ignores → Returns same success response
```

---

**B. Versioning**
**Implementation:**  
- Optimistic concurrency control
- `expectedVersion` must match current server version
- Edit operations require `expectedVersion`

**Conflict Resolution:**  
1. Client sends EDIT with `expectedVersion=3`
2. Server checks current version:
   - Match → Apply update, increment version
   - Mismatch → Return conflict with current state
3. Client reconciles changes and retries

---

**C. Batching**
**Implementation:**  
- Operations processed sequentially in array order
- Failed operations don't block subsequent ones
- Partial success supported

**Example Batch:**  
```json
{
  "operations": [
    {"type": "ADD", ...},  // Fails
    {"type": "EDIT", ...}, // Succeeds
    {"type": "REMOVE", ...} // Succeeds
  ]
}
```
**Response:**  
```json
{
  "success": false,
  "appliedOperations": ["edit-op-456", "remove-op-789"],
  "conflicts": [{"operationId": "add-op-123", ...}]
}
```

---

### D. Error Handling
**Error Types:**  
| Error Code | Description |
|------------|-------------|
| `VERSION_MISMATCH` | Shape modified since last fetch |
| `SHAPE_NOT_FOUND` | Invalid shape ID reference |
| `INVALID_OPERATION` | Malformed request data |

**Recovery Strategy:**  
1. Client receives error details
2. For version conflicts:  
   - Auto-merge if possible (position/radius changes)
   - Prompt user if semantic conflict (changing sides)
3. Retry failed operations with updated data

---

**4. Server Implementation Notes**

### **Data Storage**
```typescript
interface ServerState {
  shapes: Map<string, Shape>;
  operationLog: Set<string>; // Processed operation IDs
}
```

**Conflict Detection Logic**
```javascript
function handleEdit(operation, currentShape) {
  if (operation.expectedVersion !== currentShape.version) {
    return {
      error: "VERSION_MISMATCH",
      currentState: currentShape
    };
  }
  // Apply changes...
}
```

**Performance Optimization**
- **Bloom Filter:** For quick duplicate operation ID checks
- **Batched Writes:** Atomic database transactions
- **Rate Limiting:** Prevent abuse of batch endpoint

---

### **5. Client Implementation Guide**

1. **Operation Sequencing:**  
   ```javascript
   // Generate unique IDs for all operations
   const operationId = crypto.randomUUID();
   ```

2. **Conflict Resolution:**  
   ```javascript
   function handleConflict(failedOp, serverState) {
     // Auto-merge rotation changes
     if (failedOp.field === 'rotation') {
       return {...failedOp, expectedVersion: serverState.version};
     }
     // Show UI conflict resolution dialog
   }
   ```

3. **Retry Logic:**  
   ```javascript
   function retryFailedOperations(response) {
     response.conflicts.forEach(op => {
       const updatedOp = reconcileChanges(op);
       sendOperation(updatedOp);
     });
   }
   ```

# Alternative Solution 

---

## **Proposed Schema (JSON)**

```json
{
  "batchId": "unique-batch-id-123",         // Optional: groups operations together
  "operations": [
    {
      "opId": "op-unique-id-1",              // Unique operation ID for idempotency
      "type": "ADD",                       // Operation type: ADD, REMOVE, EDIT
      "shape": {                           // For ADD/EDIT operations, details of the shape
        "id": "shape-unique-id-abc",       // Unique identifier for the shape
        "sides": 3,                        // 0: Dot, 1: Circle, 2: Line, 3+: Regular polygon
        "center": { "x": 100, "y": 200 },
        "radius": 50,
        "rotation": 0,
        "version": 1                       // Optional version field for optimistic concurrency control
      }
    },
    {
      "opId": "op-unique-id-2",
      "type": "REMOVE",
      "shapeId": "shape-unique-id-abc",     // Only shapeId is needed for removal
      "version": 1                         // Version check for safe removal if desired
    },
    {
      "opId": "op-unique-id-3",
      "type": "EDIT",
      "shape": {
        "id": "shape-unique-id-def",
        "sides": 4,                        // For example, change to a square
        "center": { "x": 150, "y": 250 },
        "radius": 40,
        "rotation": 45,
        "version": 2                       // The client’s view of the current version; used for conflict resolution
      }
    }
  ]
}
```

---

## **Explanation & How It Handles Each Scenario**

**1. Idempotency**  
- **Design Approach:**  
  - Every operation includes a unique operation ID (`opId`).  
  - The server uses this `opId` to determine if an operation has already been applied.  
- **Outcome:**  
  - If a client resend's the same operation (with the same `opId`), the server recognizes it as a duplicate and does not apply it twice.

**2. Versioning**  
- **Design Approach:**  
  - Each shape object has a `version` field.  
  - For EDIT and REMOVE operations, the client includes the version it expects to update or delete.  
- **Outcome:**  
  - If the shape on the server has been modified since the client's version, the server can detect a version mismatch and report a conflict.  
  - This ensures that simultaneous operations on the same shape are either merged correctly or flagged for conflict resolution.

**3. Batching**  
- **Design Approach:**  
  - The request schema supports a **batch** of operations via an array (`operations`).  
  - Optionally, a `batchId` can group related operations, which may help in logging or transactional handling.
- **Outcome:**  
  - Clients can send multiple operations (add, remove, edit) in one request, reducing network overhead and allowing the server to process them together.

**4. Error Handling**  
- **Design Approach:**  
  - The server processes each operation individually within the batch.  
  - In the response, it can provide a status for each `opId` indicating success or failure, along with error messages for those that failed.
- **Outcome:**  
  - If one operation fails (e.g., due to a version conflict), the server reports the error for that specific operation while processing the others.
  - This granularity enables clients to handle failures on a per-operation basis, retrying only those that failed.

---

## **Summary**

- **Idempotency:** Unique `opId` ensures that duplicate operations are not processed more than once.
- **Versioning:** The `version` field helps manage concurrent updates and resolve conflicts.
- **Batching:** An array of operations allows multiple actions to be sent and processed in a single request.
- **Error Handling:** Individual status reporting for each operation ensures that errors are isolated and handled without affecting the entire batch.

# Addition examples of conflict resolution strategies 
Certainly! Here are some additional conflict resolution strategies for handling simultaneous operations in the **RegularDraw** app:

### 1. Optimistic Concurrency Control (OCC)
- Each shape edit includes a **version number** (or timestamp).  
- When a user submits an update, the system checks if the version matches the current version in the database.  
- If the versions don’t match (indicating another user has made changes), the request is rejected or prompted for a **manual merge**.

### 2. Last Write Wins (LWW)
- The system accepts the most recent change based on a **timestamp**.  
- This is useful when changes are independent or when user awareness of conflicts is not critical.  
- However, this strategy risks **overwriting** valuable updates.

### 3. Merging Strategies for Shape Edits
- **Attribute-wise merging:** If two users modify different attributes (e.g., one changes the position, another changes the size), merge them without conflict.  
- **Weighted priorities:** Assign user roles (e.g., admin edits override standard user edits).  
- **Change tracking:** Maintain a log of shape transformations to allow users to undo/redo conflicting operations.

### 4. Locking Mechanism
- When a user starts editing a shape, it is **temporarily locked** for other users.  
- This prevents concurrent modifications but can lead to bottlenecks in real-time collaboration.

### 5. Operational Transformation (OT)
- Used in collaborative applications like Google Docs.  
- Each operation is **transformed** based on concurrent changes before being applied, ensuring consistency across multiple users.

### 6. Conflict Resolution UI
- If a conflict occurs, present users with a **visual diff tool** to choose which changes to keep.  
- Offer options like **“Apply My Changes,” “Keep Server Changes,” or “Merge Manually.”**