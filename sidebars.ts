import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/what-is-simplogix',
        'getting-started/logging-in',
        'getting-started/navigating-the-app',
        'getting-started/user-roles',
        'getting-started/dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Assets',
      items: [
        'assets/overview',
        'assets/adding-assets',
        'assets/viewing-asset-details',
      ],
    },
    {
      type: 'category',
      label: 'Defects',
      items: [
        'defects/overview',
        'defects/logging-a-defect',
        'defects/managing-defects',
      ],
    },
    {
      type: 'category',
      label: 'Inspections',
      items: [
        'inspections/overview',
        'inspections/running-an-inspection',
        'inspections/viewing-inspection-history',
      ],
    },
    {
      type: 'category',
      label: 'Restricted Areas',
      items: [
        'restricted-areas/overview',
        'restricted-areas/managing-restricted-areas',
      ],
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'reports/overview',
      ],
    },
    {
      type: 'category',
      label: 'Team',
      items: [
        'team/overview',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/overview',
        'admin/inviting-users',
        'admin/managing-users',
        'admin/site-management',
        'admin/templates',
        'admin/general-settings',
        'admin/import-export',
        'admin/logs-and-audits',
        'admin/notification-settings',
      ],
    },
  ],
};

export default sidebars;
