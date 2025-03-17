
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Practice Problems](#practice-problems)
  - [Foundational Subjective Question 1](#foundational-subjective-question-1)
    - [Question](#question)
    - [Solution](#solution)
  - [Foundational Subjective Question =2](#foundational-subjective-question-2)
    - [Question](#question-1)
    - [Solution](#solution-1)
  - [Foundational Subjective Question 3](#foundational-subjective-question-3)
    - [Question](#question-2)
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
  - [Question](#question-3)
  - [Solution](#solution-2)
    - [Key Features of BSON:](#key-features-of-bson)
    - [BSON vs JSON:](#bson-vs-json)
    - [Example of BSON:](#example-of-bson)
    - [How MongoDB Uses BSON:](#how-mongodb-uses-bson)
    - [Advantages of BSON:](#advantages-of-bson)
    - [Disadvantages of BSON:](#disadvantages-of-bson)
    - [When to Use BSON:](#when-to-use-bson)
    - [Summary:](#summary-1)

<!-- /code_chunk_output -->



# Practice Problems 

## Foundational Subjective Question 1

### Question 
    Given a patient database with the following schema:

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

### Question 

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

### Question 
    How can you do a sql like join in mongodb?

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

## Question

    What is BSON?

---

## Solution 

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

### Question 

    What is time series data? Provide examples.

### Solution 

### What is Time Series Data?
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