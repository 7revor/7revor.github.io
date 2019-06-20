module.exports = {
  title: '7revor',
  description: '可爱又迷人的反派角色',
  base: '/docs/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'React',
      link: '/React/'
    }, {
      text: 'Documents',
      link: '/Notes/'
    }, {
      text: 'Learning',
      link: '/Learning/'
    }, ],
    displayAllHeaders: false, //显示所有页面的标题链接
    sidebarDepth: 2,
    sidebar: {
      '/React/': [
        ['TabBar', '导航栏组件'],
        ['Dialog', '动态弹窗'],
        ['ActionSheet', '动作菜单组件'],
        ['Animated', 'ReactNative动画指南'],
        ['titleWrapper', '简单实用的高阶组件'],
        ['closeKeyBoard', 'QAP自动关闭键盘'],
        ['heightProvider', '组件样式响应键盘高度'],
        ['listView', 'ListView长列表'],
        ['cardHoc', '卡片弹窗HOC'],
        ['context', 'IOS高级功能控制']
      ],
      '/Learning/': [
        ['vuepress', 'VuePress教程'],
        ['publish','观察者模式&&发布-订阅模式'],
        ['bind','双向数据绑定'],
        ['loop','事件循环'],
      ],
      '/Notes/': [
        ['publish', '发布宝贝'],
        ['goodsProps', '宝贝属性详解'],
      ],
      /**
       *  // fallback,确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
       */
      '/': [
        '', /* / */
        /*    'contact', /!* /contact.html *!/
            'about'    /!* /about.html *!/*/
      ]
    }
  }
}
