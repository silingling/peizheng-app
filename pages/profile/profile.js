const app = getApp()

Page({
  data: {
    userName: app.globalData.currentUser.name,
    userPhone: app.globalData.currentUser.phone,
    recordsCount: app.globalData.medicalRecords.length || 3, // mock
    recentOrders: [
      { id: 1, hospital: '北京协和医院', dept: '内科', date: '2026-06-01', escort: '王阿姨', statusText: '待服务', statusClass: 'pending' },
      { id: 2, hospital: '北京大学第三医院', dept: '骨科', date: '2026-05-30', escort: '李师傅', statusText: '进行中', statusClass: 'ongoing' },
      { id: 3, hospital: '北京协和医院', dept: '心内科', date: '2026-05-28', escort: '王阿姨', statusText: '已完成', statusClass: 'done' }
    ]
  },
  onShow() {
    this.setData({ recordsCount: app.globalData.medicalRecords.length || 3 })
  },
  goPatientManages() { wx.navigateTo({ url: '/pages/patient-manage/patient-manage' }) },
  goRecords() { wx.navigateTo({ url: '/pages/medical-record/medical-record' }) },
  goOrders() { wx.switchTab({ url: '/pages/orders/orders' }) },
  goDetail(e) { wx.navigateTo({ url: '/pages/order-detail/order-detail?id=' + e.currentTarget.dataset.id }) },
  goFavorites() { wx.showToast({ title: '收藏功能开发中', icon: 'none' }) },
  contactCS() { wx.showToast({ title: '客服热线：400-xxx-xxxx', icon: 'none' }) },
  shareApp() { wx.showToast({ title: '分享功能开发中', icon: 'none' }) },
  switchRole() { wx.navigateTo({ url: '/pages/escort/escort' }) }
})
