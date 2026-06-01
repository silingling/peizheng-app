// app.js
App({
  globalData: {
    // 当前登录用户
    currentUser: {
      id: 'u1001',
      name: '张先生',
      phone: '138****1234',
      avatar: '',
      role: 'patient' // patient | escort | admin
    },
    // 就诊人列表
    patients: [
      { id: 'p1', name: '张先生', phone: '138****1234', gender: '男', age: 35, relation: '本人' },
      { id: 'p2', name: '张妈妈', phone: '139****5678', gender: '女', age: 62, relation: '母亲' },
      { id: 'p3', name: '张爸爸', phone: '136****9012', gender: '男', age: 65, relation: '父亲' }
    ],
    // 就诊档案
    medicalRecords: []
  },

  onLaunch() {
    // 从本地存储加载就诊档案
    const records = wx.getStorageSync('medicalRecords') || []
    this.globalData.medicalRecords = records
  }
})
