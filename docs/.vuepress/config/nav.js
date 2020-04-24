module.exports = [
  {text: '首页', link: '/'},

  {text: '大数据',
    link: '/bigdata/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: 'Flink', link: '/flink/1587645703000/'},
      {text: 'Kafka', link: '/kafka/1587645504000/'},
      {text: 'HBase', link: '/hbase/1587645469000/'},
    ]
  },
  {text: '后端', 
    link: '/backend/',
    items: [
      {text: 'Java', link: '/java/1587646709000/'},
      {text: 'Scala', link: '/scala/1587646767000/'},
      {text: 'Spring', link: '/spring/1587646822000/'},
      {text: 'Activiti', link: '/activiti/1587647820000/'},
    ]
  },
  {text: '前端',
    link: '/web/',
    items: [
      {text: 'HTML', link: '/html/1587647042000/'},
      {text: 'CSS', link: '/css/1587647092000/'},
      {text: 'JavaScript', link: '/javascript/1587647142000/'},
    ]
  },
  {text: '其他', 
    link: '/more/',
    items: [
      {text: '常用命令', link: '/pages/1587647529000/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '收藏夹',
    link: '/bookmark/',
    items: [
      {text: '学习网站', link: '/bookmark/1587645155000/'},
      {text: '学习资源', link: '/bookmark/1587648280000/'},
      {text: '其他网站', link: '/bookmark/1587645191000/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {text: '时间轴', link: '/timeline/'},
]
