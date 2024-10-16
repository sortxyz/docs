---
title: "Re-import your database schemas"
slug: "re-import-your-database-schemas"
sidebar_position: 3
tags:
  - connection
---

If you've made any changes to your database schemas after adding your connection to Sort, you'll need to re-import your schemas before Sort can work with these changes.

## What types of changes need to be re-imported?

- Adding or removing databases, schemas, tables or columns
- Renaming databases, schemas, tables or columns
- Changing a column's nullability (whether or not it supports `NULL`)
- Changing the primary keys of a table

## To re-import your database schemas:

1. Visit your Org Settings page
2. Click on Connections
3. Click on the Connection for the database which has schema changes
4. Click the "Re-Import Schema" button
