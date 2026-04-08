import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
  title: 'SIMPLOGIX Help',
  tagline: 'Everything you need to get the most out of SIMPLOGIX',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.simplogix.app',
  baseUrl: '/',

  organizationName: 'tmfab',
  projectName: 'simplogix-help',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SIMPLOGIX Help',
      logo: {
        alt: 'SIMPLOGIX Logo',
        src: 'img/simplogix-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://simplogix.app',
          label: 'Open App',
          position: 'right',
          className: 'navbar-open-app-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            {label: 'What is SIMPLOGIX?', to: '/getting-started/what-is-simplogix'},
            {label: 'Logging In', to: '/getting-started/logging-in'},
            {label: 'User Roles', to: '/getting-started/user-roles'},
            {label: 'Dashboard', to: '/getting-started/dashboard'},
          ],
        },
        {
          title: 'Features',
          items: [
            {label: 'Assets', to: '/assets/overview'},
            {label: 'Inspections', to: '/inspections/overview'},
            {label: 'Defects', to: '/defects/overview'},
            {label: 'Restricted Areas', to: '/restricted-areas/overview'},
            {label: 'Reports', to: '/reports/overview'},
            {label: 'Team', to: '/team/overview'},
          ],
        },
        {
          title: 'Administration',
          items: [
            {label: 'Inviting Users', to: '/admin/inviting-users'},
            {label: 'Managing Users', to: '/admin/managing-users'},
            {label: 'Site Management', to: '/admin/site-management'},
            {label: 'Templates', to: '/admin/templates'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Contact Support', href: 'mailto:support@simplogix.app'},
            {label: 'Open App', href: 'https://simplogix.app'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SIMPLOGIX. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
