// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '#JulyOT',
  tagline: 'A Month-long Celebration of the Internet-Of-Things!!',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // --- CONFIG-START #1: GitHub Pages
  url: 'https://JulyOT.dev',
  baseUrl: '/',
  projectName: 'JulyOT',
  organizationName: 'JulyOT',
  trailingSlash: false,
  deploymentBranch: `gh-pages`,
  // ---- CONFIG-END #1: GitHub Pages


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // CONFIG-START #2: Presets

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Most Recent Posts',
          postsPerPage: 1,
        },
        gtag: {
          trackingID: 'G-4LCHFKPDVJ', /* TO-DO: Add G-xxxxxx id*/
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],
  // CONFIG-END #2: Presets


  // CONFIG-START #3: Theme
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      metadata: [{ name: 'msvalidate.01', content: '7EBB3CA4C71A21C77534F4358EAE87A2' }, { name: 'keywords', content: 'iot, internet of things, julyot, ai, embedded' }],
      image: 'img/png/julyot-card.png',
      navbar: {
        title: '#JulyOT',
        logo: {
          alt: 'JulyOT Logo',
          src: 'img/svg/julyot.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/skills', label: 'Cloud Skills', position: 'right' },
          { to: '/digitalswag', label: 'Digital Swag', position: 'right' },
          // { to: '/videos', label: 'Videos', position: 'right'},
          { to: '/livestreams', label: 'Live Streams', position: 'right' },
          { to: '/meetups', label: 'Meetups and Events', position: 'right' },
          // { to: '/roadmap', label: 'Roadmap', position: 'right'},
          { to: '/resources', label: 'Resources', position: 'right' },
          {
            type: 'dropdown',
            label: 'Archives',
            position: 'right',
            items: [
              {
                label: '#JulyOT 2021',
                href: 'https://techcommunity.microsoft.com/t5/internet-of-things-blog/julyot-2021-31-days-of-iot-content-for-everyone/ba-p/2427431?WT.mc_id=eventspg_16482_webpage_reactor',
              },
              {
                label: '#JulyOT 2020',
                href: 'https://techcommunity.microsoft.com/t5/internet-of-things-blog/julyot-a-month-of-learning-focused-on-azure-iot-solutions/ba-p/1497040?WT.mc_id=eventspg_16482_webpage_reactor',
              },
            ],
          },
          {
            href: 'https://github.com/JulyOT/JulyOT',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        /*
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        */
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built by @AzureAdvocates using @Docusaurus ♥️`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: '#JulyOT',
        content:
          '<b>Join the <a href="https://docs.microsoft.com/learn/challenges?id=261fd583-fa7b-4b1f-86eb-6a52b5468a23&wt.mc_id=eventspg_16482_webpage_reactor" target="_blank"><b>IoT Cloud Skills Challenge</b></a> and build expertise in implementing the configuration and coding tasks required to create and maintain the cloud and edge portions of an IoT solution.</b>',
        backgroundColor: '#0D1E4E',
        textColor: '#7EE2FB',
        isCloseable: false,
      },
      clarity: {
        ID: "chk0ns2za1",
      },
    }),
  // CONFIG-END #3: Theme


  // CONFIG-START #4: Plugins  
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      }
    ],
    'docusaurus-plugin-clarity',
  ],
  // CONFIG-END #4: Plugins  
};

module.exports = config;
