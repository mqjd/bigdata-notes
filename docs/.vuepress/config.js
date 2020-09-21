const nav = require('./config/nav.js');
// const sidebar = require('./config/sidebar.js');

module.exports = {
  title: "QiangMa's blog",
  description: '大数据学习、前端等学习笔记，其他感悟收集等。', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/vuepress-theme-vdoing/', // '/<github仓库名>/'， 默认'/' 
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '大数据学习、前端等学习笔记，其他感悟收集等'}],
    ['meta', { name: 'baidu-site-verification', content: 've9zCMsuxa'}],// 百度统计博主验证
    ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    ['script', { src: '/js/viewer.min.js', async: 'sync'}]
    // 不蒜子访问量统计
    // ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async: 'async'}]

    // 以下是vuepress-plugin-demo-block插件所需依赖
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }], // 此文件会影响导航router-link-active样式的切换，改为在enhanceApp.js中把Vue构造函数绑定到window上
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },
  theme: require.resolve('../../theme-vdoing'), // 使用的主题
  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/mq.png', // 导航栏logo
    repo: 'mqjd/bigdata-notes', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 编辑链接
    editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: 'structuring', //  侧边栏   'auto' | 自定义 | 'structuring' | { mode: 'structuring', collapsable: Boolean}  温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    // updateBar: { // 最近更新栏（此配置和它下面的所有属性均是可选的）
    //   onHome: { // 在首页
    //     isShow: true, // 是否显示，默认true
    //     length: 5 // 显示的数量，默认5
    //   },
    //   onArticle: { // 在文章页
    //     isShow: true, // 是否显示，默认true
    //     length: 3 // 显示的数量，默认3
    //   },
    //   moreArticle: '/timeline' // “更多文章”跳转的页面，默认'/timeline'
    // },
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息
      name: 'Qiang Ma', // 必需
      href: 'https://github.com/mqjd' // 可选的
    },
    blogger:{ // 博主信息，显示在首页侧边栏
      avatar: '/img/me.jpg',
      name: 'Qiang Ma',
      slogan: '大数据小学生，前端新手'
    },
    social:{ // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1378415278@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/mqjd'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/'
        }
      ]
    },
    footer:{ // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'Qiang Ma | MIT License', // 博客版权信息，支持a标签
      // footerBgImg: '/img/footer.png' // 可选的，页脚背景图，只在首页显示
    }
  },
  plugins: [ // 插件
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],
    [require('./plugins/title-badge'), { // h1标题徽章
      // badges: [ // 替换默认的徽章图标,可选
      //   'base64图片1',
      //   'base64图片2',
      // ]
    }],
    [require('./plugins/drawio-viewer'), {}],
    // [require('./plugins/enhanced-search'), { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）,增加后导致drawio viewer不可用
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在百度中搜索',
    //       frontUrl: 'https://www.baidu.com/s?wd=',
    //     },
    //     {
    //       title: '在Google中搜索',
    //       frontUrl: 'https://www.google.com/search?q='
    //     }
    //   ]
    // }],
    'vuepress-plugin-baidu-autopush', // 百度自动推送
    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector:'.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '503f098e7e5b3a5b5d8c5fc2938af002'
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk', 
        options: {
          clientID: '8b6289a2f4cc1c8ccbfa',
          clientSecret: 'c0ff54427cdbeae2039014dba0eb665e2a557de1',
          repo: 'bigdata-notes', // GitHub 仓库
          owner: 'mqjd', // GitHub仓库所有者
          admin: ['mqjd'], // 对仓库有写权限的人
          distractionFreeMode: false,
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body:"页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }
    ]
  ],
  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
