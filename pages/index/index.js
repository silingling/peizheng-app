Page({
  goPatient() {
    wx.navigateTo({ url: '/pages/patient/patient' })
  },
  goEscort() {
    wx.navigateTo({ url: '/pages/escort/escort' })
  },
  goAdmin() {
    wx.navigateTo({ url: '/pages/admin/admin' })
  }
})
