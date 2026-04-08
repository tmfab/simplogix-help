---
sidebar_position: 3
title: Managing Users
---

# Managing Users

## The users list

Go to **Company Settings > Users** to see all users in your company. Each row shows:

- **Name** and **email**
- **Role** badge (Admin, Manager, Planner, Operator, or Viewer)
- **Department**
- **Primary site** (plus a count of additional sites if they have multi-site access)
- **Activity** -- number of actions in the last 30 days and when they were last active
- **Status** -- Active, Pending, or Inactive

## Changing a user's role

1. Click the action menu on the user's row
2. Select **Edit**
3. Change the **Role** dropdown
4. Save

You can only assign roles up to your own level. Admins can assign any role except IT Administrator.

## Managing site access

Users can have access to one or more sites, each with a different access level.

1. Click the action menu on the user's row
2. Select **Manage Site Access**
3. In the dialog you can:
   - **Add a site** -- select from sites the user doesn't already have, choose an access level (Read, Write, or Admin), and save
   - **Change access level** -- use the inline dropdown on each existing site
   - **Remove access** -- click the delete icon to revoke access to a site (you'll be warned if it's their only site)

Access levels determine what the user can do on that specific site:

| Access Level | Granted to |
|---|---|
| **Read** | Viewers |
| **Write** | Operators, Planners, Managers |
| **Admin** | Admins |

## Deactivating a user

To prevent a user from logging in:

1. Click the action menu on the user's row
2. Select **Deactivate**
3. Confirm the action

Deactivated users cannot sign in but their data (inspections, defects, activity history) is preserved. You can **Reactivate** them at any time from the same menu.

## Bulk import

For adding many users at once, use the **Import** option to upload a CSV file with user details. See [Import and Export](/admin/import-export) for details.
