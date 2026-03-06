import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/what-is-simplogix',
        'getting-started/logging-in',
        'getting-started/navigating-the-app',
        'getting-started/user-roles',
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
      label: 'Inspections',
      items: [
        'inspections/overview',
        'inspections/running-an-inspection',
        'inspections/viewing-inspection-history',
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
  ],
};

export default sidebars;
