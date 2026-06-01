Page({
  data: {
    todayOrders: [
      { id: 1, time: '08:00-12:00', hospital: '北京协和医院', patient: '张先生 137****1234', statusText: '待服务', statusClass: 'pending' },
      { id: 2, time: '14:00-17:00', hospital: '北京大学第三医院', patient: '李阿姨 138****5678', statusText: '进行中', statusClass: 'ongoing' }
    ],
    grabOrders: [
      { id: 3, hospital: '北京协和医院', dept: '内科', date: '2026-06-02', time: '上午 8:00-12:00', patient: '王叔叔（68岁）', price: 280, distance: '1.2km' },
      { id: 4, hospital: '中国人民解放军总医院', dept: '骨科', date: '2026-06-02', time: '下午 14:00-17:00', patient: '刘奶奶（75岁）', price: 320, distance: '2.5km' },
      { id: 5, hospital: '首都医科大学宣武医院', dept: '神经科', date: '2026-06-03', time: '上午 8:00-12:00', patient: '赵大爷（60岁）', price: 300, distance: '3.8km' }
    ]
  },
  grabOrder(e) {
    wx.showModal({
      title: '确认接单', content: '确定抢这个订单吗？',
      success(r) { if (r.confirm) wx.showToast({ title: '接单成功！', icon: 'success' }) }
    })
  },
  goGrab() { wx.pageScrollTo({ selector: '.grab-card' }) },
  goMyOrders() { wx.navigateTo({ url: '/pages/escort-orders/escort-orders' }) },
  goIncome() { wx.navigateTo({ url: '/pages/escort-income/escort-income' }) },
  goProfile() { wx.showToast({ title: '个人中心 — 开发中', icon: 'none' }) },
  goDetail(e) { console.log('订单详情', e.currentTarget.dataset.id) }
})
