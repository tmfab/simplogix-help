---
sidebar_position: 2
title: Logging a Defect
---

# Logging a Defect

Admins, Managers, and Operators can log defects.

## From the defects page

1. Go to **Defects** in the sidebar
2. Click **Create defect**
3. The creation wizard opens with three tabs

### Tab 1: Details and Photos

**Left panel — defect details:**

- **Asset** (required) — the asset this defect relates to (searchable dropdown)
- **Template-driven fields** — the exact fields depend on your site's defect form template. Common fields include: title, description, defect type, class, element type, condition rating, repair type, location, component affected, operational impact, and safety risk.

Some fields use cascading dropdowns — for example, selecting a defect class filters the available element types, which in turn filters defect types and repair types.

**Right panel — evidence:**

- **Photos** — drag and drop or click to upload (up to 10 photos, 10 MB each)
- **Evidence notes** — free-text context for the photos

You can also attach an optional additional template with extra custom fields.

### Tab 2: Risk Assessment

An interactive 5x5 risk matrix where you assess:

- **Likelihood** — how likely is the issue to cause harm? (Rare, Unlikely, Possible, Likely, Almost Certain)
- **Consequence** — how severe would the impact be? (Insignificant, Minor, Moderate, Major, Catastrophic)

Click a cell in the matrix to set both values at once, or use the dropdowns below. The risk score (likelihood x consequence, 1–25) and risk level (Low, Medium, High, or Extreme) are calculated automatically and shown as a persistent badge across all tabs.

Add risk notes to document your reasoning.

### Tab 3: Repair & Planning

- **Repair priority** (required) — select from your site's configured priority levels
- **Recommended actions** — describe the repair steps, materials, and safety considerations
- **Estimated hours** and **Estimated cost**
- **Required skills/resources**

Click **Report Defect** to submit. The defect is created with a status of **Outstanding**.

## From an inspection

When running an inspection, marking a checklist item as **Fail** opens the defect creation wizard with the asset and inspection pre-linked. This is the best way to log defects found during inspections — it maintains full traceability.

## After logging

The defect appears in the defects list and can be assigned, tracked on the Kanban board, and managed through to closeout.
