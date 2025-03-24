# Practice Problem 1:
1. Model data for these scenarios:

- A buy/sell marketplace (OfferUp)
- An app for streaming music and creating playlists (like Spotify)
- A homework platform

2. For each of the scenarios above, write a list of endpoints for a REST API

3. For each of these user error status codes, list two examples from the scenarios above that should return those errors:

400
401
403
404

4. List some problems or challenges you should consider when updating your API. What's the safest way to avoid these problems?

---

## Modeling Data

### 1. **Buy/Sell Marketplace (OfferUp-like)**

- **User:**  
  - id  
  - username  
  - email  
  - password hash  
  - profile picture URL  
  - location  
  - ratings/reviews

- **Listing:**  
  - id  
  - title  
  - description  
  - price  
  - images (array of image URLs)  
  - category  
  - location  
  - createdAt / updatedAt  
  - sellerId (foreign key to User)

- **Message/Conversation:**  
  - id  
  - senderId (User)  
  - receiverId (User)  
  - listingId  
  - message content  
  - timestamp

- **Review:**  
  - id  
  - reviewerId (User)  
  - revieweeId (User)  
  - rating  
  - comment  
  - createdAt

---

### 2. **Streaming Music & Playlists (Spotify-like)**

- **User:**  
  - id  
  - username  
  - email  
  - password hash  
  - subscription level  
  - createdAt

- **Artist:**  
  - id  
  - name  
  - bio  
  - image URL

- **Album:**  
  - id  
  - title  
  - artistId  
  - releaseDate  
  - cover image URL

- **Track:**  
  - id  
  - title  
  - albumId  
  - duration  
  - audio file URL  
  - artistId (if single)

- **Playlist:**  
  - id  
  - userId  
  - title  
  - description  
  - list of trackIds  
  - createdAt  
  - updatedAt

---

### 3. **Homework Platform**

- **User:**  
  - id  
  - name  
  - email  
  - role (student, teacher)  
  - profile information

- **Course:**  
  - id  
  - title  
  - description  
  - teacherId  
  - list of enrolled studentIds

- **Assignment:**  
  - id  
  - courseId  
  - title  
  - description  
  - dueDate  
  - createdAt

- **Submission:**  
  - id  
  - assignmentId  
  - studentId  
  - submitted file/link  
  - timestamp  
  - grade / feedback

---

## B) REST API Endpoints

### 1. **Buy/Sell Marketplace Endpoints**
- **Listings:**  
  - `GET /listings` – List all listings  
  - `GET /listings/{id}` – Retrieve a specific listing  
  - `POST /listings` – Create a new listing  
  - `PUT /listings/{id}` – Update an existing listing  
  - `DELETE /listings/{id}` – Delete a listing

- **Users:**  
  - `GET /users/{id}` – Retrieve user profile  
  - `POST /users` – Create a new user  
  - `PUT /users/{id}` – Update user profile

- **Messages/Conversations:**  
  - `GET /conversations?userId={id}` – List all conversations for a user  
  - `POST /conversations` – Start a new conversation  
  - `POST /conversations/{conversationId}/messages` – Send a message

---

### 2. **Streaming Music & Playlists Endpoints**
- **Users:**  
  - `GET /users/{id}` – Retrieve user profile  
  - `POST /users` – Register a new user  
  - `PUT /users/{id}` – Update user settings

- **Artists:**  
  - `GET /artists` – List all artists  
  - `GET /artists/{id}` – Get artist details

- **Albums:**  
  - `GET /albums` – List all albums  
  - `GET /albums/{id}` – Retrieve album details

- **Tracks:**  
  - `GET /tracks` – List all tracks  
  - `GET /tracks/{id}` – Get track details

- **Playlists:**  
  - `GET /playlists` – List all public playlists  
  - `GET /users/{userId}/playlists` – Retrieve playlists for a user  
  - `POST /playlists` – Create a new playlist  
  - `PUT /playlists/{id}` – Update playlist details  
  - `DELETE /playlists/{id}` – Delete a playlist

---

### 3. **Homework Platform Endpoints**
- **Users:**  
  - `GET /users/{id}` – Retrieve user details  
  - `POST /users` – Register a new user  
  - `PUT /users/{id}` – Update user profile

- **Courses:**  
  - `GET /courses` – List all courses  
  - `GET /courses/{id}` – Retrieve a specific course  
  - `POST /courses` – Create a new course (teachers only)  
  - `PUT /courses/{id}` – Update course details

- **Assignments:**  
  - `GET /assignments` – List all assignments  
  - `GET /assignments/{id}` – Retrieve an assignment  
  - `POST /courses/{courseId}/assignments` – Create a new assignment  
  - `PUT /assignments/{id}` – Update an assignment  
  - `DELETE /assignments/{id}` – Delete an assignment

- **Submissions:**  
  - `GET /assignments/{assignmentId}/submissions` – List all submissions for an assignment  
  - `POST /assignments/{assignmentId}/submissions` – Submit homework  
  - `GET /users/{userId}/submissions` – Retrieve submissions for a student

---

## C) Examples of User Error Status Codes

### **400 Bad Request**
- **Buy/Sell Marketplace:**  
  1. Creating a listing without required fields (e.g., missing title or price).  
  2. Sending malformed JSON when updating user profile.

- **Streaming Music:**  
  1. Submitting a playlist creation request with an invalid JSON structure.  
  2. Querying tracks with invalid query parameters (e.g., invalid date format).

- **Homework Platform:**  
  1. Posting an assignment with missing required fields (e.g., no due date).  
  2. Submitting homework without the required file/link in the request body.

---

### **401 Unauthorized**
- **Buy/Sell Marketplace:**  
  1. Attempting to create a listing without providing a valid authentication token.  
  2. Accessing user-specific messages without logging in.

- **Streaming Music:**  
  1. Trying to access private playlists without a valid session token.  
  2. Attempting to update user profile settings without being authenticated.

- **Homework Platform:**  
  1. Attempting to submit an assignment without being logged in.  
  2. Accessing teacher-only course management endpoints without proper authentication.

---

### **403 Forbidden**
- **Buy/Sell Marketplace:**  
  1. Trying to delete a listing that the user does not own.  
  2. Attempting to access another user's private messages.

- **Streaming Music:**  
  1. Attempting to modify a playlist that belongs to another user.  
  2. Accessing restricted artist information that requires special permissions.

- **Homework Platform:**  
  1. A student trying to access grade details for an assignment they did not submit.  
  2. A user attempting to modify course content when they are not the instructor.

---

### **404 Not Found**
- **Buy/Sell Marketplace:**  
  1. Requesting a listing that does not exist (e.g., `GET /listings/99999`).  
  2. Trying to retrieve a user profile with a non-existent user ID.

- **Streaming Music:**  
  1. Requesting details for an album or track that does not exist.  
  2. Accessing a playlist with an invalid or non-existent ID.

- **Homework Platform:**  
  1. Fetching an assignment that has been deleted or never existed.  
  2. Requesting submissions for an assignment ID that is not found.

---

## D) Problems/Challenges When Updating Your API & Safest Way to Avoid Them

### **Common Challenges:**
- **Breaking Changes:**  
  - Removing or modifying endpoints, request/response formats, or authentication methods that clients rely on.
- **Backward Compatibility:**  
  - Ensuring existing clients can still function after updates.
- **Versioning:**  
  - Managing different versions of your API simultaneously.
- **Documentation Mismatch:**  
  - Keeping API documentation up to date with code changes.
- **Deprecation of Features:**  
  - Removing features that are no longer needed while providing a transition period for clients.

### **Safest Way to Avoid These Problems:**
- **Implement API Versioning:**  
  - Use URL versioning (e.g., `/v1/`, `/v2/`) or header-based versioning so that breaking changes do not affect existing clients.
- **Deprecation Strategy:**  
  - Clearly document deprecated endpoints and provide a timeline for their removal.
- **Comprehensive Testing:**  
  - Implement rigorous automated tests (integration and regression tests) to ensure changes don’t break existing functionality.
- **Clear Communication:**  
  - Notify users well in advance about upcoming changes and provide migration guides.
- **Backward Compatibility Layers:**  
  - Consider maintaining backward-compatible responses for a period of time or offering adapter endpoints to ease transition.
- **Incremental Updates:**  
  - Roll out updates gradually, possibly using feature toggles or canary releases to minimize risk.

---

This answer covers data modeling, REST endpoint design, error handling examples, and best practices for safely updating your API.