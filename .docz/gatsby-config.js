const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: '大数据学习',
    description: '大数据学习',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: { codemirrorTheme: 'dracula' },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\node-workspace\\bigdata-notes\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '大数据学习',
        description: '大数据学习',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\node-workspace\\bigdata-notes',
          templates:
            'D:\\node-workspace\\bigdata-notes\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\node-workspace\\bigdata-notes\\.docz',
          cache: 'D:\\node-workspace\\bigdata-notes\\.docz\\.cache',
          app: 'D:\\node-workspace\\bigdata-notes\\.docz\\app',
          appPackageJson: 'D:\\node-workspace\\bigdata-notes\\package.json',
          appTsConfig: 'D:\\node-workspace\\bigdata-notes\\tsconfig.json',
          gatsbyConfig: 'D:\\node-workspace\\bigdata-notes\\gatsby-config.js',
          gatsbyBrowser: 'D:\\node-workspace\\bigdata-notes\\gatsby-browser.js',
          gatsbyNode: 'D:\\node-workspace\\bigdata-notes\\gatsby-node.js',
          gatsbySSR: 'D:\\node-workspace\\bigdata-notes\\gatsby-ssr.js',
          importsJs:
            'D:\\node-workspace\\bigdata-notes\\.docz\\app\\imports.js',
          rootJs: 'D:\\node-workspace\\bigdata-notes\\.docz\\app\\root.jsx',
          indexJs: 'D:\\node-workspace\\bigdata-notes\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\node-workspace\\bigdata-notes\\.docz\\app\\index.html',
          db: 'D:\\node-workspace\\bigdata-notes\\.docz\\app\\db.json',
        },
        htmlContext: {
          head: {
            links: [
              {
                rel: 'stylesheet',
                href: 'https://codemirror.net/theme/dracula.css',
              },
            ],
          },
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
