# Databases 

## Types of Databases 

**Interview Question** 

Imagine a user auth service which validates a username/password combination with a hashed value in the database. **What kind of database would you expect to use for persistence and why?**

For a **user authentication service**, a **relational (SQL) database** is typically the best choice due to the following reasons:  

**Solution:** **Best Choice: Relational Database (SQL) – PostgreSQL, MySQL, or MariaDB**  
1. **Strong Data Integrity & Consistency (ACID Compliance)**  
   - Ensures user credentials and authentication records remain consistent and secure.  
   - Prevents issues like duplicate users, race conditions, or partial updates.  

2. **Indexing & Query Optimization**  
   - Fast lookups of usernames using **indexed searches** (e.g., `WHERE username = ?`).  
   - Password hashes are small, so storing and retrieving them is very efficient.  

3. **Support for Transactions**  
   - Ensures operations like account creation or password resets either fully complete or fail safely.  

4. **Security & Compliance**  
   - SQL databases offer **role-based access control (RBAC)** and built-in security features.  
   - Easier to meet security standards like **SOC 2, GDPR, and HIPAA**.  

### **Alternatives & When to Use Them**  
- **Key-Value Store (e.g., Redis, DynamoDB)**  
  - 🔹 **Use Case:** When speed is critical (e.g., session caching, rate limiting).  
  - 🔹 **Drawback:** Not as strong in data integrity (eventual consistency).  

- **NoSQL Document Store (e.g., MongoDB)**  
  - 🔹 **Use Case:** If authentication data includes complex, evolving user metadata.  
  - 🔹 **Drawback:** Weaker relational integrity for user-based transactions.  

### **Final Recommendation**  
✅ **Use PostgreSQL or MySQL** for secure, structured authentication data.  
✅ **Use Redis (key-value) as a cache** for short-term session storage or rate-limiting.  

**Relational vs. NoSQL Databases: Key Takeaways**  

| Feature               | Relational (SQL) Databases | NoSQL Databases |
|----------------------|------------------------|----------------|
| **Structure**       | Table-based (rows & columns) | Flexible (documents, key-value, graph, wide-column) |
| **Schema**         | Strict, predefined schema | Dynamic schema (schema-less or flexible) |
| **Scalability**    | Vertical (scale up: bigger servers) | Horizontal (scale out: more servers) |
| **Transactions**   | ACID-compliant (strong consistency) | BASE model (eventual consistency) |
| **Best For**       | Structured, relational data | Unstructured, semi-structured, high-scale data |
| **Examples**       | MySQL, PostgreSQL, SQL Server | MongoDB, Cassandra, Redis, DynamoDB |

### **When to Use Each**  

- **Relational Databases (SQL)**
  - When data integrity and consistency matter (e.g., banking, e-commerce transactions).
  - When relationships between data are complex and need JOINs.
  - For applications with well-defined schemas that don’t change often.

- **NoSQL Databases**
  - When handling large-scale, high-velocity data (e.g., real-time analytics, social media).
  - When data structure evolves frequently (e.g., content management, IoT).
  - When high availability and fast read/write speeds are more important than strict consistency.

### **The 80/20 Rule of Understanding**  
1. **SQL = Structured, NoSQL = Flexible.**  
2. **SQL = Strong consistency, NoSQL = Scalability & speed.**  
3. **Use SQL for transactions, NoSQL for big data and fast reads/writes.**  
4. **SQL scales up, NoSQL scales out.**  
5. **Most modern apps use a mix (polyglot persistence).**  

Would you like any specific examples or deeper dives into use cases?

**Relational Databases** 

- Structure data, well defined. We know the values for each of the fields
- Store data in rows and columns
- Each row contains all the information about one entity and each column contains all the separate data points. 
- Columns are also known as attributes or fields. 
- Rows are known as records
- Especially important when you need to manage relations between tables. 

**Reasons to Use** 
- We need to ensure ACID compliance 
- Data is structured and unchanging
    - Easy to find
    - Easy to handle data that is structured 

**ACID Transactions** 

[SQL ACID Transactions:  A Detailed Breakdown](../foundations/system-design-foundation)

**Atomic - "All or Nothing"**

    Each transaction is properly carried out or the process halts and reverts back. 

**Consistent - "Maintaining Valid Data"**

    Transaction wil never endanger the structural integrity of the database. The database must move from one valid state to another without violating constraints.

**Isolated - "No Interference Between Transactions"** 

    Transactions cannot compromise the integrity of other transactions by interacting with them while they are still in progress. Multiple transactions must not interfere with each other to prevent data conflicts.

**Durable – "Data is Permanently Saved"** 

    The data related to the completed transaction will persist even in the cases of network or power outages. If a transaction fails, it will not impact the manipulated data. 

## NoSQL Databases

**Common Types of NoSQL Databases**  

| Type | Description | Best Use Cases | Example Databases |
|------|------------|---------------|------------------|
| **Document** | Stores data as JSON or BSON documents | Content management, catalogs, user profiles | MongoDB, CouchDB, Firebase Firestore |
| **Key-Value** | Simple key-value pairs (like a dictionary) | Caching, session storage, real-time data | Redis, DynamoDB, Riak |
| **Column-Family (Wide-Column)** | Stores data in columns rather than rows | Big data, analytics, time-series data | Apache Cassandra, HBase, ScyllaDB |
| **Graph** | Stores nodes & relationships between them | Social networks, fraud detection, recommendation engines | Neo4j, ArangoDB, Amazon Neptune |

### **Key Takeaways**
1. **Document:** Best for semi-structured data that changes often.  
2. **Key-Value:** Ultra-fast lookups, great for caching & real-time data. Mostly run in memory
3. **Column-Family:** Handles huge datasets with fast reads/writes (great for analytics).  
4. **Graph:** Best when relationships between data are important (e.g., social networks).  

### **Top Reasons to Use a NoSQL Database**  

1. **Scalability (Horizontal Scaling)**  
   - Easily distribute data across multiple servers (scales out) rather than relying on bigger hardware (scaling up).  
   - Ideal for handling large amounts of traffic and big datasets.  

2. **High Performance & Fast Reads/Writes**  
   - Optimized for fast data access, often outperforming relational databases for specific workloads.  
   - Especially useful for real-time applications like caching, analytics, and recommendation systems.  

3. **Flexible Schema (Schema-less or Dynamic Schema)**  
   - No predefined table structure—data can evolve without migrations.  
   - Great for rapidly changing applications (e.g., content management systems, IoT).  

4. **Handling Large Volumes of Data (Big Data & Streaming)**  
   - Designed for massive datasets and high-throughput environments (e.g., social media, e-commerce).  
   - Efficient at processing unstructured, semi-structured, or high-velocity data.  

5. **Availability & Fault Tolerance**  
   - Many NoSQL databases replicate data across multiple nodes to ensure uptime even if some servers fail.  
   - Crucial for distributed systems and global applications.  

6. **Optimized for Specific Use Cases**  
   - **Key-Value:** Real-time session storage, caching.  
   - **Document:** Flexible, evolving data models (e.g., product catalogs, user profiles).  
   - **Column-Family:** Large-scale analytics, time-series data.  
   - **Graph:** Social networks, fraud detection, recommendation engines.  

### **When to Choose NoSQL Over SQL**  
✅ **When you need massive scalability** (e.g., global applications, social networks).  
✅ **When your data structure is constantly evolving** (e.g., dynamic user-generated content).  
✅ **When you need high-speed performance with large datasets** (e.g., caching, analytics).  
✅ **When relationships between data are not a primary concern** (or are handled differently, as in Graph DBs).  

Would you like help choosing a specific NoSQL database for a project you're considering?

## SQL Overview and Relation Algebra

Here is the extracted text from the image:

**Question:**  
Write a query that finds the average `fruit_pct` by contributor and displays it in ascending order.

**Table Sample Data:**  

| id | name       | launch_year | fruit_pct | contributed_by |
|----|-----------|------------|-----------|---------------|
| 1  | Bruzz     | 2007       | 45        | Sam Malone   |
| 2  | Delightful| 2008       | 41        | Sam Malone   |
| 3  | Nice      | 2015       | 42        | Sam Malone   |

**SQL Query:**
```sql
SELECT contributed_by, AVG(fruit_pct) AS avg_fruit_pct
FROM table_name
GROUP BY contributed_by
ORDER BY avg_fruit_pct ASC;
```
This query:
- Groups records by `contributed_by`
- Calculates the average `fruit_pct` for each contributor