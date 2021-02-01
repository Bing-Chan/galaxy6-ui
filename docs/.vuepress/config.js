module.exports = {
  title: 'galaxy6-ui',
  description: '一个VUE组件库',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/galaxy-ui/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 添加导航栏
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '文档首页',
        link: '/componentDoc/'
      },
      {
        text: 'github',
        link: 'https://github.com/Bing-Chan/galaxy6-ui'
      },
      {
        text: 'gitee',
        link: 'https://github.com/Bing-Chan/galaxy6-ui'
      }
    ],
    // 为以下路由添加侧边栏
    sidebarDepth: 0,
    sidebar: {
      '/componentDoc/': [{
          title: '使用指南',
        collapsable: false,
          children: [
            'guide/installion.md',
            'guide/quickstart.md',
            'guide/transition.md'
          ]
        }, 
        {
          title: '基本组件',
          collapsable: false,
          children: [
            'base/BaseLayout.md',
            'base/BaseIcon.md',
            'base/BaseButton.md',
            'base/BaseTag.md'
          ]
        },
        {
          title: '表单类组件',
          collapsable: false,
          children: []
        },
        {
          title: '弹窗类组件',
          collapsable: false,
          children: []
        },
        {
          title: '导航类组件',
          collapsable: false,
          children: []
        }
      ]
    }
  }
};