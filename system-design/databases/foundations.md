
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Databases](#databases)
  - [Types of Databases](#types-of-databases)
    - [Interview Question](#interview-question)
  - [Relational vs. NoSQL Databases: Key Takeaways](#relational-vs-nosql-databases-key-takeaways)
    - [When to Use Each](#when-to-use-each)
    - [The 80/20 Rule of Understanding](#the-8020-rule-of-understanding)
    - [ACID Transactions](#acid-transactions)
  - [NoSQL Databases](#nosql-databases)
    - [Key Takeaways](#key-takeaways)
    - [Top Reasons to Use a NoSQL Database](#top-reasons-to-use-a-nosql-database)
    - [When to Choose NoSQL Over SQL](#when-to-choose-nosql-over-sql)
  - [SQL Overview and Relation Algebra](#sql-overview-and-relation-algebra)
    - [The 20% of SQL That Covers 80% of What You Need](#the-20-of-sql-that-covers-80-of-what-you-need)
    - [Summary of What You Must Master](#summary-of-what-you-must-master)
  - [SQL Operators: The Essential Guide](#sql-operators-the-essential-guide)
    - [1. Comparison Operators (Used in WHERE Clauses)](#1-comparison-operators-used-in-where-clauses)
    - [2. Logical Operators (Used to Combine Conditions)](#2-logical-operators-used-to-combine-conditions)
    - [3. Arithmetic Operators (Used in Calculations)](#3-arithmetic-operators-used-in-calculations)
    - [4. BETWEEN, IN, and LIKE (Advanced Filtering)](#4-between-in-and-like-advanced-filtering)
    - [5. IS NULL & IS NOT NULL (Handling Missing Data)](#5-is-null--is-not-null-handling-missing-data)
    - [6. EXISTS (Check if Data Exists in a Subquery)](#6-exists-check-if-data-exists-in-a-subquery)
    - [7. String Operators (For Text Manipulation)](#7-string-operators-for-text-manipulation)
    - [SQL Operators Summary (80/20 Key Takeaways)](#sql-operators-summary-8020-key-takeaways)
  - [SQL `CASE` Operator: The Must-Know Guide](#sql-case-operator-the-must-know-guide)
    - [1. Basic `CASE` Syntax](#1-basic-case-syntax)
    - [2. Example: Categorizing Users by Age](#2-example-categorizing-users-by-age)
    - [3. Example: Conditional Discounts](#3-example-conditional-discounts)
    - [4. Using `CASE` in `ORDER BY` (Custom Sorting)](#4-using-case-in-order-by-custom-sorting)
    - [5. Using `CASE` in `GROUP BY` (Grouping by Categories)](#5-using-case-in-group-by-grouping-by-categories)
    - [6. Using `CASE` with Aggregate Functions](#6-using-case-with-aggregate-functions)
    - [🚀 Key Takeaways for `CASE`](#-key-takeaways-for-case)
  - [Database Views](#database-views)
    - [Key Differences](#key-differences)
    - [Key Takeaways](#key-takeaways-1)
    - [When to Use Each](#when-to-use-each-1)
    - [Example Code](#example-code)
  - [Materialized Views vs. Summary Tables](#materialized-views-vs-summary-tables)
    - [How They Are Similar](#how-they-are-similar)
    - [Key Differences](#key-differences-1)
    - [When to Use Each](#when-to-use-each-2)
    - [TL;DR](#tldr)
  - [Case Study](#case-study)
    - [Interview Question](#interview-question-1)
    - [Entities and Relationships](#entities-and-relationships)
      - [1. Users](#1-users)
      - [2. Products](#2-products)
      - [3. Categories](#3-categories)
      - [4. Orders](#4-orders)
      - [5. Order_Items](#5-order_items)
      - [6. Payments](#6-payments)
      - [7. Addresses](#7-addresses)
      - [8. Reviews](#8-reviews)
    - [Example Schema Diagram](#example-schema-diagram)
    - [Relationships Summary](#relationships-summary)
    - [Additional Considerations](#additional-considerations)
  - [Alternative Solution](#alternative-solution)
    - [Steps to answer the question](#steps-to-answer-the-question)
  - [Database Internals](#database-internals)
    - [Indexing](#indexing)
    - [Algos](#algos)
    - [Stages of Query Processing](#stages-of-query-processing)
  - [1. Database Permissions](#1-database-permissions)
    - [Common Types of Permissions](#common-types-of-permissions)
  - [2. User Roles vs. Database Roles](#2-user-roles-vs-database-roles)
    - [A. User Roles](#a-user-roles)
    - [B. Database Roles](#b-database-roles)
      - [Common Database Roles (SQL Server Example)](#common-database-roles-sql-server-example)
  - [3. Best Practices for Managing Database Permissions](#3-best-practices-for-managing-database-permissions)
  - [4. When to Use Each?](#4-when-to-use-each)
    - [Summary (80/20 Rule)](#summary-8020-rule)
    - [Database Permissions, User Roles, and Database Roles](#database-permissions-user-roles-and-database-roles)
  - [1. Database Permissions](#1-database-permissions-1)
    - [Common Types of Permissions](#common-types-of-permissions-1)
  - [2. User Roles vs. Database Roles](#2-user-roles-vs-database-roles-1)
    - [A. User Roles](#a-user-roles-1)
    - [B. Database Roles](#b-database-roles-1)
      - [Common Database Roles (SQL Server Example)](#common-database-roles-sql-server-example-1)
  - [3. Best Practices for Managing Database Permissions](#3-best-practices-for-managing-database-permissions-1)
  - [4. When to Use Each?](#4-when-to-use-each-1)
    - [Summary (80/20 Rule)](#summary-8020-rule-1)
  - [MongoDB](#mongodb)
    - [What is MongoDB?](#what-is-mongodb)
    - [Key Features of BSON:](#key-features-of-bson)
    - [BSON vs JSON:](#bson-vs-json)
    - [CRUD Operations](#crud-operations)
    - [1. Create (`insertOne` / `insertMany`)](#1-create-insertone--insertmany)
    - [2. Read (`find` / `findOne`)](#2-read-find--findone)
    - [3. Update (`updateOne` / `updateMany`)](#3-update-updateone--updatemany)
    - [4. Delete (`deleteOne` / `deleteMany`)](#4-delete-deleteone--deletemany)
    - [Full JavaScript Example (Using MongoDB Node.js Driver)](#full-javascript-example-using-mongodb-nodejs-driver)
    - [Key Notes](#key-notes)
    - [Key Takeaways](#key-takeaways-2)
    - [Pareto Principle (80/20 Rule) in MongoDB](#pareto-principle-8020-rule-in-mongodb)
      - [20% of Features → 80% of Results](#20-of-features--80-of-results)
      - [20% of Mistakes → 80% of Issues](#20-of-mistakes--80-of-issues)
    - [Example: Pareto in Action](#example-pareto-in-action)
    - [Conclusion](#conclusion)
  - [MongoDB Aggregation Pipeline Stages](#mongodb-aggregation-pipeline-stages)
    - [Aggregation Examples](#aggregation-examples)
      - [1. Simple Aggregation: Count Active Users](#1-simple-aggregation-count-active-users)
      - [2. Group by Field: Total Sales by Product](#2-group-by-field-total-sales-by-product)
      - [3. Unwind Arrays: Analyze Tags](#3-unwind-arrays-analyze-tags)
      - [4. Join Collections: Orders with User Details](#4-join-collections-orders-with-user-details)
      - [5. Pagination: Top 10 Active Users](#5-pagination-top-10-active-users)
      - [6. Complex Aggregation: Average Order Value by User](#6-complex-aggregation-average-order-value-by-user)
    - [Full JavaScript Example (Using MongoDB Node.js Driver)](#full-javascript-example-using-mongodb-nodejs-driver-1)
    - [Key Takeaways](#key-takeaways-3)
  - [MongoDB Interview Questions](#mongodb-interview-questions)

<!-- /code_chunk_output -->



# Databases 

## Types of Databases 

### Interview Question

Imagine a user auth service which validates a username/password combination with a hashed value in the database. **What kind of database would you expect to use for persistence and why?**

For a **user authentication service**, a **relational (SQL) database** is typically the best choice due to the following reasons:  

**Solution:**

**Best Choice: Relational Database (SQL) – PostgreSQL, MySQL, or MariaDB**  
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

**Alternatives & When to Use Them**

- **Key-Value Store (e.g., Redis, DynamoDB)**  
  - 🔹 **Use Case:** When speed is critical (e.g., session caching, rate limiting).  
  - 🔹 **Drawback:** Not as strong in data integrity (eventual consistency).  

- **NoSQL Document Store (e.g., MongoDB)**  
  - 🔹 **Use Case:** If authentication data includes complex, evolving user metadata.  
  - 🔹 **Drawback:** Weaker relational integrity for user-based transactions.  

**Final Recommendation**  
✅ **Use PostgreSQL or MySQL** for secure, structured authentication data.  
✅ **Use Redis (key-value) as a cache** for short-term session storage or rate-limiting.  

## Relational vs. NoSQL Databases: Key Takeaways

| Feature               | Relational (SQL) Databases | NoSQL Databases |
|----------------------|------------------------|----------------|
| **Structure**       | Table-based (rows & columns) | Flexible (documents, key-value, graph, wide-column) |
| **Schema**         | Strict, predefined schema | Dynamic schema (schema-less or flexible) |
| **Scalability**    | Vertical (scale up: bigger servers) | Horizontal (scale out: more servers) |
| **Transactions**   | ACID-compliant (strong consistency) | BASE model (eventual consistency) |
| **Best For**       | Structured, relational data | Unstructured, semi-structured, high-scale data |
| **Examples**       | MySQL, PostgreSQL, SQL Server | MongoDB, Cassandra, Redis, DynamoDB |

### When to Use Each  

- **Relational Databases (SQL)**
  - When data integrity and consistency matter (e.g., banking, e-commerce transactions).
  - When relationships between data are complex and need JOINs.
  - For applications with well-defined schemas that don’t change often.

- **NoSQL Databases**
  - When handling large-scale, high-velocity data (e.g., real-time analytics, social media).
  - When data structure evolves frequently (e.g., content management, IoT).
  - When high availability and fast read/write speeds are more important than strict consistency.

### The 80/20 Rule of Understanding 
1. **SQL = Structured, NoSQL = Flexible.**  
2. **SQL = Strong consistency, NoSQL = Scalability & speed.**  
3. **Use SQL for transactions, NoSQL for big data and fast reads/writes.**  
4. **SQL scales up, NoSQL scales out.**  
5. **Most modern apps use a mix (polyglot persistence).**  

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

### ACID Transactions

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

### Key Takeaways
1. **Document:** Best for semi-structured data that changes often.  
2. **Key-Value:** Ultra-fast lookups, great for caching & real-time data. Mostly run in memory
3. **Column-Family:** Handles huge datasets with fast reads/writes (great for analytics).  
4. **Graph:** Best when relationships between data are important (e.g., social networks).  

### Top Reasons to Use a NoSQL Database

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

### When to Choose NoSQL Over SQL
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


**SQL Overview** 

- SQL is a declarative language - it expresses **what** to do (or what to query) **not how** to do it. 

### The 20% of SQL That Covers 80% of What You Need

If you focus on these key concepts, you'll quickly become effective with SQL. Here’s the **Pareto Principle (80/20 rule) version of SQL**—the essentials you must master.  

---

1. **SELECT – Retrieving Data (The Core of SQL)**
**Why?** You can’t do anything in SQL if you don’t know how to get data.  

✅ **Basic Query**  
```sql
SELECT name, launch_year FROM table_name;
```
- Pulls `name` and `launch_year` from `table_name`.

✅ **DISTINCT Projection**  
```sql
SELECT DISTINCT name, FROM table_name;
```
- Pulls unique names `name` from `table_name`.

✅ **Filtering with WHERE**  
```sql
SELECT * FROM table_name WHERE launch_year > 2010;
```
- Gets all records where `launch_year` is after 2010.

✅ **Sorting with ORDER BY**  
```sql
SELECT * FROM table_name ORDER BY launch_year DESC;
```
- Orders results by `launch_year` in descending order.

---

2. GROUP BY & Aggregations – Summarizing Data
**Why?** Helps answer "how many?", "what’s the average?", etc.  

✅ **Basic Aggregation (COUNT, SUM, AVG, MAX, MIN)**  
```sql
SELECT COUNT(*) FROM table_name;
```
- Counts all rows.

```sql
SELECT AVG(fruit_pct) FROM table_name;
```
- Calculates the average fruit percentage.

✅ **Grouping Data**  
```sql
SELECT contributed_by, AVG(fruit_pct) 
FROM table_name
GROUP BY contributed_by;
```
- Groups by `contributed_by` and shows the average `fruit_pct` per contributor.

✅ **Filtering Groups with HAVING**  
```sql
SELECT contributed_by, AVG(fruit_pct)
FROM table_name
GROUP BY contributed_by
HAVING AVG(fruit_pct) > 40;
```
- Only shows contributors with an average fruit percentage over 40.

---

3. **JOINs – Connecting Multiple Tables**
**Why?** Most real-world databases have **multiple tables**, and you need to link them.  

✅ **INNER JOIN (Most Common)**
```sql
SELECT users.name, orders.amount 
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```
- Fetches names and order amounts where users and orders match.

✅ **LEFT JOIN (Include all users, even those without orders)**
```sql
SELECT users.name, orders.amount 
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```
- Returns all users, even those who haven’t placed an order (orders may be NULL).

---

4. **INSERT, UPDATE, DELETE – Changing Data**
**Why?** Databases aren’t just for reading data; you need to modify it too.  

✅ **Inserting Data**
```sql
INSERT INTO users (name, email) 
VALUES ('Alice', 'alice@email.com');
```
- Adds a new user to the `users` table.

✅ **Updating Data**
```sql
UPDATE users 
SET email = 'newemail@email.com' 
WHERE name = 'Alice';
```
- Updates Alice’s email.

✅ **Deleting Data**
```sql
DELETE FROM users WHERE name = 'Alice';
```
- Deletes Alice’s record.

---

5. **Indexing – Speed Up Queries**
**Why?** If queries are slow, indexing **makes them fast**.  

✅ **Create an Index for Faster Searches**
```sql
CREATE INDEX idx_users_email ON users(email);
```
- Makes lookups on `email` **much faster**.

✅ **Check Query Performance**
```sql
EXPLAIN SELECT * FROM users WHERE email = 'alice@email.com';
```
- Shows how SQL executes your query and if it’s using an index.

---

6. **Subqueries & CTEs – Writing Cleaner Queries**
**Why?** Lets you break down complex queries into readable steps.  

✅ **Subquery Example**  
```sql
SELECT name, launch_year 
FROM table_name 
WHERE launch_year = (SELECT MAX(launch_year) FROM table_name);
```
- Finds the most recent launch.

✅ **Common Table Expressions (CTEs) – Cleaner Queries**
```sql
WITH recent_launch AS (
    SELECT name, launch_year FROM table_name WHERE launch_year > 2010
)
SELECT * FROM recent_launch;
```
- Creates a temporary named result (`recent_launch`) for reuse.

---

7. **CASE – If-Else Logic in SQL**
**Why?** Lets you categorize data dynamically.  

✅ **CASE Example**
```sql
SELECT name, 
       fruit_pct, 
       CASE 
           WHEN fruit_pct > 40 THEN 'High'
           WHEN fruit_pct > 30 THEN 'Medium'
           ELSE 'Low'
       END AS category
FROM table_name;
```
- Categorizes fruit percentage as **High, Medium, or Low**.

---

### Summary of What You Must Master
1. **SELECT** – Pull data, use `WHERE`, `ORDER BY`  
2. **GROUP BY + Aggregations** – Count, sum, average data  
3. **JOINs** – Connect tables efficiently  
4. **INSERT, UPDATE, DELETE** – Modify data  
5. **Indexing** – Speed up queries  
6. **Subqueries & CTEs** – Break complex queries into smaller steps  
7. **CASE** – Add conditional logic  

## SQL Operators: The Essential Guide

SQL **operators** allow you to filter, compare, and manipulate data effectively. Here’s a breakdown of the most important types of SQL operators that cover **80% of what you need**.

---

### 1. Comparison Operators (Used in WHERE Clauses)
These compare values and return `TRUE` or `FALSE`.

| Operator | Meaning | Example |
|----------|---------|---------|
| `=`  | Equal to | `WHERE age = 30` |
| `!=` or `<>` | Not equal to | `WHERE status != 'inactive'` |
| `>`  | Greater than | `WHERE price > 100` |
| `<`  | Less than | `WHERE age < 25` |
| `>=` | Greater than or equal to | `WHERE score >= 90` |
| `<=` | Less than or equal to | `WHERE age <= 50` |

✅ **Example: Find users older than 30**
```sql
SELECT * FROM users WHERE age > 30;
```

---

### 2. Logical Operators (Used to Combine Conditions)
These help refine your conditions.

| Operator | Meaning | Example |
|----------|---------|---------|
| `AND`  | All conditions must be true | `WHERE age > 25 AND city = 'NYC'` |
| `OR`   | At least one condition must be true | `WHERE age < 18 OR age > 65` |
| `NOT`  | Negates a condition | `WHERE NOT status = 'inactive'` |

✅ **Example: Get users in NYC who are over 30**
```sql
SELECT * FROM users WHERE age > 30 AND city = 'NYC';
```

Operator    Description

**ALL**         The ALL operator is used to compare a value to all values in another value set.

**AND**         The AND operator allows the existence of multiple conditions in an SQL statement's WHERE clause.

**ANY**         The ANY operator is used to compare a value to any applicable value in the list according to the condition.

**BETWEEN**     The BETWEEN operator is used to search for values that are within a set of values, given the minimum value and the maximum value.

**EXISTS**      The EXISTS operator is used to search for the presence of a row in a specified table that meets certain criteria.

**IN**          The IN operator is used to compare a value to a list of literal values that have been specified.

**LIKE**        The LIKE operator is used to compare a value to similar values using wildcard operators.

**NOT**         The NOT operator reverses the meaning of the logical operator with which it is used. Eg: NOT EXISTS, NOT BETWEEN, NOT IN, etc. This is a negate operator.

**OR**          The OR operator is used to combine multiple conditions in an SQL statement's WHERE clause.

**IS NULL**     The NULL operator is used to compare a value with a NULL value.

**UNIQUE**      The UNIQUE operator searches every row of a specified table for uniqueness (no duplicates).

---

### 3. Arithmetic Operators (Used in Calculations)
Used to perform basic math operations.

| Operator | Meaning | Example |
|----------|---------|---------|
| `+`  | Addition | `SELECT price + tax AS total FROM products;` |
| `-`  | Subtraction | `SELECT price - discount AS final_price FROM products;` |
| `*`  | Multiplication | `SELECT salary * 1.1 AS new_salary FROM employees;` |
| `/`  | Division | `SELECT revenue / total_orders AS avg_order_value FROM sales;` |
| `%`  | Modulus (Remainder) | `SELECT 10 % 3;` → (Result: 1) |

✅ **Example: Calculate final price after discount**
```sql
SELECT name, price - discount AS final_price FROM products;
```

---

### 4. BETWEEN, IN, and LIKE (Advanced Filtering)
**BETWEEN** → Used for ranges.  
**IN** → Used for multiple specific values.  
**LIKE** → Used for pattern matching.

| Operator | Meaning | Example |
|----------|---------|---------|
| `BETWEEN` | Matches a range | `WHERE age BETWEEN 18 AND 30` |
| `IN` | Matches any in a list | `WHERE country IN ('USA', 'Canada', 'UK')` |
| `LIKE` | Matches a pattern | `WHERE name LIKE 'A%'` |
| `NOT LIKE` | Excludes a pattern | `WHERE name NOT LIKE 'B%'` |

✅ **Example: Get users aged 18-30**
```sql
SELECT * FROM users WHERE age BETWEEN 18 AND 30;
```

✅ **Example: Get customers from specific countries**
```sql
SELECT * FROM customers WHERE country IN ('USA', 'Canada', 'UK');
```

✅ **Example: Get names starting with 'A'**
```sql
SELECT * FROM users WHERE name LIKE 'A%';
```
(`%` is a wildcard, meaning anything after "A" is allowed.)

---

### 5. IS NULL & IS NOT NULL (Handling Missing Data)
Used to check for NULL values.

| Operator | Meaning | Example |
|----------|---------|---------|
| `IS NULL` | Checks if value is NULL | `WHERE email IS NULL` |
| `IS NOT NULL` | Checks if value is NOT NULL | `WHERE phone_number IS NOT NULL` |

✅ **Example: Get users who haven’t provided an email**
```sql
SELECT * FROM users WHERE email IS NULL;
```

---

### 6. EXISTS (Check if Data Exists in a Subquery)
Returns `TRUE` if a subquery has results.

✅ **Example: Get users who have placed an order**
```sql
SELECT * FROM users 
WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
```
- If the subquery finds a matching `user_id` in `orders`, it returns `TRUE`.

---

### 7. String Operators (For Text Manipulation)
Used for working with string values.

| Operator | Meaning | Example |
|----------|---------|---------|
| `||` or `CONCAT()` | Concatenates strings | `SELECT first_name || ' ' || last_name AS full_name FROM users;` |
| `UPPER()` | Converts to uppercase | `SELECT UPPER(name) FROM users;` |
| `LOWER()` | Converts to lowercase | `SELECT LOWER(email) FROM users;` |
| `LENGTH()` | Gets length of a string | `SELECT LENGTH(name) FROM users;` |

✅ **Example: Create full name**
```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
```

---

### SQL Operators Summary (80/20 Key Takeaways)

1. **Comparison (`=`, `!=`, `>`, `<`, `>=`, `<=`)** → Filters rows based on conditions.  
2. **Logical (`AND`, `OR`, `NOT`)** → Combines conditions for better filtering.  
3. **Arithmetic (`+`, `-`, `*`, `/`, `%`)** → Used for math calculations.  
4. **BETWEEN, IN, LIKE** → Special filters for ranges, lists, and patterns.  
5. **IS NULL & EXISTS** → Handles missing data and checks if records exist.  
6. **String Operators (`||`, `CONCAT()`, `UPPER()`, `LOWER()`)** → Helps with text manipulation.

## SQL `CASE` Operator: The Must-Know Guide

The `CASE` operator in SQL is like an **IF-ELSE** statement. It allows you to return different values based on conditions, making your queries **more dynamic and readable**.  

---

### 1. Basic `CASE` Syntax
```sql
CASE 
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
END
```
- **It evaluates conditions in order** and **returns the first matching result**.
- **If no conditions match**, the `ELSE` value is returned (if provided).
- **If `ELSE` is omitted**, `NULL` is returned when no conditions match.

---

### 2. Example: Categorizing Users by Age
✅ **Scenario**: You want to classify users as `Teen`, `Adult`, or `Senior` based on their age.
```sql
SELECT name, age,
    CASE 
        WHEN age < 18 THEN 'Teen'
        WHEN age BETWEEN 18 AND 64 THEN 'Adult'
        ELSE 'Senior'
    END AS age_category
FROM users;
```
 **Output**
| name   | age | age_category |
|--------|-----|-------------|
| Alice  | 16  | Teen        |
| Bob    | 35  | Adult       |
| Charlie| 70  | Senior      |

---

### 3. Example: Conditional Discounts
✅ **Scenario**: Apply discounts based on the total purchase amount.
```sql
SELECT customer_name, total_spent,
    CASE 
        WHEN total_spent >= 500 THEN '20% Discount'
        WHEN total_spent >= 200 THEN '10% Discount'
        ELSE 'No Discount'
    END AS discount
FROM customers;
```

---

### 4. Using `CASE` in `ORDER BY` (Custom Sorting)
✅ **Scenario**: You want to **prioritize** VIP customers when sorting results.
```sql
SELECT customer_name, total_spent
FROM customers
ORDER BY 
    CASE 
        WHEN total_spent >= 500 THEN 1  -- High spenders appear first
        WHEN total_spent >= 200 THEN 2
        ELSE 3
    END;
```
- Higher spenders get a **higher priority in sorting**.

---

### 5. Using `CASE` in `GROUP BY` (Grouping by Categories)
✅ **Scenario**: Count how many users fall into different age categories.
```sql
SELECT 
    CASE 
        WHEN age < 18 THEN 'Teen'
        WHEN age BETWEEN 18 AND 64 THEN 'Adult'
        ELSE 'Senior'
    END AS age_category,
    COUNT(*) AS user_count
FROM users
GROUP BY age_category;
```
---

### 6. Using `CASE` with Aggregate Functions
✅ **Scenario**: Get the total revenue for **online** and **offline** sales.
```sql
SELECT 
    SUM(CASE WHEN sale_type = 'Online' THEN amount ELSE 0 END) AS online_revenue,
    SUM(CASE WHEN sale_type = 'Offline' THEN amount ELSE 0 END) AS offline_revenue
FROM sales;
```
- This helps **segment totals dynamically**.

---

### 🚀 Key Takeaways for `CASE`
1. **Acts like an IF-ELSE statement** for SQL queries.  
2. **Used in `SELECT`, `ORDER BY`, `GROUP BY`, and aggregate functions.**  
3. **Returns the first matching condition’s result.**  
4. **If no conditions match, returns `ELSE` value (or `NULL` if omitted).**  
5. **Great for custom sorting, categorization, and conditional calculations.**  

## Database Views

Here are the key takeaways about **SQL Table Views**:

1. **Definition**: A **view** is a virtual table based on the result of an SQL query. It does not store data itself but provides a way to simplify complex queries.

2. **Creation**: Use `CREATE VIEW` to define a view. Example:
   ```sql
   CREATE VIEW active_customers AS
   SELECT id, name, email FROM customers WHERE status = 'active';
   ```

3. **Usage**: Views are used like regular tables in queries:
   ```sql
   SELECT * FROM active_customers;
   ```

4. **Benefits**:
   - **Simplicity**: Encapsulates complex queries for easier reuse.
   - **Security**: Restricts access to specific columns or rows by controlling what users see.
   - **Maintainability**: Centralizes logic, reducing redundancy in SQL code.

5. **Updatability**:
   - Some views **can** be updated if they meet certain conditions (e.g., contain a single base table, no aggregations).
   - Use `WITH CHECK OPTION` to ensure updates follow view constraints.
   - Example of an updatable view:
     ```sql
     CREATE VIEW customer_emails AS
     SELECT id, email FROM customers;
     ```
     Then you can update it:
     ```sql
     UPDATE customer_emails SET email = 'new@email.com' WHERE id = 1;
     ```

6. **Materialized Views** (in some databases like PostgreSQL & Oracle): Unlike regular views, these store the query result physically and need manual refresh.

7. **Dropping Views**: Use `DROP VIEW` to remove a view without affecting the underlying data.
   ```sql
   DROP VIEW active_customers;
   ```
Here’s the **80/20 breakdown** of **Materialized Views vs. Non-Materialized Views** (Standard Views):  

---

### Key Differences

| Feature              | **Materialized View** | **Non-Materialized View (Standard View)** |
|----------------------|---------------------|----------------------------------|
| **Data Storage**     | Stores actual data | Does **not** store data, only a query definition |
| **Performance**      | Faster queries (precomputed results) | Slower queries (data fetched dynamically) |
| **Freshness**        | Can become outdated; requires manual or scheduled refresh | Always up-to-date but recalculates each time |
| **Use Case**        | Best for improving performance on large datasets | Best for real-time data that frequently changes |
| **Update Mechanism** | Requires `REFRESH MATERIALIZED VIEW` | Automatically reflects changes from underlying tables |

---

### Key Takeaways

1. **Materialized Views are Precomputed**  
   - They store actual data, making queries **much faster**, especially for expensive aggregations.  
   - Requires a refresh (`REFRESH MATERIALIZED VIEW`) to get updated data.  
   - Ideal for **reports, dashboards, and historical analysis** where real-time updates aren’t necessary.  

2. **Standard Views Are Dynamic & Lightweight**  
   - They don’t store data, just the query definition.  
   - Every time you query a view, it fetches fresh data from the underlying tables.  
   - Best for **real-time analytics and simplified query structures** where performance isn’t a major concern.  

---

### When to Use Each

✅ **Use a Materialized View when:**  
- Querying large datasets with heavy aggregations (e.g., `SUM()`, `COUNT()`, `AVG()`).  
- You need faster reads and don’t require real-time updates.  
- You're optimizing performance in **data warehouses** like PostgreSQL, Oracle, or BigQuery.  

✅ **Use a Standard View when:**  
- You need **always up-to-date** data.  
- You’re dealing with frequently changing data (e.g., user session info, live transactions).  
- You want to **simplify complex queries** without additional storage overhead.  

---

### Example Code

**Standard View (Real-time, No Storage)**  
```sql
CREATE VIEW recent_orders AS  
SELECT id, customer_name, total FROM orders WHERE order_date > CURRENT_DATE - INTERVAL '30 days';
```

**Materialized View (Faster Reads, Needs Refresh)**  
```sql
CREATE MATERIALIZED VIEW monthly_sales AS  
SELECT product_id, SUM(sales_amount) AS total_sales  
FROM sales  
WHERE sale_date > CURRENT_DATE - INTERVAL '30 days'  
GROUP BY product_id;
```
**Refreshing the Materialized View:**  
```sql
REFRESH MATERIALIZED VIEW monthly_sales;
```

---

## Materialized Views vs. Summary Tables
- **Materialized Views = Stored Data + Faster Reads + Needs Refresh**  
- **Standard Views = No Storage + Always Fresh + Slower Queries**  
- **Pick the right one based on performance vs. freshness trade-offs**  

Yes, a **materialized view** is very similar to a **summary table** because both store **precomputed data** for faster querying. However, they have some key differences:  

### How They Are Similar
- Both **store data physically** (unlike standard views, which don’t).  
- Both improve performance by avoiding repeated expensive queries.  
- Both are used for **preaggregated or summarized** data, like sales totals or customer counts.  

### Key Differences
| Feature | **Materialized View** | **Summary Table** |
|---------|---------------------|-----------------|
| **Definition** | A virtual table that stores query results and can be refreshed | A manually created table that stores precomputed data |
| **Update Method** | Uses `REFRESH MATERIALIZED VIEW` to update | Requires manual `INSERT`, `UPDATE`, or `DELETE` operations |
| **Flexibility** | Can be **automatically refreshed** in some databases | Requires manual maintenance or scheduled jobs |
| **Use Case** | Automates caching of results for performance | Stores long-term summary data for reporting |

### When to Use Each
✅ **Use a Materialized View** when:  
- You need **automated refreshes** without managing table updates manually.  
- You're working with databases that support them (PostgreSQL, Oracle, etc.).  
- You want a **balance between fresh data and query speed**.  

✅ **Use a Summary Table** when:  
- You need **full control** over data updates and history.  
- Your database **does not support materialized views**.  
- You want to store **historical summaries** that don't need frequent updates.  

### TL;DR
✔ **Materialized Views are like automated summary tables** that refresh with a command.  
✔ **Summary Tables require manual updates but offer full control over stored data.**  

## Case Study 

### Interview Question
    Design a database for an ecommerce website. 

    Define the type of database you would use and why. Define entity and relationships that satisfy storage requirements. 

**Solution** 

Database Type: **Relational Database (SQL)**

**Why?**
- **Structured Data**: E-commerce websites typically deal with structured data like products, orders, customers, and payments, which fit well into the relational model.
- **ACID Compliance**: Ensures transactional integrity, which is crucial for operations like order processing and inventory management.
- **Mature Ecosystem**: Relational databases like PostgreSQL, MySQL, or SQL Server have robust tools, extensive documentation, and community support.
- **Scalability**: While NoSQL databases are often touted for scalability, modern relational databases can also scale effectively, especially with techniques like sharding and replication.

### Entities and Relationships

#### 1. Users
   - **Attributes**:
     - `user_id` (Primary Key)
     - `username`
     - `password_hash`
     - `email`
     - `first_name`
     - `last_name`
     - `created_at`
     - `updated_at`
   - **Relationships**:
     - One-to-Many with `Orders`
     - One-to-Many with `Addresses`
     - One-to-Many with `Payments`

#### 2. Products
   - **Attributes**:
     - `product_id` (Primary Key)
     - `name`
     - `description`
     - `price`
     - `stock_quantity`
     - `category_id` (Foreign Key to `Categories`)
     - `created_at`
     - `updated_at`
   - **Relationships**:
     - Many-to-One with `Categories`
     - Many-to-Many with `Orders` (through `Order_Items`)

#### 3. Categories
   - **Attributes**:
     - `category_id` (Primary Key)
     - `name`
     - `description`
     - `parent_category_id` (Foreign Key to `Categories` for hierarchical structure)
   - **Relationships**:
     - One-to-Many with `Products`
     - Self-Referencing for hierarchical categories

#### 4. Orders
   - **Attributes**:
     - `order_id` (Primary Key)
     - `user_id` (Foreign Key to `Users`)
     - `order_date`
     - `total_amount`
     - `status` (e.g., Pending, Shipped, Delivered, Cancelled)
   - **Relationships**:
     - Many-to-One with `Users`
     - One-to-Many with `Order_Items`
     - One-to-One with `Payments`

#### 5. Order_Items
   - **Attributes**:
     - `order_item_id` (Primary Key)
     - `order_id` (Foreign Key to `Orders`)
     - `product_id` (Foreign Key to `Products`)
     - `quantity`
     - `price_at_time_of_purchase`
   - **Relationships**:
     - Many-to-One with `Orders`
     - Many-to-One with `Products`

#### 6. Payments
   - **Attributes**:
     - `payment_id` (Primary Key)
     - `order_id` (Foreign Key to `Orders`)
     - `payment_method` (e.g., Credit Card, PayPal)
     - `amount`
     - `payment_date`
     - `status` (e.g., Completed, Failed)
   - **Relationships**:
     - Many-to-One with `Orders`

#### 7. Addresses
   - **Attributes**:
     - `address_id` (Primary Key)
     - `user_id` (Foreign Key to `Users`)
     - `street`
     - `city`
     - `state`
     - `zip_code`
     - `country`
   - **Relationships**:
     - Many-to-One with `Users`

#### 8. Reviews
   - **Attributes**:
     - `review_id` (Primary Key)
     - `user_id` (Foreign Key to `Users`)
     - `product_id` (Foreign Key to `Products`)
     - `rating` (e.g., 1-5)
     - `comment`
     - `review_date`
   - **Relationships**:
     - Many-to-One with `Users`
     - Many-to-One with `Products`

### Example Schema Diagram

```
Users
-----
user_id (PK)
username
password_hash
email
first_name
last_name
created_at
updated_at

Products
--------
product_id (PK)
name
description
price
stock_quantity
category_id (FK)
created_at
updated_at

Categories
----------
category_id (PK)
name
description
parent_category_id (FK)

Orders
------
order_id (PK)
user_id (FK)
order_date
total_amount
status

Order_Items
-----------
order_item_id (PK)
order_id (FK)
product_id (FK)
quantity
price_at_time_of_purchase

Payments
--------
payment_id (PK)
order_id (FK)
payment_method
amount
payment_date
status

Addresses
---------
address_id (PK)
user_id (FK)
street
city
state
zip_code
country

Reviews
-------
review_id (PK)
user_id (FK)
product_id (FK)
rating
comment
review_date
```

### Relationships Summary
- **Users** can have multiple **Orders**, **Addresses**, and **Payments**.
- **Orders** contain multiple **Order_Items**, each linked to a **Product**.
- **Products** belong to a **Category**, and categories can have a hierarchical structure.
- **Reviews** are made by **Users** on **Products**.

### Additional Considerations
- **Indexes**: Create indexes on frequently queried columns like `user_id`, `product_id`, and `order_id` to improve query performance.
- **Normalization**: Ensure the database is normalized to reduce redundancy and improve data integrity.
- **Security**: Implement security measures like hashing passwords, using prepared statements to prevent SQL injection, and encrypting sensitive data.

This design provides a robust foundation for an e-commerce website, ensuring data integrity, scalability, and efficient querying.
## Alternative Solution
---

**Step 1 - Nature of Data (Dynamicity)**  

- Given that we have dynamic pricing structure and product descriptions we can approach storage in multiple ways:  
  - If dynamic fields are few in number and not directly queried, we can store them in MySQL BLOB types. Then we can de-serialize blobs at application level and create data models.  
    - **Drawback** of this approach is that any data migration may need to deserialize, inspect and then use data and it involves application logic in addition to database and hence latent.  
  - If above is not true and we see a lot of dynamic data then we can split databases and store dynamic entities in NoSQL databases (e.g. MongoDB) and use RDBMS only for transactions. This way transactional entities can have soft references to NoSQL entities and we need external resolutions (multiple queries and cache mix).  
    - **Drawback** of this approach is establishing and maintaining consistency between two database types.  
- Since we are starting out and most of the data schema is structured we can safely go with an RDBMS.  

---

Here is the extracted text from the image:

---
**Step 2 - Type of Database(s)**  

- As discussed in the last slide we can use hosted RDBMS such as Amazon RDS or MySQL.  
- In the future if there is a need to support more and more dynamic types, then we can migrate certain (or most) tables to a NoSQL database.  
- At an application / service level we can use an ORM framework rather than direct database access so as to abstract the underlying database from our applications.  
- Since we have less scale of traffic, initially we don’t need a separate OLAP database or complex ETL tools. We can run data aggregation via daily batch queries for reporting.  

---

### Steps to answer the question 

- The questions will be vague and open ended. It's a good idea to start with requirements analysis and to ask clarifying questions
- Propose a design progression that provides a two way door for evolving requirements 
- Be explicit on what is out of scope (OLAP, ETL, etc, long term storage)

---

**Requirement Analysis**  

- **What is the nature and scale of this eCommerce site? Is it a mature company or a startup?**  
  - Great question! - You can assume this is your own startup. Scale is < 10K users for now.  

- **What are we selling here? Any particular type of product?**  
  - Assume that you can sell almost anything that Amazon does.  

- **Who sells products on the site? Does my company sell it, or is it open for third-party sellers?**  
  - This platform should support both first-party as well as third-party sellers.  

- **What is the level of design we want to discuss here, given that we may have lots of entities and attributes that may span outside our discussion time?**  
  - We can focus on core entities involved in transactions. No need to go into too much detail around attributes. We can maybe provide a high-level idea of attributes and keys.  

---

When designing a database for an e-commerce website or any complex system, asking **clarifying questions** is crucial to ensure you fully understand the requirements and constraints. Here are some clarifying questions you can ask stakeholders or team members to refine the database design:

---

**1. About the Business Requirements**
- **What is the primary purpose of the e-commerce website?**  
  (e.g., selling physical products, digital products, subscriptions, or a mix?)
- **What types of products will be sold?**  
  (e.g., physical goods, digital downloads, services, etc.)
- **Are there any specific business rules or workflows that need to be supported?**  
  (e.g., discounts, promotions, loyalty programs, or subscription-based models?)
- **What is the expected scale of the platform?**  
  (e.g., number of users, products, and orders per day/month?)

---

**2. About Users and Roles**
- **What types of users will the system support?**  
  (e.g., customers, admins, sellers, vendors, etc.)
- **Do users have different roles or permissions?**  
  (e.g., can sellers manage their own products, or do admins handle everything?)
- **What user information is required during registration?**  
  (e.g., name, email, phone number, address, etc.)
- **Will users have multiple shipping addresses or payment methods?**

---

**3. About Products**
- **What attributes are required for products?**  
  (e.g., name, description, price, SKU, weight, dimensions, etc.)
- **Will products have variations?**  
  (e.g., size, color, material, etc.)
- **How will product categories be organized?**  
  (e.g., hierarchical categories, tags, or both?)
- **Will there be inventory management?**  
  (e.g., tracking stock levels, backorders, or pre-orders?)

---

**4. About Orders and Payments**
- **What information is required for an order?**  
  (e.g., shipping address, billing address, payment method, etc.)
- **What payment methods will be supported?**  
  (e.g., credit card, PayPal, cryptocurrency, etc.)
- **How will order statuses be tracked?**  
  (e.g., pending, shipped, delivered, canceled, etc.)
- **Will there be support for partial refunds or order modifications?**

---

**5. About Reviews and Ratings**
- **Will users be able to leave reviews and ratings for products?**
- **What information should be captured in a review?**  
  (e.g., rating, comment, images, etc.)
- **Will there be moderation for reviews?**  
  (e.g., admin approval before publishing?)

---

**6. About Shipping and Logistics**
- **Will the system support multiple shipping providers?**
- **What shipping information needs to be stored?**  
  (e.g., tracking numbers, shipping costs, delivery dates, etc.)
- **Will there be support for international shipping?**  
  (e.g., different tax rates, currencies, or shipping zones?)

---

**7. About Discounts and Promotions**
- **Will the system support discounts or coupons?**
- **What types of discounts will be offered?**  
  (e.g., percentage-based, fixed amount, buy-one-get-one, etc.)
- **Will there be time-limited promotions or seasonal sales?**

---

**8. About Scalability and Performance**
- **What is the expected traffic volume?**  
  (e.g., number of concurrent users, peak traffic during sales, etc.)
- **Are there any specific performance requirements?**  
  (e.g., fast search, real-time inventory updates, etc.)
- **Will the system need to support multi-language or multi-currency functionality?**

---

**9. About Data Security and Compliance**
- **What sensitive data needs to be stored?**  
  (e.g., payment information, personal details, etc.)
- **Are there any compliance requirements?**  
  (e.g., GDPR, PCI-DSS, etc.)
- **How will user data be protected?**  
  (e.g., encryption, hashing, etc.)

---

**10. About Reporting and Analytics**
- **What kind of reports or analytics are needed?**  
  (e.g., sales reports, user activity, product performance, etc.)
- **Will there be a dashboard for admins or sellers to view insights?**
- **Do you need real-time analytics or periodic reports?**

---

**11. About Integration with Third-Party Services**
- **Will the system integrate with external services?**  
  (e.g., payment gateways, shipping providers, email services, etc.)
- **Are there any specific APIs or protocols that need to be supported?**

---

**12. About Future Requirements**
- **Are there any planned features or expansions?**  
  (e.g., mobile app, marketplace model, etc.)
- **How flexible does the database design need to be to accommodate future changes?**

---

**13. About Data Retention and Archiving**
- **How long should historical data be retained?**  
  (e.g., orders, user activity, etc.)
- **Will there be a need for data archiving or purging?**

---

**14. About Backup and Recovery**
- **What are the backup requirements?**  
  (e.g., daily backups, offsite storage, etc.)
- **What is the expected recovery time objective (RTO) in case of failure?**

---

**15. About Team and Tools**
- **Who will be managing the database?**  
  (e.g., in-house team, external contractors, etc.)
- **What tools or frameworks are preferred for development and maintenance?**  
  (e.g., specific SQL database, ORM tools, etc.)

---

## Database Internals 

### Indexing 

  Clustered Indexes vs. non-clustered indexes 
  - Index data structures 
    - Hash-based 
    - Tree-based 

---

### Algos 

1. **Selection**: Which rows do you want
2. **Projection**: Which columns do you want 
3. **Joins**

---

### Stages of Query Processing 

1. **Parser and algebrizer**: Checks syntax, identify data types,  & permissions

2. **Query Optimizer & Execution Plan**: Determins the most efficient way to execute the query 

3. **Query Execution Engine and Results Retrieval**: Runs the plan and returns data efficiently. 

---

## 1. Database Permissions
Permissions define what a user or role **can and cannot do** in a database. They can be **fine-grained** (e.g., per column) or **broad** (e.g., full database access).  

### Common Types of Permissions  
| Permission | Description |
|------------|-------------|
| **SELECT** | Read data from a table/view. |
| **INSERT** | Add new rows to a table. |
| **UPDATE** | Modify existing data in a table. |
| **DELETE** | Remove rows from a table. |
| **CREATE** | Create new tables, indexes, or databases. |
| **ALTER** | Modify table schema or other objects. |
| **DROP** | Delete a database object (table, view, index, etc.). |
| **GRANT** | Give permissions to other users/roles. |
| **REVOKE** | Remove previously granted permissions. |

💡 **Example (Granting Permissions in PostgreSQL):**  
```sql
GRANT SELECT, INSERT ON orders TO sales_user;
```

💡 **Example (Revoking Permissions in MySQL):**  
```sql
REVOKE DELETE ON customers FROM junior_staff;
```

---

## 2. User Roles vs. Database Roles
**User roles** and **database roles** simplify permission management by grouping users with similar privileges.

### A. User Roles
- **A role is like a template for users** (e.g., "Admin", "Developer", "Analyst").  
- Users inherit permissions from roles.  
- Modifying the role updates all users with that role.  

💡 **Example (Creating a Role in PostgreSQL):**  
```sql
CREATE ROLE analyst;
GRANT SELECT ON sales TO analyst;
GRANT analyst TO john_doe;
```
Now `john_doe` has **SELECT access** to `sales`.

---

### B. Database Roles
- Some databases (like SQL Server) have **predefined roles**.  
- **Fixed server roles** → Apply to the entire database server.  
- **Fixed database roles** → Apply within a specific database.  

#### Common Database Roles (SQL Server Example)
| Role | Description |
|------------|-------------|
| **db_owner** | Full control over the database. |
| **db_datareader** | Can read all data but not modify it. |
| **db_datawriter** | Can insert, update, and delete data. |
| **db_ddladmin** | Can modify schema (CREATE, ALTER, DROP). |
| **db_securityadmin** | Manages security settings (permissions). |
| **db_backupoperator** | Can back up the database. |

💡 **Example (Assigning a Database Role in SQL Server):**  
```sql
ALTER ROLE db_datareader ADD MEMBER employee_user;
```
Now `employee_user` can **read** all data in the database.

---

## 3. Best Practices for Managing Database Permissions
✅ **Use Roles Instead of Assigning Individual Permissions** – Makes management easier.  
✅ **Follow the Principle of Least Privilege** – Give only the necessary access.  
✅ **Use GRANT and REVOKE Carefully** – Avoid over-permissioning.  
✅ **Regularly Audit User Permissions** – Remove unused accounts and privileges.  
✅ **Restrict Superuser/Admin Access** – Minimize `db_owner` and `superuser` roles.  

---

## 4. When to Use Each?
| Scenario | Solution |
|----------|-----------|
| A developer needs to modify tables but not delete data. | **Grant `ALTER` and `INSERT/UPDATE`, but not `DELETE`**. |
| An analyst should only view reports, not edit them. | **Use `SELECT` and `db_datareader` role**. |
| A junior employee needs to access only customer data. | **Create a role with `SELECT` on `customers` table only**. |
| A database administrator should have full control. | **Assign `db_owner` or `superuser` role**. |

---

### Summary (80/20 Rule)
- **Permissions** control what users can do (**SELECT, INSERT, UPDATE, DELETE, etc.**).  
- **User roles** help manage privileges efficiently by grouping users.  
- **Database roles** provide predefined security structures (e.g., `db_owner`, `db_datareader`).  
- **Best practice:** Use roles instead of assigning direct permissions to users.  

---

### Database Permissions, User Roles, and Database Roles

Database permissions and roles are essential for managing security, restricting access, and ensuring users have the appropriate privileges to perform actions.  

---

## 1. Database Permissions
Permissions define what a user or role **can and cannot do** in a database. They can be **fine-grained** (e.g., per column) or **broad** (e.g., full database access).  

### Common Types of Permissions  
| Permission | Description |
|------------|-------------|
| **SELECT** | Read data from a table/view. |
| **INSERT** | Add new rows to a table. |
| **UPDATE** | Modify existing data in a table. |
| **DELETE** | Remove rows from a table. |
| **CREATE** | Create new tables, indexes, or databases. |
| **ALTER** | Modify table schema or other objects. |
| **DROP** | Delete a database object (table, view, index, etc.). |
| **GRANT** | Give permissions to other users/roles. |
| **REVOKE** | Remove previously granted permissions. |

💡 **Example (Granting Permissions in PostgreSQL):**  
```sql
GRANT SELECT, INSERT ON orders TO sales_user;
```

💡 **Example (Revoking Permissions in MySQL):**  
```sql
REVOKE DELETE ON customers FROM junior_staff;
```

---

## 2. User Roles vs. Database Roles
**User roles** and **database roles** simplify permission management by grouping users with similar privileges.

### A. User Roles
- **A role is like a template for users** (e.g., "Admin", "Developer", "Analyst").  
- Users inherit permissions from roles.  
- Modifying the role updates all users with that role.  

💡 **Example (Creating a Role in PostgreSQL):**  
```sql
CREATE ROLE analyst;
GRANT SELECT ON sales TO analyst;
GRANT analyst TO john_doe;
```
Now `john_doe` has **SELECT access** to `sales`.

---

### B. Database Roles
- Some databases (like SQL Server) have **predefined roles**.  
- **Fixed server roles** → Apply to the entire database server.  
- **Fixed database roles** → Apply within a specific database.  

#### Common Database Roles (SQL Server Example)
| Role | Description |
|------------|-------------|
| **db_owner** | Full control over the database. |
| **db_datareader** | Can read all data but not modify it. |
| **db_datawriter** | Can insert, update, and delete data. |
| **db_ddladmin** | Can modify schema (CREATE, ALTER, DROP). |
| **db_securityadmin** | Manages security settings (permissions). |
| **db_backupoperator** | Can back up the database. |

💡 **Example (Assigning a Database Role in SQL Server):**  
```sql
ALTER ROLE db_datareader ADD MEMBER employee_user;
```
Now `employee_user` can **read** all data in the database.

---

## 3. Best Practices for Managing Database Permissions
✅ **Use Roles Instead of Assigning Individual Permissions** – Makes management easier.  
✅ **Follow the Principle of Least Privilege** – Give only the necessary access.  
✅ **Use GRANT and REVOKE Carefully** – Avoid over-permissioning.  
✅ **Regularly Audit User Permissions** – Remove unused accounts and privileges.  
✅ **Restrict Superuser/Admin Access** – Minimize `db_owner` and `superuser` roles.  

---

## 4. When to Use Each?
| Scenario | Solution |
|----------|-----------|
| A developer needs to modify tables but not delete data. | **Grant `ALTER` and `INSERT/UPDATE`, but not `DELETE`**. |
| An analyst should only view reports, not edit them. | **Use `SELECT` and `db_datareader` role**. |
| A junior employee needs to access only customer data. | **Create a role with `SELECT` on `customers` table only**. |
| A database administrator should have full control. | **Assign `db_owner` or `superuser` role**. |

---

### Summary (80/20 Rule)
- **Permissions** control what users can do (**SELECT, INSERT, UPDATE, DELETE, etc.**).  
- **User roles** help manage privileges efficiently by grouping users.  
- **Database roles** provide predefined security structures (e.g., `db_owner`, `db_datareader`).  
- **Best practice:** Use roles instead of assigning direct permissions to users.  

---

## MongoDB 

### What is MongoDB?  
MongoDB is a **NoSQL, document-oriented database** designed for scalability, flexibility, and high-performance data storage and retrieval. Instead of tables and rows (like SQL), it stores data in **JSON-like documents** (BSON format) with dynamic schemas, making it ideal for unstructured or semi-structured data. 

---

### Key Features of BSON:
1. **Binary Encoding**:
   - BSON is a binary representation of JSON-like documents, which makes it more compact and faster to parse compared to plain text JSON.

2. **Extended Data Types**:
   - BSON supports additional data types that are not natively supported in JSON, such as:
     - `Date` (for storing dates and timestamps)
     - `Binary data` (for storing raw bytes)
     - `ObjectId` (a unique identifier used by MongoDB)
     - `Regular expressions`
     - `Timestamp` (for internal MongoDB use)
     - `Decimal128` (for high-precision floating-point numbers)
     - `JavaScript code` (with or without scope)

3. **Efficiency**:
   - BSON is designed for efficient encoding and decoding, making it faster to process than JSON in many cases.
   - It includes length prefixes for fields and values, which allows for quick traversal of the data structure without parsing the entire document.

4. **Lightweight**:
   - While BSON is slightly larger in size than JSON due to its additional metadata (e.g., length prefixes), it is still lightweight and optimized for storage and transmission.

5. **Interoperability**:
   - BSON is designed to be easily converted to and from JSON, making it compatible with applications that use JSON for data interchange.

---

### BSON vs JSON:
| Feature                | JSON                              | BSON                              |
|------------------------|-----------------------------------|-----------------------------------|
| **Encoding**           | Text-based (human-readable)      | Binary (not human-readable)      |
| **Data Types**         | Limited (strings, numbers, etc.) | Extended (dates, binary, etc.)   |
| **Size**               | Smaller (no metadata)            | Slightly larger (includes metadata) |
| **Parsing Speed**      | Slower (text parsing)            | Faster (binary parsing)          |
| **Use Case**           | Data interchange                 | Storage and data interchange     |

---

### CRUD Operations 

Here are the **CRUD operations** (Create, Read, Update, Delete) in MongoDB with JavaScript examples using the MongoDB Node.js driver or MongoDB shell:

---

### 1. Create (`insertOne` / `insertMany`) 
Add new documents to a collection.  
**Example:** Insert a single document into the `users` collection.  
```javascript
// Insert a user
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  status: "active"
});
```

---

### 2. Read (`find` / `findOne`) 
Query documents from a collection.  
**Example:** Find all users with `status: "active"`.  
```javascript
// Find all active users
const activeUsers = db.users.find({ status: "active" }).toArray();
console.log(activeUsers);

// Find a single user by email
const user = db.users.findOne({ email: "alice@example.com" });
console.log(user);
```

![alt text](image.png)

---

### 3. Update (`updateOne` / `updateMany`)
Modify existing documents.  
**Example:** Update Alice's age to `31`.  
```javascript
// Update a single document
db.users.updateOne(
  { email: "alice@example.com" }, // Filter
  { $set: { age: 31 } } // Update operation
);

// Increment age by 1
db.users.updateOne(
  { email: "alice@example.com" },
  { $inc: { age: 1 } }
);
```

---

### 4. Delete (`deleteOne` / `deleteMany`)
Remove documents from a collection.  
**Example:** Delete a user by email.  
```javascript
// Delete a single document
db.users.deleteOne({ email: "alice@example.com" });

// Delete all inactive users
db.users.deleteMany({ status: "inactive" });
```

---

### Full JavaScript Example (Using MongoDB Node.js Driver)
```javascript
const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("mydatabase");

    // 1. CREATE
    const insertResult = await db.collection("users").insertOne({
      name: "Bob",
      email: "bob@example.com",
      age: 25
    });
    console.log("Inserted ID:", insertResult.insertedId);

    // 2. READ
    const user = await db.collection("users").findOne({ name: "Bob" });
    console.log("Found user:", user);

    // 3. UPDATE
    const updateResult = await db.collection("users").updateOne(
      { name: "Bob" },
      { $set: { age: 26 } }
    );
    console.log("Updated count:", updateResult.modifiedCount);

    // 4. DELETE
    const deleteResult = await db.collection("users").deleteOne({ name: "Bob" });
    console.log("Deleted count:", deleteResult.deletedCount);

  } finally {
    await client.close();
  }
}

main().catch(console.error);
```

---

### Key Notes 
- **`insertOne` vs. `insertMany`**: Use `insertMany` to add multiple documents in one operation.  
- **`find` vs. `findOne`**: `find` returns a cursor (multiple documents), while `findOne` returns a single document.  
- **Update Operators**: Use `$set`, `$inc`, `$push`, etc., to modify fields.  
- **Delete Safety**: Always use a precise filter to avoid accidental data loss.  

---

### Key Takeaways 
1. **Document Model**:  
   - Data is stored as **collections of documents** (similar to JSON objects).  
   - Example:  
     ```json
     {
       "_id": "123",
       "name": "Alice",
       "orders": [ 
         { "product": "Laptop", "price": 999 }
       ]
     }
     ```  
   - Supports nested data (arrays, sub-documents), reducing the need for joins.  

2. **Scalability**:  
   - Horizontal scaling via **sharding** (distributing data across clusters).  
   - Automatic load balancing for high-traffic workloads.  

3. **Flexibility**:  
   - Schema-less design allows dynamic changes to data structures without downtime.  

4. **Indexing**:  
   - Supports secondary, compound, geospatial, and text indexes for fast queries.  

5. **Aggregation Pipeline**:  
   - Powerful framework for data transformations (e.g., filtering, grouping, joining).  

6. **High Availability**:  
   - Built-in replication with **replica sets** (auto-failover for fault tolerance).  

7. **Use Cases**:  
   - Real-time analytics, IoT, content management, catalogs, and apps with evolving data models.  

---

### Pareto Principle (80/20 Rule) in MongoDB 
The Pareto Principle states that **80% of results come from 20% of efforts**. Applied to MongoDB:  

#### 20% of Features → 80% of Results 
1. **Indexing**:  
   - Proper indexing (even on a few critical fields) eliminates 80% of slow queries.  
   - Example: Indexing `user_id` and `timestamp` for fast lookups.  

2. **Schema Design**:  
   - Denormalizing frequently accessed data (e.g., embedding vs. referencing) reduces 80% of read latency.  

3. **Sharding**:  
   - Correct shard key selection (e.g., `user_id` or `geo-location`) avoids 80% of scalability bottlenecks.  

4. **CRUD Operations**:  
   - Mastering basic `insert`, `find`, `update`, and `delete` commands covers 80% of daily use cases.  

5. **Aggregation Basics**:  
   - Using `$match`, `$group`, and `$project` handles 80% of data analysis tasks.  

---

#### 20% of Mistakes → 80% of Issues  
1. **Poor Indexing**:  
   - Missing or redundant indexes cause 80% of performance problems.  

2. **Over-Normalization**:  
   - Excessive joins (via `$lookup`) lead to 80% of complexity in queries.  

3. **Bad Shard Keys**:  
   - Choosing low-cardinality shard keys (e.g., `boolean` fields) creates hotspots.  

4. **Ignoring Write Concerns**:  
   - Not setting `writeConcern` or `readPreference` risks data loss or stale reads.  

5. **No Monitoring**:  
   - Failing to track metrics like **query latency** or **memory usage** hides 80% of inefficiencies.  

---

### Example: Pareto in Action
- **Effort**: Indexing the top 3 queried fields.  
- **Result**: Eliminates 80% of slow queries.  
- **Effort**: Denormalizing 20% of frequently joined data.  
- **Result**: Reduces 80% of read operations.  

---

### Conclusion  
Focus on **indexing, schema design, and sharding** to maximize MongoDB’s performance with minimal effort. Avoid common pitfalls like over-normalization and poor monitoring. By prioritizing these 20% of critical areas, you’ll achieve 80% of your database’s potential.

(Due to technical issues, the search service is temporarily unavailable.)

Absolutely! Aggregation in MongoDB is a powerful feature that allows you to process and analyze data in a pipeline of stages. Each stage transforms the documents as they pass through the pipeline. Below are some common aggregation commands and examples in JavaScript.

---

## MongoDB Aggregation Pipeline Stages
1. **`$match`**: Filters documents to pass only those that match the specified condition.
2. **`$group`**: Groups documents by a specified key and applies aggregate functions (e.g., `$sum`, `$avg`).
3. **`$sort`**: Sorts documents by specified fields.
4. **`$project`**: Selects specific fields to include or exclude in the output.
5. **`$unwind`**: Deconstructs an array field, creating a document for each element.
6. **`$lookup`**: Performs a left outer join with another collection.
7. **`$limit`**: Limits the number of documents passed to the next stage.
8. **`$skip`**: Skips a specified number of documents.

---

### Aggregation Examples

#### 1. Simple Aggregation: Count Active Users
Count the number of active users.
```javascript
db.users.aggregate([
  { $match: { status: "active" } }, // Filter active users
  { $group: { _id: null, count: { $sum: 1 } } } // Count documents
]);
```

---

#### 2. Group by Field: Total Sales by Product
Calculate total sales for each product.
```javascript
db.orders.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$price" } } }, // Group by product
  { $sort: { totalSales: -1 } } // Sort by total sales (descending)
]);
```

---

#### 3. Unwind Arrays: Analyze Tags
Unwind an array field (e.g., tags) and count occurrences.
```javascript
db.posts.aggregate([
  { $unwind: "$tags" }, // Deconstruct tags array
  { $group: { _id: "$tags", count: { $sum: 1 } } } // Count occurrences
]);
```

---

#### 4. Join Collections: Orders with User Details
Join `orders` with `users` to include user details.
```javascript
db.orders.aggregate([
  {
    $lookup: { // Join with users collection
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  },
  { $unwind: "$userDetails" }, // Flatten the joined array
  { $project: { orderId: "$_id", product: 1, user: "$userDetails.name" } } // Select fields
]);
```

---

#### 5. Pagination: Top 10 Active Users
Find the top 10 active users by activity count.
```javascript
db.users.aggregate([
  { $match: { status: "active" } }, // Filter active users
  { $sort: { activityCount: -1 } }, // Sort by activity count (descending)
  { $limit: 10 } // Limit to top 10
]);
```

---

#### 6. Complex Aggregation: Average Order Value by User
Calculate the average order value for each user.
```javascript
db.orders.aggregate([
  { $group: { _id: "$userId", totalSpent: { $sum: "$price" }, orderCount: { $sum: 1 } } }, // Group by user
  { $project: { userId: "$_id", avgOrderValue: { $divide: ["$totalSpent", "$orderCount"] } } } // Calculate average
]);
```

---

### Full JavaScript Example (Using MongoDB Node.js Driver)  
```javascript
const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("mydatabase");

    // Aggregation: Total sales by product
    const pipeline = [
      { $group: { _id: "$product", totalSales: { $sum: "$price" } } },
      { $sort: { totalSales: -1 } }
    ];

    const result = await db.collection("orders").aggregate(pipeline).toArray();
    console.log("Total sales by product:", result);

  } finally {
    await client.close();
  }
}

main().catch(console.error);
```

---

### Key Takeaways
1. **Pipeline Stages**: Combine stages like `$match`, `$group`, `$sort`, and `$project` to build complex queries.
2. **Performance**: Use indexes to optimize aggregation pipelines, especially for large datasets.
3. **Flexibility**: Aggregation is ideal for analytics, reporting, and data transformation.
4. **Joins**: Use `$lookup` to combine data from multiple collections.

By mastering aggregation, you can unlock MongoDB’s full potential for data analysis and transformation! 🚀

## MongoDB Interview Questions 

1. **Atomocity**: MongoDB writes are **atomic** for a given document - even if there are multiple writes within that document. However, writes are **not atomic** across **multiple documents**. 

 2. **Transactions**: There are libraries that can handle multi-document transactions. This happens through the transactions API. 

3. **Query performance/tuning**: MongoDB provides methods for getting stats on query performance. **Explain** is one of those methods to use on an existing query. 