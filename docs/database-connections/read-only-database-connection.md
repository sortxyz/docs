---
title: "Read-only Database Connection"
slug: "read-only-database-connection"
sidebar_position: 4
tags:
  - connection
---
Read-only connections are only used for running queries within the SQL terminal.
Create a read-only database connection to enable the SQL terminal in the Sort Data Explorer.

:::danger
Read-only permissions are enforced by **your database**. These permissions can be configured when creating or editing your database user. Sort does not apply any additional permission checks on your database connection to ensure it is read-only so double check your connection permissions to make sure they are as you intend before adding it to Sort.
:::

## Create a read-only connection

1. Navigate to Organization -> Settings
2. Click `Connections` in the left nav

![Organization -> Settings](/img/7072e3b-Screenshot_2024-02-27_at_1.58.48_PM.png)

3. Click `Edit` on the connection you would like to add the read-only connection to
4. Click `Advanced Settings` -> `Enable a SQL terminal via a read-only user`

![Enable a SQL terminal](/img/87cd10f-Screenshot_2024-02-27_at_2.01.48_PM.png)

5. Add the read only connection
6. Congrats! All databases accessible from the connection now have a SQL Terminal available.

![SQL terminal demo](/img/a49b1fe-Screenshot_2024-02-27_at_4.13.54_PM.png)

## Additional help

- [Postgres Read-only User Instructions](./postgres-read-only-user-instructions)
