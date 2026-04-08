---
sidebar_position: 4
title: Site Management
---

# Site Management

Sites represent physical locations in your organisation -- mines, processing plants, ports, offices, or warehouses. All data in SIMPLOGIX (assets, inspections, defects) is scoped to a site.

## Viewing your sites

Go to **Company Settings > Sites** to see:

- **Overview tab** -- aggregate metrics across all sites (total assets, open defects, pending inspections, user count), grouped by status
- **Sites List tab** -- a table of all sites with action buttons

## Creating a new site

1. Go to the **Create New** tab
2. Follow the four-step wizard:

**Step 1 -- Basic Info:**
- Site name (required)
- Site code (required, exactly 3 uppercase characters, e.g. `NR1`)
- Description (optional)
- Site type (Mine, Processing Plant, Port, Office, Warehouse, or Other)
- Timezone

**Step 2 -- Location:**
- Street address, city, state, country, postal code
- GPS coordinates (latitude/longitude)

**Step 3 -- Clone Options (optional):**
- Select an existing site to clone from
- Choose whether to also clone **plant areas** (the area hierarchy) and/or **template visibility** settings
- Assets, defects, inspections, and user assignments are never cloned -- only configuration

**Step 4 -- Review:**
- Confirm all details and click **Create Site**

## Editing a site

Click **Edit** on any site in the Sites List to open the detail panel with four tabs:

- **Details** -- update name, code, description, type, timezone, and status
- **Location** -- update address and GPS coordinates
- **Plant Areas** -- manage the hierarchical plant area structure (create, edit, reorder, and nest areas)
- **Users** -- see which users have access to this site, their role, access level, and last login

## Cloning a site

Click **Clone** on any site to create a copy. You'll need to provide a new name and site code. Optionally clone plant areas and template visibility settings. This is useful when setting up a new site with a similar structure to an existing one.

## Archiving and reactivating

- **Archive** -- hides the site from normal views and removes user access. Useful for decommissioned or inactive locations. You'll see a summary of current metrics before confirming.
- **Reactivate** -- restores a previously archived site and re-enables user access.

## Plant areas

Plant areas define the physical hierarchy of your site (e.g. Processing > Crushing > Primary Crusher). They are used to:

- Organise assets by location
- Filter views throughout the app
- Scope offline data downloads

Manage them from the **Plant Areas** tab in the site detail panel. Areas can be nested to any depth.
