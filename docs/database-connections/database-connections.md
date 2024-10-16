---
title: "Database Connections"
slug: "database-connections"
sidebar_position: 2
tags:
  - connection
---
A database connection is a set of credentials and server information used to connect to your database. All data access in Sort is facilitated through database connections you add to your [Organization](/docs/organizations/organizations) settings. Once added, all organization members can query the databases accessible through the database connection.

:::info
When you add a connection, Sort imports metadata like the names of your databases, schemas, tables and columns - but not any data.
:::

Supported database platforms:

- Snowflake
- Postgres

:::warning
Avoid allowing the world to connect to your database.

Many database hosting providers support specifying a set of IP addresses from which incoming connections are accepted. To allow connections from Sort, add the following IP addresses to your hosting provider configuration:

- 35.85.176.78
- 52.32.73.166
- 44.234.243.126
:::
