---
sidebar_position: 8
title: Logs and Audits
---

# Logs and Audits

Go to **Company Settings > Logs** to view system activity and audit trails. This section has three tabs.

## All Logs

A paginated table of all system events. Each entry shows:

- **Time** -- when the event occurred
- **Type** -- audit, security, system, activity, or permission
- **Severity** -- debug, info, warning, error, or critical (colour-coded)
- **User** -- who triggered the event
- **Event/Message** -- description of what happened

Click any row to expand it and see additional details including source, IP address, and full JSON metadata. A summary bar above the table shows counts by log type, with error counts highlighted.

### Security alerts

Unacknowledged security events are highlighted with a red badge in the header. Review and acknowledge these to clear the alert.

### Filtering logs

Use the filter panel to narrow by:

- **Date range** -- preset buttons (Today, Last 7 days, Last 30 days, Last 90 days) or custom dates
- **Log type** -- audit, security, system, activity, permission
- **Severity** -- debug, info, warning, error, critical
- **User** -- filter to a specific user
- **Site** -- filter to a specific site
- **Search** -- free-text search across messages and user names

### Exporting logs

Click **Export** to download filtered logs for external review or compliance reporting.

## Notifications

A delivery log for notifications sent by the system. Use this to verify that notifications are being delivered and to troubleshoot delivery issues.

## Data Changes

A record-level change history showing what data was modified, by whom, and when. Useful for auditing specific changes to assets, defects, or other records.
