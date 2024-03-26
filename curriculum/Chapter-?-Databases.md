# Chapter ?: Databases

## Objectives

After completing this chapter, you will be able to:

- Understand the ACID Compliance and how it is followed by different databases
- Differentiate between graph, document, and relational databases.
- Implement basic CRUD operations using MongoDB in a NestJS project.
- Appreciate the nuances of selecting a database type for specific application needs.

## ACID Compliance

ACID is a set of four expectations that ensure databases are reliable and accurate, which is essential in applications where the integrity of the data is crucial.  Broken down, these principles are:
- **Atomicity**: All database transactions are "all or nothing".  Database transactions are often composed of multiple operations, and when atomicity is enforced either every operation succeeds or none do.  This means any time an operation fails all previous changes made within the current transaction are rolled back.  This prevents partial transactions, such as saving only part of a data object, which can lead to unexpected behavior.

- **Consistency**: All data or changes to the data must be consistent with all database constraints.  This means any transaction can only bring the database from one valid state to another, based on the rules set by the database administrators.  If a database for a bank account had a rule it could not go below $0, any withdrawl that would cause the balance to fall below $0 would always be rejected to maintain consistency.

- **Isolation**: All transactions are ran in an isolated environment without interfering with one another.  This ensures that concurrent transactions to the database result in a state that would have been obtained if the transactions had been executed serially.  For example take two users on a bidding site, Alice and Bob.  Alice makes a bid of $100, and nearly simultaneously Bob places a bid for $105, with the current higest bid being $95.  If isolation is not followed the system will process both bids in parallel, meaning it will check both Alice and Bob's bids against the current highest bid of $95.  This can lead to the database incorrectly saving Alice's bid as the new leader and potentially overwriting Bob's.  A database that enforced isolation would make one bid wait while the other is being processed.

- **Durability**: All transactions committed are permanently stored in the database.  This means the results of transactions persist even in the event of power loss, crashes, or errors.

While ACID are important principles in selecting a database, it is important to note these are not all essential for every application.  Strictly adhering to ACID principles generally implies a degree of overhead in database operations, leading to higher latency.  This trade-off can impact applications where performence, scalability, and responsiveness are prioritized over strict data integrity.  Examples of apps where this could be the case include social media feeds and real-time data processing, where the need for low latency and high throughput can outweigh the need for strict consistincey.

One way applications tolerate giving up strict consistincey is the concept of eventual consistency.  Take a social media feed for example.  In a social media feed application, the immediate consistency of every post or update across all users is not as crucial. The application can employ eventual consistency to ensure that new posts eventually appear in all followers' feeds without impacting the system's responsiveness. Techniques like eventual consistency, as well as caching frequently accessed data (e.g., popular posts or profiles) can help manage the load and improve user experience by reducing wait times.

By strategically choosing when and where to relax strict ACID compliance, developers can optimize for performance and user experience in scenarios where absolute data integrity is not the primary concern, leveraging the strengths of different consistency models to build scalable and responsive applications.

## Understanding Database Types

The three broad categories of databases include Relational Databases (SQL), which organize data into tables; NoSQL Databases, which encompass document, key-value, and wide-column store models; and Graph Databases, designed to efficiently represent and query data relationships.

### Relational Databases: 
Relational databases store data in tables, organizing data into rows and columns which form a table.  These tables are connected to each other through pre-defined relationships, which is via a primary or foreign key.  These keys are used to map the different relations that exist between different tables, which is typically defined through different data models.  There are multiple benefits inherited from relational databases which make them the most popular solution for data storage.  These include:

- Structured Data: Enforces relationships and data integrity
- Strong Consistency: Critical for some use cases such as daily banking

Relational databases are designed to enforce transaction integrity, soWh databases such as MySQL and Postgres are typically ACID-compliant.

Here is an example diagram illustrating how these relationships can be defined:

<img src="https://www.holistics.io/blog/content/images/2018/08/dbdiagram.io---diagram-only.png" width="600" height="320" />

Entities are defined strictly by the structure of their table, and relationships between entities are defined as well.

### NoSQL Databases: 
A document database is a type of NoSQL database that can store and query data as JSON-like documents (rather than rows and columns), offering flexibility for applications with evolving data models and access patterns.  Examples of document databases include MongoDB as well as Amazon DynamoDB.  There are multiple key differences between these databases and relational databases, including document databases organize data into documents containing properties, rather than rows and columns with strict enforcement of fields.  Furthermore, realtionships are reprensented via nested data, not foreign keys, which leads to an N:1 or 1:N relationship between the two document entities.

Indexes are data structures used to increase the efficiency of queries in a document database.  Rather than scan every existing entities to look for specific fields, indexes can be added to decrease search time.  Take for example a library database containing a collection of books.  These books can be queried against several different fields, but by far the most common is `title`.  To increase the efficiency of queries, a single-field index can be created for the `title` field.  This index prevents full collection scans and significantly speeds queries for the field they are made for.  If there are fields that are frequently used together in queries compund indexes can be created.  To follow the previous example, if users often filtered by both the genre and the year the book was written, a compound index can be created for `genre` and `yearWritten`.

While indexes are valuable to enhance queries they have a negative impact on the latency of writing operations.  This is because any time the collection indexed on is written to, all of the indexes must be updated to reflect changes.  Therefore indexes become expensive for collections with a high write-to-read ratio.

The flexible nature of document databases leads into a key point of strong versus eventual consistency.  Relational databases, due to the strict nature of how relationships are defined, offer strong consistency.  This means the database at any given snapshot reflects the current state of the data, albeit with the price of higher latency.  Document databases offer eventual consistency, which means while over time the system converges towards consistency, during transient periods users accessing different data centers may see different versions of the data.

Here is a very simple represention of a document database:

<img src="https://d1.awsstatic.com/AWS%20Databases/JSON%20document%20database.64fe2a382abc8ca2b8743f0e3b5af553a33f3fb0.png" width="400" height="200" />

Collections store entites in the form of 'documents' in formats such as JSON, which contain the fields for that entity.

### Graph Databases: 
A graph database is a type of NoSQL database that uses graph structures to represnet and store data, optimized for handling data with complex relationships and queries.  A "graph" in this context is a collection of nodes and edges.  Nodes are vertices that store the actual data objects, and relationships between these data objects or "nodes" are defined by the edges.  These edges can represent both one-to-many and many-to-one relationships, and always contains a start ndoe, end node, type, and direction.  Graph databases are good for applications such as social networking, reccomedations, and fraud detection, as they are examples of problems with complex relationships between data objects.  Below is an example of how a graph database might store data:

<img src="https://miro.medium.com/v2/resize:fit:1400/1*aIPT_zo4zQnsQbRP3s8Tpg.png" width="700" height="400" />

You can see the entities or 'nouns' are represented as nodes, while the relations these nodes have are defined by the edges.  Edges are 'first-class citizens' in grpah databases, meaning these relations are just as important as the entities themselves.

The benefits of graph databases include pattern disocvery within complex datasets, flexibility within schemas, and performance.