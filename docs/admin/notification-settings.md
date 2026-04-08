---
sidebar_position: 9
title: Notification Settings
---

# Notification Settings

Go to **Company Settings > Notifications** to configure how your team receives alerts and updates. This section has three tabs.

## Default Preferences

Set default notification preferences for each role (Administrator, Manager, Operator, Viewer).

For each role, configure:

**Notification channels** -- which delivery methods are enabled:
- **Email** -- receive notifications via email
- **In-App** -- see notifications in the app's notification centre
- **Push** -- receive push notifications (if supported)

**Notification types** -- which events trigger notifications:
- Defect created
- Defect status changed
- Defect assigned
- Inspection due
- Inspection overdue
- User joined
- Security alert
- Comment mention (@mention)
- Comment reply

Users can override these defaults in their personal notification settings.

## Escalation Rules

Escalation rules automatically notify additional people when issues go unresolved. Each rule defines:

- **Trigger type** -- what event starts the escalation (e.g. Defect Unresolved, Defect Critical, Inspection Overdue, Task Overdue, Security Event, System Error)
- **Delay** -- how long to wait before escalating (in minutes)
- **Roles to escalate to** -- which roles should be notified
- **Repeat interval** -- how often to re-escalate if still unresolved (optional)
- **Max escalations** -- maximum number of escalation notifications (1--10)
- **Priority** -- determines the order rules are evaluated when multiple apply

You can also choose whether the original assignee is notified alongside the escalation recipients.

## Digest and Email

Configure email delivery settings:

### Email digest
- Enable or disable daily and/or weekly digest emails
- Set the delivery time for each
- Choose what to include: unread notifications, pending tasks, overdue items, summary statistics

### Email configuration
- From name, from email, and reply-to address
- Email footer text
- Option to include an unsubscribe link

### Quiet hours
- Set a time window during which non-critical notifications are held
- Choose timezone for quiet hours
- Option to allow users to override quiet hours in their personal settings
