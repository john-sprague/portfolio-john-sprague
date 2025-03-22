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

**Large number of arguments**
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

## Call Public API

## Simple API system Architecture

