import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {label: 'Getting Started', to: '/getting-started/what-is-simplogix'},
            {label: 'Assets', to: '/assets/overview'},
            {label: 'Inspections', to: '/inspections/overview'},
            {label: 'Defects', to: '/defects/overview'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Contact Support', href: 'mailto:support@simplogix.app'},
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
