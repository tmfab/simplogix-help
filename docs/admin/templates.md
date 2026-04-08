---
sidebar_position: 5
title: Templates
---

# Templates

Templates define the forms and checklists used throughout SIMPLOGIX. Go to **Company Settings > Templates** to manage them.

## Template types

| Tab | What it controls |
|---|---|
| **Inspections** | Inspection checklist templates -- the sections and questions operators work through during an inspection |
| **Defects** | Defect form templates -- the fields shown when logging a defect, plus optional sub-templates for type-specific fields |
| **Assets** | Asset form templates -- the fields shown when creating an asset, plus optional sub-templates for type-specific fields |
| **Restricted Areas** | Form templates for restricted area records |
| **Reports** | Report templates |
| **Analytics** | Analytics template usage statistics |
| **Categories** | Organise templates into categories |
| **Lookups** | Shared dropdown option lists reusable across templates |
| **Risk Matrix** | Configure the risk assessment matrix used for defects |

## Inspection templates

Inspection templates are built from **sections** and **questions**. Each section groups related questions. Each question has:

- Question text
- Response type: Pass/Fail, Text Response, Numeric Value, Photo Evidence, or Checkbox
- Required flag -- whether the inspector must answer this item
- Help text (optional) -- guidance shown below the question

## Asset and defect form templates

These templates define which fields appear on the creation and edit forms. There are two levels:

- **Form template** -- the base form. Fields can be mapped to standard database columns (name, description, plant area, status, etc.) or configured as custom fields.
- **Sub-templates** -- optional add-on templates that provide extra fields for specific types. For example, a "Pump" sub-template might add fields for flow rate and pressure rating.

Custom field types include: Text, Text Area, Number, Dropdown (with configurable options), Multi-Select, Checkbox, Date, Photo, and Signature.

Each field can be marked as required and as "Show in register" (which makes it appear as a column in the list view).

## Managing templates

From any template list, use the action menu to:

- **Edit** -- open the template builder
- **Set Visibility** -- control which sites can see this template
- **Duplicate** -- create a copy with a new name
- **View Version History** -- see all previous versions
- **Archive** -- remove from active use (can be restored later)
- **Permanently Delete** -- irreversible removal (shows a warning if the template is in use)

## Bulk visibility

Select multiple templates and use the bulk visibility panel to update site visibility across all selected templates at once.

## Lookups

Lookups are shared dropdown option lists (e.g. defect types, repair types, condition ratings). Configure them once and reuse them across multiple templates. Changes to a lookup are reflected everywhere it's used.

## Risk matrix

The Risk Matrix tab lets you configure:

- Grid size and risk level colour palette
- Scale labels for likelihood and consequence
- Classification rules that define how likelihood x consequence combinations map to risk ratings (Low, Medium, High, Extreme)

Changes here affect the risk assessment matrix shown when logging and managing defects.
