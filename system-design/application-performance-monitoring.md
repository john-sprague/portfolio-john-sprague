# APM - Application Performance Monitoring 

**Problem statement (APM - Application Performance Monitoring)**
Imagine a data center having thousands of servers (10,000) each emitting thousands of metrics **per second** (2000).

**Examples:**
* CPU utilization (Mcpu)
* Un-ACK’ed messages in a queue (Mack)
* Non-empty shopping carts (Mcarts)
* Count of incoming RPCs (Mrpcs)
* RPC latency (Mlatency) **NOTE: this is not a per second metric**

Build a central brain that ingests (metrics) and serves a dashboard from **stored queries** of the form:
```sql
FROM server(s)
SELECT metric (one metric) 
WINDOW duration  (time duration, 1 second)
COMPUTE functions  
```

Functions:
```javascript
min
max
avg
percentile(p)
```

**Clarifying Questions** 

### **1. Data Ingestion & Throughput**
**Q:** What is the expected peak ingestion rate, and does it vary over time?  
**Why:** Helps estimate the required throughput capacity and ensures the system can handle spikes in incoming metrics.
**Answer** Beach would be all 10,000 servers are emitting 2,000 metrics per second. 

**Q:** Should we process metrics in real-time (streaming) or batch them?  
**Why:** Determines whether to use a real-time stream processing system (e.g., Apache Kafka, Apache Flink) or a batch-oriented approach.
**Answer** It should not be more then a few windows behind. The smallest window is 5 seconds. 

**Q:** Are all metrics equally important, or should we prioritize certain ones?  
**Why:** Helps optimize resource allocation and possibly downsample or delay processing of less critical metrics.

---

### **2. Storage & Retention**
**Q:** How long do we need to store the metrics?  
**Why:** Determines the storage strategy (e.g., in-memory for short-term, disk-based for long-term).
**Answer** Store metrics for 1 year. 

**Q:** Should we support data rollups (aggregation over time) to reduce storage costs?  
**Why:** Helps optimize storage by summarizing older data instead of keeping raw values.
**Answer** No. 

**Q:** Are there any data consistency or durability requirements?  
**Why:** Determines whether we need strong consistency (e.g., for financial metrics) or if eventual consistency is acceptable.
**Answer:** Eventually consistency is okay

---

### **3. Query Performance & Computation**
**Q:** How often are queries executed, and should they be real-time or near-real-time?  
**Why:** Helps design efficient query processing, caching strategies, and indexing.
**Answer:** Near real time 

**Q:** Should queries support multiple servers or just a single server per request?  
**Why:** Determines if queries must aggregate across multiple servers, affecting query complexity.

**Q:** Should percentile computations use approximate or exact methods?  
**Why:** Approximate methods (like t-digest) are faster and use less memory but may have small errors.

---

### **4. Scalability & Reliability**
**Q:** Do we need to support horizontal scaling? If so, should it be automatic?  
**Why:** Helps decide whether to use sharding, distributed databases, or load balancing mechanisms.

**Q:** What is the acceptable system downtime or failure recovery time?  
**Why:** Determines the level of fault tolerance and whether we need backup strategies.

**Q:** Should the system be multi-region or just operate in a single data center?  
**Why:** Impacts latency, availability, and disaster recovery strategies.

---

### **5. Security & Access Control**
**Q:** Who can query the system, and do we need access controls?  
**Why:** Defines authentication/authorization mechanisms (e.g., role-based access).

**Q:** Should we support multi-tenancy with data isolation per user/group?  
**Why:** Determines whether different teams/customers should only see their own data.

---

These questions will help refine the system's architecture and make sure it meets both functional and non-functional requirements. Let me know if you'd like additional refinements! 🚀

## Functional Requirements 

**Out of scope** 

## Non-Functional Requirements
**Users** 

**Data**

**Microservices** 

**Out of scope** 


## High Level Architecture 

## Deep Dives 

### Scale App Tier - CPU 

### Scale App Tier - Network 

### Scale Storage Tier 

## Scale Cache Tier 