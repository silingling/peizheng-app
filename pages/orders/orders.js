Page({
  data: {
    tab: 0,
    allOrders: [
      { id: 1001, hospital: '北京协和医院', dept: '内科', date: '2026-06-01', time: '上午', escort: '王阿姨', serviceType: '全程陪诊', price: '280', statusText: '待服务', statusClass: 'pending' },
      { id: 1002, hospital: '北大第三医院', dept: '骨科', date: '2026-05-30', time: '下午', escort: '李师傅', serviceType: '全程陪诊', price: '320', statusText: '进行中', statusClass: 'ongoing' },
      { id: 1003, hospital: '北京协和医院', dept: '心内科', date: '2026-05-28', time: '上午', escort: '王阿姨', serviceType: '全程陪诊', price: '280', statusText: '已完成', statusClass: 'done' },
      { id: 1004, hospital: '北京天坛医院', dept: '神经科', date: '2026-05-25', time: '上午', escort: '刘大姐', serviceType: '代取报告', price: '80', statusText: '已完成', statusClass: 'done' }
    ],
    filteredOrders: []
  },
  onLoad() { this.filter() },
  onShow() { this.filter() },
  switchTab(e) { this.setData({ tab: e.detail.index }); this.filter() },
  filter() {
    const t = this.data.tab;
    let list = this.data.allOrders;
    if (t == 1) list = list.filter(o => o.statusClass == 'pending');
    else if (t == 2) list = list.filter(o => o.statusClass == 'ongoing');
    else if (t == 3) list = list.filter(o => o.statusClass == 'done');
    this.setData({ filteredOrders: list });
  },
  goDetail(e) { wx.navigateTo({ url: '/pages/order-detail/order-detail?id=' + e.currentTarget.dataset.id }) }
})
