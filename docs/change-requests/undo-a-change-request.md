---
title: "Undo a Change Request"
slug: "undo-a-change-request"
sidebar_position: 3
---

import ImgAppliedEvent from '@site/static/img/applied.png'

Change Requests which have been `applied` are eligible for undo. An Undo Change Request proposes the inverse of the changes defined in the original Change Request – added rows will be deleted, deleted rows will be re-added and modified rows will be restored to their original state.

### How to Undo a Change Request

To undo a Change Request, visit the page of the `applied` Change Request you want to undo. Scroll down the timeline until you see the "Change request execution completed successfully" event. Click the "Undo" button.

<img style={{width: '600px'}} src={ImgAppliedEvent} />

A new Change Request will be created which reverses the Changes. Just follow the normal review / approve / apply steps to finish undoing the previous changes.

:::caution
Only the specific Changes defined in the original Change Request will be undone. Undo **does not** revert additional data alterations caused by [cascades](https://www.google.com/search?q=postgres+cascade) or triggers.
:::

### Restored Data

Data used to restore the original values is captured at different times, depending on the row operation and column metadata.

| Original Operation | Undo Operation | Type | Data Capture Time |
| --- | --- | --- | --- |
| Add | Delete | Primary key | Immediately after the row was inserted using Sort |
| Delete or Modify | Add or Modify | All columns | When Change was originally defined |
