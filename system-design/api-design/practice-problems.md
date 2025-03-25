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

# A buy/sell marketplace (OfferUp)

**Data Model**
**User**
id
f_name
l_name
email
address
password
password_salt

**order**
id
buyer_id
seller_id
product_id
payment_id
date

**order_payment**
id
payment_type
payment_amt 
successful

**Product**
id
seller_id
title
desc
listing_amt
keywords


**Endpoints + Example Status Codes**

GET: /products?filters={...}

**400 Bad Request:**
  1. Creating a listing without required fields (query params) (e.g., missing title or price).  
  2. Sending malformed JSON when updating user profile.

`GET /products?`

```json
{
  "error": "Missing required params 'filters'
}
```

**401 Unauthorized:** 
- User did not provide a valid token
- Accessing user-specific messages without logging in.

 
`GET /products?filters={...}`

```json 
{
  "error": "Unauthorized: Please provide a valid API key or access token"
}
```

**403 Forbidden:**
- Occurs when the user is authenticated but does not have permission to access the requested resource
- Attempting to access another user's private messages.

`GET /products?filters={...}`
`Authorization: Bearer validUserToken`

```json
{
  "error": "Forbidden: You do not have permission to access this resource" 
}
```

**404 Not Found:** 
- Requesting a listing that does not exist (e.g., `GET /listings/99999`)
- Requesting a user profile with a non-existent user ID. 


`GET /products/99999`
`Host: api.example.com`


```json
{ 
  "error": "Product not found"
}
```


GET: /product/{product_id}
GET: /user/{userId}
GET: /user/purchases
GET: /user/purchase/{purchase_id}

POST: /user 
POST: /listing
POST: /purchase

PUT: /update_listing 

DELETE: /listing/{listingId} 
DELETE: /user/{userId}

---

# An app for streaming music and creating playlists (like Spotify)

**Data Model**

**User**
id 
f_name
l_name
username
password 
password_hash

**user_playlist**
id 
user_id
playlist_name
created_at

**playlist_songs**
playlist_id 
song_id 

**song**
id 
name
artist_id
genre
description 
length
s3_url 


**artist**
id 
name
bio
profile_url 

## Endpoints 

---

### Users

- **GET/user/{userId}:** returns user information 
- **GET/user/{userId}/playlists**: returns a list of playlists names 
- **GET/user/{userID}/playlists/{playlist_id}:** return one playlist and all the songs that are included on the playlist 

- **POST/user:** Create a new user profile  
- **PUT/user:** update a user profile 
- **DELETE/user/{userId}:** Delete a user 

---

### Artist

- **GET/artist/songs?limit={xx}&offset={xx}**: Returns a list of songs with required pagination query params
- **GET/artist/songs/{songId}:** Returns one song 

- **POST/artist/song:** Create a new song 
- **PUT/artist/{songId}**: Update the song
- **DELETE/artist/{songId}:** Delete a song 

## 4xx Client Errors 

---

### 400 Bad Request 
- User did not provide all the required query params for a playlist 
- Sent an improperly formed JSON body for creating a user

`POST /user`
`Host: api.example.com`
`Body: {improperForm}`

```json
{ 
  "error": "Bad request: improperly formed body"
}
```

---

### 401 Unauthorized 
- User passes a bearer token that is outdated 
- A user tries to access their playlist before signing in 

`GET/user/{userId}/playlist/{playlistId}`
`Authorization: Bearer {null}`

```json 
{
  "error: Unauthorized: user did not provide a valid bearer token 
}
```

---

### 404 Not Found 
- A user tries to access a playlist that does not exist 
- An artist tries to update a song that does not exist

`PUT/artist/song/{songId}:`

```json
{
  "error": "the song_id xxx doest not exist for user xxx"
}
```

## 403 Forbidden 
- A user tries to access a different users playlist 
- An artiest attempts to update a different artists bil 

`PUT/artist/{artistId}:` 

```json
{ "error": "resource does not exist}
```

---

# A homework platform

## Data Model 

**Student**
id 
f_name
l_name
username
password
password_hash

**Teacher** 
id 
f_name
l_name
userName
bio

**Class** 
id 
teacher_id 
name
description 
subject 
start_date
end_date 

**class_enrollment** 
class_id 
student_id 

**class_homework**
id
class_id 
description
subject
due_date
assign_date 
create_at 
updated_at 

**student_assignment** 
student_id 
class_id
class_homework_id 
assigned_at


**student_assignment_submission**
student_id 
class_id
class_homework_id 
submitted_at
file_link
feedback
grade

---

## Endpoints 

**GET/student/{studentID}:** Gets a students dashboard
**GET/student/{studentID}/assignments:** Gets all assignments 
**GET/student/{studentID}/assignments/{assignment_id}:** Gets a particular assignment 

**POST/student/{studentID}/assignments/{assignment_id}:** Submits an assignment 


## Client Errors 

### 400 Bad Request
-- Malformed body when the student submits an assignment 
- Not including required fields  

### 401 Not Found 
- Trying to access a student who got deleted 
- Trying to find an assignment that was deleted 

### 403 Unauthorized
- A student viewing trying to view assignments before logging in 
- Invalid bearer token  

### 404 Forbidden 
- A user trying to access their friends assignments 
- A teaching trying to see a students dashboard. 


## List some problems or challenges you should consider when updating your API. What's the safest way to avoid these problems?

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


