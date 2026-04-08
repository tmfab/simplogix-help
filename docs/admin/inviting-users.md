---
sidebar_position: 2
title: Inviting Users
---

# Inviting Users

Administrators and Managers can invite new users. Invited users receive an email with a link to set up their account.

## Sending an invitation

1. Go to **Company Settings > Users**
2. Click **Invite User**
3. Fill in the form:

| Field | Required | Notes |
|---|---|---|
| **Email address** | Yes | Where the invitation will be sent |
| **First name** | No | Used for the display name |
| **Last name** | No | Used for the display name |
| **Role** | Yes | Defaults to Viewer. You can only assign roles up to your own level — Managers can't invite Admins. |
| **Department** | No | Select from your company's departments |
| **Preferred site** | Yes | The site the user will be assigned to initially |

4. Click **Send Invitation**

The invitation link expires after **7 days**.

:::note Role restrictions
- Managers can invite users as Viewer, Operator, Planner, or Manager (not Admin)
- Admins can invite at any role level
- Managers can only assign the user to sites they have access to themselves
:::

## What the invited user sees

When they click the link in their email, they arrive at a setup page showing their email and the site they've been invited to. From there they can either:

- Click **Sign in with Microsoft** to link their Microsoft 365 account
- Set a password (minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character)

Once done, their account is active and they're taken to the dashboard.

## If the invitation expires

If a user's link has expired, you have two options from the Users list:

### Resend invite

Find the user (they'll have a **Pending** badge), click the action menu, and select **Resend Invite**. A fresh email goes out with a new 7-day link.

### Activate now

If the user can't receive emails or needs access right away, use **Activate Now** from the action menu. This generates a temporary password, activates the account immediately, and emails the password (or displays it on screen if email delivery fails).

The user can then log in and change their password from settings.

## Tracking invitation status

Each user on the Users page shows a status badge:

| Status | Meaning |
|---|---|
| **Active** | Account is set up and the user can log in |
| **Pending** | Invitation sent but not yet accepted |
| **Inactive** | Account has been deactivated by an admin |
