Page({
  data: {
    order: {
      id: '1001',
      progress: 2, // 0待接单 1已接单 2已报到 3候诊中 4面诊中 5已完成
      statusText: '陪诊员已到医院报到',
      statusTime: '2026-06-01 08:32',
      escortName: '王阿姨',
      escortCount: 86,
      escortRating: 4.9,
      serviceType: '全程陪诊',
      hospital: '北京协和医院',
      dept: '内科',
      date: '2026-06-01',
      time: '上午 8:00-12:00',
      patientName: '张先生',
      price: 280
    }
  },
  onLoad(options) {
    if (options.id) {
      // 实际项目中根据ID从后端取真实数据
      wx.setNavigationBarTitle({ title: '订单详情' })
    }
  },
  callEscort() {
    wx.showModal({ title: '拨打电话', content: '确认拨打陪诊员电话？', success(r) { if (r.confirm) wx.makePhoneCall({ phoneNumber: '13800138000' }) } })
  },
  msgEscort() { wx.showToast({ title: '聊天功能开发中', icon: 'none' }) },
  cancelOrder() { wx.showModal({ title: '取消订单', content: '确定取消订单吗？', success(r) { if (r.confirm) wx.showToast({ title: '订单已取消', icon: 'success' }) } }) },
  contactCS() { wx.showToast({ title: '客服热线：400-xxx-xxxx', icon: 'none' }) }
})
