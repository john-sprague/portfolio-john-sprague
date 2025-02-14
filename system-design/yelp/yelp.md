
---

**Problem Statement**  

**As given:** “How would you design Yelp?”  

**What that typically means:** Proximity servers are used to discover nearby attractions like places, events, etc. Design a service, where users can search for nearby places like restaurants, theaters, or shopping malls, etc.  

1. Given their location (longitude/latitude), users should be able to find all nearby places within a given radius.  
2. Users should have a real-time search experience with minimum latency.  
3. Our service should support a heavy search load.  

---

This outlines the key requirements for designing a Yelp-like service. Let me know if you need help breaking it down further! 🚀

---

## Functional Requirements 

* Search for places by text, proximity, etc
* View place info, reviews, photos
* Write a review 
* Notifications
* Make a reservation 
* Order delivery 
* Bookmark places 
* View activity (reservations, reviews, check-ins)
* Place recommendations 

**Design Constraints** 

* 500M Places
* 100K queries per second 
* 20% growth in the number of places and QPS each year 

![alt text](image.png)


## Scale App Tier 

**APIs**
![alt text](image-1.png)

![alt text](image-2.png)

**How to search by location?**  

**Naive Data Model**  
Key: place_id Value: name, description, latitude, longitude  

To find all the places nearby for a given location with latitude and longitude (100, 85) within a radius of 10Km, the query will be:

```sql
SELECT * FROM places
WHERE latitude BETWEEN 100-10 AND 100+10 // represents boundaries of a square
AND longitude BETWEEN 85-10 AND 85+10; // represents boundaries of a square

```
**NOTE** Will need a geospacial library to actually calculate the radios, can't just simple -/+ 10km. 

**Why this is a terrible solution at scale?** 

The challenge is that searching by latitude and longitude in a traditional database without proper indexing is highly inefficient for large datasets. When using simple inequality comparisons (> lat and lat, > long and < long) To find businesses within a bounding box, the database has to perform a full table scan, checking every single record against these conditions. This is also true when searching for terms in the business name or description. This would require a wild-card search across the entire database via a LIKE clause.

Load up two "strings" to load up everything in the center box. The green area represents only a tiny fraction of all the data we have touched in order to facilitate this query, and then we're going to do that for every single query. 

![alt text](image-3.png)

---

**What can we do to improve this?** 

