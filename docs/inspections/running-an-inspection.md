---
sidebar_position: 2
title: Running an Inspection
---

# Running an Inspection

Admins, Managers, and Operators can run inspections.

## Creating an inspection

1. Go to **Inspections** in the sidebar
2. Click **New inspection**
3. Select the **asset** you are inspecting
4. Choose one or more **inspection checklists** (templates). Only templates compatible with the asset type are shown. You can add multiple checklists to a single inspection.
5. Set the **scheduled date** (defaults to today)
6. Click **Create** -- you'll be taken straight to the execution screen

You can also create inspections from the calendar view by clicking **+** on a specific day.

## Executing the checklist

On the execution screen, work through each section and item:

- Mark each item as **Pass** (green), **Fail** (red), or **N/A** (grey)
- Add **notes** to any item using the note button
- Capture **photos** for any item using the camera button
- A **progress bar** at the top tracks your completion percentage

If your inspection has multiple checklists, use the **tabs** at the top to switch between them. Each tab shows its own completion percentage.

### Focus mode

For mobile or tablet use, tap **Focus** in the header to enter focus mode:

- See one checklist item at a time on a large card
- Swipe left/right or use the navigation buttons to move between items
- Tapping **Pass** auto-advances to the next item
- Tapping **Fail** opens the defect creation wizard so you can report the issue immediately
- A circular progress ring shows your overall completion

### Reporting defects during an inspection

When you mark an item as **Fail**, you can log a defect directly:

1. A defect creation wizard opens with the asset and inspection already linked
2. Fill in the defect details, risk assessment, and planning information
3. Submit -- the defect is created and a note is automatically added to the checklist item referencing the new defect ID

This is the recommended way to report defects found during inspections, as it maintains full traceability.

## Completing an inspection

When all required items have been answered, the **Complete** button becomes active. Clicking it takes you to the completion screen, which shows:

1. **Summary statistics** -- total items, pass/fail/N/A counts, and pass rate
2. **Failed items list** -- a reminder of all failed items for review
3. **Additional notes** -- optional free-text field for sign-off notes
4. **Signature pad** -- draw your signature (required)
5. **Acknowledgement checkbox** -- confirm the inspection is accurate (required)

Click **Submit** to finalise the inspection. Once submitted, the inspection is permanent and cannot be edited.

:::caution
There is no draft save feature. If you leave the execution screen before completing, your progress will not be saved. Complete the inspection in a single session, or use offline mode if you're working in areas with poor connectivity.
:::

## Offline inspections

If you need to inspect in areas without internet:

1. Go to the inspections page and click **Download for Offline** for your plant area
2. The system will estimate the download size and confirm before proceeding
3. Once downloaded, you can execute inspections without connectivity
4. When you reconnect, changes sync automatically. If conflicts are detected, you'll be guided through resolution.

See [Viewing inspection history](/inspections/viewing-inspection-history) for how to review completed inspections.
