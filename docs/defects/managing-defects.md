---
sidebar_position: 3
title: Managing Defects
---

# Managing Defects

## The defect detail page

Open any defect to see its full record. The detail page has six tabs:

| Tab | What it contains |
|---|---|
| **Overview** | Evidence photos, defect details, risk level, temporary controls, asset context, repair summary, and activity feed |
| **Repair and Planning** | Repair status, assignee, repair type, cost estimates, priority, target date, work order details, SAP priority, and scheduling |
| **QA/QC Closeout** | Closeout status, verified by, verified date, engineering comments, and closeout notes |
| **Documents** | File attachments and documents related to the defect |
| **Versions** | Full version history showing every change made, with the ability to restore previous versions |
| **Comments** | Threaded discussion with @mention support and emoji reactions |

## Updating a defect

Managers and Admins can edit defect details from the **Overview** and **Repair and Planning** tabs. Planners can edit the **Repair and Planning** and **QA/QC Closeout** tabs.

On the **Kanban board**, drag a defect card between columns to quickly change its status (e.g. from Outstanding to Planned).

## Assigning a defect

Managers and Admins can assign defects to team members:

1. Open the defect and click **Assign** in the header
2. Search for the team member by name or email
3. Select the assignee and save

You can also assign from the row action menu in the list view.

## Temporary controls

If a defect poses an immediate risk while waiting for repair, you can activate **Temporary Controls**:

1. On the defect's Overview tab, find the Temporary Controls section
2. Click **Activate** and describe the interim safety measures in place (e.g. barricading, signage, operational restrictions)
3. Active temporary controls are highlighted with an amber banner on the defect

Remove or edit the temporary control at any time. This provides visibility to the team that interim measures are in place.

## Adding evidence

After a defect is created, you can add more evidence:

1. On the Overview tab, click **Add Evidence**
2. Upload photos and/or add notes
3. Existing photos can be **annotated** -- click the edit icon on any photo to draw markups on the image

## QA/QC closeout checklist

When repair work is complete, the defect must go through a structured closeout process. The closeout checklist has eight items:

**Required (must be completed to close):**
- Photos verified -- all photographic evidence reviewed
- Repair verified -- physical repair inspected and confirmed
- Safety sign-off obtained -- safety officer has approved the repair
- Quality check completed -- final quality inspection performed

**Optional:**
- Documentation complete
- Lessons learned captured
- Preventive measures implemented
- Spare parts inventory updated

A progress bar shows completion percentage. The defect can only be marked as closed once all four required items are checked and verified by a named person with a date.

## Status workflow

Defects move through these statuses:

**Outstanding** --> **Planned** --> **In Progress** --> **Completed** --> **Closed**

Defects can also be **Deferred** at any point if the repair is postponed. There is no enforced sequence -- you can move a defect to any status as needed.

When a defect is moved to **Closed**, the close date is automatically recorded.

## Filtering and prioritising

Use the defects list filters to focus on what matters:

- Filter by **risk level** to address extreme and high-risk issues first
- Filter by **status** to see what needs attention
- Filter by **asset** or **plant area** to see all issues in a specific location
- Filter by **assignee** to manage workloads across your team
- Use the **analytics panel** for charts showing defect trends, severity distribution, and assignee workload
