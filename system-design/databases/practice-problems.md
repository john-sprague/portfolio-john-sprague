
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Practice Problems](#practice-problems)
  - [Foundational Subjective Question 1](#foundational-subjective-question-1)
    - [Question: Given a patient database with the following schema:](#question-given-a-patient-database-with-the-following-schema)
    - [Solution](#solution)
  - [Foundational Subjective Question =2](#foundational-subjective-question-2)
    - [Question: SQL Prompt](#question-sql-prompt)
    - [Solution](#solution-1)
  - [Foundational Subjective Question 3](#foundational-subjective-question-3)
    - [Question: How can you do a sql like join in mongodb?](#question-how-can-you-do-a-sql-like-join-in-mongodb)
    - [Solution:](#solution-2)
    - [1. `$lookup` Aggregation Stage (for Joining Collections):](#1-lookup-aggregation-stage-for-joining-collections)
      - [Syntax:](#syntax)
      - [Example:](#example)
      - [Explanation:](#explanation)
    - [2. Manual Joins in Application Code:](#2-manual-joins-in-application-code)
      - [Example (Pseudocode):](#example-pseudocode)
      - [Pros:](#pros)
      - [Cons:](#cons)
    - [3. Embedding Data (Denormalization):](#3-embedding-data-denormalization)
      - [Example:](#example-1)
      - [Pros:](#pros-1)
      - [Cons:](#cons-1)
    - [4. Using References (Manual Joins):](#4-using-references-manual-joins)
      - [Example:](#example-2)
    - [Summary:](#summary)
  - [Foundation Subjective Question 5](#foundation-subjective-question-5)
    - [Question:  What is BSON?](#question--what-is-bson)
    - [Solution](#solution-3)
    - [Key Features of BSON:](#key-features-of-bson)
    - [BSON vs JSON:](#bson-vs-json)
    - [Example of BSON:](#example-of-bson)
    - [How MongoDB Uses BSON:](#how-mongodb-uses-bson)
    - [Advantages of BSON:](#advantages-of-bson)
    - [Disadvantages of BSON:](#disadvantages-of-bson)
    - [When to Use BSON:](#when-to-use-bson)
    - [Summary:](#summary-1)
  - [Foundation Subjective Question 6](#foundation-subjective-question-6)
    - [Question: What is time series data? Provide examples.](#question-what-is-time-series-data-provide-examples)
    - [Solution What is Time Series Data?](#solution-what-is-time-series-data)
      - [Examples of Time Series Data:](#examples-of-time-series-data)
  - [Foundational Subjective Question 6](#foundational-subjective-question-6)
    - [Question: What is and Index in MongoDB](#question-what-is-and-index-in-mongodb)
    - [Solution Types of Indexes in MongoDB](#solution-types-of-indexes-in-mongodb)
    - [How to Create an Index in MongoDB](#how-to-create-an-index-in-mongodb)
      - [Syntax:](#syntax-1)
      - [Example 1: Create a Single Field Index](#example-1-create-a-single-field-index)
      - [Example 2: Create a Compound Index](#example-2-create-a-compound-index)
      - [Example 3: Create a Unique Index](#example-3-create-a-unique-index)
      - [Example 4: Create a TTL Index](#example-4-create-a-ttl-index)
      - [Example 5: Create a Text Index](#example-5-create-a-text-index)
    - [Viewing Indexes](#viewing-indexes)
    - [Dropping an Index](#dropping-an-index)
    - [Best Practices for Indexes](#best-practices-for-indexes)
  - [Foundation Subjective Question 7](#foundation-subjective-question-7)
    - [Question: What limitations of SQL databases are you aware of?](#question-what-limitations-of-sql-databases-are-you-aware-of)
    - [Solution:](#solution-4)
    - [1. Scalability Challenges](#1-scalability-challenges)
    - [2. Rigid Schema](#2-rigid-schema)
    - [3. Performance Issues with Large Datasets](#3-performance-issues-with-large-datasets)
    - [4. Complexity of Joins](#4-complexity-of-joins)
    - [5. Limited Support for Unstructured Data](#5-limited-support-for-unstructured-data)
    - [6. Cost](#6-cost)
    - [7. Concurrency and Locking](#7-concurrency-and-locking)
    - [8. Limited Flexibility for Hierarchical or Graph Data](#8-limited-flexibility-for-hierarchical-or-graph-data)
    - [9. Vendor Lock-In](#9-vendor-lock-in)
    - [10. Real-Time Analytics](#10-real-time-analytics)
    - [11. Global Distribution](#11-global-distribution)
    - [12. Limited Support for Polyglot Persistence](#12-limited-support-for-polyglot-persistence)
    - [When to Consider Alternatives](#when-to-consider-alternatives)
    - [Conclusion](#conclusion)
  - [Foundational Subjective Question 8](#foundational-subjective-question-8)
    - [Question: What are the benefits of NoSQL databases?](#question-what-are-the-benefits-of-nosql-databases)
    - [Solution:](#solution-5)
    - [1. Flexible Data Models](#1-flexible-data-models)
    - [2. Schema-less Design](#2-schema-less-design)
    - [3. Horizontal Scalability](#3-horizontal-scalability)
    - [4. High Performance](#4-high-performance)
    - [5. Global Distribution](#5-global-distribution)
    - [6. Handling Unstructured and Semi-Structured Data](#6-handling-unstructured-and-semi-structured-data)
    - [7. High Availability and Fault Tolerance](#7-high-availability-and-fault-tolerance)
    - [8. Polyglot Persistence Support](#8-polyglot-persistence-support)
    - [9. **Cost-Effective Scaling**](#9-cost-effective-scaling)
    - [10. Real-Time Capabilities](#10-real-time-capabilities)
    - [11. Ease of Development](#11-ease-of-development)
    - [12. Support for Big Data](#12-support-for-big-data)
    - [13. Eventual Consistency](#13-eventual-consistency)
    - [14. Use Case-Specific Optimization](#14-use-case-specific-optimization)
    - [When to Use NoSQL](#when-to-use-nosql)
    - [Conclusion](#conclusion-1)
  - [Foundational Subjective Question 9](#foundational-subjective-question-9)
    - [Question: A bank...](#question-a-bank)
    - [Solution: Recommended Database Type: NoSQL](#solution-recommended-database-type-nosql)
    - [Why Not Traditional SQL Databases?](#why-not-traditional-sql-databases)
    - [Key Requirements for Fraud Detection Systems](#key-requirements-for-fraud-detection-systems)
    - [Example Architecture](#example-architecture)
    - [Conclusion](#conclusion-2)
  - [Foundational Subjective Question 10](#foundational-subjective-question-10)
    - [Question: Name the SQL Joins and describe what they do](#question-name-the-sql-joins-and-describe-what-they-do)
    - [Solution](#solution-6)
- [Practice Problems](#practice-problems-1)
  - [Practice Problem 1](#practice-problem-1)
    - [Question: Write the following queries in SQL](#question-write-the-following-queries-in-sql)
    - [Solution](#solution-7)
  - [Practice Problem 2](#practice-problem-2)
    - [Question: What's the best storage solution](#question-whats-the-best-storage-solution)
    - [Solution:](#solution-8)
    - [Alternative Solution](#alternative-solution)
      - [Primary Database Choice: Relational Database (e.g., PostgreSQL, MySQL)](#primary-database-choice-relational-database-eg-postgresql-mysql)
      - [Second Choice: NoSQL Document Database (e.g., MongoDB, Couchbase)](#second-choice-nosql-document-database-eg-mongodb-couchbase)
      - [Tradeoffs and Workarounds](#tradeoffs-and-workarounds)
      - [Workarounds for Sub-Optimal Choices*](#workarounds-for-sub-optimal-choices)
        - [If Using NoSQL Instead of SQL:](#if-using-nosql-instead-of-sql)
        - [If Using SQL Instead of NoSQL:](#if-using-sql-instead-of-nosql)
      - [Final Recommendation](#final-recommendation)

<!-- /code_chunk_output -->

# Practice Problems 

## Foundational Subjective Question 1

### Question: Given a patient database with the following schema:

    ```sql
    patient_id        PRIMARY KEY INT
    first_name        TEXT
    last_name        TEXT
    gender        CHAR(1)
    birth_date        DATE
    city        TEXT
    primary key icon        province_id        CHAR(2)
    allergies        TEXT
    height        INT
    weight        INT
    ```

    Write a query keeping in mind the following conditions:

    Show all of the patients grouped into weight groups.
    Show the total amount of patients in each weight group.
    Order the list by the weight group descending.

    For example, if they weigh from 100 to 109 they are placed in the 100 weight group, 110-119 = 110 weight group, etc.

    Expected output:

    patients_in_group | weight_group
    53	130
    207	120
    445	110
    510	100
    396	90
    490	80
    624	70
    727	60
    442	50
    151	40

### Solution
    
    To achieve the desired output, we need to group patients into weight groups (e.g., 100-109 = 100, 110-119 = 110, etc.), count the number of patients in each group, and order the results by the weight group in descending order. Here's the SQL query to accomplish this:

```sql
SELECT
    COUNT(*) AS patients_in_group,
    FLOOR(weight / 10) * 10 AS weight_group
FROM
    patients
GROUP BY
    FLOOR(weight / 10) * 10
ORDER BY
    weight_group DESC;
```

**Explanation:**
1. **`FLOOR(weight / 10) * 10`**:
   - This expression groups patients into weight groups. For example:
     - If `weight = 105`, then `FLOOR(105 / 10) * 10 = 100`.
     - If `weight = 112`, then `FLOOR(112 / 10) * 10 = 110`.
   - This ensures that weights like 100-109 fall into the 100 group, 110-119 into the 110 group, and so on.

2. **`COUNT(*)`**:
   - Counts the number of patients in each weight group.

3. **`GROUP BY FLOOR(weight / 10) * 10`**:
   - Groups the results by the calculated weight group.

4. **`ORDER BY weight_group DESC`**:
   - Orders the results by the weight group in descending order.

**Example Output:**
The query will produce a result similar to the expected output:

| patients_in_group | weight_group |
|-------------------|--------------|
| 53                | 130          |
| 207               | 120          |
| 445               | 110          |
| 510               | 100          |
| 396               | 90           |
| 490               | 80           |
| 624               | 70           |
| 727               | 60           |
| 442               | 50           |
| 151               | 40           |

This query dynamically calculates the weight groups and counts the patients in each group, ensuring the results are ordered as required.

## Foundational Subjective Question =2

### Question: SQL Prompt 

    Given another table province (province_name, province_id) return the full name of all provinces (sorted alphabetically) where the number of males (gender = "M") is more than the number of females (gender = "F") in that province [link].

### Solution
    
    Yes, there is another way to solve this problem! Instead of using a subquery, you can use a **Common Table Expression (CTE)** to calculate the counts of males and females for each province. This approach is often more readable and modular, especially for complex queries.

Here’s how you can solve it using a CTE:

**Solution Using a CTE:**
```sql
WITH gender_counts AS (
    SELECT
        province_id,
        SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) AS male_count,
        SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) AS female_count
    FROM
        patients
    GROUP BY
        province_id
)
SELECT
    p.province_name
FROM
    province p
JOIN
    gender_counts gc ON p.province_id = gc.province_id
WHERE
    gc.male_count > gc.female_count
ORDER BY
    p.province_name ASC;
```

**Explanation:**

1. **CTE (`gender_counts`)**:
   - The CTE calculates the number of males and females in each province.
   - `SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END)` counts the number of males.
   - `SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END)` counts the number of females.
   - The results are grouped by `province_id`.

2. **Join with `province` Table**:
   - The main query joins the `province` table with the CTE (`gender_counts`) on `province_id` to get the province names.

3. **Filter (`WHERE` Clause)**:
   - The `WHERE` clause filters the results to include only those provinces where `male_count > female_count`.

4. **Sort (`ORDER BY` Clause)**:
   - The results are sorted alphabetically by `province_name` using `ORDER BY p.province_name ASC`.

---

**Alternative Solution Using `HAVING`:**
If you want to avoid using a CTE or subquery, you can use the `HAVING` clause directly in the `GROUP BY` query. However, this approach requires joining the `patients` and `province` tables first and then grouping by `province_id` and `province_name`.

Here’s how it works:

```sql
SELECT
    p.province_name
FROM
    patients pt
JOIN
    province p ON pt.province_id = p.province_id
GROUP BY
    p.province_id, p.province_name
HAVING
    SUM(CASE WHEN pt.gender = 'M' THEN 1 ELSE 0 END) > SUM(CASE WHEN pt.gender = 'F' THEN 1 ELSE 0 END)
ORDER BY
    p.province_name ASC;
```

**Explanation:**

1. **Join `patients` and `province` Tables**:
   - The `patients` table is joined with the `province` table on `province_id`.

2. **Group By `province_id` and `province_name`**:
   - The results are grouped by `province_id` and `province_name` to calculate counts for each province.

3. **Filter with `HAVING`**:
   - The `HAVING` clause filters the groups to include only those where the count of males is greater than the count of females.

4. **Sort with `ORDER BY`**:
   - The results are sorted alphabetically by `province_name`.

---

**Comparison of Approaches:**
| Approach               | Pros                                      | Cons                                      |
|------------------------|-------------------------------------------|-------------------------------------------|
| **Subquery**           | Simple and straightforward.               | Can become hard to read for complex logic.|
| **CTE**                | Modular and easy to read.                 | Slightly more verbose.                    |
| **HAVING with JOIN**   | No need for subqueries or CTEs.           | Requires grouping by multiple columns.    |

---

**Which Approach Should You Use?**
- If you prefer **readability and modularity**, use the **CTE** approach.
- If you want a **compact solution**, use the **subquery** approach.
- If you want to avoid subqueries or CTEs, use the **`HAVING` with `JOIN`** approach.

All three approaches will give you the same result. Let me know if you need further clarification! 😊

## Foundational Subjective Question 3

### Question: How can you do a sql like join in mongodb?

### Solution:

In MongoDB, there is no direct equivalent of SQL's `JOIN` operation because MongoDB is a **NoSQL database** and is designed to store data in a denormalized, document-oriented format. However, MongoDB provides a few ways to achieve similar functionality to SQL joins:

---

### 1. `$lookup` Aggregation Stage (for Joining Collections):
The `$lookup` stage in MongoDB's aggregation framework allows you to perform a left outer join between two collections. This is the closest equivalent to SQL's `JOIN`.

#### Syntax:
```javascript
db.collection.aggregate([
    {
        $lookup: {
            from: "otherCollection",       // The collection to join with
            localField: "localFieldName", // Field from the input documents
            foreignField: "foreignFieldName", // Field from the "otherCollection"
            as: "outputArrayField"        // Name of the output array field
        }
    }
]);
```

#### Example:
Suppose you have two collections:
- `patients` (contains patient data with a `province_id` field)
- `provinces` (contains province data with a `province_id` field)

You can join these collections using `$lookup`:

```javascript
db.patients.aggregate([
    {
        $lookup: {
            from: "provinces",           // Join with the "provinces" collection
            localField: "province_id",   // Field in the "patients" collection
            foreignField: "province_id", // Field in the "provinces" collection
            as: "province_info"          // Output array field containing joined data
        }
    },
    {
        $unwind: "$province_info"        // Deconstruct the array (optional, if you want a 1:1 join)
    },
    {
        $project: {
            first_name: 1,
            last_name: 1,
            province_name: "$province_info.province_name"
        }
    }
]);
```

#### Explanation:
- `$lookup` performs a left outer join between `patients` and `provinces` on the `province_id` field.
- The joined data is stored in the `province_info` array field.
- `$unwind` is used to deconstruct the array if you want a 1:1 relationship (optional).
- `$project` is used to include only specific fields in the output.

---

### 2. Manual Joins in Application Code:
If you don't want to use the aggregation framework, you can manually perform joins in your application code. This involves:
1. Querying the first collection (e.g., `patients`).
2. Extracting the relevant fields (e.g., `province_id`).
3. Querying the second collection (e.g., `provinces`) using the extracted fields.
4. Combining the results in your application logic.

#### Example (Pseudocode):
```javascript
const patients = db.patients.find({});
patients.forEach(patient => {
    const province = db.provinces.findOne({ province_id: patient.province_id });
    console.log({
        first_name: patient.first_name,
        last_name: patient.last_name,
        province_name: province.province_name
    });
});
```

#### Pros:
- More control over the join logic.
- Useful for complex joins that `$lookup` cannot handle.

#### Cons:
- Less efficient than `$lookup` because it requires multiple queries.
- More code to write and maintain.

---

### 3. Embedding Data (Denormalization):
In MongoDB, it’s common to **embed related data** directly within documents instead of using joins. This is a design choice that aligns with MongoDB's document-oriented nature.

#### Example:
Instead of having separate `patients` and `provinces` collections, you could embed province information directly in the `patients` collection:

```javascript
{
    _id: 1,
    first_name: "John",
    last_name: "Doe",
    province: {
        province_id: "NY",
        province_name: "New York"
    }
}
```

#### Pros:
- No need for joins; all related data is in one document.
- Faster read operations.

#### Cons:
- Data duplication if the same province is referenced by many patients.
- Harder to update province information (requires updating multiple documents).

---

### 4. Using References (Manual Joins):
If you prefer to keep data normalized, you can store references to related documents (similar to foreign keys in SQL) and manually resolve them in your application code.

#### Example:
- `patients` collection:
  ```javascript
  {
      _id: 1,
      first_name: "John",
      last_name: "Doe",
      province_id: "NY"
  }
  ```

- `provinces` collection:
  ```javascript
  {
      _id: "NY",
      province_name: "New York"
  }
  ```

You can then resolve the `province_id` reference in your application code.

---

### Summary:
| Method                  | Description                                                                 | Use Case                                                                 |
|-------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **`$lookup`**           | Aggregation stage for left outer joins.                                     | Best for simple joins between collections.                              |
| **Manual Joins**        | Perform joins in application code using multiple queries.                   | Useful for complex joins or when `$lookup` is not sufficient.           |
| **Embedding Data**      | Embed related data directly in documents.                                   | Best for read-heavy workloads with small, related datasets.             |
| **Using References**    | Store references to related documents and resolve them in application code. | Best for normalized data with frequent updates.                         |

For most cases, **`$lookup`** is the recommended approach for performing SQL-like joins in MongoDB. However, embedding data or using references can be more efficient depending on your use case and data model. Let me know if you need further clarification! 😊

## Foundation Subjective Question 5 

---

### Question:  What is BSON?

---

### Solution 

    **BSON** (Binary JSON) is a binary-encoded serialization format used by MongoDB to store documents and exchange data between the MongoDB server and its clients. It is a lightweight, efficient, and flexible format that extends JSON (JavaScript Object Notation) to include additional data types and optimizations for performance.

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

### Example of BSON:
A JSON document like this:
```json
{
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "age": 30,
    "birthdate": "1993-05-15T00:00:00Z",
    "isActive": true
}
```

Would be represented in BSON as a binary-encoded format with additional metadata, such as:
- Length prefixes for fields and values.
- Type identifiers for each field (e.g., string, date, boolean).

---

### How MongoDB Uses BSON:
1. **Storage**:
   - MongoDB stores documents in BSON format on disk. This allows for efficient storage and retrieval of data.

2. **Network Transmission**:
   - When data is sent between the MongoDB server and client (e.g., a driver or application), it is transmitted in BSON format.

3. **Querying**:
   - MongoDB queries and indexes are based on BSON documents. The BSON format allows for efficient querying and indexing of data.

4. **Drivers**:
   - MongoDB drivers (e.g., for Python, Node.js, Java) automatically convert BSON to and from native data structures in the respective programming language.

---

### Advantages of BSON:
1. **Performance**:
   - BSON's binary format is faster to parse and process than JSON, especially for large datasets.

2. **Rich Data Types**:
   - BSON supports a wider range of data types, making it more suitable for storing complex data.

3. **Compactness**:
   - While slightly larger than JSON, BSON is still compact and efficient for storage and transmission.

4. **Interoperability**:
   - BSON can be easily converted to JSON for compatibility with other systems.

---

### Disadvantages of BSON:
1. **Not Human-Readable**:
   - BSON is a binary format, so it cannot be easily read or edited by humans.

2. **Slightly Larger Size**:
   - BSON includes additional metadata, which can make it slightly larger than JSON.

---

### When to Use BSON:
- When working with MongoDB (as it is the native format for storing and exchanging data).
- When performance and efficiency are critical.
- When you need to store complex data types that are not supported by JSON.

---

### Summary:
BSON is a binary-encoded format that extends JSON to support additional data types and optimizations for performance. It is the native format used by MongoDB for storing and exchanging data, making it a key component of MongoDB's architecture. While not human-readable, BSON is highly efficient and versatile, making it ideal for database and network operations.

## Foundation Subjective Question 6 

### Question: What is time series data? Provide examples.

### Solution What is Time Series Data?

Time series data is a collection of observations recorded sequentially over time at consistent intervals. It is used to track trends, patterns, and anomalies over time, making it valuable in fields such as finance, weather forecasting, stock markets, IoT sensor data, and business analytics.  

**Key characteristics of time series data:**  
- **Time Dependency:** Data points are ordered chronologically.  
- **Trend & Seasonality:** Patterns may repeat over time (e.g., sales spikes during holidays).  
- **Stationarity:** Some models require constant statistical properties over time.  

#### Examples of Time Series Data:
- Stock market prices recorded daily  
- Website traffic per hour  
- Temperature measurements every second  
- Sales revenue per month  

---

## Foundational Subjective Question 6 

### Question: What is and Index in MongoDB

    What is Index in MongoDB and how to create one?

### Solution Types of Indexes in MongoDB
MongoDB supports several types of indexes, including:
1. **Single Field Index**: Indexes a single field in a collection.
2. **Compound Index**: Indexes multiple fields in a collection.
3. **Multikey Index**: Indexes array fields.
4. **Text Index**: Supports text search queries on string content.
5. **Geospatial Index**: Supports geospatial queries.
6. **Hashed Index**: Indexes the hash of a field, useful for sharding.
7. **Wildcard Index**: Indexes fields dynamically based on a wildcard pattern.

### How to Create an Index in MongoDB
You can create an index using the `createIndex()` method in MongoDB.

#### Syntax:
```javascript
db.collection.createIndex({ <field>: <order> }, { <options> })
```

- `<field>`: The field(s) to index.
- `<order>`: The order of the index (`1` for ascending, `-1` for descending).
- `<options>`: Optional parameters for the index (e.g., `unique`, `sparse`, `expireAfterSeconds`).

---

#### Example 1: Create a Single Field Index
To create an ascending index on the `name` field in a collection called `users`:
```javascript
db.users.createIndex({ name: 1 })
```

---

#### Example 2: Create a Compound Index
To create a compound index on the `name` (ascending) and `age` (descending) fields:
```javascript
db.users.createIndex({ name: 1, age: -1 })
```

---

#### Example 3: Create a Unique Index
To create a unique index on the `email` field:
```javascript
db.users.createIndex({ email: 1 }, { unique: true })
```

---

#### Example 4: Create a TTL Index
To create a TTL (Time-To-Live) index on the `createdAt` field that automatically deletes documents after 3600 seconds (1 hour):
```javascript
db.users.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
```

---

#### Example 5: Create a Text Index
To create a text index on the `description` field for full-text search:
```javascript
db.articles.createIndex({ description: "text" })
```

---

### Viewing Indexes
To view the indexes on a collection, use the `getIndexes()` method:
```javascript
db.collection.getIndexes()
```

---

### Dropping an Index
To drop an index, use the `dropIndex()` method:
```javascript
db.collection.dropIndex({ name: 1 })
```

---

### Best Practices for Indexes
1. **Index Selectivity**: Choose fields with high selectivity (e.g., unique values) for indexing.
2. **Compound Indexes**: Use compound indexes for queries that filter on multiple fields.
3. **Avoid Over-Indexing**: Too many indexes can slow down write operations.
4. **Monitor Performance**: Use the `explain()` method to analyze query performance and index usage.

By creating and managing indexes effectively, you can significantly improve the performance of your MongoDB queries.

## Foundation Subjective Question 7

### Question: What limitations of SQL databases are you aware of?

### Solution: 

SQL databases, while powerful and widely used, have certain limitations that can make them less suitable for specific use cases. Here are some of the key limitations:

---

### 1. Scalability Challenges
   - **Vertical Scaling**: SQL databases typically scale vertically (adding more resources to a single server), which can become expensive and hit hardware limits.
   - **Horizontal Scaling**: Scaling horizontally (adding more servers) is more complex in SQL databases compared to NoSQL databases, which are designed for distributed architectures.

---

### 2. Rigid Schema
   - SQL databases require a predefined schema, which can make it difficult to adapt to changes in data structure.
   - Altering the schema (e.g., adding or removing columns) can be time-consuming and may require downtime or complex migrations.

---

### 3. Performance Issues with Large Datasets
   - SQL databases can struggle with very large datasets or high write/read throughput, especially when complex joins or transactions are involved.
   - Indexing helps, but it can also slow down write operations and increase storage requirements.

---

### 4. Complexity of Joins
   - While joins are powerful, they can become computationally expensive, especially when dealing with large tables or multiple joins in a single query.
   - Overuse of joins can lead to performance bottlenecks.

---

### 5. Limited Support for Unstructured Data
   - SQL databases are optimized for structured data (tables with rows and columns).
   - Handling unstructured or semi-structured data (e.g., JSON, XML) is possible but often less efficient compared to NoSQL databases like MongoDB.

---

### 6. Cost
   - Many enterprise-grade SQL databases (e.g., Oracle, SQL Server) are expensive due to licensing fees.
   - Open-source alternatives like MySQL and PostgreSQL are free but may require additional investment in expertise and infrastructure.

---

### 7. Concurrency and Locking
   - SQL databases use locking mechanisms to ensure ACID (Atomicity, Consistency, Isolation, Durability) compliance, which can lead to contention and reduced performance in high-concurrency environments.
   - Deadlocks can occur when multiple transactions compete for the same resources.

---

### 8. Limited Flexibility for Hierarchical or Graph Data
   - SQL databases are not well-suited for hierarchical data (e.g., organizational charts) or graph data (e.g., social networks).
   - Specialized databases like graph databases (e.g., Neo4j) or document databases (e.g., MongoDB) are better suited for these use cases.

---

### 9. Vendor Lock-In
   - SQL databases often use proprietary extensions or features, making it difficult to migrate to another database system without significant effort.
   - Differences in SQL dialects (e.g., MySQL vs. PostgreSQL) can also create compatibility issues.

---

### 10. Real-Time Analytics
   - SQL databases are not optimized for real-time analytics or streaming data.
   - Specialized systems like time-series databases (e.g., InfluxDB) or data warehouses (e.g., Snowflake) are better suited for these tasks.

---

### 11. Global Distribution
   - SQL databases are not inherently designed for globally distributed architectures, which can lead to latency issues for users in different regions.
   - NoSQL databases often provide better support for distributed systems and eventual consistency.

---

### 12. Limited Support for Polyglot Persistence
   - Modern applications often require multiple data models (e.g., relational, document, key-value). SQL databases are not well-suited for polyglot persistence, where different types of databases are used for different parts of an application.

---

### When to Consider Alternatives
If your use case involves:
- Unstructured or semi-structured data,
- High write/read throughput,
- Horizontal scaling,
- Real-time analytics,
- Hierarchical or graph data,
- Global distribution,

you might want to consider NoSQL databases (e.g., MongoDB, Cassandra, Redis) or specialized databases (e.g., Neo4j, InfluxDB).

---

### Conclusion
SQL databases are excellent for structured data, complex queries, and transactional integrity, but they have limitations in scalability, flexibility, and performance for certain modern use cases. Understanding these limitations can help you choose the right database for your application.

## Foundational Subjective Question 8

### Question: What are the benefits of NoSQL databases? 

### Solution: 

NoSQL databases offer several benefits that make them well-suited for modern applications, especially those requiring flexibility, scalability, and high performance. Here are the key benefits of NoSQL databases:

---

### 1. Flexible Data Models
   - NoSQL databases support a variety of data models, including:
     - **Document** (e.g., MongoDB, Couchbase): Stores data in JSON-like documents.
     - **Key-Value** (e.g., Redis, DynamoDB): Stores data as key-value pairs.
     - **Column-Family** (e.g., Cassandra, HBase): Stores data in columns rather than rows.
     - **Graph** (e.g., Neo4j, Amazon Neptune): Optimized for graph structures and relationships.
   - This flexibility allows developers to choose the best data model for their specific use case.

---

### 2. Schema-less Design
   - NoSQL databases do not require a fixed schema, making it easier to adapt to changing data structures.
   - This is particularly useful for applications with evolving requirements or unstructured/semi-structured data.

---

### 3. Horizontal Scalability
   - NoSQL databases are designed to scale horizontally by distributing data across multiple servers or nodes.
   - This makes them ideal for handling large volumes of data and high traffic loads.

---

### 4. High Performance
   - NoSQL databases are optimized for specific use cases, such as high-speed read/write operations or low-latency access.
   - They often outperform SQL databases for workloads involving large datasets, real-time analytics, or high concurrency.

---

### 5. Global Distribution
   - Many NoSQL databases (e.g., MongoDB, Cassandra) are designed for globally distributed architectures.
   - They support multi-region replication and provide low-latency access for users worldwide.

---

### 6. Handling Unstructured and Semi-Structured Data
   - NoSQL databases excel at storing and querying unstructured (e.g., JSON, XML) and semi-structured data.
   - This makes them a better choice for applications like content management, social media, and IoT.

---

### 7. High Availability and Fault Tolerance
   - NoSQL databases often use distributed architectures with built-in replication and failover mechanisms.
   - This ensures high availability and fault tolerance, even in the event of hardware failures.

---

### 8. Polyglot Persistence Support
   - NoSQL databases enable polyglot persistence, where different types of databases are used for different parts of an application.
   - For example, a key-value store might be used for caching, while a document store handles the main data.

---

### 9. **Cost-Effective Scaling**
   - NoSQL databases are often open-source or have pay-as-you-go pricing models, making them more cost-effective for scaling.
   - They can run on commodity hardware, reducing infrastructure costs.

---

### 10. Real-Time Capabilities
   - Many NoSQL databases are optimized for real-time data processing and analytics.
   - They are well-suited for use cases like real-time recommendations, fraud detection, and IoT data streams.

---

### 11. Ease of Development
   - NoSQL databases often provide simpler APIs and query languages compared to SQL databases.
   - This reduces development time and complexity, especially for applications with dynamic or evolving data models.

---

### 12. Support for Big Data
   - NoSQL databases are designed to handle big data workloads, including large-scale data storage, processing, and analytics.
   - They integrate well with big data tools like Hadoop and Spark.

---

### 13. Eventual Consistency
   - Many NoSQL databases use eventual consistency, which allows for faster write operations and better performance in distributed systems.
   - While this may not be suitable for all use cases, it is ideal for applications where immediate consistency is not critical.

---

### 14. Use Case-Specific Optimization
   - NoSQL databases are often optimized for specific use cases:
     - **MongoDB**: Document storage and retrieval.
     - **Cassandra**: High write throughput and fault tolerance.
     - **Redis**: Low-latency caching and real-time analytics.
     - **Neo4j**: Graph-based data and relationships.

---

### When to Use NoSQL
NoSQL databases are a great choice for applications that require:
- Flexible data models,
- High scalability and performance,
- Real-time data processing,
- Handling unstructured or semi-structured data,
- Global distribution and high availability.

---

### Conclusion
NoSQL databases provide significant advantages in terms of flexibility, scalability, and performance, making them ideal for modern, data-intensive applications. However, they are not a one-size-fits-all solution, and the choice between SQL and NoSQL should be based on the specific requirements of your application.

For a bank aiming to enhance fraud protection through data analysis, a **NoSQL database** is generally the best-suited choice due to its ability to handle high-volume, real-time data processing, scalability, and flexibility. Here's a structured recommendation:

---

## Foundational Subjective Question 9

### Question: A bank...

    A bank is looking to tighten up its fraud protection by performing an analysis of data. Which type of database will be the best suited for this?

### Solution: Recommended Database Type: NoSQL

**Primary Choices:**  
1. **Document Database (e.g., MongoDB)**  
   - **Why?**  
     - **Real-Time Analysis**: Efficiently processes streaming transaction data for immediate fraud detection.  
     - **Flexible Schema**: Adapts to evolving fraud patterns by storing unstructured/semi-structured data (e.g., transaction metadata, user behavior logs).  
     - **Integration with ML/AI**: Compatible with machine learning models (via tools like PySpark or TensorFlow) to identify anomalies or predict fraud.  
     - **Aggregation Pipelines**: Supports complex aggregations to detect unusual patterns (e.g., spikes in transaction amounts, geolocation mismatches).  

2. **Column-Family Database (e.g., Apache Cassandra)**  
   - **Why?**  
     - **High Write Throughput**: Handles massive volumes of transactional data (e.g., millions of daily transactions).  
     - **Horizontal Scalability**: Scales across distributed clusters to manage data growth.  
     - **Fault Tolerance**: Built-in replication ensures availability even during hardware failures.  
     - **Time-Series Data**: Tracks transaction histories for trend analysis (e.g., repeated small transactions preceding a large fraudulent one).  

3. **Graph Database (e.g., Neo4j)**  

    Graph databases excel at modeling and analyzing relationships between entities—like accounts, transactions, and devices—which is key to identifying fraud rings or unusual patterns. They let you quickly traverse and analyze the complex web of interactions that typical relational databases might struggle with.
   - **Why?**  
     - **Relationship Analysis**: Identifies complex fraud networks (e.g., detecting rings of accounts with shared attributes or unusual interaction patterns).  
     - **Real-Time Insights**: Traverses connections between entities quickly to flag suspicious activity.  
     

---

### Why Not Traditional SQL Databases?
While SQL databases (e.g., PostgreSQL, Oracle) excel at ACID compliance and complex joins, they face limitations for fraud detection:  
- **Scalability**: Vertical scaling struggles with high-velocity transaction data.  
- **Rigid Schema**: Difficulty adapting to dynamic fraud patterns requiring frequent schema changes.  
- **Real-Time Performance**: Joins and locks can slow down write-heavy workloads.  

---

### Key Requirements for Fraud Detection Systems
1. **Real-Time Processing**: Detect fraud *as transactions occur* (e.g., using streaming platforms like Apache Kafka with NoSQL databases).  
2. **Scalability**: Handle petabytes of historical and real-time data.  
3. **Flexibility**: Incorporate new data sources (e.g., social media, device fingerprints) without schema redesign.  
4. **Machine Learning Integration**: Train models on historical fraud data and deploy them for real-time predictions.  
5. **High Availability**: Ensure 24/7 uptime with distributed architectures (e.g., Cassandra’s multi-node clusters).  

---

### Example Architecture
1. **Data Ingestion**:  
   - Use Kafka or AWS Kinesis to stream transaction data in real time.  
2. **Storage**:  
   - **NoSQL (MongoDB/Cassandra)**: Store raw transaction data and user profiles.  
   - **Graph Database (Neo4j)**: Map relationships between accounts, devices, and IP addresses.  
3. **Processing**:  
   - Apply real-time rules (e.g., "flag transactions > $10,000 from new devices") using tools like Apache Flink.  
   - Run ML models (e.g., anomaly detection) on stored data.  
4. **Alerting**:  
   - Trigger alerts via systems like Elasticsearch or Splunk for suspicious activity.  

---

### Conclusion
For a bank’s fraud detection system, **MongoDB** (document) or **Cassandra** (column-family) are optimal for scalable, real-time transaction analysis. If the fraud strategy involves uncovering complex networks (e.g., money laundering), supplement with a **graph database (Neo4j)**. NoSQL’s flexibility, scalability, and compatibility with modern analytics tools make it the superior choice over traditional SQL databases for this use case.

## Foundational Subjective Question 10

### Question: Name the SQL Joins and describe what they do

### Solution 

- **INNER JOIN:**  
  Returns only the rows where there is a match in both tables. If there’s no match, the row is not included.

- **LEFT (OUTER) JOIN:**  
  Returns all rows from the left table, and the matching rows from the right table. If no match exists in the right table, the result includes NULLs for those columns.

- **RIGHT (OUTER) JOIN:**  
  Returns all rows from the right table, and the matching rows from the left table. If no match exists in the left table, the result includes NULLs for those columns.

- **FULL (OUTER) JOIN:**  
  Returns rows when there is a match in one of the tables. This means it includes all rows from both tables, with NULLs filling in where no match exists.

- **CROSS JOIN:**  
  Returns the Cartesian product of the two tables. Every row from the first table is combined with every row from the second table.

- **SELF JOIN:**  
  Joins a table to itself. This is useful when you want to compare rows within the same table, often using table aliases to distinguish the instances.

# Practice Problems 

## Practice Problem 1

### Question: Write the following queries in SQL

   Companies(company_id: integer, company_name: string)
   JobTitles(jobtitle_id: integer, jobtitle_name: string)
   SalaryInfo(company_id: integer, jobtitle_id: integer, average_salary: real)

   The SalaryInfo relation lists the average salaries of JobTitles by Companies. Write the
   following queries in SQL:

   1. Find the company_names of companies that have every job title.
   2. For each job title, find the company_name that provides the highest aveage_salary.
   3. Find the jobtitle_name of job titles existing at “Interview Kickstart”, and nowhere else.

### Solution 

```sql 
SELECT c.company_name
FROM Companies c, SalaryInfo s
WHERE c.company_id = s.company_id
GROUP BY c.company_id
HAVING COUNT(DISTINCT(s.jobtitle_id)) = (SELECT count(*) from JobTitles);

SELECT c.company_name, jt.jobtitle_name
FROM Companies c, JobTitles jt
INNER JOIN
(SELECT DISTINCT(jobtitle_id), MAX(average_salary), company_id FROM salaryInfo GROUP BY jobtitle_id) AS s
ON c.company_id = s.company_id AND jt.jobtitle_id = s.jobtitle_id;


SELECT jt.jobtitle_name
FROM JobTitles jt, SalaryInfo s
WHERE jt.jobtitle_id = s.jobtitle_id
AND s.company_id =
(SELECT company_id FROM Companies
WHERE company_name = "Interview Kickstart"
AND s.jobtitle_id NOT IN (SELECT s2.jobtitle_id FROM SalaryInfo s2 WHERE s2.company_id <> s.company_id AND s2.jobtitle_id = s.jobtitle_id);
```
## Practice Problem 2

### Question: What's the best storage solution 

   Imagine a service that allows users to query movies based on a number of filters such as release year, credited talent, and rating. What type of database would you likely use to implement the data storage component?

   If your preferred database type were not available for some reason, what would be your second choice?

   Discuss the tradeoffs between the two and explain the workarounds you could use to minimize the impact of using a sub-optimal database type.

### Solution: 


   Clarifying Questions:

   Release Year: 1950-2025 
   Credited Talent: ["actor 1", "actor 2"]
   Rating: 1-5

   I'd recommend a NoSQL database because there's no need for a strict schema, joins, or relationships, or normalization. Document based dbs excel at querying nested data. Now the trade off here is that we will have redundancy and some duplicate data in addition to limited ability to join across multiple documents. 

   In addition, SQL databases are great for transactions and for ACID compliance. There is no need for that in this use case 

   My second choice would be a SQL database where we store have normalized tables where we can utilized join operations to filter the data accordingly. The data will be mostly structured and this will provide us the ability to set up indexes to speed up filtering. 

### Alternative Solution 

#### Primary Database Choice: Relational Database (e.g., PostgreSQL, MySQL)
**Why?**  
- **Structured Data**: Movie metadata (release year, rating) and talent relationships (actors, directors) fit naturally into tabular schemas.  
- **Complex Queries**: Filters like "movies with *both* Actor X and Director Y released after 2010 with a rating > 8" are efficiently handled with SQL joins and indexing.  
- **ACID Compliance**: Ensures transactional integrity for updates (e.g., adding/removing credits).  
- **Full-Text Search**: Tools like PostgreSQL’s `tsvector` or integrated extensions (e.g., `pg_trgm`) can handle fuzzy title searches.  
- **JSON Support**: Modern SQL databases (e.g., PostgreSQL) support semi-structured data for flexible fields like genre tags or dynamic metadata.  

**Example Schema:**  
```sql  
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title TEXT,
  release_year INT,
  rating FLOAT,
  genres JSONB  -- e.g., ["Action", "Drama"]
);

CREATE TABLE talent (
  id SERIAL PRIMARY KEY,
  name TEXT,
  role TEXT  -- e.g., "Actor", "Director"
);

CREATE TABLE credits (
  movie_id INT REFERENCES movies(id),
  talent_id INT REFERENCES talent(id),
  PRIMARY KEY (movie_id, talent_id)
);
```  
**Query Example:**  
```sql  
SELECT m.title 
FROM movies m
JOIN credits c ON m.id = c.movie_id
JOIN talent t ON c.talent_id = t.id
WHERE m.release_year > 2010
  AND m.rating >= 8.0
  AND t.name = 'Christopher Nolan'
  AND t.role = 'Director';
```  

---

#### Second Choice: NoSQL Document Database (e.g., MongoDB, Couchbase)
**Why?**  
- **Flexible Schema**: Accommodate evolving metadata (e.g., adding new filters like "streaming platform" without schema migrations).  
- **Denormalization**: Embed credits directly in movie documents for faster reads:  
  ```json
  {
    "title": "Inception",
    "release_year": 2010,
    "rating": 8.8,
    "credits": [
      { "name": "Christopher Nolan", "role": "Director" },
      { "name": "Leonardo DiCaprio", "role": "Actor" }
    ]
  }
  ```  
- **Scalability**: Horizontal scaling for large datasets (e.g., 100M+ movies).  

**Query Example (MongoDB):**  
```javascript  
db.movies.find({
  release_year: { $gt: 2010 },
  rating: { $gte: 8.0 },
  "credits.name": "Christopher Nolan",
  "credits.role": "Director"
});
```  

---

#### Tradeoffs and Workarounds
| **Aspect**               | **Relational (SQL)**                          | **NoSQL (Document)**                        |  
|--------------------------|-----------------------------------------------|---------------------------------------------|  
| **Complex Joins**         | ✅ Native support via `JOIN` clauses.          | ❌ Requires denormalization or application-layer joins (e.g., fetch movies, then query talent separately). |  
| **Scalability**           | ❌ Vertical scaling (harder to distribute).    | ✅ Horizontal scaling (easy sharding).       |  
| **Data Consistency**      | ✅ ACID guarantees.                            | ❌ Eventual consistency (risk of stale data in distributed setups). |  
| **Query Flexibility**     | ✅ Optimized for multi-filter queries.         | ❌ Limited to indexed fields; complex filters may require aggregation pipelines (slower). |  
| **Schema Changes**        | ❌ Requires migrations.                        | ✅ Add/remove fields on the fly.             |  

---

#### Workarounds for Sub-Optimal Choices*
##### If Using NoSQL Instead of SQL:
1. **Denormalize Data**: Embed credits and metadata in a single document to avoid joins.  
2. **Use Composite Indexes**: Create indexes on common filter combinations (e.g., `release_year + rating`).  
3. **Materialized Views**: Precompute results for frequent queries (e.g., "Top-rated movies by year").  
4. **Supplement with Search Engines**: Offload complex queries to Elasticsearch for better full-text and filter performance.  

##### If Using SQL Instead of NoSQL:
1. **JSONB Columns**: Use PostgreSQL’s `JSONB` for semi-structured data (e.g., dynamic genre tags).  
2. **Partitioning**: Split large tables by `release_year` to improve scalability.  
3. **Caching**: Cache frequent query results (e.g., "Movies from 2020–2023 with rating > 8") using Redis.  

---

#### Final Recommendation
A **relational database** (e.g., PostgreSQL) is ideal for its robust querying capabilities and integrity. If scalability becomes critical (e.g., 1B+ entries), a **document database** (e.g., MongoDB) can work with denormalization and careful indexing. For hybrid scenarios, consider a **multi-model database** (e.g., PostgreSQL + Elasticsearch) to leverage the strengths of both worlds.