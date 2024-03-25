# Chapter ?: Databases

## Objectives

After completing this chapter, you will be able to:

- Understand the role and importance of databases in application development.
- Differentiate between graph, document, and relational-based databases.
- Implement basic CRUD operations using MongoDB in a NestJS project.
- Appreciate the nuances of selecting a database type for specific application needs.

## Understanding Database Types

Databases can broadly be categorized based on the data model they use:

### Relational Databases: 
Relational databases store data in tables, organizing data into rows and columns which form a table.  These tables are connected to each other through pre-defined relationships, which is via a primary or foreign key.  These keys are used to map the different relations that exist between different tables, which is typically defined through different data models.  There are multiple benefits inherited from relational databases which make them the most popular solution for data storage.  These include:

- Structured Data: Enforces relationships and data integrity
- Strong Consistency: Critical for some use cases such as daily banking

### Document Databases: 
A document database is a type of NoSQL database that can store and query data as JSON-like documents (rather than rows and columns), offering flexibility for applications with evolving data models.  Examples of document databases include MongoDB as well as Amazon DynamoDB.  There are multiple key differences between these databases and relational databases, including document databases organize data into documents containing properties, rather than rows and columns with strict enforcement of fields.  Furthermore, realtionships are reprensented via nested data, not foreign keys, which leads to an N:1 or 1:N relationship between the two document entities.

The flexible nature of document databases leads into a key point of strong versus eventual consistency.  Relational databases, due to the strict nature of how relationships are defined, offer strong consistency.  This means the database at any given snapshot reflects the current state of the data, albeit with the price of higher latency.  Document databases offer eventual consistency, which means while over time the system converges towards consistency, during transient periods users accessing different data centers may see different versions of the data.

### Graph Databases: 
A graph database is a type of NoSWL database that uses graph structures to represnet and store data, optimized for handling data with complex relationships and queries.  A "graph" in this context is a collection of nodes and edges.  Nodes are vertices that store the actual data objects, and relationships between these data objects or "nodes" are defined by the edges.  These edges can represent both one-to-many and many-to-one relationships, and always contains a start ndoe, end node, type, and direction.  Graph databases are good for applications such as social networking, reccomedations, and fraud detection, as they are examples of problems with complex relationships between data objects.

Benefits of graph databases include pattern disocvery within complex datasets, flexibility within schemas, and performance.