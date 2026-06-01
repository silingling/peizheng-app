Page({
  data: {
    stats: [
      { num: '3', label: '今日接单' },
      { num: '¥480', label: '今日收入' },
      { num: '28', label: '本月服务' },
      { num: '4.9', label: '综合评分' }
    ],
    todayOrders: [
      { id: 1, time: '08:00-12:00', hospital: '北京协和医院', patient: '张先生 137****1234', statusText: '待服务', statusClass: 'pending' },
      { id: 2, time: '14:00-17:00', hospital: '北大第三医院', patient: '李阿姨 138****5678', statusText: '进行中', statusClass: 'ongoing' }
    ],
    grabOrders: [
      { id: 3, hospital: '北京协和医院·内科', time: '06-02 上午', price: 280, date: '2026-06-02' },
      { id: 4, hospital: '解放军总医院·骨科', time: '06-02 下午', price: 320, date: '2026-06-02' },
      { id: 5, hospital: '宣武医院·神经科', time: '06-03 上午', price: 300, date: '2026-06-03' }
    ]
  },
  grabOrder(e) {
    wx.showModal({ title: '确认接单', content: '确定抢这个订单吗？', success(r) { if (r.confirm) wx.showToast({ title: '接单成功！', icon: 'success' }) } })
  },
  goGrab() { },
  goMyOrders() { wx.navigateTo({ url: '/pages/escort-orders/escort-orders' }) },
  goIncome() { wx.navigateTo({ url: '/pages/escort-income/escort-income' }) }
})
