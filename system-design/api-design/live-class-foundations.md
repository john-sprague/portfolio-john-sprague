# IK - API Design Foundations

## Robert Kreznarich  
[LinkedIn Profile](http://linkedin.com/in/robertkreznarich)

---

## Agenda
- Some API Design (a little bit of theory)
- Case Study (Mock Interview where we design a RESTful API)
- Take a look at some special cases you may be asked at an interview
- Review of interviewing techniques

---

## Possible Technologies for APIs

### External vs. Internal APIs
- **External APIs**: Used for public communications (e.g., RESTful, GraphQL)
- **Internal APIs**: Used for internal and intersystem communications (e.g., gRPC, SOAP, Thrift, Java RMI)
- Both can be considered APIs (Application Programming Interfaces), though "API" commonly refers to external communication.

**Best Practices & Key Takeaways:**
- Choose the right API type based on performance and security needs.
- REST is commonly used for external, public-facing APIs, whereas gRPC is preferred for high-performance internal communication.
- GraphQL offers flexibility in queries but can add complexity in caching and rate limiting.

---

### APIs for Internal System Communication
- **RPC-like protocols**:
  - gRPC (Higher performance, more control, state management)
  - Thrift (META)
  - RMI (Java)
- **SOAP**: Legacy system support, supports transactions.
- **CORBA & DCOM**: Older interoperability technologies from the '90s.
- **When to use what?**
  - Use REST if internal teams need loosely coupled systems.
  - Use RPC-type APIs for higher performance or security concerns.

**Best Practices & Key Takeaways:**
- Understand the strengths and weaknesses of each protocol.
- Choose RPC-based APIs for high-throughput, low-latency communication within internal systems.
- For inter-team APIs, REST might be a better fit for scalability and maintainability.

---

## REST Architectural Style
- REST is more than just an API over HTTP.
- JSON-RPC & XML-RPC are specifications for REST.

### Six Key Constraints for RESTful APIs (by Dr. Fielding)
1. **Client-Server**
   - Client and server are decoupled.
   - The server does not need to know anything about the client.
2. **Uniform Interface**
   - Methods, Path params, Body limits, Status Codes.
   - HATEOAS (Hypermedia As The Engine Of Application State).
3. **Stateless**
   - Each request is independent and does not rely on the previous state.
   - No server sessions, but tokens (e.g., JWT) can be used.
4. **Layered System**
   - Can introduce load balancers, security layers, and caching layers.
5. **Cacheability**
   - Use HTTP caching to reduce unnecessary load on the system.
6. **Code on Demand (Optional)**
   - Servers can send executable code to clients.

**Best Practices & Key Takeaways:**
- Follow REST constraints to ensure scalability and interoperability.
- Stateless design improves system resilience and reliability.
- Leverage HTTP caching for better performance.
- Maintain a uniform interface to make APIs predictable and easier to use.

---

## Development Process (In the context of system design)
- Define actions: e.g., "As a patient, I want to make appointments."
- Identify integrating services (e.g., payment, authentication, external APIs).
- API documentation should include:
  - Getting started guide
  - Paths, parameters, error handling, versioning, rate limits, formatting, etc.
- Maintainability: Versioning, backward compatibility, data model adjustments.
- Access Control: Authentication and Authorization.

**Best Practices & Key Takeaways:**
- Think in terms of user stories when defining API requirements.
- Clearly document API endpoints and expected behaviors.
- Consider versioning early to ensure smooth future updates.
- Plan for scalability and maintainability when defining API contracts.

### Spec-Driven Development
- OpenAPI (Swagger) enables standardized API specifications.
- RESTful API Modeling Language (RAML) can also be used.
- Encourages Test-Driven Development (TDD).

**Best Practices & Key Takeaways:**
- Define API contracts first before implementation.
- Use API specifications to align frontend and backend development.
- Leverage spec-driven development to improve testing and maintainability.

---

## Common API Design Tradeoffs
- **Number of requests vs. API payload size** (GraphQL aims to address this).
- **Expected API style vs. best fit for requirements** (Should we strictly follow REST, or deviate?).
- **Directionality of relationships** (Object model design choices).
- **Is there only one way to do something, or multiple valid options?**

---

## Versioning

- Changing entities or attributes on a JSON model object requires a new
version to the API.

**How do you represent a new version of an API?** 
- Option 1 : https://myserver.com/books
- Option 2: https://v2.myserver.com/books
- Option 3: https://myserver.com/v2/books
- Use a version in the request header : accept application /
vnd.bookshop.v2+json

---

## Case Study - Online Shop

### Requirements
- Search for books by author, genre, price, ISBN, title, language, publisher.
- Categories: Fiction, Non-fiction, Science, etc.
- Offline reading support.
- Shopping cart functionalities.
- Order review & payment processing.
- Book reviews & recommendations.
- Discount & promotion codes.
- Consideration: APIs for shop owners, authentication, and reading features (e.g., bookmarks).

### Non-Functional Requirements
- Pagination for large responses.
- Caching strategies.
- Handling hot spots (highly in-demand books).
- Data compression for large responses.
- Response time optimization.
- CDN integration.
- Define the **Minimum Viable Product (MVP)** to avoid overcomplicating.

### Resources (Business Entities)
- Books, Users, Shopping Cart, Admins, Payments, Categories, Authors.
- Should "Search for Books" be stored as a resource? (Advanced technique for interviews).
- Define JSON representation for requests.
- Decide which entities should support pagination.
- Naming conventions: Pluralized nouns unless a strong reason exists.

---

## System Design Techniques
- Interview prep should include SQL, NoSQL, ACID vs. CAP principles.
- Understand different database models (Document, Columnar, GraphDB, etc.).
- Data modeling techniques (Entity relationships, Primary & Foreign keys).
- Indexing strategies (Clustered vs. Non-clustered, cost of indexing).
- Search optimization (RDBMS vs. NoSQL, avoiding nested joins, Elasticsearch).
- Data caching strategies (Eviction policies, Write-Through patterns).

### APIs
- Public vs. Internal APIs.
- API Gateway for request routing, load balancing, authentication.
- RESTful APIs vs. gRPC (binary streams).
- Monolithic vs. Microservices (trade-offs and when to use which).
- API Versioning (Backward compatibility, introducing new features).
- Proper documentation (Swagger, OpenAPI).

### Synchronous vs. Asynchronous APIs
- Blocking calls vs. Event-driven messaging (Kafka, RabbitMQ).
- Circuit breakers for fault tolerance.
- Benefits of loosely coupled systems.

### Scaling Strategies
- Vertical scaling (improving a single machine) vs. Horizontal scaling (adding more machines).
- Concurrency strategies (Optimistic vs. Pessimistic locking).
- Authentication (JWT, OAuth, API keys).
- Replication & Load Balancing.
- Logging, KPIs, Performance monitoring.
- Cloud vs. On-Premises considerations.
- CI/CD pipelines and deployment strategies.

**Best Practices & Key Takeaways:**
- Scale horizontally for resilience and fault tolerance.
- Use caching and load balancing to distribute traffic efficiently.
- Secure APIs using authentication and authorization mechanisms.

---

## Weather App Case Study
### **Weather Data API and Backup**
- Ability to retrieve **current, historical, and forecasted weather data**.
- Must integrate with multiple weather data providers.
- API must be scalable and available worldwide.

### **Clarifying Questions**
1. **Is it worldwide?**
   - Yes.
2. **Scale considerations?**
   - How many requests per second?
   - Expected data storage requirements?
   - How frequently is weather data updated?

### **Functional Requirements & Use Cases**
- As a user:
  - Retrieve historical weather data by location & date.
  - Query weather attributes (temperature, humidity, UV index, etc.).
- API versioning considerations:
  - How to handle data model changes in future versions?
  - Strategies for partitioning data between versions.

**Best Practices & Key Takeaways:**
- Define clear use cases and user stories before API design.
- Consider failover mechanisms for high availability.
- Implement caching for efficiency.

---

## Summary
- Understand **API design trade-offs**.
- REST architectural **constraints and best practices**.
- **Case studies** help prepare for real-world interviews.
- **Scalability, caching, and security** are key considerations in API design.