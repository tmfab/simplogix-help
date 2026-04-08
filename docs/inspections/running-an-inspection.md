---
sidebar_position: 2
title: Running an Inspection
---

# Running an Inspection

Admins, Managers, and Operators can run inspections.

## Creating an inspection

1. Go to **Inspections** in the sidebar
2. Click **New inspection**
3. Select the **asset** you're inspecting
4. Choose one or more **inspection checklists** (templates) — only templates compatible with the asset type are shown. You can add multiple checklists to a single inspection.
5. Set the **scheduled date** (defaults to today)
6. Click **Create** — you'll be taken straight to the execution screen

You can also create inspections from the calendar view by clicking **+** on a day.

## Executing the checklist

Work through each section and item on the execution screen:

- Mark each item as **Pass** (green), **Fail** (red), or **N/A** (grey)
- Add **notes** to any item using the note button
- Capture **photos** using the camera button
- A **progress bar** at the top tracks your completion percentage

If the inspection has multiple checklists, tabs at the top let you switch between them. Each tab shows its own completion percentage.

### Focus mode

For mobile or tablet use, tap **Focus** in the header to enter focus mode:

- One checklist item at a time on a large card
- Swipe or use navigation buttons to move between items
- Tapping **Pass** auto-advances to the next item
- Tapping **Fail** opens the defect creation wizard so you can report the issue straight away
- A circular progress ring shows overall completion

### Reporting defects during an inspection

When you mark an item as **Fail**, you can log a defect on the spot:

1. The defect creation wizard opens with the asset and inspection already linked
2. Fill in the defect details, risk assessment, and planning info
3. Submit — the defect is created and a note is added to the checklist item referencing the new defect ID

This is the recommended way to report defects found during inspections, since it keeps full traceability between the inspection and the defect.

## Completing an inspection

Once all required items have been answered, the **Complete** button becomes active. Clicking it takes you to the completion screen:

1. **Summary statistics** — total items, pass/fail/N/A counts, and pass rate
2. **Failed items list** — a reminder of everything that failed, for review
3. **Additional notes** — optional free-text field for sign-off notes
4. **Signature pad** — draw your signature (required)
5. **Acknowledgement checkbox** — confirm the inspection is accurate (required)

Click **Submit** to finalise. Once submitted, the inspection is locked and can't be edited.

:::tip
You can use **Save & Exit** to save your progress and come back later — the inspection stays in **In Progress** status. However, there is no automatic draft save, so make sure to hit Save & Exit before navigating away.
:::

## Offline inspections

If you need to inspect in areas without internet:

1. Go to the inspections page and click **Download for Offline** for your plant area
2. The system estimates the download size and asks you to confirm
3. Once downloaded, you can run inspections without connectivity
4. When you reconnect, changes sync automatically. If there are conflicts, you'll be guided through resolving them.

See [Viewing inspection history](/inspections/viewing-inspection-history) for how to review completed inspections.
