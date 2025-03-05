module.exports = {
    title: 'OriginSeek 文档',
    description: 'OriginSeek 最新官方文档翻译',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'OriginSeek 网站', 
                items: [
                    { text: 'Github', link: 'https://github.com/originseek' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "看书", path: "/handbook/ConditionalTypes" },
                { title: "视频", path: "/handbook/Generics" }
              ],
            }
          ]
    },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    }
  }
