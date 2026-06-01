Page({
  data: { agree: false },
  toggleAgree(e) { this.setData({ agree: e.detail.value }) },
  uploadID() { wx.showToast({ title: '上传身份证正面', icon: 'none' }) },
  uploadBack() { wx.showToast({ title: '上传身份证反面', icon: 'none' }) },
  uploadCert() { wx.showToast({ title: '上传资质证书', icon: 'none' }) },
  uploadPhoto() { wx.showToast({ title: '上传本人照片', icon: 'none' }) },
  submitApply() {
    if (!this.data.agree) return
    wx.showModal({
      title: '提交成功',
      content: '入驻申请已提交，我们将在1-3个工作日内审核',
      success() { wx.navigateBack() }
    })
  }
})
