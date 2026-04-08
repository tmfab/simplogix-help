---
sidebar_position: 9
title: Notification Settings
---

# Notification Settings

Go to **Company Settings > Notifications** to configure how your team receives alerts and updates. There are three tabs.

## Default Preferences

Set default notification preferences for each role (Administrator, Manager, Operator, Viewer).

For each role, configure:

**Channels** — which delivery methods are enabled:
- **Email** — notifications via email
- **In-App** — notifications in the app's notification centre
- **Push** — push notifications (if supported)

**Types** — which events trigger notifications:
- Defect created, status changed, or assigned
- Inspection due or overdue
- User joined
- Security alert
- Comment mention (@mention) or reply

Users can override these defaults in their personal notification settings.

## Escalation Rules

Escalation rules automatically notify additional people when issues go unresolved. Each rule defines:

- **Trigger type** — what starts the escalation (e.g. Defect Unresolved, Defect Critical, Inspection Overdue, Task Overdue, Security Event, System Error)
- **Delay** — how long to wait before escalating (in minutes)
- **Roles to escalate to**
- **Repeat interval** — how often to re-escalate if still unresolved (optional)
- **Max escalations** — 1 to 10
- **Priority** — determines the order rules are evaluated when multiple apply

You can also choose whether the original assignee gets notified alongside the escalation recipients.

## Digest and Email

### Email digest
- Enable or disable daily and/or weekly digests
- Set delivery time for each
- Choose what to include: unread notifications, pending tasks, overdue items, summary statistics

### Email configuration
- From name, from email, and reply-to address
- Email footer text
- Option to include an unsubscribe link

### Quiet hours
- Set a time window during which non-critical notifications are held
- Choose timezone
- Optionally allow users to override quiet hours in their personal settings
