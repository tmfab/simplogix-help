---
sidebar_position: 2
title: Inviting Users
---

# Inviting Users

Administrators and Managers can invite new users to SIMPLOGIX. Invited users receive an email with a link to set up their account.

## Sending an invitation

1. Go to **Company Settings > Users**
2. Click **Invite User**
3. Fill in the invitation form:

| Field | Required | Notes |
|---|---|---|
| **Email address** | Yes | The email the invitation will be sent to |
| **First name** | No | Used to build the user's display name |
| **Last name** | No | Used to build the user's display name |
| **Role** | Yes | Defaults to Viewer. You can only assign roles up to your own level -- Managers cannot invite Admins. |
| **Department** | No | Select from your company's departments |
| **Preferred site** | Yes | The site the user will be assigned to initially |

4. Click **Send Invitation**

The user receives an email with an **Accept Invitation** button. The invitation link expires after **7 days**.

:::note Role restrictions
- **Managers** can invite users as Viewer, Operator, Planner, or Manager (not Admin)
- **Admins** can invite users at any role level
- Managers can only assign the invited user to sites they have access to themselves
:::

## What the invited user sees

When the invited user clicks the link in their email, they arrive at a setup page showing:

- Their email address and the site they've been invited to
- A **Sign in with Microsoft** button (if they want to link their Microsoft 365 account)
- A **password form** where they can create a password instead

Password requirements: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.

Once they set a password or link Microsoft, their account becomes active and they're taken to the dashboard.

## If the invitation expires

If a user's invitation link has expired, you have two options from the Users list:

### Resend invite

Find the user (they'll have a **Pending** status badge), click the action menu, and select **Resend Invite**. A fresh invitation email is sent with a new 7-day link.

### Activate now

If the user can't receive emails or needs immediate access, use **Activate Now** from the action menu. This:

1. Generates a temporary password
2. Activates the account immediately
3. Emails the temporary password to the user (or displays it on screen if email delivery fails)

The user can then log in with the temporary password and change it from their settings.

## Tracking invitation status

On the Users page, each user shows a status badge:

| Status | Meaning |
|---|---|
| **Active** | Account is set up and the user can log in |
| **Pending** | Invitation sent but not yet accepted |
| **Inactive** | Account has been deactivated by an admin |
