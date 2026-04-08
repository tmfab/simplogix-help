---
sidebar_position: 1
title: Team Overview
---

# Team

The **Team** section lets you view your team roster, manage availability and schedules, and assign work.

## The team list

The team page shows all members at your selected site(s). Use the **status tabs** to filter:

| Tab | Shows |
|---|---|
| **All** | Everyone |
| **On Shift** | Currently rostered on |
| **Available** | Currently available for work |
| **On Leave** | On leave or R&R |
| **Inactive** | Inactive accounts |

Each team member row shows:

- **Name** and site
- **Role and department**
- **Presence status** -- Available, On Shift, On Leave, Off Site, or Unavailable
- **Roster** -- current schedule entry type and on-site status
- **Workload** -- assigned inspections, completed inspections, assigned defects, resolved defects, and overdue items
- **Contact** -- email and phone
- **Joined date**

Use the search bar to find members by name, role, or email. Filter by department using the dropdown.

## Team member details

Click any team member to open their detail modal with four tabs:

### Overview
Contact information, current shift details, join date, last on-site date, employee number, and certifications.

### Assignments
- **Assigned defects** -- open and in-progress defects assigned to this person
- **Assigned inspections** -- pending and scheduled inspections
- **Assign inspection** button -- quickly assign an available inspection to this member

### Activity
Audit log of the member's actions over the last 30 days.

### Schedule
List of scheduled entries (roster, R&R, leave, training, travel, standby) with the ability to add and edit entries.

## Schedule view

Switch to **Schedule view** from the toolbar to see a calendar-based view of all team members' schedules.

## Roster patterns

When creating a schedule entry for a team member, you can use a **roster pattern** to automatically generate recurring on-site and R&R blocks:

| Pattern | Cycle |
|---|---|
| 14/7 FIFO | 14 days on, 7 days off |
| 8/6 FIFO | 8 days on, 6 days off |
| 2/1 Roster | 2 weeks on, 1 week off |
| 4/4 Swing | 4 days on, 4 days off |
| 5/2 Weekly | 5 days on, 2 days off |
| 21/7 Extended | 21 days on, 7 days off |
| 28/14 Month | 28 days on, 14 days off |
| Custom | Set your own days on/off |

Select a pattern, choose a start date and number of cycles, and the system generates all the schedule entries automatically.

## Availability calendar

The **Inspector Availability** page (linked from the team page) shows:

- **Calendar view** -- colour-coded availability periods for all inspectors or a selected individual
- **List view** -- all team members with their upcoming availability periods and status

Create or edit availability periods with:
- Start and end dates
- Status: Available, On Leave, or Reduced Capacity (with a capacity percentage slider)
- Optional notes

## Assigning inspections

From a team member's detail modal (Assignments tab), click **Assign Inspection** to search for and assign a pending inspection. You can search by inspection ID, title, asset name, or template name.

## Exporting

Click **Export CSV** in the toolbar to download the current filtered team list.

## Who can manage team features?

| Action | Admin | Manager | Operator | Viewer |
|---|:---:|:---:|:---:|:---:|
| View team list and details | Yes | Yes | Yes | Yes |
| Add/edit/delete schedules | Yes | Yes (own sites) | | |
| Assign inspections | Yes | Yes | Yes | Yes |
| Export CSV | Yes | Yes | Yes | Yes |
| Navigate to user management | Yes | Yes | | |
