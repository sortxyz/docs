---
title: "Postgres Read-only User Instructions"
slug: "postgres-read-only-user-instructions"
sidebar_position: 5
tags:
  - connection
---
We've provided sample commands below to create a read-only user in Postgres. We've only provided them as a guide, please use at your own risk and ensure the user is properly tested.

:::danger
The commands below should only be used as a guide, please properly test any read-only user added to your database before adding to Sort.
:::

```
/* How to create a read-only postgres connection */

CREATE ROLE readonly PASSWORD 'SOME_TOUGH_PASSWORD';

/* For each of the databases you want to make readonly, follow these steps */

-- Grant permission to connect to the database
GRANT CONNECT ON DATABASE {database_name} TO readonly;

-- Next, you MUST connect to each database before executing the following commands on it.
-- Do this for _each_ database.

/* START loop database commands */

GRANT USAGE ON SCHEMA public TO readonly;

-- Grant SELECT on all existing tables in the schema
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;

-- Grant SELECT on all tables added in the future
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly;

/* END loop database commands */

/**
 * AFTER you ran those commands on all your databases, create a readonly user.
 * This user is what you will connect to postgres with.
 */

CREATE ROLE {your_username} WITH LOGIN PASSWORD 'ANOTHER_TOUGH_PASSWORD';
GRANT readonly TO {your_username};

/* Now you can connect
 * psql 'postgres://{your_username}:{ANOTHER_TOUGH_PASSWORD}@your.host/{your_database}'
 */
```
