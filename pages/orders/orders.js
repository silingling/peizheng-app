Page({
  data: {
    tab: 0,
    allOrders: [
      { id: 1001, hospital: '北京协和医院', dept: '内科', date: '2026-06-01', time: '上午 8:00-12:00', escort: '王阿姨（等待接单）', serviceType: '全程陪诊', statusText: '待服务', statusClass: 'pending' },
      { id: 1002, hospital: '北京大学第三医院', dept: '骨科', date: '2026-05-30', time: '下午 14:00-17:00', escort: '李师傅', serviceType: '全程陪诊', statusText: '进行中', statusClass: 'ongoing' },
      { id: 1003, hospital: '北京协和医院', dept: '心内科', date: '2026-05-28', time: '上午 8:00-12:00', escort: '王阿姨', serviceType: '全程陪诊', statusText: '已完成', statusClass: 'done' },
      { id: 1004, hospital: '北京天坛医院', dept: '神经外科', date: '2026-05-25', time: '上午 8:00-12:00', escort: '刘大姐', serviceType: '代取报告', statusText: '已完成', statusClass: 'done' }
    ],
    filteredOrders: []
  },
  onLoad() { this.filterOrders() },
  onShow() { this.filterOrders() },
  switchTab(e) {
    this.setData({ tab: e.currentTarget.dataset.index })
    this.filterOrders()
  },
  filterOrders() {
    const t = this.data.tab
    let list = this.data.allOrders
    if (t == 1) list = list.filter(o => o.statusText == '待服务')
    else if (t == 2) list = list.filter(o => o.statusText == '进行中')
    else if (t == 3) list = list.filter(o => o.statusText == '已完成')
    this.setData({ filteredOrders: list })
  },
  goDetail(e) {
    wx.navigateTo({ url: '/pages/order-detail/order-detail?id=' + e.currentTarget.dataset.id })
  },
  goHome() { wx.switchTab({ url: '/pages/index/index' }) }
})
