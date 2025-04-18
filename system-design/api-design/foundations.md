
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
    - [Phone Screen 1. Framework for Deploying an API](#phone-screen-1-framework-for-deploying-an-api)
    - [Phone Screen 2. Common Request Headers and Their Uses](#phone-screen-2-common-request-headers-and-their-uses)
    - [Phone Screen 3. What Is a Cookie?](#phone-screen-3-what-is-a-cookie)
    - [Take Home 1. Deploy an API with a GET ‘hello  world’ route. Based on client request, return JSON or HTML. Add a POST route. Create a cookie for the user’s session.](#take-home-1-deploy-an-api-with-a-get-hello--world-route-based-on-client-request-return-json-or-html-add-a-post-route-create-a-cookie-for-the-users-session)
      - [Solution](#solution)
      - [Explanation](#explanation)
  - [Take Home Coding 2: Parts of a URL](#take-home-coding-2-parts-of-a-url)
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
    - [Take Home Coding 3: HTTP Methods](#take-home-coding-3-http-methods)
      - [Key Concepts](#key-concepts)
      - [Real-World Examples](#real-world-examples-1)
    - [Summary](#summary-1)
  - [Idempotency](#idempotency)
    - [Using PUT for Idempotency](#using-put-for-idempotency)
    - [Scenarios Where PUT is Used for Idempotency](#scenarios-where-put-is-used-for-idempotency)
    - [When NOT to Use PUT for Idempotency](#when-not-to-use-put-for-idempotency)
    - [Key Takeaways](#key-takeaways-1)
  - [Interview Questions](#interview-questions-1)
    - [Phone Screen 1. What Types of HTTP Methods Are Idempotent? When Would Idempotent Methods Be Used?](#phone-screen-1-what-types-of-http-methods-are-idempotent-when-would-idempotent-methods-be-used)
    - [2. What Are the Different Types of HTTP Methods?](#2-what-are-the-different-types-of-http-methods)
    - [3. On Site 1: Verifying a Resource's Existence](#3-on-site-1-verifying-a-resources-existence)
    - [4. On Site 2: Difference Between `api.site.com` and `site.com/api`](#4-on-site-2-difference-between-apisitecom-and-sitecomapi)
    - [On Site 3: Can you make a POST request Idempotent?](#on-site-3-can-you-make-a-post-request-idempotent)
    - [Onsite 4: A user initiates a booking for both a flight and a hotel (SAGA)](#onsite-4-a-user-initiates-a-booking-for-both-a-flight-and-a-hotel-saga)
      - [Key Takeaways](#key-takeaways-2)
  - [Request/Response Headers](#requestresponse-headers)
    - [Def](#def)
    - [Request Headers](#request-headers)
      - [Common Request Headers](#common-request-headers)
    - [Response Headers](#response-headers)
    - [Key Use Cases](#key-use-cases)
    - [Key Takeaways](#key-takeaways-3)
    - [Summary Table](#summary-table)
  - [Browser Cookies](#browser-cookies)
    - [Security & Privacy](#security--privacy)
    - [Key Takeaways](#key-takeaways-4)
  - [API Limits](#api-limits)
    - [Types of API Limits](#types-of-api-limits)
    - [Key Takeaways](#key-takeaways-5)
  - [1. URL Length Limit](#1-url-length-limit)
    - [2. Body Length Limit](#2-body-length-limit)
    - [Typical Limits](#typical-limits)
    - [Key Considerations](#key-considerations)
    - [Key Takeaways](#key-takeaways-6)
  - [HTTP Caching](#http-caching)
    - [How HTTP Caching Works](#how-http-caching-works)
    - [Benefits of HTTP Caching](#benefits-of-http-caching)
    - [Key Takeaways](#key-takeaways-7)
  - [Private Cache vs. Public Cache](#private-cache-vs-public-cache)
    - [Private Cache](#private-cache)
    - [Shared Cache](#shared-cache)
    - [Key Differences and Use Cases](#key-differences-and-use-cases)
  - [Response Codes](#response-codes)
    - [1xx - Information](#1xx---information)
    - [2xx Success](#2xx-success)
    - [3xx Redirection](#3xx-redirection)
    - [4xx Client Errors](#4xx-client-errors)
    - [5xx Server Errors](#5xx-server-errors)
    - [Key Takeaways](#key-takeaways-8)
  - [Problems/Challenges When Updating Your API & Safest Way to Avoid Them](#problemschallenges-when-updating-your-api--safest-way-to-avoid-them)
  - [Interview Questions](#interview-questions-2)
    - [Phone Screen 1. Uses for a cookie:](#phone-screen-1-uses-for-a-cookie)
    - [On Site 1: Caching Strategy for an Image Sharing Application](#on-site-1-caching-strategy-for-an-image-sharing-application)
    - [2. Caching Strategy for an Image Sharing Application](#2-caching-strategy-for-an-image-sharing-application)
    - [Key Takeaways](#key-takeaways-9)
    - [On-site 2: Designing an API for an Image Sharing Application](#on-site-2-designing-an-api-for-an-image-sharing-application)
    - [Other Considerations](#other-considerations)
- [REST vs. GraphQL](#rest-vs-graphql)
  - [REST](#rest)
    - [Key Takeaways](#key-takeaways-10)
  - [GraphQL](#graphql)
    - [Key Takeaways](#key-takeaways-11)
    - [Best Practices & Use Cases](#best-practices--use-cases)
  - [When to Use Each](#when-to-use-each)
    - [How to Achieve Idempotency in GraphQL Mutations](#how-to-achieve-idempotency-in-graphql-mutations)
    - [Key Takeaways](#key-takeaways-12)
  - [What make an API RESTful?](#what-make-an-api-restful)
    - [Key Takeaway](#key-takeaway)
  - [Interview Questions](#interview-questions-3)
    - [Phone Screen Interview Question 1 - What is GraphQL? What are a couple differences from REST?](#phone-screen-interview-question-1---what-is-graphql-what-are-a-couple-differences-from-rest)
    - [Take-Home Interview Question 1: Build a "Hello World" GraphQL API](#take-home-interview-question-1-build-a-hello-world-graphql-api)
    - [On-Site Interview Question 1: Explain the benefits and drawbacks of using GraphQL vs REST APIs](#on-site-interview-question-1-explain-the-benefits-and-drawbacks-of-using-graphql-vs-rest-apis)
    - [On-Site Interview Question 2: What Issues Typically Arise When Using REST APIs?](#on-site-interview-question-2-what-issues-typically-arise-when-using-rest-apis)
  - [Summary of All Questions & Answers](#summary-of-all-questions--answers)
- [Authentication vs Authorization](#authentication-vs-authorization)
  - [Authentication:  "Who are you"](#authentication--who-are-you)
  - [Authorization: "What can you do"](#authorization-what-can-you-do)
    - [Key Takeaways](#key-takeaways-13)
    - [Cookies vs. Headers vs. URL Parameters](#cookies-vs-headers-vs-url-parameters)
    - [1. Cookies](#1-cookies)
    - [2. Headers](#2-headers)
    - [Comparison Table](#comparison-table)
    - [Key Takeaways](#key-takeaways-14)
  - [Basic Authorization, OAuth, and JWTs Explained](#basic-authorization-oauth-and-jwts-explained)
  - [1. Basic Authorization](#1-basic-authorization)
    - [What It Is:](#what-it-is)
    - [How It Works:](#how-it-works)
    - [Pros & Cons:](#pros--cons)
    - [Best Use Case:](#best-use-case)
  - [2. OAuth (Open Authorization)](#2-oauth-open-authorization)
    - [What It Is:](#what-it-is-1)
    - [How It Works (OAuth 2.0 Example):](#how-it-works-oauth-20-example)
    - [Pros & Cons:](#pros--cons-1)
    - [Best Use Case:](#best-use-case-1)
  - [3. JWT (JSON Web Token)](#3-jwt-json-web-token)
    - [What It Is:](#what-it-is-2)
    - [How It Works:](#how-it-works-1)
    - [JWT Structure:](#jwt-structure)
    - [Pros & Cons:](#pros--cons-2)
    - [Best Use Case:](#best-use-case-2)
    - [Comparison Summary](#comparison-summary)
  - [Password-less Authentication, Multi-Factor Authentication, and Common Authentication Tools](#password-less-authentication-multi-factor-authentication-and-common-authentication-tools)
    - [1. Password-less Authentication](#1-password-less-authentication)
    - [2. Multi-Factor Authentication (MFA)](#2-multi-factor-authentication-mfa)
    - [3. Common Authentication Tools & Libraries](#3-common-authentication-tools--libraries)
    - [Summary](#summary-2)
  - [Interview Question Solutions](#interview-question-solutions)
    - [Phone Screen 1: Describe the difference between AuthN and AuthZ](#phone-screen-1-describe-the-difference-between-authn-and-authz)
    - [Phone Screen 2: What is Stateful vs. Stateless Authentication?](#phone-screen-2-what-is-stateful-vs-stateless-authentication)
      - [1. Stateful Authentication (Session-Based Auth)](#1-stateful-authentication-session-based-auth)
      - [2. Stateless Authentication (Token-Based / JWT)](#2-stateless-authentication-token-based--jwt)
      - [Comparison Table: Stateful vs. Stateless Authentication](#comparison-table-stateful-vs-stateless-authentication)
      - [Key Takeaways](#key-takeaways-15)
    - [On-Site 1: How do you typically handle authentication in Node.js? What library do you use?**](#on-site-1-how-do-you-typically-handle-authentication-in-nodejs-what-library-do-you-use)
    - [On-Site 2: Describe how OAuth works](#on-site-2-describe-how-oauth-works)
    - [How It Works (OAuth 2.0 Flow):](#how-it-works-oauth-20-flow)
      - [OAuth Grant Types (Different Ways OAuth Works)](#oauth-grant-types-different-ways-oauth-works)
    - [On-Site 3: How Does Password-Less Authentication Work?](#on-site-3-how-does-password-less-authentication-work)
    - [Common Password-Less Methods:](#common-password-less-methods)
    - [On-Site 4: How Does Multi-Factor Authentication (MFA) Work?](#on-site-4-how-does-multi-factor-authentication-mfa-work)
    - [Types of Authentication Factors:](#types-of-authentication-factors)
    - [On-Site 5: Draw a Design for an API That Uses Password-Less Authentication](#on-site-5-draw-a-design-for-an-api-that-uses-password-less-authentication)
      - [API Workflow:](#api-workflow)
    - [Summary of All Questions](#summary-of-all-questions)
- [Testing APIs](#testing-apis)
  - [Why Test APIs? (Motivations)](#why-test-apis-motivations)
    - [What Do We Test in APIs?](#what-do-we-test-in-apis)
    - [Example API Test (Using Jest + Supertest for Node.js)](#example-api-test-using-jest--supertest-for-nodejs)
  - [Unit Testing vs. Integration Testing vs. Functional Testing in APIs](#unit-testing-vs-integration-testing-vs-functional-testing-in-apis)
    - [1. Unit Testing (Testing Individual Components in Isolation)](#1-unit-testing-testing-individual-components-in-isolation)
    - [2. Integration Testing (Testing Multiple Components Together)](#2-integration-testing-testing-multiple-components-together)
      - [Express API Route (To Be Teste](#express-api-route-to-be-teste)
    - [3. Functional Testing (End-to-End API Testing)](#3-functional-testing-end-to-end-api-testing)
      - [Functional Test (Postman / Jest + Supertest)](#functional-test-postman--jest--supertest)
  - [Comparison Table: Unit vs. Integration vs. Functional Testing](#comparison-table-unit-vs-integration-vs-functional-testing)
    - [Summary](#summary-3)
  - [Load Testing, Reliability Testing, and Security Testing in APIs](#load-testing-reliability-testing-and-security-testing-in-apis)
    - [1. Load Testing (Performance Under Heavy Traffic)](#1-load-testing-performance-under-heavy-traffic)
    - [2. Reliability Testing (Ensuring API Stability Over Time)](#2-reliability-testing-ensuring-api-stability-over-time)
    - [3. Security Testing (Identifying Vulnerabilities & Protecting API Data)](#3-security-testing-identifying-vulnerabilities--protecting-api-data)
    - [Comparison Table: Load Testing vs. Reliability Testing vs. Security Testing**](#comparison-table-load-testing-vs-reliability-testing-vs-security-testing)
    - [Final Takeaways](#final-takeaways)
    - [Purpose of Mocks in API Testing](#purpose-of-mocks-in-api-testing)
  - [Phone Screen Software Engineering Questions & Answers**](#phone-screen-software-engineering-questions--answers)
    - [1. What framework(s) do you use when testing?](#1-what-frameworks-do-you-use-when-testing)
    - [2. Briefly explain what is code coverage.](#2-briefly-explain-what-is-code-coverage)
    - [3. What is an assertion library?](#3-what-is-an-assertion-library)
  - [Summary of All Questions](#summary-of-all-questions-1)
  - [On-Site Software Engineering Questions & Answers](#on-site-software-engineering-questions--answers)
    - [1. In Unit Testing, What Are Some Quantitative Metrics for Testing a Codebase?](#1-in-unit-testing-what-are-some-quantitative-metrics-for-testing-a-codebase)
    - [2. How Would You Find a Memory Leak?](#2-how-would-you-find-a-memory-leak)
    - [3. Explain the Steps in Continuous Integration (CI).](#3-explain-the-steps-in-continuous-integration-ci)
  - [Summary of All Questions & Answers](#summary-of-all-questions--answers-1)
  - [On-Site Software Engineering Questions & Answers](#on-site-software-engineering-questions--answers-1)
    - [Phone Screen 1. What is Dependency Injection?](#phone-screen-1-what-is-dependency-injection)
      - [Key Points:](#key-points)
    - [Phone Screen 2: What Are Pretenders in Tests?](#phone-screen-2-what-are-pretenders-in-tests)
      - [Types of Test Doubles:](#types-of-test-doubles)
    - [On Site 1: Inversion of Control (IoC) and Decoupling](#on-site-1-inversion-of-control-ioc-and-decoupling)
      - [Relationship to Decoupling:](#relationship-to-decoupling)
    - [Summary](#summary-4)
  - [Access Control Models: Overview and Use Cases](#access-control-models-overview-and-use-cases)

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
    - Combines responses from multiple services into a single payload to reduce client round-trips.

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

---

### Phone Screen 1. Framework for Deploying an API

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

### Phone Screen 2. Common Request Headers and Their Uses

APIs frequently use a set of standard HTTP request headers to control the data exchange between the client and server. Some of the most common ones include:

- **Accept (About the data we expect to receive):**  
  *Purpose:* Indicates the media types (e.g., JSON, XML) that the client is prepared to receive.  
  *Usage Example:* `Accept: application/json`

- **Content-Type (About data we are sending):**  
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

### Phone Screen 3. What Is a Cookie?

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

### Take Home 1. Deploy an API with a GET ‘hello  world’ route. Based on client request, return JSON or HTML. Add a POST route. Create a cookie for the user’s session.

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

## Take Home Coding 2: Parts of a URL 

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

### Take Home Coding 3: HTTP Methods 

**Def:** Http methods define the actions that should be performed on a resource. 

**HTTP Methods (Verbs)** are the actions that clients (e.g., browsers, apps) can perform on resources hosted on a server. They define the type of operation being requested and are a core part of RESTful APIs and web development. Below is a detailed breakdown of the **common HTTP methods**, their purposes, and examples:

---

**Common HTTP Methods**

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

**Detailed Explanations**

**1. GET**
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

**2. POST**
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

**3. PUT**
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

**4. PATCH**
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

**5. DELETE**
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

**6. HEAD**
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

**7. OPTIONS**
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

#### Key Concepts
1. **Idempotent**:  
   - Repeated requests have the same effect as a single request.  
   - Example: `GET`, `PUT`, `DELETE` are idempotent.  

2. **Safe**:  
   - Does not modify the server state.  
   - Example: `GET`, `HEAD`, `OPTIONS` are safe.  

3. **RESTful APIs**:  
   - Use HTTP methods to perform CRUD operations (Create, Read, Update, Delete).  

---

#### Real-World Examples
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

### Using PUT for Idempotency

The **PUT** method is **inherently idempotent**, meaning that making the same request multiple times will always result in the same state of the resource. Unlike `PATCH`, which updates only specific fields, `PUT` typically replaces the entire resource.  

---

### Scenarios Where PUT is Used for Idempotency

1. **Replacing an Entire Resource**  
   - If you send a `PUT` request multiple times with the same body, the resource's state remains unchanged after the first request.  
   - **Example: Updating a User Profile**  
     ```http
     PUT /users/123
     Content-Type: application/json
     ```
     ```json
     {
       "name": "Alice",
       "email": "alice@example.com",
       "age": 30
     }
     ```
     - Whether you send this request once or ten times, the user’s profile will always have the same values.

2. **Setting a Fixed Value Instead of Modifying It**  
   - If the request explicitly sets a field rather than incrementing or appending, it is idempotent.  
   - **Example: Updating Order Status**  
     ```http
     PUT /orders/567
     ```
     ```json
     { "status": "shipped" }
     ```
     - No matter how many times you send this request, the order status remains `"shipped"`.

3. **Creating or Updating a Resource with a Known Identifier**  
   - If the resource does not exist, `PUT` can create it. If it exists, `PUT` updates it with the provided data.  
   - **Example: Creating/Updating a Product in Inventory**  
     ```http
     PUT /products/789
     ```
     ```json
     {
       "name": "Wireless Mouse",
       "price": 25.99,
       "stock": 100
     }
     ```
     - If the product exists, it updates the details. If it doesn’t, it creates a new product entry.

4. **Reverting a Resource to a Specific State**  
   - If an application needs to reset a resource to a known state, `PUT` ensures it will always reach that state.  
   - **Example: Resetting a User's Preferences**  
     ```http
     PUT /users/123/preferences
     ```
     ```json
     {
       "theme": "light",
       "notifications": true
     }
     ```
     - If preferences were modified earlier, sending this request restores them to the predefined values.

---

### When NOT to Use PUT for Idempotency
- **Incremental Updates (Use PATCH Instead)**  
  - If you need to modify only part of a resource (e.g., changing just the email), `PATCH` is better suited.  
- **Appending Data**  
  - If you are adding new entries to a list (e.g., appending comments to a post), `PUT` is **not suitable** since it replaces the entire resource.

---

### Key Takeaways
✅ **Use `PUT` when you want to completely replace a resource or set its fields deterministically.**  
✅ **Ensure the request body contains all necessary fields to prevent unintended data loss.**  
✅ **Avoid `PUT` for operations that modify state incrementally (like counters or logs).**  

## Interview Questions 

---

### Phone Screen 1. What Types of HTTP Methods Are Idempotent? When Would Idempotent Methods Be Used?

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

### 3. On Site 1: Verifying a Resource's Existence

`What path or method would you use for writing an endpoint for verifying a resource's existence?`

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

### 4. On Site 2: Difference Between `api.site.com` and `site.com/api`

`Explain the difference between api.site.com and site.com/api`

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

### On Site 3: Can you make a POST request Idempotent? 

`Can you make a POST request idempotent?`

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

---

### Onsite 4: A user initiates a booking for both a flight and a hotel (SAGA)

In a distributed system like an airline booking system where you’re coordinating parallel actions—such as booking a flight and a hotel—using a **saga** is a great way to ensure idempotency and consistency across these long-running transactions.

###What is a Saga?
A saga is a pattern for managing distributed transactions that consist of multiple, independent operations. Rather than using a single ACID transaction, a saga breaks the overall process into a sequence of smaller, individual steps that each have their own local transaction and a corresponding compensating action to roll back changes if needed.

**How It Ensures Idempotency**
In the context of an airline booking system, idempotency ensures that if any booking operation is retried (due to network issues, system failures, etc.), the outcome remains consistent. Here’s how a saga helps:

1. **Sequential Steps with Local Transactions:**
   - **Flight Booking Step:** The system attempts to reserve a seat on the flight. This operation is idempotent because if the booking is retried, the system can check whether the seat is already reserved by the same request, avoiding duplicate reservations.
   - **Hotel Booking Step:** In parallel or after the flight reservation, the hotel room booking is processed with its own local transaction, also designed to be idempotent.

2. **Compensating Transactions:**
   - If one step fails (e.g., hotel booking fails after a flight booking has succeeded), a compensating action is triggered to roll back the successful booking (cancel the flight reservation). This rollback is also designed to be idempotent so that multiple compensating actions won’t further alter the state unexpectedly.

3. **Unique Transaction Identifiers:**
   - Each saga transaction can include a unique identifier (idempotency key) that helps the system recognize and ignore duplicate requests. When a retry occurs, the system checks for this key and returns the previous result rather than executing the same step again.

**Example Flow**
1. **Initiate Saga:** The user initiates a booking for both flight and hotel.
2. **Parallel Booking:**
   - **Flight Service:** Reserves a seat using a unique booking ID. If retried with the same key, the service checks if the booking exists and returns the same confirmation.
   - **Hotel Service:** Reserves a room similarly using its own idempotency mechanism.
3. **Transaction Coordination:** A saga orchestrator manages the sequence:
   - If both bookings succeed, the saga completes successfully.
   - If one booking fails, the orchestrator triggers compensating transactions (e.g., cancel the flight booking if the hotel booking fails).

#### Key Takeaways
- **Idempotent Steps:** Each service (flight, hotel) must be designed to handle duplicate requests gracefully.
- **Compensating Actions:** Ensure that if one part of the transaction fails, the system can undo previous actions without causing further side effects.
- **Saga Orchestration:** A central orchestrator or event-driven mechanism can coordinate the overall process, ensuring that retries and compensations are managed effectively.

Using a saga in this way allows your airline booking system to maintain consistency and reliability across distributed services, even in the face of partial failures and retries, while ensuring that the overall process remains idempotent.

## Request/Response Headers 

### Def
Headers are key-value pairs sent between clients (e.g., browsers) and servers to provide metadata about the HTTP request or response. They control behavior, define content types, manage security, and more. Below’s a breakdown:

---

### Request Headers
Sent by the client to the server to provide context about the request.  

#### Common Request Headers
| **Header**             | **Purpose**                                                                 | **Example**                              |  
|-------------------------|-----------------------------------------------------------------------------|------------------------------------------|  
| `Accept`                | Specifies the media types the client can process (e.g., JSON, HTML).        | `Accept: application/json`               |  
| `Authorization`         | Carries credentials (e.g., API keys, JWT tokens) for authentication.        | `Authorization: Bearer <token>`          |  
| `Content-Type`          | Indicates the media type of the request body (for POST/PUT).                | `Content-Type: application/json`         |  
| `User-Agent`            | Identifies the client (e.g., browser, app) making the request.              | `User-Agent: Mozilla/5.0 ...`            |  
| `Cookie`                | Sends stored cookies to the server.                                         | `Cookie: sessionId=abc123`               |  
| `Host`                  | Specifies the domain and port of the server being accessed.                 | `Host: api.example.com`                  |  
| `Accept-Encoding`       | Lists compression algorithms the client supports (e.g., gzip, deflate).     | `Accept-Encoding: gzip, deflate`         |  

**Example Request**
```http
GET /users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
User-Agent: Mozilla/5.0
```

---

### Response Headers
Sent by the server to the client to provide metadata about the response.  

**Common Response Headers**
| **Header**              | **Purpose**                                                                 | **Example**                              |  
|-------------------------|-----------------------------------------------------------------------------|------------------------------------------|  
| `Content-Type`          | Specifies the media type of the response body.                              | `Content-Type: application/json`         |  
| `Set-Cookie`            | Instructs the client to store cookies.                                      | `Set-Cookie: sessionId=abc123; Path=/`   |  
| `Cache-Control`         | Defines caching policies (e.g., `max-age`, `no-cache`).                     | `Cache-Control: max-age=3600`            |  
| `Content-Encoding`      | Indicates compression applied to the response (e.g., gzip).                 | `Content-Encoding: gzip`                 |  
| `Location`              | Redirects the client to a new URL (used with 3xx status codes).             | `Location: /new-page`                    |  
| `Access-Control-Allow-Origin` | Enables CORS by specifying allowed origins.                           | `Access-Control-Allow-Origin: *`         |  
| `X-Content-Type-Options` | Prevents MIME sniffing (security).                                     | `X-Content-Type-Options: nosniff`        |  

**Example Response**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600
Set-Cookie: sessionId=abc123; Path=/; Secure
Content-Encoding: gzip

{"id": 123, "name": "John Doe"}
```

---

### Key Use Cases
1. **Authentication**:  
   - Request: `Authorization` header for tokens.  
   - Response: `WWW-Authenticate` for 401 errors.  
2. **Caching**:  
   - Request: `If-Modified-Since` to check cached resources.  
   - Response: `ETag` or `Cache-Control` to manage caching.  
3. **Security**:  
   - Response: `Content-Security-Policy`, `Strict-Transport-Security`.  
4. **CORS**:  
   - Response: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`.  

---

### Key Takeaways
1. **Request Headers**:  
   - Tell the server what the client wants and how to process the request.  
   - Critical for authentication (`Authorization`), content negotiation (`Accept`), and cookies.  
2. **Response Headers**:  
   - Tell the client how to handle the response (e.g., caching, cookies, security).  
   - Use security headers to protect against vulnerabilities (e.g., `X-XSS-Protection`).  
3. **Standardization**:  
   - Follow IETF standards (e.g., RFC 7231) for consistency.  
4. **Tools**:  
   - Use browser dev tools or tools like **Postman** to inspect headers.  

---

### Summary Table
| **Category**       | **Purpose**                                  | **Common Headers**                                |  
|---------------------|----------------------------------------------|---------------------------------------------------|  
| **Request**         | Client → Server metadata                     | `Accept`, `Authorization`, `Content-Type`, `Host` |  
| **Response**        | Server → Client metadata                     | `Content-Type`, `Set-Cookie`, `Cache-Control`     |  
| **Security**        | Protect against attacks                      | `Content-Security-Policy`, `X-Frame-Options`      |  
| **Caching**         | Optimize performance                         | `Cache-Control`, `ETag`, `Expires`                |  

Headers are the **hidden backbone** of HTTP communication, enabling everything from authentication to performance optimization. Always design and inspect them carefully!


## Browser Cookies 

**Browser Cookies** are small text files stored on a user’s device (computer, phone, etc.) by websites they visit. They enable websites to remember information about the user, such as login status, preferences, or activity, to personalize and streamline the browsing experience. Here’s a detailed breakdown:

---

**Key Features of Browser Cookies**
1. **Purpose**:  
   - **Session Management**: Track user sessions (e.g., keep users logged in).  
   - **Personalization**: Save settings like language, theme, timezone, ads, or location.  
   - **Tracking**: Monitor user behavior for analytics or targeted ads.  
   - **Shopping Carts**: Remember items added to a cart.  

2. **How They Work**:  
   - Created by the server via the `Set-Cookie` header in an HTTP response.  
   - Sent back to the server with every subsequent request via the `Cookie` header.  
   - Example:  
     ```http
     # Server sends:
     Set-Cookie: sessionId=abc123; Path=/; Secure; HttpOnly

     # Client sends back:
     Cookie: sessionId=abc123
     ```

3. **Types of Cookies**:  
   - **Session Cookies**: Temporary, deleted when the browser closes. Used for login sessions.  
   - **Persistent Cookies**: Expire after a set date (e.g., `Expires=Wed, 21 Oct 2024 07:28:00 GMT`).  
   - **First-Party Cookies**: Set by the domain the user is visiting (e.g., `example.com`).  
   - **Third-Party Cookies**: Set by external domains (e.g., ads or embedded content).  

4. **Cookie Attributes**:  
   | **Attribute** | **Purpose**                                                                 |  
   |---------------|-----------------------------------------------------------------------------|  
   | `Domain`      | Specifies which domains can access the cookie.                              |  
   | `Path`        | Restricts the cookie to a specific URL path (e.g., `/blog`).                |  
   | `Expires`/`Max-Age` | Sets when the cookie will be deleted.                               |  
   | `Secure`      | Only sends the cookie over HTTPS.                                           |  
   | `HttpOnly`    | Prevents client-side scripts (JavaScript) from accessing the cookie.        |  
   | `SameSite`    | Restricts cookie sharing with cross-site requests (prevents CSRF attacks).  |  

---

**Example Use Cases**
1. **Login Sessions**:  
   ```http
   Set-Cookie: authToken=eyJhbGci...; Secure; HttpOnly; SameSite=Strict
   ```
   - Stores an encrypted token to keep the user logged in securely.

2. **Language Preference**:  
   ```http
   Set-Cookie: language=en-US; Expires=Wed, 21 Oct 2024 07:28:00 GMT; Path=/
   ```
   - Remembers the user’s preferred language for future visits.

3. **Shopping Cart**:  
   ```http
   Set-Cookie: cartItems=[123,456]; Path=/store
   ```
   - Tracks items added to the cart during a session.

---

### Security & Privacy
1. **Risks**:  
   - **Cross-Site Scripting (XSS)**: Attackers steal cookies if not marked `HttpOnly`.  
   - **Cross-Site Request Forgery (CSRF)**: Exploits cookies without `SameSite` restrictions.  
   - **Tracking**: Third-party cookies can violate user privacy.  

2. **Best Practices**:  
   - Use `Secure`, `HttpOnly`, and `SameSite` attributes.  
   - Encrypt sensitive data (never store passwords in cookies!).  
   - Comply with privacy laws (e.g., GDPR, CCPA) by obtaining user consent.  

---

**Limitations**
- **Size Limit**: Typically **4KB** per cookie.  
- **Domain Restrictions**: Cookies are bound to their domain and path.  
- **Browser Settings**: Users can block or delete cookies.  

---

**Alternatives to Cookies**
- **LocalStorage/SessionStorage**: Client-side storage (no automatic server transmission).  
- **JWT (JSON Web Tokens)**: Stateless authentication tokens.  

---

### Key Takeaways
- Cookies are **essential for state management** in HTTP’s stateless protocol.  
- Use security attributes (`Secure`, `HttpOnly`, `SameSite`) to protect against attacks.  
- Balance functionality with user privacy (e.g., limit third-party cookies).  
- Modern browsers (Chrome, Firefox) are phasing out third-party cookies for privacy reasons.  


## API Limits 

`Important to make sure the user has a good experience with my api`

**API Limits: Ensuring Stability and Fair Usage**

API limits are controls implemented by API providers to manage how their services are accessed and used. These limits ensure system stability, prevent abuse, and allocate resources fairly among users. Below is a structured overview:

---

### Types of API Limits
1. **Rate Limiting**  
   - Restricts the number of requests a client can make within a specific timeframe.  
   - Example: *100 requests per minute*.  
   - **Common Strategies**:  
     - **Token Bucket**: Tokens are added at a fixed rate; each request consumes a token.  
     - **Leaky Bucket**: Requests are processed at a steady rate, discarding excess.  

2. **Throttling**  
   - Slows down responses or queues excess requests instead of blocking them outright.  
   - Example: Delaying responses after exceeding a threshold.  

3. **Data Limits**  
   - Caps on request/response sizes (e.g., *10MB per POST request*).  

4. **Concurrency Limits**  
   - Limits simultaneous connections (e.g., *5 concurrent requests per user*).  

5. **Authentication Requirements**  
   - Mandates API keys, OAuth tokens, or IP whitelisting for access.  

6. **Endpoint-Specific Limits**  
   - Stricter rules for resource-heavy endpoints (e.g., *3 requests/second for `/search`*).  

---

**Why API Limits Matter**
- **Prevent Overload**: Avoid server crashes due to excessive traffic.  
- **Mitigate Abuse**: Block denial-of-service (DoS) attacks.  
- **Fair Usage**: Ensure equitable access for all users.  
- **Monetization**: Enforce tiered pricing plans (e.g., free vs. premium tiers).  

---

**Implementation and Enforcement**
- **HTTP Status Codes**:  
  - **429 Too Many Requests**: Indicates rate limits are exceeded.  
  - **403 Forbidden**: Denies access due to missing/invalid credentials.  
- **Response Headers**:  
  - `X-RateLimit-Limit`: Total allowed requests.  
  - `X-RateLimit-Remaining`: Requests left in the window.  
  - `Retry-After`: Time (in seconds) to wait before retrying.  

---

**Handling Limits as a Developer**
1. **Check Documentation**: Review the API’s rate limits, quotas, and policies.  
2. **Implement Retry Logic**: Use exponential backoff to retry failed requests.  
3. **Monitor Usage**: Track headers like `X-RateLimit-Remaining` to stay within bounds.  
4. **Optimize Requests**: Batch operations or cache results to reduce calls.  

---

**Example: Rate Limit in Action**
```httpq
GET /data HTTP/1.1
Host: api.example.com
X-API-Key: abc123

HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
```

---

### Key Takeaways
- **Types of Limits**: Rate limits, throttling, data caps, and authentication.  
- **Purpose**: Stability, security, and equitable resource sharing.  
- **Best Practices**:  
  - Use headers for real-time monitoring.  
  - Design fault-tolerant retry mechanisms.  
  - Optimize API calls to minimize usage.  

---

##  1. URL Length Limit
**What to Limit**
- The maximum allowed length of the URL (including path, query parameters, etc.).  

**Why Limit URL Length?**
- **Security**: Prevent buffer overflow attacks or overly complex queries.  
- **Performance**: Long URLs can strain servers during parsing/routing.  
- **Compatibility**: Browsers and proxies often cap URLs at **~2,048 characters** (varies by browser).  

**Implementation**
- **Server-Side Check**: Reject requests with URLs exceeding the limit.  
- **HTTP Status Code**: Return **414 URI Too Long** (RFC 9110).  

**Example**:  
```javascript
// Express.js middleware to enforce URL length limit
app.use((req, res, next) => {
  const maxURLLength = 2048; // Characters
  if (req.url.length > maxURLLength) {
    return res.status(414).send("URL too long");
  }
  next();
});
```

---

### 2. Body Length Limit
**What to Limit**
- The maximum allowed size of the request body (e.g., JSON, form data).  

**Why Limit Body Length?**
- **Resource Protection**: Large payloads consume memory/bandwidth.  
- **Prevent Abuse**: Block malicious actors from flooding the API with oversized data.  
- **Optimization**: Ensure predictable performance for parsing/processing.  

**Implementation**
- **Middleware**: Use frameworks like Express.js to cap body size.  
- **HTTP Status Code**: Return **413 Payload Too Large** (RFC 9110).  

**Example**:  
```javascript
// Express.js body-parser with a 1MB limit
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));
```

---

### Typical Limits
| **Limit Type** | **Recommended Threshold** | **Notes**                              |  
|----------------|---------------------------|----------------------------------------|  
| **URL Length** | 2,048 characters          | Aligns with browser/HTTP standards.    |  
| **Body Length**| 1MB – 10MB                | Adjust based on use case (e.g., file uploads may need higher limits). |  

---

### Key Considerations
1. **Adjust for Use Cases**:  
   - File upload APIs may require larger body limits (e.g., 100MB).  
   - URL length limits can be stricter for internal APIs (e.g., 1,000 chars).  

2. **Error Responses**:  
   - Include headers like `Retry-After` or `Content-Length` to guide clients.  
   - Provide clear error messages:  
     ```json
     {
       "error": "Payload too large",
       "max_allowed_size": "1MB"
     }
     ```

3. **Edge Cases**:  
   - Handle chunked transfer encoding for streaming requests.  
   - Use CDNs or gateways (e.g., AWS API Gateway) to offload size validation.  

---

**Security Best Practices**
- **Reject Early**: Validate URL/body length **before** processing the request.  
- **Log Oversized Requests**: Monitor for potential attacks.  
- **Combine with Other Limits**: Pair with rate limiting and authentication.  

---

**Example Flow**
1. **Client Sends Request**:  
   ```http
   POST /data HTTP/1.1
   Host: api.example.com
   Content-Type: application/json
   Content-Length: 2097152 # 2MB

   { "data": "..." }
   ```

2. **Server Responds**:  
   ```http
   HTTP/1.1 413 Payload Too Large
   Content-Type: application/json

   {
     "error": "Payload exceeds 1MB limit",
     "documentation": "https://api.example.com/docs/limits"
   }
   ```

---

### Key Takeaways
- **Types of Limits**: Rate limits, throttling, data caps, URL length, body length, and authentication.
- **Purpose**: Stability, security, and equitable resource sharing.  
- **Best Practices**:  
  - Use headers for real-time monitoring.  
  - Design fault-tolerant retry mechanisms.  
  - Optimize API calls to minimize usage.  
- **URL and body limits** are critical for security, performance, and compliance.  
- Use status codes **414** (URL too long) and **413** (payload too large).  
- Adjust limits based on your API’s use case (e.g., higher for file uploads).  
- Communicate limits clearly in documentation and error responses.  

## HTTP Caching 

HTTP caching is a mechanism used to store copies of responses to reduce latency, network traffic, and server load. It involves storing a response—whether on the client-side, a proxy, or a dedicated caching server—and reusing that data for subsequent requests, provided it remains fresh and valid.

---

### How HTTP Caching Works

- **Storing Responses:**  
  When a client makes a request, the server may include caching-related headers in its response. These headers instruct caches (either on the client, intermediate proxies, or CDNs) how long to store the response and under what conditions the cache should be considered valid.

- **Cache Validation:**  
  Even when a cached response is available, caches often need to check whether the resource has been updated on the server. This is typically done using:
  - **ETag Headers:** Unique identifiers for resource versions.
  - **Last-Modified Headers:** Indicate when the resource was last changed.
  If the cached copy is stale, the cache can revalidate by making a conditional request (using headers like `If-None-Match` or `If-Modified-Since`), receiving a `304 Not Modified` status if the resource hasn't changed.

- **Cache-Control:**  
  The `Cache-Control` header provides directives for caching behavior, such as:
  - `max-age`: Specifies the number of seconds a resource is considered fresh.
  - `no-cache`: Indicates that a cached resource must be revalidated with the server before reuse.
  - `no-store`: Prevents caching entirely.
  - `public` or `private`: Determines whether the response can be cached by shared caches or only by the client's browser.

- **Expires Header:**  
  An older caching mechanism that specifies a date/time after which the response is considered stale. It is often used in conjunction with `Cache-Control`.

---

### Benefits of HTTP Caching

- **Performance Improvement:**  
  Caching reduces the need for repeated network requests, resulting in faster page loads and reduced latency.
  
- **Reduced Server Load:**  
  By serving cached content, servers can avoid processing duplicate requests, which saves resources.
  
- **Bandwidth Savings:**  
  With fewer requests reaching the server, both the server and client save on data transfer costs, which is especially beneficial for high-traffic applications or limited bandwidth environments.

- **Scalability:**  
  Proper caching can improve the scalability of an application by reducing the load on the origin server during high traffic periods.

---

### Key Takeaways

- **Efficiency:**  
  HTTP caching dramatically increases efficiency by serving stored responses, reducing redundant processing and network usage.

- **Freshness vs. Staleness:**  
  Understand and configure caching headers (e.g., `Cache-Control`, `Expires`, `ETag`, and `Last-Modified`) to balance between serving up-to-date content and benefiting from cached responses.

- **Conditional Requests:**  
  Use conditional requests to check the validity of a cached resource, which can help avoid unnecessary data transfers while ensuring data freshness.

- **Cache Invalidation:**  
  Be aware that caching strategies require careful planning, especially for dynamic content. Knowing when and how to invalidate caches is crucial for maintaining consistency.

- **Layered Caching:**  
  Caching can occur at multiple layers (client-side, proxy, CDN) and should be configured appropriately at each level to maximize benefits.

---

HTTP caching is a powerful tool for improving web performance and scalability. By carefully setting caching policies, developers can ensure that users get fast, reliable access to content while also reducing server load and network traffic.

## Private Cache vs. Public Cache

HTTP caching can be broadly categorized into **private caches** and **shared caches**, each serving different purposes:

---

### Private Cache

- **Definition:**  
  A private cache stores responses for use by a single user or client. This cache is typically maintained by a browser or an application on a user's device.

- **Examples:**  
  - Browser cache: When you visit a website, your browser stores static assets like images, CSS, and JavaScript files.  
  - Mobile app cache: An app may cache data locally to improve performance or offline access.

- **Key Characteristics:**  
  - **User-Specific:** The cached data is tied to a particular user session, so it is not shared between users.  
  - **Security:** Private caches can store sensitive data since they are accessible only to that user, provided proper security measures are in place.  
  - **Control:** Users have more direct control (e.g., clearing browser cache) over the stored data.

---

### Shared Cache

- **Definition:**  
  A shared cache is designed to store responses that can be used by multiple users. These caches are typically implemented by proxy servers, Content Delivery Networks (CDNs), or reverse proxies.

- **Examples:**  
  - CDN caches: A CDN stores copies of static and dynamic content on edge servers to serve multiple users faster.  
  - Proxy caches: An intermediary server (such as an ISP or corporate proxy) that caches responses for multiple users to reduce load and latency.

- **Key Characteristics:**  
  - **Multi-User Environment:** Data stored in a shared cache can be served to any client that makes a request, which is ideal for public resources that don’t change frequently.  
  - **Efficiency:** Shared caches help reduce load on the origin server by serving cached content to many users simultaneously.  
  - **Cache-Control Directives:** HTTP headers like `Cache-Control` are crucial to define whether a response is cacheable by shared caches (using directives such as `public` or `s-maxage`).

---

### Key Differences and Use Cases

- **Security and Sensitivity:**  
  - **Private Cache:** Suitable for personalized or sensitive data that should not be shared across users.  
  - **Shared Cache:** Ideal for public or non-sensitive resources, ensuring that many users can benefit from faster load times and reduced server load.

- **Cache Invalidation:**  
  - **Private Cache:** Invalidation can often be managed on a per-user basis, either manually or through application logic.  
  - **Shared Cache:** Invalidation strategies must be carefully planned, as they affect multiple users at once. Techniques such as cache purging or setting appropriate `Cache-Control` headers are vital.

- **Performance:**  
  - **Private Cache:** Improves performance on a per-user basis by reducing redundant data downloads.  
  - **Shared Cache:** Enhances overall scalability and reduces bandwidth consumption by serving many users from a single cached copy.

---

Understanding the distinctions between private and shared caches is essential for designing effective caching strategies in web applications. By appropriately leveraging each type, developers can optimize performance, maintain security, and efficiently manage resources.

## Response Codes 

### 1xx - Information 
**HTTP Response Codes: Scenarios, Codes, and Response Bodies**
0. **1xx - Information** 
Below are common HTTP status codes grouped by category, with scenarios and example response bodies.  

---

### 2xx Success
0. **1xx - Information** 
| **Code** | **Scenario**                          | **Response Body (JSON Example)**                    |  
|----------|---------------------------------------|----------------------------------------------------|  
| `200 OK` | Successful request (e.g., retrieving data). | `{ "data": { "id": 1, "name": "Item 1" } }`       |  
| `201 Created` | Resource created (e.g., after `POST`). | `{ "id": 123, "message": "Resource created" }` + `Location: /items/123` header. |  
| `204 No Content` | Successful request with no body (e.g., deletion). | *No body*. |  

---

### 3xx Redirection
0. **1xx - Information** 
| **Code** | **Scenario**                          | **Response Body (JSON Example)**                    |  
|----------|---------------------------------------|----------------------------------------------------|  
| `301 Moved Permanently` | Resource permanently moved. | `{ "message": "Resource moved to /new-url" }` + `Location: /new-url` header. |  
| `302 Found` | Temporary redirect. | `{ "message": "Temporary redirect" }` + `Location: /temp` header. |  
| `304 Not Modified` | Cached content is valid. | *No body* (client uses cached copy). |  

---

### 4xx Client Errors
0. **1xx - Information** 
| **Code** | **Scenario**                          | **Response Body (JSON Example)**                    |  
|----------|---------------------------------------|----------------------------------------------------|  
| `400 Bad Request` | Invalid request data (e.g., missing fields). | `{ "error": "Invalid input", "details": "Missing 'name' field" }` |  
| `401 Unauthorized` | Missing/invalid authentication. | `{ "error": "Authentication required" }` |  
| `403 Forbidden` | Authenticated but unauthorized. | `{ "error": "Access denied" }` |  
| `404 Not Found` | Resource does not exist. | `{ "error": "Resource not found" }` |  
| `409 Conflict` | Conflicting request (e.g., duplicate entry). | `{ "error": "User already exists" }` |  
| `429 Too Many Requests` | Rate limit exceeded. | `{ "error": "Too many requests", "retryAfter": 60 }` + `Retry-After: 60` header. |  

---

### 5xx Server Errors
0. **1xx - Information** 
| **Code** | **Scenario**                          | **Response Body (JSON Example)**                    |  
|----------|---------------------------------------|----------------------------------------------------|  
| `500 Internal Server Error` | Generic server error. | `{ "error": "Internal server error", "requestId": "abc123" }` |  
| `502 Bad Gateway` | Invalid response from upstream server. | `{ "error": "Bad gateway" }` |  

---

### Key Takeaways
0. **1xx - Information** 
1. **2xx Codes**: Indicate success. Use `201` for new resources and `204` for empty responses.  
2. **3xx Codes**: Handle redirection. Include `Location` headers for new URLs.  
3. **4xx Codes**: Client-side issues. Use `400` for bad input, `401`/`403` for auth issues, `404` for missing resources.  
4. **5xx Codes**: Server-side failures. Always log these for debugging.  
5. **Headers**: Use headers like `Location`, `Allow`, or `Retry-After` to guide clients.  

---

## Problems/Challenges When Updating Your API & Safest Way to Avoid Them

**Common Challenges:**
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

**Safest Way to Avoid These Problems:**
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

## Interview Questions

---

### Phone Screen 1. Uses for a cookie:
- Session management (maintaining login state)
- Storing user preferences
- Tracking user activity and behavior
- Authentication tokens
- Personalization of content

**2. Limits on your API:**
- Rate limiting (e.g., requests per minute/hour)
- Payload size limits (max request/response size)
- Authentication and authorization (access control)
- Input validation limits (length/type constraints)
- Connection and resource usage limits

**3. Five response codes for your API:**
- **200 OK** – Successful request.
- **201 Created** – Resource successfully created.
- **400 Bad Request** – Invalid client request.
- **404 Not Found** – Resource not found.
- **500 Internal Server Error** – Server encountered an error.

---

### On Site 1: Caching Strategy for an Image Sharing Application

1. Briefly explain HTTP caching. Outline a caching strategy for an image sharing application.

**Answer:**

**1. Brief Explanation of HTTP Caching**
HTTP caching stores copies of resources (e.g., images, CSS, JS) to reduce server load, latency, and bandwidth. Key components:  
- **Headers**:  
  - `Cache-Control`: Directives like `max-age`, `public`, `no-cache`.  
  - `ETag`/`Last-Modified`: Validate cached content freshness.  
- **Status Codes**: `304 Not Modified` (use cache), `200 OK` (new content).  

---

### 2. Caching Strategy for an Image Sharing Application
**Goals**: Optimize performance for frequently accessed images while ensuring updates propagate efficiently.  

**Client-Side Caching**
- **Static Assets (Images)**:  
  - Set long `max-age` for immutable images (e.g., `Cache-Control: public, max-age=31536000`).  
  - Use **cache-busting** via unique filenames or versioned URLs (e.g., `/image.jpg?v=2`) when images are updated.  
- **Dynamic Content**:  
  - Use `no-cache` for user-specific images (e.g., private albums).  

**Server-Side Caching**
- **CDN Caching**:  
  - Cache popular images at edge locations (e.g., Cloudflare, AWS CloudFront).  
  - Set `Cache-Control: public, max-age=86400` (24 hours) for frequently accessed content.  
- **Reverse Proxy (e.g., Nginx/Varnish)**:  
  - Cache images in memory/disk to reduce backend load.  
  - Use `proxy_cache_valid 200 1d;` to retain images for 1 day.  

**Validation & Invalidation**
- **ETag/Last-Modified**:  
  - Validate cached images via `If-None-Match` (ETag) or `If-Modified-Since` (Last-Modified).  
- **Cache Purging**:  
  - Invalidate CDN/proxy cache when images are updated/deleted (e.g., via CDN API or cache tags).  

**Access-Based TTL**
- **Popular Images**: Longer TTL (e.g., 1 week) to stay cached.  
- **Less Popular Images**: Shorter TTL (e.g., 1 hour) to free resources.  

**Security & Privacy**
- **Private Images**:  
  - Use `Cache-Control: private` or `no-store` to prevent public caching.  
- **Access Control**:  
  - Restrict CDN/proxy caching for authenticated routes.  

---

**Example Flow**
1. **User Uploads Image**:  
   - Assign a unique URL (e.g., `/images/abc123_v1.jpg`).  
2. **First Request**:  
   - Server responds with `200 OK`, `Cache-Control: public, max-age=31536000`, and `ETag: "abc123"`.  
3. **Repeat Request**:  
   - Browser sends `If-None-Match: "abc123"`.  
   - Server returns `304 Not Modified` if unchanged.  
4. **Image Updated**:  
   - New URL (e.g., `/images/abc123_v2.jpg`) forces cache refresh.  

---

### Key Takeaways
- **Leverage CDNs** for global caching of popular static images.  
- **Use versioned URLs** for cache busting when images change.  
- **Prioritize TTL** based on image popularity to balance performance and storage.  
- **Secure private content** with `private`/`no-store` directives.  

### On-site 2: Designing an API for an Image Sharing Application

  Design an API for the image sharing application with GET, POST and PUT endpoints. Outline which response codes you would use for certain situations on each endpoint
  
The API will provide endpoints for uploading, retrieving, and updating images. Below is the design with appropriate request methods, endpoints, and expected response codes.

---

**1. GET /images/{image_id}**
**Purpose:** Retrieve an image by its ID.  

**Request:**  
```http
GET /images/{image_id}
```

**Response Codes:**  
- **200 OK** – Image is found, returns the image metadata and URL.  
- **304 Not Modified** – If caching is enabled and the client’s cached version is still valid (`ETag`, `If-Modified-Since`).  
- **404 Not Found** – If the image does not exist.  
- **403 Forbidden** – If the image is private and the user lacks permission.  

---

**2. POST /images**
**Purpose:** Upload a new image.  

**Request:**  
```http
POST /images
Content-Type: multipart/form-data
```
**Request Body:**  
- `file`: The image file.  
- `title`: (Optional) Image title.  
- `description`: (Optional) Image description.  
- `visibility`: (`public` or `private`).  

**Response Codes:**  
- **201 Created** – Image successfully uploaded. Returns the image ID and URL.  
- **400 Bad Request** – Missing or invalid image file.  
- **413 Payload Too Large** – If the image exceeds the allowed file size.  
- **415 Unsupported Media Type** – If an invalid file format is uploaded.  
- **401 Unauthorized** – If authentication is required.  

---

**3. PUT /images/{image_id}**
**Purpose:** Update image metadata (title, description, visibility).  

**Request:**  
```http
PUT /images/{image_id}
Content-Type: application/json
```
**Request Body (JSON):**  
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "visibility": "private"
}
```

**Response Codes:**  
- **200 OK** – Successfully updated metadata.  
- **400 Bad Request** – Invalid request body or parameters.  
- **403 Forbidden** – If the user does not own the image.  
- **404 Not Found** – If the image does not exist.  
- **409 Conflict** – If there is a concurrent update conflict.  

---

### Other Considerations
- **Authentication & Authorization:**  
  - Use OAuth2 or JWT for secured endpoints (POST/PUT).  
  - Allow only authorized users to edit their own images.

- **Rate Limiting:**  
  - Prevent abuse by limiting the number of upload requests per minute.

- **Caching Strategy:**  
  - Use `Cache-Control` and `ETag` for GET requests to optimize performance.

---

# REST vs. GraphQL

Both REST and GraphQL are popular approaches for designing APIs, but they differ significantly in design, flexibility, and use cases. Below is an overview, key takeaways, best practices for each, and guidance on when to use them.

---

## REST

**Overview**
- **Architecture:**  
  REST (Representational State Transfer) is an architectural style that uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs.
- **Statelessness:**  
  Each request contains all the information the server needs to process it, making REST APIs stateless.
- **Resource-Based:**  
  Resources are accessed using a uniform interface and standard HTTP status codes.

### Key Takeaways
- **Predictability:**  
  Using standardized methods and status codes makes REST APIs predictable and widely understood.
- **Caching:**  
  Built-in HTTP caching mechanisms (via headers like `Cache-Control` and `ETag`) improve performance.
- **Scalability:**  
  The stateless nature facilitates scaling horizontally.
- **Multiple Representations:**  
  Resources can be returned in various formats (JSON, XML, etc.) based on client needs.

**Best Practices & Use Cases**
  - Applications with simple CRUD operations.
  - Services where caching and HTTP-level optimizations are important.
  - Systems that benefit from a standardized and widely-adopted approach.
- **Best Practices:**  
  - Use proper HTTP status codes and verbs.
  - Structure your URLs to reflect resources (e.g., `/users`, `/orders/123`).
  - Implement versioning to maintain backward compatibility.
  - Use HATEOAS (Hypermedia as the Engine of Application State) for discoverability, if needed.
  - Keep responses consistent and document the API thoroughly.

---

## GraphQL

**Overview**
- **Query Language:**  
  GraphQL is a query language for APIs that enables clients to request exactly the data they need, no more and no less.
- **Single Endpoint:**  
  Unlike REST, GraphQL typically exposes a single endpoint through which all interactions occur.
- **Client-Driven:**  
  Clients define the structure of the response, which can help reduce over-fetching and under-fetching of data.

### Key Takeaways
- **Flexibility:**  
  Clients have granular control over data retrieval, making it ideal for complex or dynamic data requirements.
- **Efficiency:**  
  Reduces the number of API calls by bundling multiple resource requests into a single query.
- **Data Joins On The Server:**
    Instead of calling, /user, then calling /pictures for that user. We'd just say, give me all the users and all the pictures for each user. 
- **Strong Typing:**  
  A defined schema allows for robust tooling, introspection, and better error handling.
- **Evolving APIs:**  
  GraphQL makes it easier to evolve APIs without breaking existing queries.

### Best Practices & Use Cases
- **Use Cases:**  
  - Applications with complex data relationships or where data requirements vary widely between clients (e.g., mobile vs. web).
  - When performance and bandwidth optimization is critical.
  - Scenarios requiring real-time data updates (using GraphQL subscriptions).
- **Best Practices:**  
  - Define a clear and comprehensive schema that mirrors your data model.
  - Implement proper error handling and validation.
  - Use query complexity analysis and rate limiting to protect your server from expensive queries.
  - Utilize caching at the client or intermediary levels (e.g., Apollo Client caching).
  - Maintain clear documentation and version your schema when necessary.

---

## When to Use Each

- **Choose REST if:**  
  - Your application has straightforward CRUD operations and doesn't require complex queries.
  - You need to leverage HTTP caching, and your clients can work with standard HTTP semantics.
  - You want a widely adopted, simple, and predictable API design.

- **Choose GraphQL if:**  
  - Your API needs to support complex queries and relationships.
  - Clients require different subsets of data, and you want to avoid multiple round trips.
  - You aim to reduce payload sizes and optimize performance, especially in mobile or bandwidth-sensitive environments.
  - You want to offer a more flexible and self-documenting API that evolves over time.

---

Both REST and GraphQL have their strengths and are suited to different scenarios. The best choice depends on your specific application needs, data complexity, client requirements, and overall system design goals.

GraphQL queries are inherently idempotent since they only read data, but mutations—which change data—are not guaranteed to be idempotent by default. However, you **can design your GraphQL mutations to be idempotent** by carefully crafting their logic.

### How to Achieve Idempotency in GraphQL Mutations

- **Use Idempotency Keys:**  
  Require clients to send a unique idempotency key with each mutation request. The server can check if a request with the same key has already been processed and return the existing result instead of performing the operation again.

- **Design Deterministic Mutations:**  
  Ensure that the mutation’s effect doesn’t change when applied multiple times. For example, if your mutation creates a resource, check if the resource already exists (based on unique fields) and return it instead of creating a duplicate.

- **Conditional Operations:**  
  Use conditions in your resolvers to only update state when it’s appropriate. For instance, updating a user’s status to “active” should only apply the change if the current status isn’t already “active.”

### Key Takeaways

- **GraphQL Mutations Are Not Idempotent by Default:**  
  Unlike GET queries, mutations modify state and can lead to different outcomes if called repeatedly.
  
- **Idempotency Requires Explicit Design:**  
  Implementing idempotency in GraphQL is a matter of how you write your resolver logic rather than a feature of the GraphQL spec.

- **Best Practices:**  
  - Always check for existing records before creating new ones.
  - Use unique identifiers or idempotency keys to prevent duplicate operations.
  - Document your mutation behavior clearly so that clients understand how to safely retry operations.

By applying these strategies, you can design GraphQL mutations that are idempotent, ensuring that repeated calls with the same input lead to the same outcome without unintended side effects.

## What make an API RESTful? 

`**RE**presentational **S**tate **T**ransfer 

A RESTful API is one that adheres to the architectural principles of REST (Representational State Transfer). Here are the key elements that make an API RESTful:

- **Statelessness:**  
  Each request from a client must contain all the information needed to process the request. The server doesn’t store any client context between requests. The server is not effected by the client state (Use headers for things such as cookies, auth, etc for client state)

- **Client-Server Architecture:**  
  The separation of concerns between the client (which handles the user interface) and the server (which manages data and business logic) is essential. This decoupling allows each part to evolve independently.

- **Uniform Interface:**  
  A consistent way to interact with resources is crucial. This typically involves: We transfer the state of that resource when the client fetches it. 
  - **Resource Identification:** Resources are identified via URLs (e.g., `/users/123`).
  - **Standard HTTP Methods:** Use of methods like GET, POST, PUT, DELETE to perform operations.
  - **Representation:** Resources are represented in a format like JSON or XML.
  - **HATEOAS (Hypermedia as the Engine of Application State):** Optionally, the API can include links within responses to guide client interactions.

- **Cacheability:**  
  Responses should explicitly state whether they are cacheable. Caching can improve performance and scalability by reducing the number of client-server interactions.

- **Layered System:**  
  The architecture can be composed of hierarchical layers (e.g., load balancers, proxies, and backend services). Each layer only interacts with its adjacent layers, enhancing security and scalability.

- **Code on Demand (Optional):**  
  Although rarely used, servers can optionally extend client functionality by transferring executable code (like JavaScript).

- **Client-Server:**
    Can scale each independently of each other, as long as the interface is unaltered.  

### Key Takeaway

- **Consistency and Predictability:**  
  A uniform interface and standard HTTP methods make the API easier to understand and consume.
- **Scalability:**  
  Statelessness and cacheability allow the system to scale more effectively.
- **Decoupled Architecture:**  
  The client-server separation supports independent evolution and maintenance of client and server components.

By following these principles, an API becomes RESTful, promoting simplicity, performance, and scalability.

## Interview Questions 

---

### Phone Screen Interview Question 1 - What is GraphQL? What are a couple differences from REST?

✅ **What is GraphQL?**  
GraphQL is a **query language for APIs** and a runtime for executing queries against your data. It provides a flexible and efficient alternative to REST by allowing clients to request exactly the data they need.  

✅ **Key Differences from REST:**  
| Feature       | GraphQL | REST |
|--------------|---------|------|
| **Data Fetching** | Clients request **only the fields they need**. | Fetches **fixed responses**, often requiring multiple requests. |
| **Single Endpoint** | Uses **one endpoint** (`/graphql`). | Uses **multiple endpoints** (`/users`, `/posts`, etc.). |
| **Over-fetching & Under-fetching** | Eliminates both. Clients request exactly what they need. | May over-fetch (extra data) or under-fetch (missing fields requiring extra requests). |
| **Versioning** | Not required; schema changes are handled with deprecations. | Requires **versioning** (`/v1/users`, `/v2/users`). |

---

### Take-Home Interview Question 1: Build a "Hello World" GraphQL API

✅ **Implementation using Express & Apollo Server (Node.js):**  

**Install Dependencies**
```bash
npm install express apollo-server-express graphql
```

**Code**
```javascript
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

// Define GraphQL Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello, World!"
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => console.log('Server running at http://localhost:4000/graphql'));
}

startServer();
```

✅ **Test the API**  
1. Run `node server.js`.  
2. Open **http://localhost:4000/graphql**.  
3. Enter the query:  
   ```graphql
   {
     hello
   }
   ```
4. Expected Response:  
   ```json
   {
     "data": {
       "hello": "Hello, World!"
     }
   }
   ```

---

### On-Site Interview Question 1: Explain the benefits and drawbacks of using GraphQL vs REST APIs

✅ **Benefits of GraphQL:**  
- **Flexible Data Retrieval** → Clients request only the data they need.  
- **Single Endpoint** → Reduces complexity compared to multiple REST endpoints.  
- **No Over-fetching/Under-fetching** → Efficient for large-scale apps.  
- **Strongly Typed Schema** → Helps avoid data inconsistency.  

✅ **Drawbacks of GraphQL:**  
- **Performance Concerns** → Nested queries can be costly on the server.  
- **Complexity** → More complex to implement than REST.  
- **Caching Issues** → Harder to cache responses compared to REST.  

✅ **When to Use Each:**  
| Use Case | Choose REST | Choose GraphQL |
|----------|------------|---------------|
| **Simple APIs** | ✅ | ❌ |
| **Complex Data Relationships** | ❌ | ✅ |
| **High Performance & Caching** | ✅ | ❌ |
| **Mobile Apps with Limited Bandwidth** | ❌ | ✅ |

---

### On-Site Interview Question 2: What Issues Typically Arise When Using REST APIs?

✅ **Common Issues with REST APIs:**  

1. **Over-fetching & Under-fetching**  
   - Clients may get **too much or too little data**, requiring multiple requests.  
   - Example: Fetching `/users/1` returns user details **but not their posts**, requiring another request.  

2. **Versioning Complexity**  
   - API updates can **break old clients**, requiring `/v1/` and `/v2/` versions.  

3. **N+1 Query Problem**  
   - Example: A client requests a list of users, then makes **another API call per user** to get their posts, causing performance issues.  

4. **Lack of Flexibility**  
   - REST APIs return **fixed responses**. If a client needs more fields, the backend must be updated.  

5. **Limited Real-Time Support**  
   - REST is stateless and does not **natively support real-time data** (WebSockets or polling required).  

✅ **Best Practices to Address These Issues:**  
- **Use Pagination** → Avoid over-fetching large datasets.  
- **Implement API Gateways** → Helps manage multiple versions efficiently.  
- **Optimize Query Performance** → Use indexing, caching, and batch requests.  
- **Use WebSockets for Real-Time Data** → Enables live updates.  

---

## Summary of All Questions & Answers
| Question | Key Takeaways |
|----------|--------------|
| **What is GraphQL? How is it different from REST?** | GraphQL provides flexible queries with a single endpoint, while REST uses fixed endpoints and responses. |
| **Build a "Hello World" GraphQL API** | Implemented using **Express + Apollo Server** in Node.js. |
| **GraphQL vs REST Pros & Cons** | GraphQL is more flexible but complex; REST is simple but can over-fetch data. |
| **Issues with REST APIs?** | Over-fetching, versioning, query performance, and real-time support challenges. |

---

# Authentication vs Authorization 

## Authentication:  "Who are you"

**Authentication** is the process of verifying who a user or system is—essentially, confirming their identity. For example, when you log in using your username and password, the system checks your credentials to ensure you are who you claim to be.

## Authorization: "What can you do"
**Authorization** on  the other hand, determines what that authenticated user is allowed to do. It defines the permissions and access levels, such as whether you can view, edit, or delete certain data or resources.

- After successful authentication 
- Utilized Access Token 
- Backend owns authorization policies

### Key Takeaways 
- **Authentication:** "Who are you?"  
- **Authorization:** "What can you do?"

### Cookies vs. Headers vs. URL Parameters
Here’s a breakdown of how cookies, headers, and URL parameters differ in web development, including their **use cases**, **security implications**, and **technical characteristics**:

---

### 1. Cookies
**What They Are**:  
- Small key-value pairs stored **on the client side** (browser).  
- Sent automatically with **every request** to the domain that set them.  

**Use Cases**:  
- **Session management** (e.g., login tokens).  
- **Personalization** (e.g., theme/language preferences).  
- **Tracking** (e.g., user behavior analytics).  

**Key Features**:  
- **Persistence**: Can be session-only (deleted when the browser closes) or persistent (expires at a set time).  
- **Security**:  
  - `Secure`: Only sent over HTTPS.  
  - `HttpOnly`: Prevents client-side JavaScript access.  
  - `SameSite`: Restricts cross-site requests.  
- **Size Limit**: ~4KB per cookie.  

**Example**:  
```http  
Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Strict  
```

---

### 2. Headers
**What They Are**:  
- Metadata attached to **HTTP requests/responses**.  
- Not stored on the client by default (except for headers like `Cookie`).  

**Use Cases**:  
- **Authentication**: `Authorization: Bearer <token>`.  
- **Content Negotiation**: `Accept: application/json`.  
- **Caching**: `Cache-Control: max-age=3600`.  
- **Security**: `Content-Security-Policy: default-src 'self'`.  

**Key Features**:  
- **Stateless**: No automatic persistence (unlike cookies).  
- **Flexibility**: Can include custom headers (e.g., `X-API-Key`).  
- **Security**:  
  - Headers like `Authorization` are safer than cookies for sensitive data.  
  - Avoid exposing sensitive info in headers (e.g., `X-Secret-Key`).  

**Example**:  
```http  
GET /data HTTP/1.1  
Authorization: Bearer eyJhbGci...  
Accept: application/json  
```

---

### Comparison Table
| **Aspect**            | **Cookies**                          | **Headers**                          | **URL Parameters**                  |  
|------------------------|---------------------------------------|---------------------------------------|--------------------------------------|  
| **Storage Location**   | Client-side (browser).               | Part of HTTP requests/responses.     | Part of the URL.                    |  
| **Persistence**        | Yes (until expiration).              | No (reset per request).              | No (reset per URL).                 |  
| **Security**           | Use `Secure`, `HttpOnly`, `SameSite`.| Secure for tokens (e.g., `Authorization`). | Exposed in logs/URLs; avoid sensitive data. |  
| **Use Case**           | Sessions, personalization.           | Authentication, content negotiation. | Filtering, pagination, search.      |  
| **Size Limits**        | ~4KB per cookie.                     | Varies (no strict limit).            | ~2,000 characters (browser limits). |  

---

### Key Takeaways
1. **Cookies**:  
   - Best for **stateful interactions** (e.g., sessions).  
   - Secure with `HttpOnly` and `Secure` flags.  

2. **Headers**:  
   - Ideal for **stateless metadata** (e.g., auth tokens).  
   - Safer than cookies for sensitive data.


## Basic Authorization, OAuth, and JWTs Explained

These are three different approaches to authentication and authorization, each suited for different use cases.  

---

## 1. Basic Authorization

### What It Is:
- A simple authentication mechanism that uses a username and password sent with every request.  
- Relies on **Base64 encoding** (not encryption), making it insecure unless used with HTTPS.  

### How It Works:
1. The client sends an HTTP request with an `Authorization` header:  
   ```http
   Authorization: Basic Base64(username:password)
   ```  
2. The server decodes the Base64 string and validates the credentials.  
3. If valid, the user gains access; otherwise, authentication fails.  

### Pros & Cons:
✅ Simple and easy to implement.  
❌ Requires sending credentials with every request (high security risk if not using HTTPS).  
❌ No built-in token expiration or session management.  

### Best Use Case:
- Internal or low-security APIs where encryption (TLS) is guaranteed.  

---

## 2. OAuth (Open Authorization)

### What It Is:
- A secure, token-based authorization framework allowing users to grant limited access to their data without sharing passwords.  
- Commonly used by third-party services (e.g., logging in with Google or Facebook).  

### How It Works (OAuth 2.0 Example):
1. The user requests authorization from an OAuth provider (e.g., Google).  
2. The provider returns an **authorization code** to the client.  
3. The client exchanges this code for an **access token**.  
4. The client uses this token to access protected resources on behalf of the user.  

### Pros & Cons:
✅ More secure than Basic Auth, as credentials aren’t exposed (I don't have to store or manage them myself)
✅ Allows **scoped access** (e.g., an app can only read your profile, not edit it).  
✅ Supports third-party authentication.  
❌ More complex to implement.  
❌ Requires token refresh mechanisms.  

### Best Use Case:
- APIs that need delegated access (e.g., allowing an app to access a user’s Google Drive files).  

---

## 3. JWT (JSON Web Token)

### What It Is:
- A compact, self-contained token format used for authentication and authorization.  
- Can be signed and optionally encrypted.  

### How It Works:
1. A user logs in and receives a **JWT** from the server.  
2. The client includes this token in the `Authorization` header of each request:  
   ```http
   Authorization: Bearer <JWT>
   ```  
3. The server verifies the token’s signature and grants access.  

### JWT Structure:
A JWT consists of three parts, separated by dots (`.`):  
```
Header.Payload.Signature
```
Example:  
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIn0.s4hhP3Njlh7N5GzQl
```

### Pros & Cons:
✅ **Stateless** (no need to store sessions on the server).  
✅ **Efficient** (small, easily parsed token format).  
✅ **Secure** when used properly with signing and expiration times.  
❌ Cannot be revoked unless additional mechanisms (e.g., blacklists) are used.  
❌ If too large, it may impact request size.  

### Best Use Case:
- Stateless authentication for APIs (e.g., Single Sign-On (SSO), microservices).  

---

### Comparison Summary
| Feature        | Basic Auth | OAuth 2.0 | JWT  |
|---------------|-----------|----------|------|
| **Security**   | Low       | High     | Medium-High |
| **Stateless**  | No        | Yes      | Yes |
| **Token Expiry** | No      | Yes      | Yes |
| **Ease of Use** | Easy     | Complex  | Moderate |
| **Use Case**  | Internal APIs | Third-party access | API authentication |

Each method has its place, depending on the security needs and architecture of the system. Would you like an example implementation of one? 🚀

---

## Password-less Authentication, Multi-Factor Authentication, and Common Authentication Tools

---

### 1. Password-less Authentication

✅ **What is it? Anything that is unique to the user**  
Password-less authentication allows users to log in **without using a traditional password**. Instead, it uses **a one-time link, a verification code, biometrics, or hardware tokens** to authenticate users.  

✅ **How It Works:**  
1. **User enters their identifier** (e.g., email or phone number).  
2. **System sends a one-time code or magic link** (via email, SMS, or an authenticator app).  
3. **User verifies by clicking the link or entering the code**.  
4. **If valid, access is granted**, and an authentication token (e.g., JWT, session) is issued.  

✅ **Common Methods:**  
| Method | Example |
|--------|---------|
| **Email Magic Link** | Click a login link sent via email. |
| **One-Time Password (OTP)** | Enter a 6-digit code sent via SMS or email. |
| **Biometrics** | Fingerprint, Face ID (device-based). |
| **Hardware Tokens** | YubiKey, WebAuthn (FIDO2). |

✅ **Pros & Cons:**  
✅ No weak/stolen passwords to exploit.  
✅ Reduces phishing risks.  
✅ Better user experience (no need to remember passwords).  
❌ If an attacker intercepts OTPs (e.g., SIM swap attack), security can be compromised.  
❌ If email-based, relies on **email security**, which can also be vulnerable.  

---

### 2. Multi-Factor Authentication (MFA)

✅ **What is it?**  
Multi-Factor Authentication (MFA) **adds an extra layer of security** by requiring users to verify their identity using at least two different factors.  

✅ **How It Works:**  
1. **User enters their password (first factor)**.  
2. **System requests a second verification method** (e.g., SMS code, authenticator app, biometric scan).  
3. **User enters the second factor and gains access**.  

✅ **Types of Authentication Factors:**  
| Factor Type | Example |
|------------|---------|
| **Something You Know** | Password, PIN. |
| **Something You Have** | One-time password (OTP), Security key (YubiKey). |
| **Something You Are** | Biometric (fingerprint, Face ID). |

✅ **Example MFA Flow (SMS-Based MFA):**  
1. User logs in with **email & password**.  
2. System sends a **6-digit OTP via SMS**.  
3. User enters OTP **to complete authentication**.  

✅ **Pros & Cons:**  
✅ **Significantly improves security**—even if a password is stolen, access is still blocked.  
✅ **Commonly used in high-security apps** (banking, enterprise systems).  
❌ SMS-based MFA is vulnerable to **SIM swapping**.  
❌ Adds extra steps, which some users find inconvenient.  

🔹 **Best Practice:** Use **app-based MFA (Google Authenticator, Authy)** instead of SMS for better security.  

---

### 3. Common Authentication Tools & Libraries

| **Tool / Library** | **Use Case** | **Best For** |
|-------------------|-------------|-------------|
| **Auth0** | Managed authentication | Passwordless, OAuth, SSO, MFA |
| **Firebase Authentication** | Backend authentication | Mobile & web apps (Google, Apple, Facebook login) |
| **Okta** | Identity & access management | Enterprise-level authentication |
| **Keycloak** | Open-source identity provider | Enterprise security, SSO |
| **Passport.js** | Authentication middleware for Node.js | Local, OAuth, JWT, Google, Facebook login |
| **jsonwebtoken (JWT)** | Token-based authentication | Stateless authentication for APIs |

✅ **Which One to Use?**  
- Use **Auth0, Firebase, or Okta** if you want an **easy-to-manage** authentication solution.  
- Use **Passport.js** if building authentication **inside a Node.js app**.  
- Use **JWT (jsonwebtoken)** if you need **stateless authentication for APIs**.  
- Use **Keycloak** for **self-hosted identity and access management**.  

---

### Summary
| Feature | Key Takeaways |
|---------|--------------|
| **Passwordless Authentication** | Uses OTPs, magic links, or biometrics instead of passwords. |
| **Multi-Factor Authentication (MFA)** | Adds a second layer of security (e.g., OTP, biometric scan). |
| **Common Auth Tools** | Auth0, Firebase, Okta, Passport.js, JWT, Keycloak. |

Would you like **code examples** for implementing any of these? 🚀

## Interview Question Solutions

---

### Phone Screen 1: Describe the difference between AuthN and AuthZ

✅ **Authentication (AuthN) → "Who are you?"**  
- Authentication verifies **identity** (e.g., logging in with a username & password).  
- Example: When you enter your credentials on a website, the system checks if they match a registered user.  

✅ **Authorization (AuthZ) → "What can you do?"**  
- Authorization determines **what actions or resources** an authenticated user can access.  
- Example: After logging in, a **regular user** can view their profile, but only an **admin** can modify user roles.  

🔹 **Key Differences:**  
| Feature         | Authentication (AuthN) | Authorization (AuthZ) |
|----------------|---------------------|---------------------|
| **Purpose**     | Verifies identity   | Grants permissions |
| **Question**    | "Who are you?"       | "What can you access?" |
| **Example**     | Login with email & password | Checking if user can delete a post |
| **Techniques**  | Passwords, OAuth, JWT | Role-based access (RBAC), API permissions |

---

### Phone Screen 2: What is Stateful vs. Stateless Authentication?

Authentication can be handled in two main ways: **stateful** and **stateless**. The key difference lies in **how the server tracks user sessions** after authentication.  

---

#### 1. Stateful Authentication (Session-Based Auth)
✅ **The server stores session data** for each authenticated user.  
✅ Each user has a unique **session ID**, which is stored in **server memory or a database**.  

**How It Works:**  
1. **User Logs In** → Server verifies credentials and creates a **session ID**.  
2. **Session is Stored** → Server keeps the session data in memory or a database.  
3. **User Sends Cookie in Requests** → The browser stores a session cookie (e.g., `sessionId=abc123`).  
4. **Server Verifies the Session** → For every request, the server checks the session store to validate the user.  

**Example (Express + Session-Based Auth)**  
```javascript
const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({ secret: 'supersecret', resave: false, saveUninitialized: true }));

app.post('/login', (req, res) => {
  req.session.user = { id: 1, username: 'john' };
  res.send('Logged in');
});

app.get('/profile', (req, res) => {
  if (!req.session.user) return res.status(401).send('Unauthorized');
  res.json(req.session.user);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**Pros & Cons:**  
✅ Works well for web apps (cookies & sessions).  
✅ Can **invalidate sessions immediately** when users log out.  
❌ **Not scalable**—server must store session data.  
❌ Can lead to **session management complexity**.  

---

#### 2. Stateless Authentication (Token-Based / JWT)
✅ The server **does not store user sessions**—each request is **self-contained**.  
✅ Authentication is handled via **JWT (JSON Web Token)**.  

**How It Works:**  
1. **User Logs In** → Server generates a **JWT** and sends it to the client.  
2. **Client Stores JWT** → The client stores it in local storage or sends it in headers.  
3. **Client Sends JWT in Requests** → Each request includes:  
   ```http
   Authorization: Bearer <JWT>
   ```  
4. **Server Verifies JWT** → If valid, the request proceeds **without checking a session store**.  

**Example (Express + JWT)**  
```javascript
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET_KEY = 'supersecret';

app.use(express.json());

app.post('/login', (req, res) => {
  const user = { id: 1, username: 'john' };
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/profile', (req, res) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const user = jwt.verify(token, SECRET_KEY);
    res.json(user);
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**Pros & Cons:**  
✅ **Scalable**—no session storage required.  
✅ Works well for **APIs & microservices**.  
✅ Tokens can be **used across multiple services (SSO)**.  
❌ **Revoking a JWT is difficult** (requires blacklists or short expiration times).  
❌ If **JWT is stolen,** an attacker can use it until it expires.  

---

#### Comparison Table: Stateful vs. Stateless Authentication

| Feature              | Stateful (Session-Based) | Stateless (Token-Based JWT) |
|----------------------|------------------------|----------------------------|
| **Server Stores Session?** | ✅ Yes (In-memory or DB) | ❌ No (Client stores token) |
| **Authentication Method** | Session ID (Cookie) | JWT (Token) |
| **Scalability** | ❌ Limited (State is stored) | ✅ Highly Scalable |
| **Security** | ✅ Session can be invalidated | ❌ Token remains valid until expiry |
| **Best For** | Web apps (Traditional Login) | APIs, Microservices, Mobile Apps |

---

#### Key Takeaways
- **Stateful Authentication (Session-Based)** → Server stores sessions, uses cookies.  
- **Stateless Authentication (JWT-Based)** → No session storage, relies on tokens.  
- **Stateful = Easier to revoke access. Stateless = More scalable for APIs.**  

---

### On-Site 1: How do you typically handle authentication in Node.js? What library do you use?**  

**Handling Authentication in Node.js:**  
1. **Using Passport.js (Most Common Approach)**  
   - Passport.js is a popular middleware for authentication in Express.js apps.  
   - Supports multiple strategies (Local, OAuth, JWT).  
   - Example:
     ```javascript
     const passport = require('passport');
     const LocalStrategy = require('passport-local').Strategy;

     passport.use(new LocalStrategy(
       function(username, password, done) {
         User.findOne({ username: username }, function(err, user) {
           if (err) return done(err);
           if (!user) return done(null, false, { message: 'Incorrect username.' });
           if (!user.verifyPassword(password)) return done(null, false, { message: 'Incorrect password.' });
           return done(null, user);
         });
       }
     ));
     ```

2. **JWT-Based Authentication (Stateless, API-Friendly)**  
   - Uses **jsonwebtoken (JWT)** library.  
   - Ideal for securing REST APIs.  
   - Example:
     ```javascript
     const jwt = require('jsonwebtoken');
     const secretKey = 'yourSecretKey';

     function generateToken(user) {
       return jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
     }
     ```

3. **Session-Based Authentication (Express-Session & Cookies)**  
   - Stores session in memory or a database.  
   - Example:
     ```javascript
     const session = require('express-session');
     app.use(session({ secret: 'yourSecretKey', resave: false, saveUninitialized: true }));
     ```

**Best Library to Use?**  
- **Passport.js** → When supporting multiple auth strategies (OAuth, JWT, Local, etc.).  
- **jsonwebtoken (JWT)** → For API authentication (stateless, token-based).  
- **express-session** → For web apps that require sessions (stateful).  

---

### On-Site 2: Describe how OAuth works

✅ **OAuth (Open Authorization) → Secure, third-party authentication and authorization.**  

### How It Works (OAuth 2.0 Flow):
1. **User Requests Access** → A user clicks “Sign in with Google.”  
2. **Authorization Server Prompts for Consent** → Google asks, "Do you allow this app to access your profile?"  
3. **User Grants Access** → If the user agrees, Google redirects them back to the app with an **Authorization Code**.  
4. **App Requests Access Token** → The app exchanges the Authorization Code for an **Access Token**.  
5. **App Uses Access Token** → The app sends the token with API requests to fetch user data.  

**Example OAuth Request (Exchanging Code for Token)**
```http
POST https://oauth2.googleapis.com/token
Content-Type: application/x-www-form-urlencoded

client_id=yourClientID
&client_secret=yourClientSecret
&code=authorizationCode
&grant_type=authorization_code
&redirect_uri=yourRedirectURI
```

#### OAuth Grant Types (Different Ways OAuth Works)
| Grant Type         | Use Case |
|--------------------|---------|
| **Authorization Code** | Most secure, used for web apps (redirects user to provider). |
| **Implicit Grant** | Deprecated, used for single-page apps (no backend exchange). |
| **Client Credentials** | Used for machine-to-machine authentication (e.g., API integrations). |
| **Password Grant** | Not recommended, but allows direct exchange of username/password. |

🔹 **Key Takeaways:**  
- OAuth **allows apps to access user data without exposing passwords**.  
- The **Access Token** grants limited access to user data, reducing security risks.  
- OAuth is commonly used by Google, Facebook, GitHub for third-party authentication.  

---

### On-Site 3: How Does Password-Less Authentication Work?

**What It Is:**
Password-less authentication allows users to log in **without using a traditional password**. Instead, it relies on one-time codes, magic links, biometrics, or hardware keys.  

**How It Works:**
1. **User Enters Identifier** → Instead of a password, the user provides an identifier like an email or phone number.  
2. **System Sends a One-Time Code or Link** → The system generates a temporary, time-sensitive authentication method (e.g., an OTP or magic link).  
3. **User Verifies** → The user enters the OTP or clicks the link to confirm their identity.  
4. **System Logs the User In** → If the code or link is valid, the user gains access.  

### Common Password-Less Methods:
| Method | Example |
|--------|---------|
| **Email Magic Link** | User receives a login link via email. |
| **One-Time Password (OTP)** | A 6-digit code sent via SMS, email, or authenticator app. |
| **Biometric Authentication** | Fingerprint, Face ID (device-dependent). |
| **Hardware Tokens** | YubiKey, WebAuthn (FIDO2). |

✅ **Pros:**  
- No risk of stolen or weak passwords.  
- Reduces phishing attacks.  
- Improves user experience.  

❌ **Cons:**  
- Requires secure token transmission.  
- Risk of interception (e.g., SMS hijacking).  

---

### On-Site 4: How Does Multi-Factor Authentication (MFA) Work?

**What It Is:**
Multi-Factor Authentication (MFA) enhances security by requiring **two or more independent verification methods** before granting access.  

**How It Works:**
1. **User Provides Primary Credential** (e.g., username & password).  
2. **System Requests Secondary Factor** (e.g., a one-time code).  
3. **User Verifies Secondary Factor** → If correct, access is granted.  

### Types of Authentication Factors:
| Factor Type | Example |
|------------|---------|
| **Something You Know** | Password, PIN. |
| **Something You Have** | Phone (SMS OTP), Security Key (YubiKey). |
| **Something You Are** | Fingerprint, Face ID, Voice Recognition. |

**MFA Flow Example (SMS-Based MFA):**
1. User enters **username & password**.  
2. System sends a **6-digit OTP via SMS**.  
3. User enters OTP **to complete login**.  

✅ **Pros:**  
- Enhances security beyond passwords.  
- Mitigates brute-force and credential stuffing attacks.  

❌ **Cons:**  
- Can be inconvenient for users.  
- SMS-based MFA is vulnerable to **SIM swapping attacks**.  

**Best Practice:** Prefer **app-based MFA** (Google Authenticator, Authy) or **hardware tokens** over SMS.  

---

### On-Site 5: Draw a Design for an API That Uses Password-Less Authentication
**API Overview**
This API implements **email-based magic link authentication** for a password-less login system.  
**Endpoints:**

**1. Request Magic Link (Send Email)**
```http
POST /auth/request-magic-link
Content-Type: application/json

{
  "email": "user@example.com"
}
```
✅ System generates a **one-time, time-sensitive login token** and emails the user a magic link.  

---

**2. Verify Magic Link**
```http
GET /auth/verify-magic-link?token=abc123xyz
```
✅ If valid, system logs in the user and issues a JWT token for session management.  

---

#### API Workflow:
1. **User Requests a Magic Link** → Sends email to `/auth/request-magic-link`.  
2. **Server Generates a Secure Token** → Stores it with an expiration time (e.g., 10 minutes).  
3. **User Clicks the Link** → Redirects to `/auth/verify-magic-link?token=abc123xyz`.  
4. **Server Verifies Token** → If valid, logs in the user and issues a session token (JWT).  

---

##Backend Implementation Example (Node.js + Express + JWT)##
```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const users = {};  // Mock database
const tokens = {}; // Stores temporary magic links

const SECRET_KEY = 'supersecret';

// Email Transporter Setup (Mock)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: { user: 'your-email@gmail.com', pass: 'your-password' }
});

// Request Magic Link
app.post('/auth/request-magic-link', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const token = crypto.randomBytes(32).toString('hex');
  tokens[token] = { email, expires: Date.now() + 10 * 60 * 1000 }; // 10 min expiry

  const magicLink = `http://localhost:3000/auth/verify-magic-link?token=${token}`;
  
  transporter.sendMail({
    to: email,
    subject: 'Your Magic Login Link',
    text: `Click here to login: ${magicLink}`
  });

  res.json({ message: 'Magic link sent!' });
});

// Verify Magic Link
app.get('/auth/verify-magic-link', (req, res) => {
  const { token } = req.query;
  const data = tokens[token];

  if (!data || Date.now() > data.expires) return res.status(400).json({ error: 'Invalid or expired token' });

  const accessToken = jwt.sign({ email: data.email }, SECRET_KEY, { expiresIn: '1h' });
  delete tokens[token]; // Remove token after use

  res.json({ message: 'Logged in successfully!', accessToken });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### Summary of All Questions

| Question | Key Concept |
|----------|------------|
| **AuthN vs. AuthZ** | AuthN = Who are you? / AuthZ = What can you do? |
| **Node.js Authentication** | Use Passport.js, JWT, or Sessions for handling user authentication. |
| **Stateful Authentication (Session-Based)** | Server stores sessions, uses cookies. |
| **Stateless Auth** | Use Passport.js, JWT, or Sessions for handling user authentication. |
| **Stateless Authentication (JWT-Based)** | No session storage, relies on tokens. |
| **How OAuth Works** | Secure, delegated authentication via Access Tokens. |
| **Password-Less Authentication** | Eliminates password risks; relies on email magic links, OTPs, or biometrics. |
| **Multi-Factor Authentication (MFA)** | Strengthens security by requiring an extra verification step. |
| **API Design for Password-Less Login** | Uses magic links with JWT for session management. |  

---

# Testing APIs

## Why Test APIs? (Motivations)
Several good reasons to have tests on your mind:

- You haven’t thought of everything
- External dependencies
- Keep promises (SLAs)
- Secure your data and business
- **Proactive** vs. Responsive: Find things before our users do 
- Quick, confident releases

1. **Ensure Reliability & Stability**  
   - Detects **bugs early**, preventing failures in production.  
   - Ensures the API functions correctly across different inputs and conditions.  

2. **Prevent Regressions**  
   - Helps ensure that **new code changes** do not break existing functionality.  
   - Automated tests provide **continuous validation**.  

3. **Validate Business Logic**  
   - Ensures that API responses follow expected **business rules** (e.g., an order cannot be placed with negative pricing).  

4. **Improve Security**  
   - Helps catch **security vulnerabilities** (e.g., SQL injection, unauthorized access).  
   - Ensures **proper authentication and authorization** (AuthN & AuthZ).  

5. **Optimize Performance**  
   - Identifies **slow endpoints** and potential **bottlenecks**.  
   - Ensures the API can handle **high traffic loads**.  

6. **Improve Documentation & Maintainability**  
   - Well-tested APIs help **document expected behavior** for developers.  
   - Tests act as **living documentation**, making it easier for teams to maintain the API.  

---

### What Do We Test in APIs?

| **Category** | **What to Test** | **Example** |
|-------------|----------------|------------|
| **Functional Testing** | Verify API behavior & responses | Sending a `POST /users` request should create a new user. |
| **Validation Testing** | Ensure correct input handling | A `POST /users` request with a missing email should return `400 Bad Request`. |
| **Authentication & Authorization** | Ensure security rules are enforced | An unauthenticated user should not access `GET /admin/dashboard`. |
| **Error Handling** | Validate error messages & status codes | A request to `GET /users/9999` should return `404 Not Found`. |
| **Performance Testing** | Measure response times & scalability | The API should handle 1000+ requests per second. |
| **Load Testing** | Simulate heavy traffic to test stability | API should not crash under peak load. |
| **Security Testing** | Identify vulnerabilities | API should reject SQL injection attempts. |

---

### Example API Test (Using Jest + Supertest for Node.js)

**Install Dependencies**
```bash
npm install jest supertest express
```

**Test Examples**
```javascript
const request = require('supertest');
const app = require('../server'); // Import your API

describe('User API Tests', () => {
  test('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  test('should return 400 for missing email', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Email is required');
  });
});
```

✅ **This ensures:**  
- API **creates users correctly**.  
- API **handles errors properly** when missing required fields.  

---

## Unit Testing vs. Integration Testing vs. Functional Testing in APIs

When testing APIs, **Unit Testing, Integration Testing, and Functional Testing** serve different purposes. Here’s how they compare and when to use them:  

---

### 1. Unit Testing (Testing Individual Components in Isolation)

✅ **What It Tests:**  
- Ensures that **a single function, method, or class works correctly**.  
- Tests **small, isolated** pieces of logic **without dependencies** (e.g., no database, no external services).  

✅ **Example:**  
Testing a **utility function** that formats dates in a Node.js API:  

```javascript
// dateUtils.js (Function to Test)
function formatDate(date) {
  return new Date(date).toISOString().split('T')[0]; // Returns YYYY-MM-DD
}

module.exports = formatDate;
```

**Unit Test (Jest Example)**
```javascript
const formatDate = require('../utils/dateUtils');

test('should format date correctly', () => {
  expect(formatDate('2025-03-25')).toBe('2025-03-25');
});
```

✅ **Best Practices for Unit Testing:**  
- **Mock dependencies** (e.g., databases, APIs).  
- Write **small, fast tests** with **clear assertions**.  
- Use **test-driven development (TDD)** for API logic.  

✅ **Tools:**  
- **Jest** (Node.js), **JUnit** (Java), **PyTest** (Python)  

✅ **When to Use It:**  
- Testing **pure functions, validation logic, helper utilities**.  
- Ensuring **edge cases** (e.g., handling `null` values, incorrect inputs).  

---

### 2. Integration Testing (Testing Multiple Components Together)

✅ **What It Tests:**  
- Ensures that **different parts of the system work together** (e.g., API + database).  
- Verifies **correct interactions** between controllers, services, and databases.  

✅ **Example:**  
Testing an API **that interacts with a database**.  

#### Express API Route (To Be Teste
```javascript
const express = require('express');
const db = require('./database'); // Simulated database
const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const user = await db.createUser({ name, email });
  res.status(201).json(user);
});

module.exports = app;
```

**Integration Test (Supertest + Jest)**
```javascript
const request = require('supertest');
const app = require('../app');
const db = require('../database');

// Mock database interactions
jest.mock('../database', () => ({
  createUser: jest.fn().mockResolvedValue({ id: 1, name: 'John Doe', email: 'john@example.com' })
}));

test('should create a new user', async () => {
  const response = await request(app)
    .post('/users')
    .send({ name: 'John Doe', email: 'john@example.com' });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('id');
  expect(db.createUser).toHaveBeenCalled(); // Ensures DB interaction occurred
});
```

✅ **Best Practices for Integration Testing:**  
- Use **mock databases** (e.g., SQLite in-memory, MongoDB in-memory).  
- Verify **API calls, database queries, and response correctness**.  
- Run tests **in a controlled environment** (e.g., Docker containers).  

✅ **Tools:**  
- **Supertest (Node.js)**, **RestAssured (Java)**, **PyTest (Python)**  

✅ **When to Use It:**  
- Verifying **database queries** and **service-to-service communication**.  
- Testing **middleware, authentication, API routes**.  

---

### 3. Functional Testing (End-to-End API Testing)

✅ **What It Tests:**  
- Ensures that the **API behaves as expected from a user perspective**.  
- Covers **endpoints, request/response handling, and business logic**.  

✅ **Example:**  
Testing if a **user authentication flow works correctly**.  

#### Functional Test (Postman / Jest + Supertest)
```javascript
test('should return 401 for unauthorized user', async () => {
  const response = await request(app).get('/profile');
  expect(response.status).toBe(401);
});
```

✅ **Best Practices for Functional Testing:**  
- **Test real-world scenarios** (e.g., login, purchase flow, checkout process).  
- Ensure **correct status codes and response formats**.  
- Use **API mocks or staging environments** when needed.  

✅ **Tools:**  
- **Postman, Newman (CLI for Postman), Cypress, Selenium (for UI + API)**  

✅ **When to Use It:**  
- Testing **business logic and API workflows**.  
- Ensuring API responses **match expectations for real users**.  

---

## Comparison Table: Unit vs. Integration vs. Functional Testing

| **Test Type** | **What It Tests** | **Example Tools** | **Scope** | **Use Case** |
|--------------|------------------|----------------|---------|-----------|
| **Unit Testing** | Individual functions, methods | Jest, Mocha, JUnit | Small | Pure functions, utilities, validation logic |
| **Integration Testing** | Interaction between modules (API ↔ DB) | Supertest, PyTest, RestAssured | Medium | API calls, database queries, authentication |
| **Functional Testing** | Entire API behavior | Postman, Cypress, Newman | Large | User authentication, business logic validation |

---

**Final Takeaways**
- **Unit Tests** → Isolate & test **individual functions** for correctness.  
- **Integration Tests** → Verify **API interactions with databases & services**.  
- **Functional Tests** → Ensure the **API behaves correctly for end users**.  

Would you like **real-world CI/CD integration examples** for running these tests? 🚀

### Summary

| **Motivation for API Testing** | **What We Test** |
|--------------------------------|------------------|
| Ensure reliability & prevent regressions | Functional behavior |
| Improve security & performance | Authentication & error handling |
| Validate business logic | Performance & load testing |

--

## Load Testing, Reliability Testing, and Security Testing in APIs  

Each of these testing types helps ensure an API performs well under stress, remains stable over time, and is protected against security threats.  

---

### 1. Load Testing (Performance Under Heavy Traffic)  

✅ **What It Tests:**  
- Determines how an API **handles high traffic volumes**.  
- Identifies **bottlenecks** and **performance limits** (e.g., max concurrent users).  

✅ **How It Works:**  
1. Simulate **multiple users** making concurrent API requests.  
2. Measure **response times, error rates, and throughput**.  
3. Identify **at what point the system slows down or crashes**.  

✅ **Example Load Test (Using k6)**  
**Install k6:**  
```bash
brew install k6  # macOS
choco install k6  # Windows
```

**Run Load Test (100 Users for 30 Seconds)**  
```javascript
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 100, // Virtual users
  duration: '30s', // Test duration
};

export default function () {
  let res = http.get('https://api.example.com/products');
  check(res, { 'status was 200': (r) => r.status === 200 });
}
```

✅ **Best Practices for Load Testing:**  
- Define **acceptable response times** (e.g., API should respond < 200ms).  
- Simulate **different types of loads** (gradual increase, sudden spikes).  
- Test **in a staging environment** to avoid affecting production.  

✅ **Tools:**  
- **k6, Apache JMeter, Gatling, Locust**  

✅ **When to Use It:**  
- Before a **major release** to check if the API can handle expected traffic.  
- For **high-traffic APIs** (e.g., e-commerce, ticketing systems).  

---

### 2. Reliability Testing (Ensuring API Stability Over Time)

✅ **What It Tests:**  
- Verifies that an API **remains stable over an extended period**.  
- Identifies **memory leaks, crashes, and unexpected failures**.  

✅ **How It Works:**  
1. Run API requests **continuously for hours or days**.  
2. Monitor **memory consumption, CPU usage, and error rates**.  
3. Ensure the system **recovers gracefully** from failures.  

✅ **Example Reliability Test (Using Locust)**  
Locust is a Python-based load-testing tool that can simulate **continuous API requests**.  

**Install Locust:**  
```bash
pip install locust
```

**Run a Long-Term API Test (Simulating 50 Users for 1 Hour)**  
```python
from locust import HttpUser, task

class ReliabilityTest(HttpUser):
    @task
    def test_api(self):
        self.client.get("/health-check")

# Run with: locust -f reliability_test.py --run-time 1h
```

✅ **Best Practices for Reliability Testing:**  
- Simulate **real-world traffic patterns** (not just constant requests).  
- Use **chaos engineering** (e.g., randomly kill API instances to test recovery).  
- Track **API uptime** using monitoring tools (Datadog, Prometheus).  

✅ **Tools:**  
- **Locust, Chaos Monkey (Netflix), Prometheus (Monitoring), Datadog**  

✅ **When to Use It:**  
- Before launching **mission-critical APIs**.  
- For **APIs that need 24/7 uptime** (banking, healthcare, etc.).  

---

### 3. Security Testing (Identifying Vulnerabilities & Protecting API Data)

✅ **What It Tests:**  
- Detects **security flaws** (e.g., SQL injection, broken authentication).  
- Ensures **data protection** (encryption, authorization checks).  

✅ **Common API Security Issues:**  
| Issue | Description | Example |
|-------|------------|---------|
| **Broken Authentication** | Weak or missing login protections | Login without rate limiting |
| **SQL Injection** | Malicious input manipulates DB queries | `GET /users?id=1 OR 1=1` |
| **Insecure Data Storage** | Sensitive data is exposed | API returns passwords in plaintext |
| **Improper Authorization** | Unauthorized users access restricted data | User A can view User B’s orders |

✅ **How to Test API Security?**  

1. **Use OWASP ZAP for Automated Scanning**  
```bash
zap-baseline.py -t https://api.example.com
```

2. **Manually Test for SQL Injection (Example in Postman)**  
Send this request:  
```http
GET /users?id=1' OR '1'='1
```
If the API **returns all users**, it’s vulnerable!  

3. **Check for Unprotected Endpoints**  
- Try accessing **admin-only routes** as a regular user.  
- Ensure **API tokens (JWTs, API keys) are required** for sensitive actions.  

✅ **Best Practices for Security Testing:**  
- **Use rate limiting** to prevent brute-force attacks.  
- **Encrypt sensitive data** (passwords, tokens).  
- **Scan dependencies** for vulnerabilities (`npm audit`, `snyk`).  

✅ **Tools:**  
- **OWASP ZAP, Burp Suite, Postman Security Checks, Snyk**  

✅ **When to Use It:**  
- Before an API **goes live** to ensure security best practices are followed.  
- Regularly in **CI/CD pipelines** to catch new security risks.  

---

### Comparison Table: Load Testing vs. Reliability Testing vs. Security Testing**  

| **Test Type** | **What It Checks** | **Best Tools** | **When to Use** |
|--------------|-----------------|------------|-------------|
| **Load Testing** | Handles **high traffic loads** | k6, JMeter, Gatling | Before a launch or major traffic spike |
| **Reliability Testing** | Ensures **API uptime over time** | Locust, Chaos Monkey | Mission-critical systems |
| **Security Testing** | Identifies **vulnerabilities** | OWASP ZAP, Burp Suite | Before going live & in CI/CD |

---

### Final Takeaways 
✅ **Load Testing** → Simulates **high traffic loads** to check API performance.  
✅ **Reliability Testing** → Ensures **long-term stability** (memory leaks, crash handling).  
✅ **Security Testing** → Identifies **vulnerabilities** (SQL injection, broken authentication).  

Would you like **an automated CI/CD pipeline** that includes all three types of testing? 🚀

### Purpose of Mocks in API Testing

In API testing, **mocks** (or mock APIs) are simulated versions of real APIs that emulate their behavior, allowing developers and testers to interact with them as if they were the actual services. Here's a detailed breakdown:

1. **Isolate Components**: Test specific parts of an application (e.g., frontend) without relying on backend APIs or external services.
2. **Parallel Development**: Enable teams to work independently (e.g., frontend and backend teams) by simulating unimplemented APIs.
3. **Scenario Simulation**: Mimic edge cases (errors, timeouts, rate limits) or specific responses (success, failure) to validate application behavior.
4. **Reduce Dependencies**: Avoid flaky tests caused by unstable third-party APIs or environments.
5. **Cost/Resource Savings**: Prevent hitting paid

**What do we mock?**
- Functions 
- Data 
- Dependencies

---

## Phone Screen Software Engineering Questions & Answers**  

---

### 1. What framework(s) do you use when testing?

✅ **Popular Testing Frameworks & When to Use Them:**  

| Framework | Best For | Language |
|-----------|---------|----------|
| **Jest** | Unit & integration testing, snapshot testing | JavaScript (Node.js, React) |
| **Mocha + Chai** | Flexible test runner with an assertion library | JavaScript (Node.js) |
| **Jasmine** | BDD-style testing | JavaScript |
| **JUnit** | Unit testing for backend logic | Java (Spring Boot) |
| **PyTest** | Simple and powerful test automation | Python |
| **RSpec** | BDD for Ruby | Ruby |

✅ **Which One to Use?**  
- **Jest** → Best for **Node.js & React projects** (built-in assertions, easy setup).  
- **Mocha + Chai** → Good for flexible testing setups with custom assertions.  
- **JUnit** → Best for **Java apps** (Spring Boot, Android).  
- **PyTest** → Ideal for **Python projects** (easy test discovery).  

---

### 2. Briefly explain what is code coverage.

✅ **What It Is:**  
Code coverage measures **how much of your code is executed** by tests. It helps identify **uncovered code paths**, ensuring better reliability.  

✅ **Common Coverage Metrics:**  
| Metric | Meaning |
|--------|---------|
| **Function Coverage** | % of functions tested |
| **Statement Coverage** | % of statements executed |
| **Branch Coverage** | % of control flow branches tested (`if`/`else`) |
| **Line Coverage** | % of total lines executed |

✅ **Example: Code Coverage in Jest**  
Run tests with coverage report:  
```bash
jest --coverage
```
Example Output:  
```
----------------|----------|----------|----------|
File            | % Stmts  | % Branch | % Funcs |
----------------|----------|----------|----------|
app.js         | 100%     | 100%     | 100%    |
utils.js       | 80%      | 60%      | 70%     |
----------------|----------|----------|----------|
```
✅ **Best Practice:** Aim for **80%+ coverage**, but focus on **critical paths, not 100%**.  

---

### 3. What is an assertion library?

✅ **What It Is:**  
An assertion library provides **functions to compare expected vs actual values** in tests.  

✅ **Example Assertion in Jest:**  
```javascript
test('sum function should add two numbers', () => {
  expect(sum(2, 3)).toBe(5); // Assertion
});
```

✅ **Popular Assertion Libraries:**  
| Library | Works With | Example Assertion |
|---------|------------|-------------------|
| **Chai** | Mocha | `expect(value).to.equal(5);` |
| **Jest (built-in)** | Jest | `expect(value).toBe(5);` |
| **Assert (Node.js)** | Node.js | `assert.strictEqual(value, 5);` |

✅ **Best Practice:**  
Use **descriptive assertions** (e.g., `expect(user.name).toEqual('Alice')`) to improve test clarity.  

---

## Summary of All Questions

| Question | Key Takeaways |
|----------|--------------|
| **Testing Frameworks** | Jest (JS), Mocha+Chai (Node), JUnit (Java), PyTest (Python). |
| **Code Coverage** | Measures % of tested code (statements, branches, functions). |
| **Assertion Library** | Provides functions to compare expected vs actual values (e.g., Jest, Chai). |

---

## On-Site Software Engineering Questions & Answers

---

### 1. In Unit Testing, What Are Some Quantitative Metrics for Testing a Codebase?

✅ **Quantitative Metrics for Testing:**  

| Metric | Definition | Why It Matters |
|--------|-----------|---------------|
| **Code Coverage** | % of code executed by tests (statements, branches, functions). | Higher coverage means fewer untested code paths. |
| **Test Pass Rate** | % of test cases that pass. | Ensures reliability and catches regressions. |
| **Mutation Score** | Measures how well tests detect code changes. | Higher scores mean more effective tests. |
| **Cyclomatic Complexity** | Number of independent paths in the code. | Lower complexity improves maintainability and testability. |
| **Time to Run Tests** | Measures execution time of test suites. | Faster tests mean quicker feedback loops. |

✅ **Best Practice:** Aim for **80%+ code coverage** but focus on **testing critical paths rather than achieving 100% coverage**.  

---

### 2. How Would You Find a Memory Leak?

✅ **What is a Memory Leak?**  
A memory leak occurs when memory is allocated but never released, leading to increasing resource consumption and potential crashes.  

✅ **Steps to Detect Memory Leaks:**  

1. **Monitor Memory Usage Over Time**  
   - Use **`top` or `htop` (Linux)** to check memory consumption.  
   - In **Node.js**, use `process.memoryUsage()`.  

2. **Use Profiling Tools**  
   - **Chrome DevTools Memory Tab** (for web apps).  
   - **Node.js: `--inspect` + Chrome DevTools** (`node --inspect index.js`).  
   - **Valgrind** (for C/C++ apps).  

3. **Heap Snapshot Analysis**  
   - Take **heap dumps** and compare snapshots to see objects growing over time.  
   - Use `pprof` for Go applications.  

4. **Use Garbage Collection Logs**  
   - In Node.js, enable GC tracking:  
     ```bash
     node --expose-gc app.js
     ```  
   - In Java, use JVM flags:  
     ```bash
     java -XX:+UseG1GC -XX:+PrintGCDetails -jar myapp.jar
     ```

5. **Check for Unreleased References**  
   - Watch for **global variables**, **event listeners not removed**, and **circular references**.  

✅ **Best Practice:**  
- Use **WeakMaps** for caching.  
- Always clean up event listeners (`removeEventListener`).  
- Run **automated performance tests** to catch leaks before deployment.  

---

### 3. Explain the Steps in Continuous Integration (CI).

✅ **What is CI?**  
Continuous Integration (CI) automates the process of **building, testing, and validating code changes** before merging into production.  

✅ **Steps in a CI Pipeline:**  

1. **Code Commit**  
   - Developers push code to a version control system (GitHub, GitLab, Bitbucket).  

2. **Automated Build**  
   - A CI/CD tool (Jenkins, GitHub Actions, GitLab CI) triggers a build.  

3. **Run Unit Tests & Code Analysis**  
   - Executes unit tests (e.g., Jest, JUnit, PyTest).  
   - Runs static analysis (e.g., ESLint, SonarQube).  

4. **Integration & Functional (E2E) Tests**  
   - API tests using Postman or Cypress.  
   - UI tests using Selenium.  

5. **Security & Vulnerability Scans**  
   - Dependency checks using tools like **Snyk** or **OWASP Dependency Check**.  

6. **Generate Artifacts (Optional)**  
   - Creates **build artifacts** (JAR files, Docker images) for later deployment.  

7. **Deploy to Staging (Optional)**  
   - If all tests pass, the code is **automatically deployed to a staging environment**.  

✅ **Best Practice:**  
- Use **feature flags** to test new functionality before full rollout.  
- Automate rollback strategies if a build fails.  
- Ensure CI runs in **parallel** for faster execution.  

---


## Summary of All Questions & Answers

| Question | Key Takeaways |
|----------|--------------|
| **Quantitative Metrics for Testing** | Code coverage, mutation score, test pass rate, complexity. |
| **Finding Memory Leaks** | Use profiling tools (Chrome DevTools, Node.js `--inspect`), heap snapshots, and GC monitoring. |
| **Steps in CI** | Code commit → Automated build → Run tests → Security scans → Deploy. |

## On-Site Software Engineering Questions & Answers

### Phone Screen 1. What is Dependency Injection?
**Dependency Injection (DI)** is a design pattern where an object receives its dependencies (e.g., services, components) from an external source rather than creating them internally. This promotes loose coupling, testability, and maintainability.  

#### Key Points:  
- **Decoupling**: Components rely on abstractions (interfaces) rather than concrete implementations.  
- **External Management**: Dependencies are "injected" via constructors, setters, or method parameters.  
- **Benefits**:  
  - Easier unit testing (e.g., injecting mock dependencies).  
  - Reusable, modular code.  
  - Centralized control over dependency lifetimes (e.g., singletons).  

**Example**:  
```java  
// Without DI  
class UserService {  
    private UserRepository userRepo = new UserRepository(); // Tight coupling  
}  

// With DI  
class UserService {  
    private UserRepository userRepo;  
    public UserService(UserRepository userRepo) { // Dependency injected  
        this.userRepo = userRepo;  
    }  
}  
```  

---

### Phone Screen 2: What Are Pretenders in Tests?
"Pretenders" (often called **test doubles**) are simulated objects used in testing to mimic the behavior of real dependencies. They isolate the system under test (SUT) from external systems or complex logic.  

#### Types of Test Doubles:  
- **Mocks**: Preprogrammed to verify interactions (e.g., ensuring a method was called).  
- **Stubs**: Provide predefined responses to method calls.  
- **Fakes**: Simplified, in-memory implementations (e.g., a fake database).  
- **Spies**: Record interactions for later inspection (e.g., tracking method calls).  

**Example**:  
```javascript  
// Using a mock for a payment gateway in a test  
const mockPaymentGateway = {  
  charge: jest.fn(() => Promise.resolve({ success: true })) // Mock function  
};  

test("processPayment calls charge method", async () => {  
  await processPayment(mockPaymentGateway, 100);  
  expect(mockPaymentGateway.charge).toHaveBeenCalledWith(100);  
});  
```  

---

### On Site 1: Inversion of Control (IoC) and Decoupling
**Inversion of Control (IoC)** is a principle where control over object creation and flow is delegated to a framework or container, rather than being managed by the components themselves. Dependency Injection is a common implementation of IoC.  

#### Relationship to Decoupling:  
- **Decentralized Control**: Components don’t instantiate dependencies directly. Instead, an IoC container (e.g., Spring, .NET Core DI) manages their lifecycle.  
- **Abstraction Over Concretion**: Dependencies are defined via interfaces, allowing interchangeable implementations.  
- **Layered Systems**: Layers (e.g., UI, Business Logic, Data Access) interact through abstractions, reducing tight coupling.  

**Example**:  
```csharp  
// IoC Container Setup (e.g., in .NET Core)  
services.AddScoped<IUserRepository, UserRepository>(); // Interface mapped to concrete class  

// Class uses injected interface  
class UserController {  
    private IUserRepository _userRepo;  
    public UserController(IUserRepository userRepo) { // IoC provides implementation  
        _userRepo = userRepo;  
    }  
}  
```  

**Benefits of IoC for Decoupling:**
- **Flexibility**: Swap implementations (e.g., mock vs. real database) without code changes.  
- **Testability**: Inject test doubles for isolated unit tests.  
- **Maintainability**: Changes to one component don’t ripple through the system.  

---

### Summary
- **Dependency Injection**: Delegates dependency management externally to reduce coupling.  
- **Pretenders (Test Doubles)**: Simulate dependencies to isolate tests.  
- **Inversion of Control**: Centralizes control to enable modular, decoupled architectures.  

## Access Control Models: Overview and Use Cases

1. **Access Control List (ACL)**  
   - **What it is**: A list of permissions attached to a resource (e.g., files, network resources) that specifies which users or groups can perform actions (read, write, execute).  
   - **When to use**:  
     - **Small-scale systems** with straightforward permissions (e.g., personal projects, small teams).  
     - **Static environments** where access rules rarely change.  
     - **Resource-specific control** (e.g., securing individual files or directories).  
   - **Example**: A blog where only the owner (user "Admin") can edit posts, and others can only read them.  

2. **Role-Based Access Control (RBAC)**  
   - **What it is**: Permissions are assigned to roles (e.g., "Admin," "Teacher," "Student"), and users inherit permissions by being assigned roles.  
   - **When to use**:  
     - **Organizations with defined roles** (e.g., corporate teams, schools).  
     - **Scalable systems** where user roles align with job functions.  
     - **Reducing administrative overhead** (e.g., updating permissions for all "Managers" at once).  
   - **Example**: A school platform where "Teachers" can create assignments, and "Students" can only submit work.  

3. **Attribute-Based Access Control (ABAC)**  
   - **What it is**: Access is granted based on dynamic attributes (user, resource, environment) evaluated against policies (e.g., "Allow access if user.department = Finance AND time = 9 AM–5 PM").  
   - **When to use**:  
     - **Complex scenarios** requiring multi-factor conditions (e.g., healthcare, finance).  
     - **Dynamic environments** where access depends on context (e.g., location, time).  
     - **Fine-grained control** (e.g., "Only project members can edit documents tagged as 'Confidential'").  
   - **Example**: A hospital system where doctors access patient records only during their shifts and for their assigned patients.  

---

**Comparison Table**  
| **Model** | **Complexity** | **Scalability** | **Flexibility** | **Best For** |  
|-----------|----------------|-----------------|-----------------|--------------|  
| **ACL**   | Low            | Limited         | Low             | Small, static systems |  
| **RBAC**  | Moderate       | High            | Moderate        | Role-driven organizations |  
| **ABAC**  | High           | High            | High            | Dynamic, context-aware environments |  

---

**Key Takeaway**:  
- Use **ACL** for simple, direct resource-user mappings.  
- Use **RBAC** for structured environments with clear role hierarchies.  
- Use **ABAC** for complex, adaptive policies requiring multiple attributes.  

