---
title: "Limitations"
slug: "limits"
sidebar_position: 3
---
| Description | Limit |
| :---------- | :------------ |
| Query timeout | 30 seconds |
| Data Explorer databases supported | Snowflake, Postgres |
| Change Request databases supported | Postgres |
| Max Data Explorer rows returned | 100 |
| Snowflake syntax supported | Standard SQL only (no [$SYSTEM commands](https://docs.snowflake.com/en/sql-reference/functions/system_wait) etc)                                 |
| Postgres `date`, `timestamp` and `timestamptz` column types | All Postgres date values are stored in UTC |
| Postgres `date` column type | Postgres `date` columns are displayed in their date time format (`2023-09-25T00:00:00.000Z`) but only the date portion (`2023-09-25`) is stored. |
