---
title: "Notifications"
slug: "notifications"
sidebar_position: 8
---

Sort sends a notification whenever a [System Event](#system-events) occurs.

Notification contents are a high level summary of the event. A link to the event
subject (Issue / Change Request / Organization) is included in the notification
to make it easy to visit the originating page to see more details.

:::tip
By default, only email notifications are sent. You can opt-in to receive Slack or Discord notifications in your Organization settings page.
:::

Notifications can also be helpful for more advanced use cases, like updating AI
agents, or building custom reports. For example, you could use the link in the notification
along with the [Sort
API](https://api.sort.xyz/docs/#tag/change_request/GET/v2/orgs/%7Borg_slug%7D/databases/%7Bdb_slug%7D/change-requests/%7Bchange_request_number%7D)
to pull down the details of the Change Request, then feed that into an LLM, a
report or another system.

:::info
Notifications are "fire-and-forget" - If there is a network disruption or similar problem when sending the notification, the notification will not be retried.
:::

## System Events

### Change Request

- created
- closed
- reopened
- commented
- approved
- execution started
- execution failed
- execution succeeded

### Issues

- created
- closed
- reopened
- commented

## Examples

### Discord

![Discord notification example](/img/discord.png)

### Slack

![Slack notification example](/img/slack.png)

### Email

![Email notification example](/img/email.png)

[mail]: mailto:info@sort.xyz
