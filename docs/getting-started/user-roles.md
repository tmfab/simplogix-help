---
sidebar_position: 4
title: User Roles
---

# User Roles

SIMPLOGIX uses role-based access control. Your role determines what you can see and do within the app. Roles are hierarchical -- higher roles inherit all permissions of lower roles.

## Role overview

| Role | Description |
|---|---|
| **Admin** | Full access -- manages users, site settings, templates, assets, inspections, and defects |
| **Manager** | Manages team and operations -- can edit assets, assign defects, approve inspections, and manage team schedules |
| **Planner** | Planning and scheduling -- can edit defect planning, closeout details, and scheduling |
| **Operator** | Field work -- can create assets, run inspections, and log defects |
| **Viewer** | Read-only access to all data |

## Permissions at a glance

| Action | Admin | Manager | Planner | Operator | Viewer |
|---|:---:|:---:|:---:|:---:|:---:|
| View assets, inspections, defects | Yes | Yes | Yes | Yes | Yes |
| View dashboard and reports | Yes | Yes | Yes | Yes | Yes |
| Create assets | Yes | Yes | | Yes | |
| Edit assets | Yes | Yes | | | |
| Delete assets | Yes | | | | |
| Create inspections | Yes | Yes | | Yes | |
| Execute inspections | Yes | Yes | | Yes | |
| Approve inspections | Yes | Yes | | | |
| Create defects | Yes | Yes | | Yes | |
| Edit defect details | Yes | Yes | | | |
| Edit defect planning and closeout | Yes | Yes | Yes | | |
| Assign defects | Yes | Yes | | | |
| Delete defects | Yes | Yes | | | |
| Manage team schedules | Yes | Yes | | | |
| Create and export reports | Yes | Yes | | | |
| Company settings and user management | Yes | | | | |

:::note About the Planner role
The Planner role is designed for team members who coordinate repairs and scheduling. Planners can edit defect planning details (priority, timeline, work orders) and closeout information, but cannot create assets or inspections. This makes it ideal for planning engineers or supervisors who focus on repair coordination.
:::

## Changing a user's role

Only **Admins** can change user roles. Go to **Company Settings > Users**, find the user, and update their role.

Admins cannot assign a role higher than their own.
