## **Flashcard Set for SQL Normalization**  
Here’s a set of **flashcards** to reinforce learning.  

### **🃏 Flashcard 1**  
**Q:** What is the goal of normalization?  
**A:** To reduce redundancy and improve data integrity by organizing tables efficiently.  

### **🃏 Flashcard 2**  
**Q:** What is the rule of **1NF (First Normal Form)?**  
**A:** Each column must contain atomic values; no lists or arrays in a single cell.  

### **🃏 Flashcard 3**  
**Q:** What is the rule of **2NF (Second Normal Form)?**  
**A:** No partial dependencies—every non-key column must depend on the entire primary key.  

### **🃏 Flashcard 4**  
**Q:** What is the rule of **3NF (Third Normal Form)?**  
**A:** No transitive dependencies—non-key columns should depend only on the primary key.  

### **🃏 Flashcard 5**  
**Q:** Why is too much normalization sometimes a problem?  
**A:** It can make queries complex and slow, requiring multiple joins to retrieve data.  


## **🃏 Flashcard Set for Primary and Foreign Keys**
### **🃏 Flashcard 1**  
**Q:** What is the main function of a Primary Key?  
**A:** It uniquely identifies each row in a table and cannot contain NULL values.  

### **🃏 Flashcard 2**  
**Q:** What is a Foreign Key used for?  
**A:** It creates a relationship between two tables by referencing a Primary Key in another table.  

### **🃏 Flashcard 3**  
**Q:** Can a table have multiple Primary Keys?  
**A:** No, but it can have a **Composite Primary Key** (a combination of multiple columns).  

### **🃏 Flashcard 4**  
**Q:** Can a Foreign Key contain NULL values?  
**A:** Yes, if the relationship is optional.  

### **🃏 Flashcard 5**  
**Q:** What happens if you try to insert a Foreign Key value that doesn’t exist in the referenced table?  
**A:** It results in a **referential integrity violation** error.  

### **🃏 Flashcard 6**  
**Q:** What kind of relationship does a Foreign Key enforce?  
**A:** **One-to-Many** or **Many-to-Many** relationships between tables.  

### **🃏 Flashcard 7**  
**Q:** How do you define a Foreign Key in SQL?  
**A:** Using the `FOREIGN KEY` constraint:  
```sql
FOREIGN KEY (ColumnName) REFERENCES OtherTable(PrimaryKeyColumn);
```  

## **🃏 Flashcard Set for SQL ACID Transactions**  

### **🃏 Flashcard 1**  
**Q:** What does ACID stand for in SQL transactions?  
**A:** **Atomicity, Consistency, Isolation, Durability.**  

### **🃏 Flashcard 2**  
**Q:** What is **Atomicity** in ACID transactions?  
**A:** A transaction must be **fully completed** or **fully rolled back**—no partial execution.  

### **🃏 Flashcard 3**  
**Q:** What is **Consistency** in ACID transactions?  
**A:** The database must move from **one valid state to another** without violating constraints.  

### **🃏 Flashcard 4**  
**Q:** What is **Isolation** in ACID transactions?  
**A:** Multiple transactions must not interfere with each other to prevent data conflicts.  

### **🃏 Flashcard 5**  
**Q:** What is **Durability** in ACID transactions?  
**A:** Once a transaction is **committed**, it is permanently saved—even if a crash occurs.  

### **🃏 Flashcard 6**  
**Q:** What happens if a transaction violates **Consistency**?  
**A:** The transaction **fails and is rolled back** to maintain data integrity.  

### **🃏 Flashcard 7**  
**Q:** Which **SQL command** ensures changes are permanently saved?  
**A:** `COMMIT;`  

### **🃏 Flashcard 8**  
**Q:** What is the strictest SQL **Isolation Level**?  
**A:** **Serializable** – Ensures complete isolation of transactions.  

### **🃏 Flashcard 9**  
**Q:** What happens if a system crash occurs before a **COMMIT**?  
**A:** The transaction is **rolled back**, ensuring no partial changes occur.  

### **🃏 Flashcard 10**  
**Q:** Why is **Isolation** important in multi-user databases?  
**A:** It **prevents race conditions** where multiple users modify the same data simultaneously.  
