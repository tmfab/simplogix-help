---
sidebar_position: 5
title: Templates
---

# Templates

Templates define the forms and checklists used throughout SIMPLOGIX. Manage them from **Company Settings > Templates**.

## Template types

| Tab | What it controls |
|---|---|
| **Inspections** | Checklist templates — the sections and questions operators work through during an inspection |
| **Defects** | Defect form templates — the fields shown when logging a defect, plus optional sub-templates for type-specific fields |
| **Assets** | Asset form templates — the fields shown when creating an asset, plus optional sub-templates |
| **Restricted Areas** | Form templates for restricted area records |
| **Reports** | Report templates |
| **Analytics** | Template usage statistics |
| **Categories** | Organise templates into categories |
| **Lookups** | Shared dropdown option lists reusable across templates |
| **Risk Matrix** | The risk assessment matrix used for defects |

## Inspection templates

Inspection templates are built from **sections** and **questions**. Each section groups related questions. Each question has:

- Question text
- Response type: Pass/Fail, Text Response, Numeric Value, Photo Evidence, or Checkbox
- A required flag
- Optional help text shown below the question

## Asset and defect form templates

These define which fields appear on creation and edit forms. There are two levels:

- **Form template** — the base form. Fields can map to standard database columns (name, description, plant area, status, etc.) or be configured as custom fields.
- **Sub-templates** — optional add-ons for specific types. For example, a "Pump" sub-template might add fields for flow rate and pressure rating.

Custom field types: Text, Text Area, Number, Dropdown, Multi-Select, Checkbox, Date, Photo, and Signature.

Each field can be marked as required and as "Show in register" (which makes it visible as a column in the list view).

## Managing templates

From any template list, the action menu lets you:

- **Edit** — open the template builder
- **Set Visibility** — control which sites can see this template
- **Duplicate** — create a copy with a new name
- **View Version History** — see previous versions
- **Archive** — remove from active use (can be restored)
- **Permanently Delete** — irreversible (warns if the template is in use)

## Bulk visibility

Select multiple templates and use the bulk visibility panel to update site visibility across all of them at once.

## Lookups

Lookups are shared dropdown option lists (e.g. defect types, repair types, condition ratings). Configure them once and reuse across multiple templates. Changes to a lookup are reflected everywhere it's used.

## Risk matrix

The Risk Matrix tab lets you configure the grid size, colour palette, scale labels for likelihood and consequence, and the classification rules that map likelihood x consequence combinations to risk ratings (Low, Medium, High, Extreme).

Changes here affect the risk assessment matrix shown when logging and managing defects.
