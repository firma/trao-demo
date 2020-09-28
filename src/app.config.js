export default {
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/car/index',
    'pages/category/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
  },
  tabBar: {
    // custom: true,
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    selectedColor: '#AB956D',
    color: '#666',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home@selected.png',
        text: '首页'
      }, {
        pagePath: 'pages/category/index',
        iconPath: './assets/images/category.png',
        selectedIconPath: './assets/images/category@selected.png',
        text: '分类'
      }, {
        pagePath: 'pages/car/index',
        iconPath: './assets/images/cart.png',
        selectedIconPath: './assets/images/cart@selected.png',
        text: '购物车'
      },{
        pagePath: 'pages/home/index',
        iconPath: './assets/images/my.png',
        selectedIconPath: './assets/images/my@selected.png',
        text: '个人'
      }
    ]
  },
  usingComponents: {}
}
