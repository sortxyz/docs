---
title: "SQL Terminal"
slug: "sql-terminal"
---
Organization owners can enable a SQL terminal for querying databases. Writing SQL to interact with the database is helpful when basic filtering and sorting aren't enough.

:::info SQL terminal constraints

- Queries are limited to read-only
- Maximum of 100 results per query
:::

## Create a SQL query for a database

:::info Pre-requisite

The database connection must have a [read-only connection](/docs/database-connections/read-only-database-connection) enabled. If it does not, please contact the owner of the database to request adding one.
:::

1. Navigate to the Data Explorer
1. Click the `SQL` button to enable the read-only SQL terminal
1. Write your SQL statement and click `Run`

![Run a query in the SQL terminal](/img/sql-query.png)
