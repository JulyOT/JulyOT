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
  url: 'https://JulyOT.github.io',
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
          trackingID: 'G-xxxxxxxx', /* TO-DO: Add G-xxxxxx id*/
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
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
      navbar: {
        title: '#JulyOT',
        logo: {
          alt: 'JulyOT Logo',
          src: 'img/svg/julyot.svg',
        },
        items: [
          { to: '/blog', label: 'Content', position: 'left'},
          { type: 'doc', docId: 'intro', position: 'left', label: 'Tutorials'},
          {
            type: 'dropdown',
            label: 'Archives',
            position: 'left',
            items: [
              {
                label: '#JulyOT 2021',
                href: 'https://techcommunity.microsoft.com/t5/internet-of-things-blog/julyot-2021-31-days-of-iot-content-for-everyone/ba-p/2427431?WT.mc_id=iot-0000-cxa',
              },
              {
                label: '#JulyOT 2020',
                href: 'https://techcommunity.microsoft.com/t5/internet-of-things-blog/julyot-a-month-of-learning-focused-on-azure-iot-solutions/ba-p/1497040?WT.mc_id=iot-0000-cxa',
              },
            ],
          },

          { to: '/contributors', label: 'Contributors', position: 'right'},
          { to: '/resources', label: 'Resources', position: 'right'},
          { to: '/roadmap', label: 'Roadmap', position: 'right'},
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
          '<b>Found this project helpful? Give us a star on <a href="https://github.com/JulyOT/JulyOT"><b>GitHub</b></a></b> 🙏🏽',
        backgroundColor: '#0D1E4E',
        textColor: '#7EE2FB',
        isCloseable: false,
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
      },
    ],
  ],
  // CONFIG-END #4: Plugins  
};

module.exports = config;
