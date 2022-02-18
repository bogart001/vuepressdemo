/*
 * @Descriptionde
 * @Version: 1.0
 * @Author: fcli
 * @Date: 2022-02-11 16:19:08
 */
module.exports = {
  title: "Cheng's Note",
  description: '我的个人网站',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      {
        text: '工具',
        items: [
          {
            text: 'myCodeEdit',
            link: '/tools/myCodeEdit',
          },
          {
            text: 'myCodePen',
            link: '/tools/myCodePen',
          },
        ],
      },
    ],
    sidebar: [
      {
        title: 'Group 1', // 必要的
        path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [{ title: 'one', path: 'demo1/one' }],
      },
      {
        title: 'Group 2',
        children: [{ title: 'two', path: 'demo1/two' }],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
