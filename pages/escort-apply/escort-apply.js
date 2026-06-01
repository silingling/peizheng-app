Page({
  data: {
    guideSteps: [
      { text: '实名认证' },
      { text: '资质上传' },
      { text: '在线培训' },
      { text: '考核上线' }
    ],
    name: '', phone: '', idCard: '', area: '',
    agree: false
  },
  toggleAgree(e) { this.setData({ agree: e.detail }) },
  uploadID() { wx.showToast({ title: '上传身份证正面', icon: 'none' }) },
  uploadBack() { wx.showToast({ title: '上传身份证反面', icon: 'none' }) },
  uploadCert() { wx.showToast({ title: '上传资质证书', icon: 'none' }) },
  uploadPhoto() { wx.showToast({ title: '上传本人照片', icon: 'none' }) },
  submitApply() {
    if (!this.data.agree) return
    wx.showModal({ title: '提交成功', content: '入驻申请已提交，我们将在1-3个工作日内审核', success() { wx.navigateBack() } })
  }
})
