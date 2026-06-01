Page({
  data: {
    tab: 0,
    allOrders: [
      { id: 1, hospital: '北京协和医院', dept: '内科', date: '06-01', time: '08:00-12:00', patient: '张先生', patientAge: '35岁', statusText: '待服务', statusClass: 'pending' },
      { id: 2, hospital: '北大第三医院', dept: '骨科', date: '05-30', time: '14:00-17:00', patient: '李阿姨', patientAge: '72岁', statusText: '服务中', statusClass: 'ongoing' },
      { id: 3, hospital: '北京天坛医院', dept: '神经科', date: '05-28', time: '08:00-12:00', patient: '赵大爷', patientAge: '65岁', statusText: '已完成', statusClass: 'done' },
      { id: 4, hospital: '北京协和医院', dept: '心内科', date: '05-25', time: '14:00-17:00', patient: '王叔叔', patientAge: '58岁', statusText: '已完成', statusClass: 'done' }
    ],
    orders: []
  },
  onLoad() { this.filter() },
  switchTab(e) { this.setData({ tab: e.detail.index }); this.filter() },
  filter() {
    const t = this.data.tab;
    const map = ['pending', 'ongoing', 'done'];
    this.setData({ orders: this.data.allOrders.filter(o => o.statusClass == map[t]) })
  },
  startService() {
    wx.showActionSheet({ itemList: ['已到医院签到', '已取号报到', '候诊中'], success() { wx.showToast({ title: '状态已更新', icon: 'success' }) } })
  },
  completeService() { wx.showToast({ title: '服务已完成', icon: 'success' }) }
})
