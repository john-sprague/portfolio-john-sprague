# Context

As a result of the commercialization of user data, many services provide public APIs to access their collected data to authorized users and applications. Digital ad agencies cross-reference data from a variety of these APIs to create user personas allowing them to target users with more personalized campaigns.

Big data processing like this tends to use ETL engine architecture: Extract, Transform, Load. We extract data from inputs, like the public APIs or first-party databases, then process it into whatever format we need. Once we have transformed the data, we load it into an output datastore. At this point, the ETL engine is complete and an analytics UI may implement dashboards and reports based on the combined data.

Imagine you have been tasked with creating a cloud-native stack to support a social media collating platform. The application that will run on your stack allows users to create a first-party account and link their Facebook, Instagram, and Twitter accounts. Under the hood, the application will use OAuth to get a long-lived access token that the ETL engine will use to query data for the user on each service. 

After the engine runs successfully for the first time, processed data will be displayed to the user using a data visualization framework like D3. The data to display will be current and historical user metrics, such as followers/friends count, likes/comments count, and a combined feed of the user’s posts.

You needn't worry about how the ETL engine fetches data from these services, how the frontend displays it, or even what the data is exactly. With those exceptions, you will design a full cloud stack to support this system.

# The Challenge

- Consider the query pattern for the frontend when displaying processed data

    - We'll have a flexible graphql api that allows the front end to fetch exactly what data it needs while providing the backend with only querying the data for the data it needs
```javascript

```

- Select an output datastore that allows for optimized queries
    - We'll use a OLAP columnar database such as Cassandra or Amazon Redshift which are optimized for analytics 

- Consider the user setup flow for the frontend when adding or updating OAuth tokens
    - We can have a single sign in/up page that we'll manage ourselves. After the user is authenticated into our system, we provide an guided flow that will walk the user through the linking of their social networking accounts. 
    - What happens if the user doesn't have all three social networking accounts? 
    - Do we plan to add other social networking platforms such as linkedin? 

- Select a credentials datastore that allows for optimized queries
    - The best choice will be a traditional relational database that is acid compliant because we dealing with sensative personal data. 

- Consider the data refresh flow for the ETL engine to update data for existing users
    - The lowest granularity we'll support is hourly.  This means that at the top of every hour, we'll fatch the most recent data, and put that into our OLAP database. From there, we'll have summary tables or a materialized view for different levels of granualities, meaning the data is precomputed for fast reads.  

- Design a solution to handle scheduling third-party data fetching
  - Assume the user is fine with data up to 24 hours old (1-day resolution)
  - API rate limits exist; we can't just update all data for all users at the same time

- Create a system diagram with annotations for the cloud services you recommend

# Followup Questions

1. What kind of data store did you choose for your output database?
    -  We'll use a OLAP columnar database such as Cassandra or Amazon Redshift which are optimized for analytics, 
    - 
2. What kinds of queries do you expect the front-end will need?
    - As a user, i'd like to see my aggregation metrics by hour, by day, by month and by year. 
    - As a user, I'd like a summary of follower counts, average, and trend analysis over time 
    - As a user, I'd like to filter by social networking platform 
    - As a user, i'd like to see near real time analytics 

3. How does this data store optimize for these queries?
    - Only required columns are read
    - The database is partitioned by date 
    - Correct indexes and summary tables/materialized tables 
    - Auto-scaling configured 

4. What kind of data store did you choose for your credentials database?
    - Relational because it's ACID compliant 

5. How does this data store optimize this flow?
    - It provides compliance 

6. How do you suggest we handle the data refresh flow for the ETL engine?
    - Scheduled: EventBridge triggers Step Functions daily, fetching users due for refresh (last updated >24h ago).

    - Prioritization: SQS queues users, processing in batches to avoid rate limits.

    - Orchestration: Step Functions handles retries/backoff if APIs throttle requests.

7. How do we ensure we have data that is no more than 24 hours old?
    - last_updated column
    - Batch scheduling 

8. How could we support users clicking a "refresh" button to kick this off too?
    - Have an endpoint 'GET//{userId}/refresh
    - This will trigger the ETL flow 

9. How can we avoid the API rate limiting problem?
    - Spread API calls across the 24H window using SQS delays. 
    - Exponential backoffs