---
title: "SQL Terminal"
slug: "sql-terminal"
---
Database administrators can enable a SQL terminal for querying a database. Writing SQL to interact with the database is helpful for advanced queries and grouping data. Filters in the Data Explorer can also be used for simple queries (instead of writing SQL).

:::info SQL terminal constraints

- Queries are limited to read-only
- Maximum of 100 results per query
:::

## Create a SQL query for a database

1. The database connection must have a [read-only connection](/docs/database-connections/read-only-database-connection) specified, if not, please contact the owner of that database to request one one.
2. Navigate to the Data Explorer within a database
3. Click the 'SQL' button to enable the read-only SQL terminal
4. Specify a SQL statement and click 'Run Query'

![Run a query in the SQL terminal](/img/7a2789d-Screenshot_2024-02-27_at_3.52.00_PM.png)
