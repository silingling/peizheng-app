Page({
  data: {
    tab: 0,
    orders: [
      {
        id: 1,
        hospital: '北京协和医院',
        dept: '内科',
        date: '2026-06-01',
        time: '上午 8:00-12:00',
        escort: '张护士（等待接单）',
        status: 1,
        statusText: '待服务',
        statusClass: 'pending'
      },
      {
        id: 2,
        hospital: '北京大学第三医院',
        dept: '骨科',
        date: '2026-05-30',
        time: '下午 14:00-17:00',
        escort: '李师傅',
        status: 2,
        statusText: '进行中',
        statusClass: 'ongoing'
      },
      {
        id: 3,
        hospital: '北京协和医院',
        dept: '心内科',
        date: '2026-05-28',
        time: '上午 8:00-12:00',
        escort: '王阿姨',
        status: 3,
        statusText: '已完成',
        statusClass: 'done'
      }
    ]
  },

  switchTab(e) {
    this.setData({ tab: e.currentTarget.dataset.index })
  },

  viewDetail(e) {
    wx.showToast({ title: '订单详情 — 开发中', icon: 'none' })
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' })
  }
})