
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [API Basic Refresher](#api-basic-refresher)
  - [What is an API](#what-is-an-api)
  - [What Does an API Do?](#what-does-an-api-do)
  - [Key Analogy: The Restaurant Waiter](#key-analogy-the-restaurant-waiter)
  - [URL Params](#url-params)
  - [API Gateway: A Comprehensive Overview**](#api-gateway-a-comprehensive-overview)
    - [Key Functions of an API Gateway](#key-functions-of-an-api-gateway)
    - [Benefits of Using an API Gateway](#benefits-of-using-an-api-gateway)
    - [Challenges & Tradeoffs](#challenges--tradeoffs)
    - [Real-World Examples](#real-world-examples)
    - [When to Use an API Gateway?](#when-to-use-an-api-gateway)
    - [Summary**](#summary)
    - [Key Components of Good API Documentation](#key-components-of-good-api-documentation)
    - [Best Practices](#best-practices)
    - [Examples of Great API Docs**](#examples-of-great-api-docs)
    - [Tools to Build API Docs**](#tools-to-build-api-docs)
    - [Final Takeaway**](#final-takeaway)
  - [Interview Questions](#interview-questions)
    - [1. Framework for Deploying an API](#1-framework-for-deploying-an-api)
    - [2. Common Request Headers and Their Uses](#2-common-request-headers-and-their-uses)
    - [3. What Is a Cookie?](#3-what-is-a-cookie)
    - [Take Home Coding](#take-home-coding)
      - [Solution](#solution)
      - [Explanation](#explanation)
  - [Parts of a URL](#parts-of-a-url)
    - [URL Structure Breakdown](#url-structure-breakdown)
    - [Detailed Explanation of Each Part](#detailed-explanation-of-each-part)
      - [1. Scheme](#1-scheme)
      - [2. Subdomain](#2-subdomain)
      - [3. Domain](#3-domain)
      - [4. Port](#4-port)
      - [5. Path](#5-path)
      - [6. Query String](#6-query-string)
      - [7. Fragment](#7-fragment)
    - [Example URL with All Parts](#example-url-with-all-parts)
    - [Special Characters in URLs](#special-characters-in-urls)
    - [Key Takeaways](#key-takeaways)
  - [HTTP Methods](#http-methods)
    - [Common HTTP Methods](#common-http-methods)
    - [Detailed Explanation](#detailed-explanation)
      - [1. GET](#1-get)
      - [2. POST](#2-post)
      - [3. PUT](#3-put)
      - [4. PATCH](#4-patch)
      - [5. DELETE](#5-delete)
      - [6. HEAD](#6-head)
      - [7. OPTIONS](#7-options)
    - [Key Concepts](#key-concepts)
    - [Real-World Examples](#real-world-examples-1)
    - [Summary](#summary-1)
  - [Idempotency](#idempotency)
  - [Interview Questions](#interview-questions-1)
    - [1. What Types of HTTP Methods Are Idempotent? When Would Idempotent Methods Be Used?](#1-what-types-of-http-methods-are-idempotent-when-would-idempotent-methods-be-used)
    - [2. What Are the Different Types of HTTP Methods?](#2-what-are-the-different-types-of-http-methods)
    - [3. Verifying a Resource's Existence](#3-verifying-a-resources-existence)
    - [4. Difference Between `api.site.com` and `site.com/api`](#4-difference-between-apisitecom-and-sitecomapi)
    - [Can you make a POST request Idempotent?](#can-you-make-a-post-request-idempotent)

<!-- /code_chunk_output -->



# API Basic Refresher

## What is an API

**Def:** An API **(Application Programming Interface)** is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other. It defines how different systems or components can request and exchange data or functionality, enabling seamless integration without needing to understand the underlying code of the systems involved.

- Most APIs use REST architecture
 
- GraphQL, SOAP, and gRPC are also API architectures

**API’s job:**
- Lives on a server
- Listen for requests
- Parse / Ingest requests
- Respond in predictable manner

## What Does an API Do?
**Enables Communication:**

- Lets apps "talk" to each other (e.g., a weather app fetching data from a remote server).

**Standardizes Requests:**

- Defines how to ask for data (e.g., "GET user profile") and what format the response will be in (e.g., JSON or XML).

**Hides Complexity:**

- You don’t need to know how a service works internally (e.g., how Google Maps calculates routes).

## Key Analogy: The Restaurant Waiter

Imagine you’re at a restaurant. You (the user) don’t go into the kitchen to cook your meal. Instead, you tell the waiter (the API) what you want. The waiter takes your order to the kitchen (the system), brings back your food (the response), and handles any special requests or errors. The API acts as this intermediary, simplifying complex processes.

**What are the 6 common HTTP methods**
1. Get 
2. Post 
3. Put
4. Delete 
5. Patch
6. Copy

## URL Params

An API may accept data via URL parameters, or a request body. Pay attention to the documentation for the API you are using.

There is no set definition about when to use either request body or url params. But here are some suggestions:

**URL Params**
- Request Body
- Non-sensitive data
- Key:value structure
- Length limit!

**Request Body - Large number of arguments**
- Not human readable
- Non key:value structured data

##  API Gateway: A Comprehensive Overview**

An **API Gateway** is a centralized server that acts as the entry point for managing and routing API requests between clients and backend services in a distributed system. It simplifies client interactions, enhances security, and optimizes performance by handling cross-cutting concerns. Below is a detailed breakdown:

---

### Key Functions of an API Gateway
1. **Request Routing**:  
   - Directs incoming API requests to the appropriate backend service (e.g., microservices like user authentication, product catalog, or payment processing).  
   - Example: A client request for `/products` is routed to the product service, while `/orders` goes to the order service.

2. **Authentication & Authorization**:  
   - Validates API keys, JWT tokens, or OAuth credentials to ensure only authorized clients access services.  
   - Integrates with identity providers (e.g., Auth0, AWS Cognito).

3. **Rate Limiting & Throttling**:  
   - Prevents abuse by limiting the number of requests a client can make within a timeframe (e.g., 100 requests/minute).

4. **Load Balancing**:  
   - Distributes traffic across multiple instances of a service to improve scalability and reliability.

5. **Protocol Translation & Data Transformation**:  
   - Converts data formats (e.g., XML to JSON) or protocols (e.g., REST to gRPC) to match client and backend requirements.

6. **Caching**:  
   - Stores frequent responses (e.g., product listings) to reduce latency and backend load.

7. **Monitoring & Analytics**:  
   - Tracks metrics like request rates, error rates, and latency for performance insights.  
   - Integrates with tools like Prometheus or AWS CloudWatch.

8. **Versioning**:  
   - Routes requests to different API versions (e.g., `/v1/products` vs. `/v2/products`) for backward compatibility.

9. **Security Enforcement**:  
   - Applies SSL/TLS termination, IP whitelisting, and DDoS protection.

10. **Aggregation**:  
    - Combines responses from multiple services into a single payload to reduce client roundtrips.

---

### Benefits of Using an API Gateway
| **Advantage**               | **Use Case**                                |  
|------------------------------|---------------------------------------------|  
| **Simplified Client Interaction** | Clients interact with one endpoint instead of multiple services. |  
| **Centralized Security**      | Enforce policies (auth, rate limits) in one place. |  
| **Improved Scalability**      | Load balancing and caching handle traffic spikes. |  
| **Reduced Latency**           | Caching and optimized routing speed up responses. |  
| **Easier Maintenance**        | Decouples client and backend, allowing independent updates. |  

---

### Challenges & Tradeoffs
| **Challenge**                | **Mitigation Strategy**                     |  
|------------------------------|---------------------------------------------|  
| **Single Point of Failure**   | Deploy redundant gateways in multiple regions. |  
| **Increased Complexity**      | Use managed services (e.g., AWS API Gateway, Kong). |  
| **Latency Overhead**          | Optimize caching and minimize gateway logic. |  
| **Configuration Overhead**    | Automate setup with IaC tools like Terraform. |  

---

### Real-World Examples
1. **AWS API Gateway**:  
   - Fully managed service for REST, HTTP, and WebSocket APIs. Integrates with AWS Lambda, DynamoDB, and CloudWatch.  
2. **Netflix Zuul**:  
   - Handles billions of requests daily, routing traffic to microservices while managing security and scalability.  
3. **Kong**:  
   - Open-source gateway with plugins for authentication, logging, and rate limiting.  

---

### When to Use an API Gateway?
- **Ideal For**:  
  - Microservices architectures.  
  - Public-facing APIs requiring security and rate limiting.  
  - Systems needing protocol translation or aggregation.  
- **Avoid For**:  
  - Simple monolithic apps with no need for distributed routing.  

---

### Summary**
An API Gateway is the **traffic cop** of modern distributed systems, streamlining client-server interactions while enforcing security, scalability, and reliability. By centralizing critical functions, it empowers developers to focus on building core features rather than infrastructure.

Good API documentation is essential for enabling developers to effectively understand, integrate, and use your API. Here’s a structured breakdown of what makes API documentation **effective**, along with examples and best practices:

---

### Key Components of Good API Documentation
1. **Clear Overview**  

2. **Getting Started Guide**  
   - **Quick Setup**: Step-by-step instructions to make a first API call.  
   - **Authentication**: Explain authentication methods (e.g., API keys, OAuth).  

3. **Detailed Endpoint Documentation**  
   - **Structure**: For each endpoint, include:  
     - **HTTP Method** (GET, POST, etc.).  
     - **URL path** (e.g., `/weather`).  
     - **Parameters** (query, path, headers).  
     - **Request/Response Examples** (JSON, XML).  

4. **Error Handling**  
   - **Common Errors**: List HTTP status codes (e.g., `400 Bad Request`, `404 Not Found`).  
   - **Error Messages**: Provide sample error responses and troubleshooting tips.  

5. **Code Samples & SDKs**  
   - **Languages**: Provide examples in Python, JavaScript, Ruby, etc.  
   - **SDKs**: Link to client libraries or SDKs (e.g., Python package, npm module).  

6. **Interactive Testing**  
   - **Sandbox**: Embed a live testing tool (e.g., Swagger UI, Postman collection).  
   - **Try-it-now**: Allow users to execute sample requests directly in the docs.  

7. **Versioning**  
   - **Clear Versioning**: Specify the API version in URLs or headers.  
   - **Deprecation Notices**: Warn users about outdated versions.  
   - **Example**:  

8. **Rate Limits & Quotas**  
   - **Usage Policies**: State rate limits (e.g., 100 requests/minute).  
   - **Monitoring**: Link to usage dashboards or alerts.  

9. **Consistent Formatting**  
   - **Templates**: Use a standard structure for endpoints.  
   - **Syntax Highlighting**: Format code blocks for readability.  

10. **Search & Navigation**  
    - **Search Bar**: Let users quickly find endpoints.  
    - **Table of Contents**: Link to sections like "Authentication" or "Errors."  

---

### Best Practices
- **Keep it Updated**: Sync documentation with API changes. Tools like **Swagger/OpenAPI** automate doc generation.  
- **Use Plain Language**: Avoid jargon; explain technical terms in a glossary.  
- **Include Use Cases**: Show real-world scenarios (e.g., "Build a weather app").  
- **Community Support**: Link to forums, Slack channels, or GitHub issues.  

---

### Examples of Great API Docs**
1. **Stripe**: Clear examples, interactive code, and detailed error explanations.  
2. **Twilio**: Step-by-step guides and SDKs in multiple languages.  
3. **GitHub API**: Well-structured endpoints with response schemas.  

---

### Tools to Build API Docs**
- **Swagger/OpenAPI**: Generate interactive docs from YAML/JSON specs.  
- **Postman**: Publish API collections with examples.  
- **ReadMe**: Customizable, developer-friendly doc hosting.  

---

### Final Takeaway**
Good API documentation is **developer-centric**, combining clarity, completeness, and usability. By reducing friction for users, it accelerates adoption and fosters a positive developer experience.


## Interview Questions 

**Phone Screen**
---

### 1. Framework for Deploying an API

ExpressJS is a popular, lightweight web framework for Node.js that makes building APIs fast and efficient. Here’s an overview of its key features and how you might use it to deploy an API:

---

**Key Features of ExpressJS**

- **Minimalistic and Unopinionated:**  
  ExpressJS provides a minimal set of tools, which gives you the flexibility to design your application structure as needed. This unopinionated approach means you can integrate other libraries or middlewares as you see fit.

- **Robust Routing:**  
  Express makes it easy to define routes for various HTTP methods (GET, POST, PUT, DELETE, etc.). The routing mechanism allows you to create clean, RESTful endpoints with ease.

- **Middleware Support:**  
  One of the core strengths of Express is its middleware architecture. Middleware functions can process requests before they reach your route handlers, making it straightforward to implement functionalities like logging, authentication, error handling, and body parsing.

- **JSON and URL-Encoded Data Parsing:**  
  Express, together with middleware like `body-parser` (now built into Express as of version 4.16+), handles JSON and URL-encoded data effortlessly. This is essential for API development where data exchange typically occurs in JSON format.

- **Extensibility:**  
  The Express ecosystem has a vast range of middleware and plugins available, which can be easily integrated into your project to extend its functionality. This includes libraries for authentication (e.g., Passport.js), data validation, security enhancements, and more.

---

**Why Use ExpressJS?**

- **Performance and Scalability:**  
  Being built on Node.js, Express benefits from its non-blocking, event-driven architecture, which is highly efficient for I/O-bound operations common in API services.
  
- **Large Community and Ecosystem:**  
  Express has a mature ecosystem with extensive documentation, community support, and a variety of middleware options, making it a reliable choice for both small-scale projects and large applications.
  
- **Easy to Learn:**  
  With its simple API and clear routing mechanism, Express is easy to learn for developers familiar with JavaScript and Node.js, accelerating development time for new projects.

### 2. Common Request Headers and Their Uses

APIs frequently use a set of standard HTTP request headers to control the data exchange between the client and server. Some of the most common ones include:

- **Accept:**  
  *Purpose:* Indicates the media types (e.g., JSON, XML) that the client is prepared to receive.  
  *Usage Example:* `Accept: application/json`

- **Content-Type:**  
  *Purpose:* Tells the server the format of the data in the request body, which is critical for parsing the data correctly.  
  *Usage Example:* `Content-Type: application/json`

- **Authorization:**  
  *Purpose:* Carries credentials (such as API keys or tokens) that authenticate the client with the server.  
  *Usage Example:* `Authorization: Bearer <token>`

- **User-Agent:**  
  *Purpose:* Provides information about the client application or browser making the request.  
  *Usage Example:* `User-Agent: Mozilla/5.0 (compatible; MyApp/1.0)`

- **Cache-Control:**  
  *Purpose:* Instructs both the client and server how to handle caching of the request or response.  
  *Usage Example:* `Cache-Control: no-cache`

- **Cookie:**  
  *Purpose:* Sends stored 'cookie' data from the client to the server, often used for session management.  
  *Usage Example:* `Cookie: session_id=abc123`

Each of these headers plays a role in ensuring that the API and its clients communicate effectively and securely by managing data formats, security credentials, caching behaviors, and session states.

---

### 3. What Is a Cookie?

A **cookie** is a small piece of data that a server sends to the user's web browser. It is then stored locally on the client's machine and is sent back to the server with subsequent requests. Here’s a closer look:

- **Purpose:**  
  Cookies are primarily used to maintain **stateful information between HTTP requests, which are otherwise stateless**. This includes user authentication sessions, tracking user preferences, or storing shopping cart contents.

- **Structure:**  
  A cookie typically contains a name-value pair and may also include attributes such as expiration date, domain, path, and security flags (e.g., Secure, HttpOnly).

- **How It Works:**  
  1. **Server sends a cookie:** When you first visit a website, the server might send a `Set-Cookie` header in the HTTP response.
  2. **Browser stores the cookie:** The browser stores the cookie data locally.
  3. **Subsequent requests:** For every subsequent request to the same server, the browser includes the cookie in the `Cookie` header, allowing the server to recognize the user’s session and preferences.

- **Security Considerations:**  
  Cookies can contain sensitive data, so it's important to use attributes like `Secure` (ensuring the cookie is only sent over HTTPS) and `HttpOnly` (preventing access via JavaScript) to mitigate risks.

---

### Take Home Coding

1. Deploy an API with a GET ‘hello  world’ route. Based on client request, return JSON or HTML. Add a POST route. Create a cookie for the user’s session.

#### Solution

- A GET route at `/api/hello` that checks the request's `Accept` header and returns either JSON or HTML.
- A POST route at `/api/data` that echoes back the posted data.
- Creation of a cookie for the user’s session if one isn’t already set.

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware to parse JSON request bodies and cookies
app.use(express.json());
app.use(cookieParser());

// GET route that returns JSON or HTML based on the Accept header
app.get('/api/hello', (req, res) => {
  const acceptHeader = req.headers['accept'] || '';
  if (acceptHeader.includes('text/html')) {
    res.send('<h1>Hello, World!</h1>');
  } else {
    res.json({ message: 'Hello, World!' });
  }
});

// POST route that creates a session cookie if not already set and echoes back the posted data
app.post('/api/data', (req, res) => {
  // Check if a session cookie exists; if not, create one
  if (!req.cookies.userSession) {
    // Create a simple session id (for demonstration only)
    const sessionId = Math.random().toString(36).substring(2, 15);
    res.cookie('userSession', sessionId, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
  }
  // Process the posted data (echoing it back here)
  res.json({ status: 'success', data: req.body });
});

// Start the server on port 3000 (or an environment-specified port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

#### Explanation

- **Middleware Setup:**  
  - `express.json()` parses incoming JSON payloads.  
  - `cookieParser()` helps in reading cookies from incoming requests.

- **GET `/api/hello`:**  
  - The route checks if the client’s `Accept` header contains `"text/html"`.  
  - If it does, the API responds with an HTML snippet; otherwise, it returns a JSON message.

- **POST `/api/data`:**  
  - Checks for a `userSession` cookie. If not found, it generates a session ID and sets it as a cookie valid for one day (`maxAge: 24 * 60 * 60 * 1000`), with the `httpOnly` flag to reduce client-side script access.
  - Echoes back the posted data as JSON.

This example serves as a basic foundation. In a production scenario, you might want to integrate a more robust session management solution (like `express-session`), add error handling, and further secure your API endpoints.

## Parts of a URL 

A **URL (Uniform Resource Locator)** is the address used to access resources on the web. It consists of several parts, each serving a specific purpose. Below is a detailed breakdown of the **URL structure**:

---

### URL Structure Breakdown
A typical URL looks like this:  
```
https://www.example.com:8080/path/to/resource?query=value#section
```

| **Part**              | **Description**                                                                 | **Example**                     |
|-----------------------|---------------------------------------------------------------------------------|---------------------------------|
| **1. Scheme**         | The protocol used to access the resource (e.g., HTTP, HTTPS, FTP).              | `https://`                      |
| **2. Subdomain**      | A subdivision of the domain (optional).                                         | `www.`                          |
| **3. Domain**         | The main address of the website (e.g., `example.com`).                         | `example.com`                   |
| **4. Port**           | The communication endpoint (optional; defaults to 80 for HTTP, 443 for HTTPS).  | `:8080`                         |
| **5. Path**           | The location of the resource on the server.                                     | `/path/to/resource`             |
| **6. Query String**   | Key-value pairs for passing data to the server (optional).                      | `?query=value&sort=asc`         |
| **7. Fragment**       | A reference to a specific section within the resource (optional).               | `#section`                      |

---

### Detailed Explanation of Each Part

#### 1. Scheme
- Defines the protocol used to access the resource.  
- Common schemes:  
  - `http`: Unsecured Hypertext Transfer Protocol.  
  - `https`: Secured HTTP (encrypted with SSL/TLS).  
  - `ftp`: File Transfer Protocol.  
  - `mailto`: Opens an email client.  
- Example:  
  ```
  https://
  ```

#### 2. Subdomain
- A prefix to the domain name, often used to organize or categorize content.  
- Common subdomains:  
  - `www`: World Wide Web (default for websites).  
  - `blog`: For blog sections.  
  - `api`: For API endpoints.  
- Example:  
  ```
  www.
  ```

#### 3. Domain
- The human-readable address of the website.  
- Consists of:  
  - **Second-Level Domain (SLD)**: The unique name (e.g., `example`).  
  - **Top-Level Domain (TLD)**: The extension (e.g., `.com`, `.org`, `.net`).  
- Example:  
  ```
  example.com
  ```

#### 4. Port
- Specifies the communication endpoint on the server.  
- Default ports:  
  - `80` for HTTP.  
  - `443` for HTTPS.  
- Example:  
  ```
  :8080
  ```

#### 5. Path
- Represents the location of the resource on the server.  
- Often mirrors the file structure of the server.  
- Example:  
  ```
  /path/to/resource
  ```

#### 6. Query String
- Used to pass data to the server in key-value pairs.  
- Starts with a `?` and separates pairs with `&`.  
- Example:  
  ```
  ?query=value&sort=asc
  ```

#### 7. Fragment
- Points to a specific section within the resource (e.g., a heading or anchor).  
- Starts with a `#`.  
- Example:  
  ```
  #section
  ```

---

### Example URL with All Parts
```
https://www.example.com:8080/path/to/resource?query=value#section
```
- **Scheme**: `https://`  
- **Subdomain**: `www.`  
- **Domain**: `example.com`  
- **Port**: `:8080`  
- **Path**: `/path/to/resource`  
- **Query String**: `?query=value`  
- **Fragment**: `#section`  

---

### Special Characters in URLs
- **Reserved Characters**:  
  - `:/?#[]@!$&'()*+,;=` have special meanings and must be encoded if used in data.  
- **Encoding**:  
  - Spaces are encoded as `%20`.  
  - `/` is encoded as `%2F`.  

---

### Key Takeaways
- A URL is a structured address for accessing web resources.  
- Each part (scheme, domain, path, etc.) serves a specific purpose.  
- Understanding URLs is essential for web development, API design, and SEO.  

## HTTP Methods 

**Def:** Http methods define the actions that should be performed on a resource. 

**HTTP Methods (Verbs)** are the actions that clients (e.g., browsers, apps) can perform on resources hosted on a server. They define the type of operation being requested and are a core part of RESTful APIs and web development. Below is a detailed breakdown of the **common HTTP methods**, their purposes, and examples:

---

### Common HTTP Methods

| **Method**  | **Description**                                                                 | **Idempotent?** | **Safe?** | **Example Use Case**                     |
|-------------|---------------------------------------------------------------------------------|------------------|-----------|------------------------------------------|
| **GET**     | Retrieve data from the server.                                                  | Yes              | Yes       | Fetching a user profile or product list. |
| **POST**    | Submit data to the server to create a new resource.                             | No               | No        | Creating a new user or submitting a form.|
| **PUT**     | Update an existing resource or create it if it doesn’t exist.                   | Yes              | No        | Updating a user’s profile.               |
| **PATCH**   | Partially update an existing resource.                                          | No               | No        | Updating a single field (e.g., email).   |
| **DELETE**  | Delete a resource from the server.                                              | Yes              | No        | Deleting a user account.                 |
| **HEAD**    | Retrieve only the headers of a response (no body).                              | Yes              | Yes       | Checking if a resource exists.           |
| **OPTIONS** | Retrieve the supported HTTP methods for a resource.                             | Yes              | Yes       | Discovering API capabilities.            |

---

### Detailed Explanation

#### 1. GET
- **Purpose**: **Read** data from the server.  
- **Idempotent**: Yes (repeated requests return the same result).  
- **Safe**: Yes (does not modify the server state).  
- **Example**:  
  ```http
  GET /users/123 HTTP/1.1
  Host: api.example.com
  ```
  - **Response**: Returns user data for ID 123.

---

#### 2. POST
- **Purpose**: Submit data to **create** a new resource.  
- **Idempotent**: No (repeated requests may create multiple resources).  
- **Safe**: No (modifies the server state).  
- **Example**:  
  ```http
  POST /users HTTP/1.1
  Host: api.example.com
  Content-Type: application/json

  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
  - **Response**: Creates a new user and returns the created resource.

---

#### 3. PUT
- **Purpose**: **Update** an existing resource or **create** it if it doesn’t exist.  
- **Idempotent**: Yes (repeated requests have the same effect).  
- **Safe**: No (modifies the server state).  
- **Example**:  
  ```http
  PUT /users/123 HTTP/1.1
  Host: api.example.com
  Content-Type: application/json

  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```
  - **Response**: Updates or creates the user with ID 123.

---

#### 4. PATCH
- **Purpose**: Partially update an existing resource.  
- **Idempotent**: No (repeated requests may have different effects).  
- **Safe**: No (modifies the server state).  
- **Example**:  
  ```http
  PATCH /users/123 HTTP/1.1
  Host: api.example.com
  Content-Type: application/json

  {
    "email": "jane.doe@example.com"
  }
  ```
  - **Response**: Updates only the email field for user ID 123.

---

#### 5. DELETE
- **Purpose**: **Delete** a resource from the server.  
- **Idempotent**: Yes (repeated requests have the same effect).  
- **Safe**: No (modifies the server state).  
- **Example**:  
  ```http
  DELETE /users/123 HTTP/1.1
  Host: api.example.com
  ```
  - **Response**: Deletes the user with ID 123.

---

#### 6. HEAD
- **Purpose**: Retrieve only the headers of a response (no body).  
- **Idempotent**: Yes (repeated requests return the same headers).  
- **Safe**: Yes (does not modify the server state).  
- **Example**:  
  ```http
  HEAD /users/123 HTTP/1.1
  Host: api.example.com
  ```
  - **Response**: Returns headers (e.g., status code, content type) without the body.

---

#### 7. OPTIONS
- **Purpose**: Retrieve the supported HTTP methods for a resource.  
- **Idempotent**: Yes (repeated requests return the same result).  
- **Safe**: Yes (does not modify the server state).  
- **Example**:  
  ```http
  OPTIONS /users HTTP/1.1
  Host: api.example.com
  ```
  - **Response**: Returns supported methods (e.g., `GET, POST, PUT`).

---

### Key Concepts
1. **Idempotent**:  
   - Repeated requests have the same effect as a single request.  
   - Example: `GET`, `PUT`, `DELETE` are idempotent.  

2. **Safe**:  
   - Does not modify the server state.  
   - Example: `GET`, `HEAD`, `OPTIONS` are safe.  

3. **RESTful APIs**:  
   - Use HTTP methods to perform CRUD operations (Create, Read, Update, Delete).  

---

### Real-World Examples
1. **Social Media API**:  
   - `GET /posts`: Fetch posts.  
   - `POST /posts`: Create a new post.  
   - `PUT /posts/123`: Update post 123.  
   - `DELETE /posts/123`: Delete post 123.  

2. **E-Commerce API**:  
   - `GET /products`: Fetch product list.  
   - `POST /orders`: Create a new order.  
   - `PATCH /orders/123`: Update order status.  

---

### Summary
HTTP methods define the actions clients can perform on server resources. Understanding their purposes, idempotency, and safety is crucial for designing RESTful APIs and building scalable, predictable web applications.

## Idempotency 

## Interview Questions 

**Phone Screen**
Below are detailed answers for both questions:

---

### 1. What Types of HTTP Methods Are Idempotent? When Would Idempotent Methods Be Used?

**Idempotent HTTP methods** are those that can be called multiple times without changing the result beyond the initial application. In other words, repeating the request should have the same effect as making it once.

**Common idempotent methods include:**

- **GET:**  
  Retrieves data without modifying it. Multiple GET requests yield the same resource.

- **PUT:**  
  Replaces the resource entirely with the new data provided. Issuing the same PUT request repeatedly results in the same state.

- **DELETE:**  
  Deletes a resource. While the first call deletes it, subsequent calls generally indicate that the resource is already absent, leaving the state unchanged.

- **HEAD:**  
  Similar to GET, but it only retrieves the header information without the response body. Repeating a HEAD request doesn’t change the state.

- **OPTIONS and TRACE:**  
  Used for communication about capabilities and diagnostic purposes. These are also considered idempotent.

**When to Use Idempotent Methods:**

- **Safe Retries:**  
  In network environments where requests might fail or time out, idempotency allows clients to retry operations without worrying about unintended side effects. For instance, if a DELETE request times out, retrying it will not inadvertently cause additional deletions.

- **Caching and Load Balancing:**  
  Idempotent operations are easier to cache and optimize with load balancers, ensuring consistency across distributed systems.

- **API Design Best Practices:**  
  Using idempotent methods for read or update operations helps in building predictable and robust APIs. This is particularly useful in RESTful API design, where clear semantics are essential.

---

### 2. What Are the Different Types of HTTP Methods?

HTTP defines several methods that indicate the desired action to be performed on a resource. Here’s an overview of the most common ones:

- **GET:**  
  Retrieves data from the server. It’s considered safe and idempotent, meaning it shouldn’t change the resource state.

- **POST:**  
  Submits data to the server, often resulting in a change in state or side effects (e.g., creating a new resource). It is not idempotent; repeating a POST might create duplicate records.

- **PUT:**  
  Updates or replaces an existing resource with new data. It is idempotent—repeated requests yield the same result.

- **DELETE:**  
  Removes a resource. It is idempotent since deleting an already-deleted resource should not change the state further.

- **PATCH:**  
  Applies partial modifications to a resource. It is generally not idempotent by definition (though it can be if implemented carefully), since each patch might further alter the resource.

- **HEAD:**  
  Similar to GET, but it only retrieves the headers. It’s typically used for checking metadata or testing the validity of a URL without transferring the full content.

- **OPTIONS:**  
  Used to describe the communication options for the target resource. It allows a client to determine the capabilities of a server or the requirements of a resource.

- **TRACE:**  
  Performs a message loop-back test along the path to the target resource, primarily for debugging purposes.

- **CONNECT:**  
  Converts the request connection to a transparent TCP/IP tunnel, often used for SSL tunneling.

Each method is designed to serve a specific purpose, helping to ensure that web communication is both efficient and semantically clear.

---

**On Site**
1. What path or method would you use for writing an endpoint for verifying a resource's existence?

2. Explain the difference between api.site.com and site.com/api

3. Can you make a POST request idempotent?


Below are comprehensive answers for both questions:

---

### 3. Verifying a Resource's Existence

**Path/Method Approach:**

- **HTTP HEAD Method:**  
  The HEAD method is commonly used when you want to check if a resource exists without retrieving its full content. By issuing a HEAD request to the resource’s URL (for example, `HEAD /resources/{id}`), the server returns only the HTTP headers. If the resource exists, you’d typically see a `200 OK` status; if not, a `404 Not Found` is returned. This method is efficient since it avoids transferring the resource body.

- **Using GET for Verification:**  
  Another approach is to use the GET method on the resource’s endpoint (e.g., `GET /resources/{id}`). While this also confirms existence via status codes (200 vs. 404), it usually transfers more data than necessary. However, in cases where you might want additional minimal metadata about the resource, GET is acceptable.

- **Dedicated “Exists” Endpoint:**  
  Sometimes an endpoint like `GET /resources/{id}/exists` can be created explicitly to return a simplified response (e.g., `{ "exists": true }`) based on resource availability. This can be particularly useful if you want to standardize responses across various resource checks.

**When to Use:**  
- **HEAD:** Use when bandwidth is a concern or when you want a lightweight way to confirm resource presence.  
- **GET or Dedicated Endpoint:** Use when you need additional data or want a more expressive API response.

---

### 4. Difference Between `api.site.com` and `site.com/api`

**Subdomain (`api.site.com`):**

- **Separation of Concerns:**  
  Using a subdomain for your API (e.g., `api.site.com`) clearly distinguishes the API from the main website. This separation can simplify scaling, versioning, and maintenance by isolating API traffic from web traffic.

- **Infrastructure & CORS:**  
  An API on a subdomain can be hosted on separate servers or services, optimized for API responses. However, it might involve additional configuration for CORS if the main site interacts with the API.

- **Security and Cookies:**  
  With a subdomain, cookies and session data are isolated by default, which can be beneficial or require additional work if you need shared sessions between the API and the website.

**Path (`site.com/api`):**

- **Integrated Approach:**  
  Placing the API under a path on the main domain (e.g., `site.com/api`) keeps all functionality under a single domain. This can simplify things like shared cookies, authentication, and session management.

- **Simpler CORS Management:**  
  Since both the website and the API reside on the same domain, you typically avoid cross-origin issues, making client-side integration straightforward.

- **Deployment Considerations:**  
  Hosting the API as part of the main website might lead to resource contention if both the website and API have high traffic. Scaling might require additional strategies to separate concerns at a later stage.

---

### Can you make a POST request Idempotent? 

To make a POST request idempotent, you can implement an **idempotency key** mechanism. Here’s how it generally works:

- **Idempotency Key:**  
  Require clients to include a unique identifier (an idempotency key) with each POST request. This key is typically sent as a header or part of the request body.

- **Server-Side Storage:**  
  When a POST request is received, the server checks if the provided idempotency key has already been processed. If it has, the server returns the same response as it did for the original request, preventing duplicate actions.

- **Resource Creation Logic:**  
  If the idempotency key is new, the server processes the request normally, stores the key along with the outcome (e.g., the created resource's ID or any confirmation data), and then responds to the client.

This approach is especially useful in scenarios like payment processing or creating resources, where you want to ensure that retrying a request (due to network issues, for example) doesn't result in duplicate operations.

**Example in Pseudocode:**

```pseudo
function handlePostRequest(request):
    key = request.headers['Idempotency-Key']
    if key in processed_requests:
        return processed_requests[key]  // Return previously stored response
    else:
        result = processNewRequest(request)
        processed_requests[key] = result  // Store the result with the key
        return result
```

By using an idempotency key, you effectively make your POST endpoint idempotent, ensuring that repeated requests with the same key do not cause duplicate side effects.