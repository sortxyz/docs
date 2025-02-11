---
title: "Notifications"
slug: "notifications"
sidebar_position: 8
---

Sort sends a notification whenever a [System Event](#system-events) occurs.

Notification contents are a high level summary of the event. A link to the event
subject (Issue / Change Request / Organization) is included in the notification
to make it easy to see more details. For example, when someone comments on a
Change Request, you can use the link in the notification along with the [Sort
API](https://api.sort.xyz/docs/#tag/change_request/GET/v2/orgs/%7Borg_slug%7D/databases/%7Bdb_slug%7D/change-requests/%7Bchange_request_number%7D)
to pull down the details of the Change Request, then feed that into an LLM, a
report or another system.

:::info
By default, only email notifications are sent. If you'd like to receive other
types of notifications (Slack, Discord, etc), please [let us
know](../general/support-and-general-inquiries.md).

Notifications are "fire-and-forget" - If there is a network disruption or similar problem when sending the notification, the notification will not be retried.
:::

## System Events

### Change Request

- created
- updated
- closed
- reopened
- commented
- execution started
- execution failed
- execution succeeded

### Issues

- created
- updated
- closed
- reopened
- commented

### Connections

- created

### Invitations

- created

### Organization

- created

## Examples


- Change Request created

```
<icon> Org name/Db name :: Change request title (Change Request #4)
https://sort.xyz/orgs/org_slug/databases/database_slug/change-requests/4
@username opened a change request
```

- Change Request closed

```
<icon> Org name/Db name :: Change request title (Change Request #4)
https://sort.xyz/orgs/org_slug/databases/database_slug/change-requests/4
@username closed change request #4
```

- Change Request reopened

```
<icon> Org name/Db name :: Change request title (Change Request #4)
https://sort.xyz/orgs/org_slug/databases/database_slug/change-requests/4
@username reopened change request #4
```

- Change Request comment

```
<icon> Org name/Db name :: Change request title (Change Request #4)
https://sort.xyz/orgs/org_slug/databases/database_slug/change-requests/4
@username commented
---
This looks good to me!
```

- Change Request execution started

```
<icon> Org name/Db name :: Change request title (Change Request #4)
https://sort.xyz/orgs/org_slug/databases/database_slug/change-requests/4
Change Request #4 execution started
```

- Change Request succees

```
<icon> Org name/Db name :: Change request title (Change Request #4)
https://sort.xyz/orgs/org_slug/databases/database_slug/change-requests/4
Change Request #4 was successfully applied
```

[mail]: mailto:info@sort.xyz
