const app = getApp()

Page({
  data: {
    records: [
      {
        id: 1, hospital: '北京协和医院', date: '2026-05-28', dept: '心内科',
        doctor: '李医生', diagnosis: '高血压二级', advice: '注意饮食清淡，定期测量血压，按时服药',
        files: ['血压检测报告.jpg', '医生处方单.jpg'],
        escort: '王阿姨'
      },
      {
        id: 2, hospital: '北京天坛医院', date: '2026-05-15', dept: '神经外科',
        doctor: '张主任', diagnosis: '颈椎病', advice: '避免长时间低头，建议理疗',
        files: ['CT报告.jpg'],
        escort: '李师傅'
      },
      {
        id: 3, hospital: '北京大学第三医院', date: '2026-04-20', dept: '骨科',
        doctor: '王医生', diagnosis: '膝关节炎', advice: '注意保暖，减少爬楼梯',
        files: ['X光片.jpg'],
        escort: '王阿姨'
      }
    ]
  },
  onShow() {
    const saved = wx.getStorageSync('medicalRecords')
    if (saved && saved.length > 0) {
      this.setData({ records: saved })
    }
  },
  rebook(e) {
    const { hospital, dept } = e.currentTarget.dataset
    wx.navigateTo({ url: '/pages/patient/patient' })
  }
})
