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


**SQL Overview** 

- SQL is a declarative language - it expresses **what** to do (or what to query) **not how** to do it. 

### **The 20% of SQL That Covers 80% of What You Need**  

If you focus on these key concepts, you'll quickly become effective with SQL. Here’s the **Pareto Principle (80/20 rule) version of SQL**—the essentials you must master.  

---

## **1. SELECT – Retrieving Data (The Core of SQL)**
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

## **2. GROUP BY & Aggregations – Summarizing Data**
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

## **3. JOINs – Connecting Multiple Tables**
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

## **4. INSERT, UPDATE, DELETE – Changing Data**
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

## **5. Indexing – Speed Up Queries**
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

## **6. Subqueries & CTEs – Writing Cleaner Queries**
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

## **7. CASE – If-Else Logic in SQL**
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

### **🚀 Summary of What You Must Master**
1. **SELECT** – Pull data, use `WHERE`, `ORDER BY`  
2. **GROUP BY + Aggregations** – Count, sum, average data  
3. **JOINs** – Connect tables efficiently  
4. **INSERT, UPDATE, DELETE** – Modify data  
5. **Indexing** – Speed up queries  
6. **Subqueries & CTEs** – Break complex queries into smaller steps  
7. **CASE** – Add conditional logic  

### **SQL Operators: The Essential Guide**  

SQL **operators** allow you to filter, compare, and manipulate data effectively. Here’s a breakdown of the most important types of SQL operators that cover **80% of what you need**.

---

## **1. Comparison Operators (Used in WHERE Clauses)**
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

## **2. Logical Operators (Used to Combine Conditions)**
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

## **3. Arithmetic Operators (Used in Calculations)**
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

## **4. BETWEEN, IN, and LIKE (Advanced Filtering)**
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

## **5. IS NULL & IS NOT NULL (Handling Missing Data)**
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

## **6. EXISTS (Check if Data Exists in a Subquery)**
Returns `TRUE` if a subquery has results.

✅ **Example: Get users who have placed an order**
```sql
SELECT * FROM users 
WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
```
- If the subquery finds a matching `user_id` in `orders`, it returns `TRUE`.

---

## **7. String Operators (For Text Manipulation)**
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

### **🚀 SQL Operators Summary (80/20 Key Takeaways)**

1. **Comparison (`=`, `!=`, `>`, `<`, `>=`, `<=`)** → Filters rows based on conditions.  
2. **Logical (`AND`, `OR`, `NOT`)** → Combines conditions for better filtering.  
3. **Arithmetic (`+`, `-`, `*`, `/`, `%`)** → Used for math calculations.  
4. **BETWEEN, IN, LIKE** → Special filters for ranges, lists, and patterns.  
5. **IS NULL & EXISTS** → Handles missing data and checks if records exist.  
6. **String Operators (`||`, `CONCAT()`, `UPPER()`, `LOWER()`)** → Helps with text manipulation.

### **SQL `CASE` Operator: The Must-Know Guide**  

The `CASE` operator in SQL is like an **IF-ELSE** statement. It allows you to return different values based on conditions, making your queries **more dynamic and readable**.  

---

## **1. Basic `CASE` Syntax**
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

## **2. Example: Categorizing Users by Age**
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
### **🔹 Output**
| name   | age | age_category |
|--------|-----|-------------|
| Alice  | 16  | Teen        |
| Bob    | 35  | Adult       |
| Charlie| 70  | Senior      |

---

## **3. Example: Conditional Discounts**
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

## **4. Using `CASE` in `ORDER BY` (Custom Sorting)**
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

## **5. Using `CASE` in `GROUP BY` (Grouping by Categories)**
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

## **6. Using `CASE` with Aggregate Functions**
✅ **Scenario**: Get the total revenue for **online** and **offline** sales.
```sql
SELECT 
    SUM(CASE WHEN sale_type = 'Online' THEN amount ELSE 0 END) AS online_revenue,
    SUM(CASE WHEN sale_type = 'Offline' THEN amount ELSE 0 END) AS offline_revenue
FROM sales;
```
- This helps **segment totals dynamically**.

---

## **🚀 Key Takeaways for `CASE`**
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

### **Key Differences**  

| Feature              | **Materialized View** | **Non-Materialized View (Standard View)** |
|----------------------|---------------------|----------------------------------|
| **Data Storage**     | Stores actual data | Does **not** store data, only a query definition |
| **Performance**      | Faster queries (precomputed results) | Slower queries (data fetched dynamically) |
| **Freshness**        | Can become outdated; requires manual or scheduled refresh | Always up-to-date but recalculates each time |
| **Use Case**        | Best for improving performance on large datasets | Best for real-time data that frequently changes |
| **Update Mechanism** | Requires `REFRESH MATERIALIZED VIEW` | Automatically reflects changes from underlying tables |

---

### **Key Takeaways**  

1. **Materialized Views are Precomputed**  
   - They store actual data, making queries **much faster**, especially for expensive aggregations.  
   - Requires a refresh (`REFRESH MATERIALIZED VIEW`) to get updated data.  
   - Ideal for **reports, dashboards, and historical analysis** where real-time updates aren’t necessary.  

2. **Standard Views Are Dynamic & Lightweight**  
   - They don’t store data, just the query definition.  
   - Every time you query a view, it fetches fresh data from the underlying tables.  
   - Best for **real-time analytics and simplified query structures** where performance isn’t a major concern.  

---

### **When to Use Each**  

✅ **Use a Materialized View when:**  
- Querying large datasets with heavy aggregations (e.g., `SUM()`, `COUNT()`, `AVG()`).  
- You need faster reads and don’t require real-time updates.  
- You're optimizing performance in **data warehouses** like PostgreSQL, Oracle, or BigQuery.  

✅ **Use a Standard View when:**  
- You need **always up-to-date** data.  
- You’re dealing with frequently changing data (e.g., user session info, live transactions).  
- You want to **simplify complex queries** without additional storage overhead.  

---

### **Example Code**  

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

### **TL;DR**  
- **Materialized Views = Stored Data + Faster Reads + Needs Refresh**  
- **Standard Views = No Storage + Always Fresh + Slower Queries**  
- **Pick the right one based on performance vs. freshness trade-offs**  

Yes, a **materialized view** is very similar to a **summary table** because both store **precomputed data** for faster querying. However, they have some key differences:  

### **How They Are Similar**  
- Both **store data physically** (unlike standard views, which don’t).  
- Both improve performance by avoiding repeated expensive queries.  
- Both are used for **preaggregated or summarized** data, like sales totals or customer counts.  

### **Key Differences**  
| Feature | **Materialized View** | **Summary Table** |
|---------|---------------------|-----------------|
| **Definition** | A virtual table that stores query results and can be refreshed | A manually created table that stores precomputed data |
| **Update Method** | Uses `REFRESH MATERIALIZED VIEW` to update | Requires manual `INSERT`, `UPDATE`, or `DELETE` operations |
| **Flexibility** | Can be **automatically refreshed** in some databases | Requires manual maintenance or scheduled jobs |
| **Use Case** | Automates caching of results for performance | Stores long-term summary data for reporting |

### **When to Use Each**  
✅ **Use a Materialized View** when:  
- You need **automated refreshes** without managing table updates manually.  
- You're working with databases that support them (PostgreSQL, Oracle, etc.).  
- You want a **balance between fresh data and query speed**.  

✅ **Use a Summary Table** when:  
- You need **full control** over data updates and history.  
- Your database **does not support materialized views**.  
- You want to store **historical summaries** that don't need frequent updates.  

### **TL;DR**  
✔ **Materialized Views are like automated summary tables** that refresh with a command.  
✔ **Summary Tables require manual updates but offer full control over stored data.**  

## Case Study 

**Interview Question** 
    Design a database for an ecommerce website. 

    Define the type of database you would use and why. Define entity and relationships that satisfy storage requirements. 

**Solution** 
### Database Type: **Relational Database (SQL)**

**Why?**
- **Structured Data**: E-commerce websites typically deal with structured data like products, orders, customers, and payments, which fit well into the relational model.
- **ACID Compliance**: Ensures transactional integrity, which is crucial for operations like order processing and inventory management.
- **Mature Ecosystem**: Relational databases like PostgreSQL, MySQL, or SQL Server have robust tools, extensive documentation, and community support.
- **Scalability**: While NoSQL databases are often touted for scalability, modern relational databases can also scale effectively, especially with techniques like sharding and replication.

### Entities and Relationships

#### 1. **Users**
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

#### 2. **Products**
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

#### 3. **Categories**
   - **Attributes**:
     - `category_id` (Primary Key)
     - `name`
     - `description`
     - `parent_category_id` (Foreign Key to `Categories` for hierarchical structure)
   - **Relationships**:
     - One-to-Many with `Products`
     - Self-Referencing for hierarchical categories

#### 4. **Orders**
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

#### 5. **Order_Items**
   - **Attributes**:
     - `order_item_id` (Primary Key)
     - `order_id` (Foreign Key to `Orders`)
     - `product_id` (Foreign Key to `Products`)
     - `quantity`
     - `price_at_time_of_purchase`
   - **Relationships**:
     - Many-to-One with `Orders`
     - Many-to-One with `Products`

#### 6. **Payments**
   - **Attributes**:
     - `payment_id` (Primary Key)
     - `order_id` (Foreign Key to `Orders`)
     - `payment_method` (e.g., Credit Card, PayPal)
     - `amount`
     - `payment_date`
     - `status` (e.g., Completed, Failed)
   - **Relationships**:
     - Many-to-One with `Orders`

#### 7. **Addresses**
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

#### 8. **Reviews**
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

**Alternative Solution**

Here is the extracted text from the image:

---

### **Step 1 - Nature of Data (Dynamicity)**  

- Given that we have dynamic pricing structure and product descriptions we can approach storage in multiple ways:  
  - If dynamic fields are few in number and not directly queried, we can store them in MySQL BLOB types. Then we can de-serialize blobs at application level and create data models.  
    - **Drawback** of this approach is that any data migration may need to deserialize, inspect and then use data and it involves application logic in addition to database and hence latent.  
  - If above is not true and we see a lot of dynamic data then we can split databases and store dynamic entities in NoSQL databases (e.g. MongoDB) and use RDBMS only for transactions. This way transactional entities can have soft references to NoSQL entities and we need external resolutions (multiple queries and cache mix).  
    - **Drawback** of this approach is establishing and maintaining consistency between two database types.  
- Since we are starting out and most of the data schema is structured we can safely go with an RDBMS.  

---

Here is the extracted text from the image:

---

### **Step 2 - Type of Database(s)**  

- As discussed in the last slide we can use hosted RDBMS such as Amazon RDS or MySQL.  
- In the future if there is a need to support more and more dynamic types, then we can migrate certain (or most) tables to a NoSQL database.  
- At an application / service level we can use an ORM framework rather than direct database access so as to abstract the underlying database from our applications.  
- Since we have less scale of traffic, initially we don’t need a separate OLAP database or complex ETL tools. We can run data aggregation via daily batch queries for reporting.  

---


### Steps to answer the question 

- The questions will be vague and open ended. It's a good idea to start with requirements analysis and to ask clarifying questions
- Propose a design progression that provides a two way door for evolving requirements 
- Be explicit on what is out of scope (OLAP, ETL, etc, long term storage)

**Requirements Analysis**

Here is the extracted text from the image:

---

### **Requirement Analysis**  

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