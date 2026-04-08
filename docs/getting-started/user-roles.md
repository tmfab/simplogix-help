---
sidebar_position: 4
title: User Roles
---

# User Roles

SIMPLOGIX uses role-based access control. Your role determines what you can see and do. Roles are hierarchical, so higher roles inherit all the permissions of lower ones.

## Role overview

| Role | Description |
|---|---|
| **Admin** | Full access — manages users, site settings, templates, assets, inspections, and defects |
| **Manager** | Manages team and operations — can edit and delete assets, assign defects, approve inspections, and manage schedules |
| **Planner** | Planning and scheduling — can edit defect planning, closeout details, and scheduling |
| **Operator** | Field work — can create assets, run inspections, and log defects |
| **Viewer** | Read-only access to all data |

## Permissions at a glance

| Action | Admin | Manager | Planner | Operator | Viewer |
|---|:---:|:---:|:---:|:---:|:---:|
| View assets, inspections, defects | Yes | Yes | Yes | Yes | Yes |
| View dashboard and reports | Yes | Yes | Yes | Yes | Yes |
| Create assets | Yes | Yes | Yes | Yes | |
| Edit assets | Yes | Yes | | | |
| Delete assets | Yes | Yes | | | |
| Create inspections | Yes | Yes | Yes | Yes | |
| Execute inspections | Yes | Yes | Yes | Yes | |
| Approve inspections | Yes | Yes | | | |
| Create defects | Yes | Yes | Yes | Yes | |
| Edit defect details | Yes | Yes | | | |
| Edit defect planning and closeout | Yes | Yes | Yes | | |
| Assign defects | Yes | Yes | | | |
| Delete defects | Yes | Yes | | | |
| Manage team schedules | Yes | Yes | | | |
| Create and export reports | Yes | Yes | | | |
| Company settings and user management | Yes | | | | |

:::note About the Planner role
The Planner role is designed for team members who coordinate repairs and scheduling. Planners can edit defect planning details (priority, timeline, work orders) and closeout information. While planners can technically create assets and inspections, the role is best suited for planning engineers or supervisors focused on repair coordination rather than field work.
:::

## Changing a user's role

Only Admins can change roles. Go to **Company Settings > Users**, find the user, and update their role.

You can't assign a role higher than your own.
