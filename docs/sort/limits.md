---
title: "Limitations"
slug: "limits"
excerpt: ""
hidden: false
createdAt: "Wed Apr 19 2023 04:02:51 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Aug 16 2024 23:10:17 GMT+0000 (Coordinated Universal Time)"
---
| Description                                                 | Limit                                                                                                                                            |
| :---------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Query timeout                                               | 30 seconds                                                                                                                                       |
| Databases supported                                         | Snowflake, Postgres                                                                                                                              |
| Max Data Explorer rows returned                             | 100                                                                                                                                              |
| Snowflake syntax supported                                  | Standard SQL only (no [$SYSTEM commands](https://docs.snowflake.com/en/sql-reference/functions/system_wait) etc)                                 |
| Postgres `date`, `timestamp` and `timestamptz` column types | All Postgres date values are stored in UTC                                                                                                       |
| Postgres `date` column type                                 | Postgres `date` columns are displayed in their date time format (`2023-09-25T00:00:00.000Z`) but only the date portion (`2023-09-25`) is stored. |
