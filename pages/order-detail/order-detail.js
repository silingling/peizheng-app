Page({
  data: {
    order: {
      id: '1001',
      progress: 2,
      escortName: '王阿姨',
      escortCount: 86,
      escortRating: 5,
      serviceType: '全程陪诊',
      hospital: '北京协和医院',
      dept: '内科',
      date: '2026-06-01',
      time: '上午 8:00-12:00',
      patientName: '张先生',
      price: 280
    },
    progressSteps: [
      { text: '已接单' },
      { text: '已报到' },
      { text: '候诊中' },
      { text: '面诊中' },
      { text: '已完成' }
    ]
  },
  callEscort() { wx.showModal({ title: '拨打电话', content: '确认拨打陪诊员电话？', success(r) { if (r.confirm) wx.makePhoneCall({ phoneNumber: '13800138000' }) } }) },
  msgEscort() { wx.showToast({ title: '聊天功能开发中', icon: 'none' }) },
  cancelOrder() { wx.showModal({ title: '取消订单', content: '确定取消订单吗？', success(r) { if (r.confirm) wx.showToast({ title: '订单已取消', icon: 'success' }) } }) },
  contactCS() { wx.showToast({ title: '客服热线：400-xxx-xxxx', icon: 'none' }) }
})
