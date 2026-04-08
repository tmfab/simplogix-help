---
sidebar_position: 2
title: Adding Assets
---

# Adding Assets

Admins, Managers, and Operators can add new assets to the register.

## Starting the form

1. Go to **Assets** in the sidebar
2. Click **Add asset** (top right)
3. If you have access to multiple sites, you'll be asked to **confirm the site** the asset belongs to
4. If your site has multiple form templates configured, you'll be asked to **select a template** -- this determines which fields appear on the form

## The asset creation wizard

The creation form has three tabs:

### Tab 1: Details

The left panel contains the core asset fields. The exact fields depend on your site's form template, but typically include:

- **Name** -- a clear, identifiable name for the asset
- **Description** -- additional context about the asset
- **Plant area** and **Sub-area** -- the hierarchical location on site (searchable dropdown)
- **Asset type** -- the category of equipment (hierarchical dropdown)
- **Status** -- Active, Inactive, Maintenance, or Decommissioned (defaults to Active)
- **Criticality** -- High, Medium, or Low (defaults to Medium)
- **SAP FLOC** -- SAP functional location reference (if applicable)
- **Unit ID number** -- your internal unit identification number

Your administrator may have configured additional custom fields specific to your site.

The right panel lets you:

- **Upload reference photos** -- drag and drop or click to browse. You can upload multiple photos.
- **Link restricted areas** -- if restricted areas exist on your site, select which ones this asset is associated with

Below both panels, you can optionally attach an **asset sub-template** with additional grouped fields specific to the asset type.

### Tab 2: Inspection Schedule

Set up recurring inspection schedules for this asset:

- **Frequency** -- how often (e.g. every 7 days, every 2 weeks, every 1 month)
- **Inspection template** -- which checklist to use for each scheduled inspection

You can add multiple schedules with different frequencies and templates. This tab is optional -- you can skip it and set up schedules later.

### Tab 3: Review

A read-only summary of everything you've entered. Check the details, then click **Create Asset** to save.

## After creating

The asset will appear in your asset register and can be selected when running inspections or logging defects.

## Editing an asset

Managers and Admins can edit existing assets by opening the asset detail page and clicking **Edit**. The same three-tab form appears with the current values pre-filled.
