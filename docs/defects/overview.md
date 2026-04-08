---
sidebar_position: 1
title: Defects Overview
---

# Defects

Defects are issues found on assets — anything from minor wear to safety-critical faults. SIMPLOGIX helps you log them, assess the risk, plan repairs, and close them out through a structured process.

![Defects page](/img/screenshots/defects.png)

## Defect statuses

| Status | Meaning |
|---|---|
| **Outstanding** | Logged and awaiting action |
| **Planned** | Repair has been scheduled |
| **In Progress** | Repair work is underway |
| **Completed** | Repair is done, pending QA/QC verification |
| **Closed** | Verified and formally closed |
| **Deferred** | Postponed |

## Risk levels

Every defect is assessed using a risk matrix (likelihood x consequence). The resulting risk level determines priority:

| Risk Level | Score Range | Meaning |
|---|---|---|
| **Low** | 1–3 | Minor issue, address when convenient |
| **Medium** | 4–7 | Moderate concern, plan for repair |
| **High** | 8–14 | Significant risk, prioritise repair |
| **Extreme** | 15–25 | Critical safety risk, immediate action required |

## Viewing defects

Three views are available:

| View | Description |
|---|---|
| **List** | Sortable data table with configurable columns |
| **Grid** | Card-based view with adjustable density (compact, normal, comfortable) |
| **Kanban** | Board with six columns (one per status) — drag cards between columns to update status |

## Filtering

Filter by:

- **Risk level** — click the risk level badges (Extreme, High, Medium, Low)
- **Status**, **asset**, **plant area**, **assignee**, **date range**
- **Risk matrix heatmap** — toggle an interactive matrix to filter by specific likelihood/consequence combinations

An expandable **analytics panel** provides summary charts: defect trends, severity distribution, area heatmap, and assignee workload.

## Next steps

- [Logging a defect](/defects/logging-a-defect)
- [Managing defects](/defects/managing-defects)
