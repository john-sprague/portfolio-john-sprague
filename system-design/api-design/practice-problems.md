<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Subjective Question 1](#subjective-question-1)
  - [A Buy/Sell Marketplace (OfferUp)](#a-buysell-marketplace-offerup)
    - [Data Model](#data-model)
    - [Endpoints + Example Status Codes](#endpoints--example-status-codes)
  - [An App for Streaming Music and Creating Playlists (Like Spotify)](#an-app-for-streaming-music-and-creating-playlists-like-spotify)
    - [Data Model](#data-model-1)
    - [Endpoints](#endpoints)
  - [A Homework Platform](#a-homework-platform)
    - [Data Model](#data-model-2)
    - [Endpoints](#endpoints-1)
  - [Client Errors](#client-errors)
  - [Challenges and Best Practices for API Updates](#challenges-and-best-practices-for-api-updates)
- [Subjective Question 2:](#subjective-question-2)
- [Subjective Question 3:](#subjective-question-3)
- [Subjective Question 4:](#subjective-question-4)
- [Subjective Question 5](#subjective-question-5)
- [Coding Problem 1: Write a REST API with the following endpoints](#coding-problem-1-write-a-rest-api-with-the-following-endpoints)
- [Coding Problem 2: Write an API endpoint that only accepts requests if the user send basic auth](#coding-problem-2-write-an-api-endpoint-that-only-accepts-requests-if-the-user-send-basic-auth)
- [Coding question 3: Write tests to cover the previously written endpoints](#coding-question-3-write-tests-to-cover-the-previously-written-endpoints)
- [Practice Problem 2](#practice-problem-2)
    - [1. Marketplace](#1-marketplace)
    - [2. Playlists](#2-playlists)
    - [3. Homeworks](#3-homeworks)
    - [How to Check Access](#how-to-check-access)
    - [Testing the Endpoints:](#testing-the-endpoints)
    - [Key Implementation Notes:](#key-implementation-notes)

<!-- /code_chunk_output -->

# Subjective Question 1

**Model data for these scenarios:**
1. A buy/sell marketplace (OfferUp)
2. An app for streaming music and creating playlists (like Spotify)
3. A homework platform

**Tasks:**
- For each scenario above, write a list of endpoints for a REST API.
- For each of these user error status codes, list two examples from the scenarios that should return those errors:
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
- List some problems or challenges you should consider when updating your API. What’s the safest way to avoid these problems?

---

## A Buy/Sell Marketplace (OfferUp)

### Data Model

**User**
```plaintext
id, f_name, l_name, email, address, password, password_salt
```

**Order**
```plaintext
id, buyer_id, seller_id, product_id, payment_id, date
```

**Order Payment**
```plaintext
id, payment_type, payment_amt, successful
```

**Product**
```plaintext
id, seller_id, title, description, listing_amt, keywords
```

### Endpoints + Example Status Codes

**GET /products?filters={...}**

**400 Bad Request:**
```json
{
  "error": "Missing required params 'filters'"
}
```

**401 Unauthorized:**
```json
{
  "error": "Unauthorized: Please provide a valid API key or access token"
}
```

**403 Forbidden:**
```json
{
  "error": "Forbidden: You do not have permission to access this resource"
}
```

**404 Not Found:**
```json
{
  "error": "Product not found"
}
```

---

## An App for Streaming Music and Creating Playlists (Like Spotify)

### Data Model

**User**
```plaintext
id, f_name, l_name, username, password, password_hash
```

**Playlist**
```plaintext
id, user_id, playlist_name, created_at
```

**Song**
```plaintext
id, name, artist_id, genre, description, length, s3_url
```

**Artist**
```plaintext
id, name, bio, profile_url
```

### Endpoints

**Users**
- `GET /user/{userId}`
- `GET /user/{userId}/playlists`
- `GET /user/{userId}/playlists/{playlistId}`
- `POST /user`
- `PUT /user`
- `DELETE /user/{userId}`

**Artist**
- `GET /artist/songs?limit={xx}&offset={xx}`
- `GET /artist/songs/{songId}`
- `POST /artist/song`
- `PUT /artist/{songId}`
- `DELETE /artist/{songId}`

---

## A Homework Platform

### Data Model

**Student**
```plaintext
id, f_name, l_name, username, password, password_hash
```

**Class**
```plaintext
id, teacher_id, name, description, subject, start_date, end_date
```

**Assignment Submission**
```plaintext
student_id, class_id, class_homework_id, submitted_at, file_link, feedback, grade
```

### Endpoints
- `GET /student/{studentID}`
- `GET /student/{studentID}/assignments`
- `GET /student/{studentID}/assignments/{assignment_id}`
- `POST /student/{studentID}/assignments/{assignment_id}`

---

## Client Errors

 **400 Bad Request**
```json
{
  "error": "Bad request: improperly formed body"
}
```

 **401 Unauthorized**
```json
{
  "error": "Unauthorized: user did not provide a valid bearer token"
}
```

 **403 Forbidden**
```json
{
  "error": "Forbidden: You do not have permission to access this resource"
}
```

 **404 Not Found**
```json
{
  "error": "Resource not found"
}
```

---

## Challenges and Best Practices for API Updates

**Common Challenges**
- **Breaking Changes:** Modifying endpoints, request/response formats, or authentication methods that clients rely on.
- **Backward Compatibility:** Ensuring existing clients can still function after updates.
- **Versioning:** Managing different versions of your API simultaneously.
- **Documentation Mismatch:** Keeping API documentation up to date with code changes.
- **Deprecation of Features:** Removing features that are no longer needed while providing a transition period for clients.

**Safest Way to Avoid These Problems**
- **Implement API Versioning:** `/v1/`, `/v2/`, or header-based versioning.
- **Deprecation Strategy:** Clearly document deprecated endpoints and provide a timeline for their removal.
- **Comprehensive Testing:** Automated integration and regression tests.
- **Clear Communication:** Notify users well in advance about upcoming changes and provide migration guides.
- **Backward Compatibility Layers:** Maintain backward-compatible responses for a transition period.
- **Incremental Updates:** Roll out updates gradually to minimize risk.

---

# Subjective Question 2: 

1. List what endpoints would you use for a simple to-do list app, that allows the user to create, read, update and delete tasks.﻿
2. Write a GraphQL query that will return task names, complete status, their project name, and the project color. Following these types:

`Task { name: String, complete: Boolean, deadline: String, project: Project}`

`Project { name: String, color: string, tasks: [Task] }`

`Query { tasks: [Task], projects: [Project] }`

**Endpoints:**
`GET /tasks`
`POST /tasks`
`PUT /tasks/{taskId}`
`DELETE /tasks/{taskId}`

**GraphQL Query**
`query { tasks { name, complete, project { name, color } } }`

# Subjective Question 3: 

1. What is the format for an HTTP Authorization header using a JSON Web Token? 

- Authorization: Bearer <token>

2. How to build a Basic auth header?

- Concatenate the username:password with a colen
- base64 encode the resulting string 
- Prefix it with basic 

`Basic <credentials>`

# Subjective Question 4: 

1. What is?

**XSS: Cross site scripting:**
- Attackers steal cookies if not market 'HttpOnly`
- An attacker inject malicious scripts into web pages viewed by others 
  - Stealing web cookies
  - Defacing web pages 
  - Redirecting users to malicious websites 
  - Executing unauthorized actions on behalf of users 

**MITM:**
- An attacker intercepts and potentially alters the communication between two parties. 
- Eavesdropping 
- Session Hijacking 
- SSL Stripping 

**Cookie stealing/ session replay**
- When an attacker gains access to a user's auth cookies, allowing them to impersonate the user
  - XSS Attacks 
  - MITM Attacks
  - Social Engineering 

**SQL Injection**
- An attacker inserts malicious SQL queries into input fields, allowing them to manipulate a DB 
  - Data corruption or deletion
  - Full Database Compromise 

# Subjective Question 5

**Describe different types of tests** 

1. Unit 
2. Integration 
3. Functional (E2E)
4. Load 
5. Performance 
6. Security 

# Coding Problem 1: Write a REST API with the following endpoints 

1. POST /body: echos back the request body in the response body
2. GET /headers: returns a JSON with the request headers
3. GET /params: returns a JSON with the query params of the request

```javascript
const express = require('express')
const app = express(); 
const PORT = 3000; 

app.use(express.json())


app.post('/body', async (req, res) => {
  res.status(200).json(req.body)
})

app.get('/headers', async (req, res) => {
 res.json(req.headers)
})

app.get('/params', async (req, res) => {

  res.json(req.params) 
}) 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

```

# Coding Problem 2: Write an API endpoint that only accepts requests if the user send basic auth 

  Write an API endpoint that only accepts requests if the user sends a basic auth.

  Authorization header with a hardcoded username and password. Return a 401 error if it’s invalid or a 400 if it’s using HTTP instead of HTTPS.

```javascript
const express = require('express');
const basicAuth = require('basic-auth');
const app = express();
const PORT = 3000;


// Hardcoded credentials
const USERNAME = 'admin';
const PASSWORD = 'securepassword123';


// Middleware to check for HTTPS
const requireHttps = (req, res, next) => {
  if (req.protocol !== 'https' && process.env.NODE_ENV === 'production') {
    return res.status(400).json({ 
      error: 'Bad Request',
      message: 'HTTPS is required'
    });
  }
  next();
};


// Protected endpoint
app.get('/protected', requireHttps, (req, res) => {
  const credentials = basicAuth(req);
  
  if (!credentials || 
      credentials.name !== USERNAME || 
      credentials.pass !== PASSWORD) {
    res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
    return res.status(401).json({ 
      error: 'Unauthorized',
      message: 'Invalid credentials'
    });
  }
  
  res.json({ 
    message: 'Successfully authenticated',
    data: 'Your sensitive data here'
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

# Coding question 3: Write tests to cover the previously written endpoints

1. POST /body: echos back the request body in the response body
2. GET /headers: returns a JSON with the request headers
3. GET /params: returns a JSON with the query params of the request
4. GET /me: returns status 401 if the auth is invalid, 400 if using
5. HTTP, or 200 if the username and password are valid

```javascript 
const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
  describe('POST /body', () => {
    it('should echo back the request body', async () => {
      const testData = { key: 'value' };
      const res = await request(app)
        .post('/body')
        .send(testData);
      
      expect(res.status).toBe(200);
      expect(res.body).toEqual(testData);
    });
  });

  describe('GET /headers', () => {
    it('should return request headers', async () => {
      const customHeader = { 'X-Test-Header': 'test-value' };
      const res = await request(app)
        .get('/headers')
        .set(customHeader);
      
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject(customHeader);
    });
  });

  describe('GET /params', () => {
    it('should return query parameters', async () => {
      const queryParams = { param1: 'value1', param2: 'value2' };
      const res = await request(app)
        .get('/params')
        .query(queryParams);
      
      expect(res.status).toBe(200);
      expect(res.body).toEqual(queryParams);
    });
  });

  describe('GET /me (Authentication)', () => {
    const validCredentials = Buffer.from('admin:securepassword123').toString('base64');
    const invalidCredentials = Buffer.from('wrong:password').toString('base64');

    it('should return 401 if no auth header is provided', async () => {
      const res = await request(app).get('/me');
      expect(res.status).toBe(401);
      expect(res.body.message).toBe('Missing or invalid Authorization header');
    });

    it('should return 401 if invalid credentials are provided', async () => {
      const res = await request(app)
        .get('/me')
        .set('Authorization', `Basic ${invalidCredentials}`);
      
      expect(res.status).toBe(401);
      expect(res.body.message).toBe('Invalid credentials');
    });

    it('should return 200 if valid credentials are provided', async () => {
      const res = await request(app)
        .get('/me')
        .set('Authorization', `Basic ${validCredentials}`);
      
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Authenticated successfully');
    });

    it('should return 400 if HTTP is used in production', async () => {
      // Simulate production environment
      process.env.NODE_ENV = 'production';
      
      const res = await request(app)
        .get('/me')
        .set('Authorization', `Basic ${validCredentials}`);
      
      expect(res.status).toBe(400);
      expect(res.body.message).toBe('HTTPS is required');
      
      // Reset environment
      process.env.NODE_ENV = 'test';
    });
  });
});
```

# Practice Problem 2 

1. Which of these auth methods can you use to:

- Ensure only the blog's admin can write posts
- Allow marketplace moderators to remove non-compliant items
- Allow teachers to create new homework
- Allow sellers to mark their items as sold

(Available Options: Access Control List, Role-Based Access Control, or Attribute-Based Access Control)

**Answer:**

1. **Ensure only the blog's admin can write posts**  
   **→ Role-Based Access Control (RBAC)**  
   *Rationale:* Assign the "admin" role exclusive permissions to write posts, ensuring only users with this role can perform the action.

2. **Allow marketplace moderators to remove non-compliant items**  
   **→ Role-Based Access Control (RBAC)**  
   *Rationale:* Grant the "moderator" role permissions to delete items, leveraging predefined roles for clear access management.

3. **Allow teachers to create new homework**  
   **→ Role-Based Access Control (RBAC)**  
   *Rationale:* Assign the "teacher" role permissions to create homework, aligning access rights with organizational roles.

4. **Allow sellers to mark their items as sold**  
   **→ Attribute-Based Access Control (ABAC)**  
   *Rationale:* Use attributes (e.g., `user_id == item.owner_id`) to ensure sellers can only modify their own items, requiring dynamic checks beyond static roles.

---

**Summary:**  
- **RBAC** for role-specific actions (admin, moderators, teachers).  
- **ABAC** for ownership-based actions (sellers marking items as sold).  
- **ACL** is less scalable here, as it focuses on individual user/resource mappings rather than roles or attributes.

--- 

2.  For each of the scenarios mentioned, describe who would have access to what resources, and how would you check if that user has access to the described resource. Remember that you only need to take into consideration the endpoints that you listed in a previous question.

- Marketplace
- Playlists
- Homeworks

---

### 1. Marketplace
**Endpoints**:  
- `DELETE /items/:id` (remove non-compliant items)  
- `PATCH /items/:id/sold` (mark item as sold)  

**Access Rules**:  
- **Moderators**:  
  - **Who**: Users with the `moderator` role.  
  - **Access**: Can delete items via `DELETE /items/:id`.  
  - **Check**: Use **RBAC** middleware to verify the user’s role in their JWT or session:  
    ```js
    const isModerator = (req, res, next) => {
      if (req.user.role !== 'moderator') return res.status(403).json({ error: 'Forbidden' });
      next();
    };
    ```

- **Sellers**:  
  - **Who**: Users who own the item (`user_id === item.owner_id`).  
  - **Access**: Can mark items as sold via `PATCH /items/:id/sold`.  
  - **Check**: Use **ABAC** middleware to validate ownership:  
    ```js
    const isItemOwner = async (req, res, next) => {
      const item = await Item.findById(req.params.id);
      if (item.owner_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
      next();
    };
    ```

---

### 2. Playlists
**Endpoints**:  
- `POST /playlists` (create)  
- `PUT /playlists/:id` (update)  
- `DELETE /playlists/:id` (delete)  

**Access Rules**:  
- **Playlist Owners**:  
  - **Who**: Users who created the playlist (`user_id === playlist.creator_id`).  
  - **Access**: Full CRUD on their own playlists.  
  - **Check**: Use **ABAC** to verify `creator_id` matches `req.user.id`:  
    ```js
    const isPlaylistOwner = async (req, res, next) => {
      const playlist = await Playlist.findById(req.params.id);
      if (playlist.creator_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
      next();
    };
    ```

---

### 3. Homeworks
**Endpoints**:  
- `POST /homeworks` (create homework)  
- `GET /homeworks/:id` (view homework)  

**Access Rules**:  
- **Teachers**:  
  - **Who**: Users with the `teacher` role.  
  - **Access**: Create homeworks via `POST /homeworks`.  
  - **Check**: Use **RBAC** to validate role:  
    ```js
    const isTeacher = (req, res, next) => {
      if (req.user.role !== 'teacher') return res.status(403).json({ error: 'Forbidden' });
      next();
    };
    ```

- **Students**:  
  - **Who**: Users enrolled in the class (`user.class_id === homework.class_id`).  
  - **Access**: View homework via `GET /homeworks/:id`.  
  - **Check**: Use **ABAC** to validate enrollment:  
    ```js
    const canViewHomework = async (req, res, next) => {
      const homework = await Homework.findById(req.params.id);
      if (req.user.class_id !== homework.class_id) return res.status(403).json({ error: 'Forbidden' });
      next();
    };
    ```

---

### How to Check Access
1. **For RBAC**:  
   - Extract the user’s role from their JWT/session (e.g., `req.user.role`).  
   - Use middleware to restrict endpoints to specific roles.  

2. **For ABAC**:  
   - Fetch the resource (e.g., item, playlist, homework) from the database.  
   - Compare the user’s ID/attributes (e.g., `req.user.id`, `req.user.class_id`) with the resource’s metadata.  

3. **Endpoints**: Apply the middleware to relevant routes:  
   ```js
   // Marketplace
   app.delete('/items/:id', isModerator, deleteItem);
   app.patch('/items/:id/sold', isItemOwner, markAsSold);

   // Playlists
   app.put('/playlists/:id', isPlaylistOwner, updatePlaylist);

   // Homeworks
   app.post('/homeworks', isTeacher, createHomework);
   app.get('/homeworks/:id', canViewHomework, getHomework);
   ```

---

**Summary**:  
- **RBAC** for role-based actions (moderators, teachers).  
- **ABAC** for ownership/attribute-based actions (sellers, playlist owners, students).  
- **ACL** is omitted here, as it’s less scalable for these scenarios.


3.  Write 3 endpoints using Basic Auth or another type of authentication, and demonstrate the 3 different types of access control discussed in class. You can generate a list with fake data for these scenarios:

- Access Control List: Let listed admins delete any marketplace item.
- Role-Based Access Control: Let teachers create the homework, but not students
- Attribute-based Access Control: Let marketplace item owners edit or delete their items.

Here’s an implementation with **3 endpoints** demonstrating **ACL**, **RBAC**, and **ABAC** using Express.js and Basic Authentication. I’ll include mock data for testing:

```javascript
const express = require('express');
const basicAuth = require('basic-auth');
const app = express();
app.use(express.json());

// Mock Data
const users = [
  { username: 'admin1', password: 'adminpass', role: 'admin', id: 1 },
  { username: 'teacher1', password: 'teacherpass', role: 'teacher', id: 2 },
  { username: 'seller1', password: 'sellerpass', role: 'seller', id: 3, ownsItemId: 101 },
];

const marketplaceItems = [
  { id: 101, name: 'Vintage Camera', ownerId: 3 },
  { id: 102, name: 'Designer Chair', ownerId: 4 },
];

// Basic Auth Middleware
const authenticate = (req, res, next) => {
  const credentials = basicAuth(req);
  const user = users.find(u => u.username === credentials?.name && u.password === credentials?.pass);

  if (!user) {
    res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.user = user; // Attach user to request
  next();
};

// --- Access Control Examples ---

// 1. Access Control List (ACL): Only listed admins can delete items
const admins = ['admin1']; // ACL: Whitelist of admin usernames
const isAdmin = (req, res, next) => {
  if (!admins.includes(req.user.username)) {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  next();
};

app.delete('/marketplace-items/:id', authenticate, isAdmin, (req, res) => {
  const itemId = parseInt(req.params.id);
  marketplaceItems = marketplaceItems.filter(item => item.id !== itemId);
  res.json({ message: 'Item deleted' });
});

// 2. Role-Based Access Control (RBAC): Only teachers can create homework
const isTeacher = (req, res, next) => {
  if (req.user.role !== 'teacher') {
    return res.status(403).json({ error: 'Forbidden: Teachers only' });
  }
  next();
};

app.post('/homeworks', authenticate, isTeacher, (req, res) => {
  res.json({ message: 'Homework created', data: req.body });
});

// 3. Attribute-Based Access Control (ABAC): Owners can edit their items
const isItemOwner = (req, res, next) => {
  const item = marketplaceItems.find(item => item.id === parseInt(req.params.id));
  if (!item || item.ownerId !== req.user.id) {
    return res.status(403).json({ error: 'Forbidden: Not the owner' });
  }
  next();
};

app.put('/marketplace-items/:id', authenticate, isItemOwner, (req, res) => {
  const item = marketplaceItems.find(item => item.id === parseInt(req.params.id));
  item.name = req.body.name;
  res.json({ message: 'Item updated', data: item });
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### Testing the Endpoints:

**1. ACL Endpoint (`DELETE /marketplace-items/:id`)**  
**Allowed**: `admin1` (username in ACL list)  
**Denied**: All other users  
```bash
# Success (admin1:adminpass)
curl -u admin1:adminpass -X DELETE http://localhost:3000/marketplace-items/101

# Failure (seller1:sellerpass)
curl -u seller1:sellerpass -X DELETE http://localhost:3000/marketplace-items/101
```

**2. RBAC Endpoint (`POST /homeworks`)**  
**Allowed**: Users with `role: teacher`  
**Denied**: Students/sellers/admins without the `teacher` role  
```bash
# Success (teacher1:teacherpass)
curl -u teacher1:teacherpass -X POST -H "Content-Type: application/json" -d '{"title":"Math Quiz"}' http://localhost:3000/homeworks

# Failure (seller1:sellerpass)
curl -u seller1:sellerpass -X POST -H "Content-Type: application/json" -d '{"title":"Math Quiz"}' http://localhost:3000/homeworks
```

**3. ABAC Endpoint (`PUT /marketplace-items/:id`)**  
**Allowed**: Users where `user.id === item.ownerId`  
**Denied**: Everyone else  
```bash
# Success (seller1:sellerpass owns item 101)
curl -u seller1:sellerpass -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Camera"}' http://localhost:3000/marketplace-items/101

# Failure (seller1 tries to edit item 102 they don't own)
curl -u seller1:sellerpass -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Chair"}' http://localhost:3000/marketplace-items/102
```

---

### Key Implementation Notes:
1. **ACL**: Explicitly checks against a whitelist of usernames (`admins` array).
2. **RBAC**: Uses the user’s `role` property to gate access.
3. **ABAC**: Compares the user’s `id` against the resource’s `ownerId` attribute.
4. **Basic Auth**: Validates credentials against the mock user database.

