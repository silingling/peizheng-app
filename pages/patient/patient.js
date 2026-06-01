const app = getApp()

Page({
  data: {
    step: 0,
    steps: [{ text: '选服务' }, { text: '选时间' }, { text: '确认下单' }],
    serviceTypes: ['全程陪诊', '代取报告', '代取药品', '代办住院'],
    serviceLabels: ['全程陪同就诊', '代取检查报告', '代取处方药品', '代办入院手续'],
    serviceType: 0,
    hospitals: [
      { id: 1, name: '北京协和医院', shortAddr: '东城区协和路' },
      { id: 2, name: '解放军总医院', shortAddr: '海淀区复兴路' },
      { id: 3, name: '北大第三医院', shortAddr: '海淀区花园路' },
      { id: 4, name: '宣武医院', shortAddr: '西城区长椿街' },
      { id: 5, name: '北京天坛医院', shortAddr: '丰台区南四环' }
    ],
    departments: ['内科', '外科', '儿科', '妇产科', '骨科', '神经科', '肿瘤科', '心内科', '眼科', '耳鼻喉科'],
    dates: [
      { week: '今天', day: '6/1' },
      { week: '明天', day: '6/2' },
      { week: '周三', day: '6/3' },
      { week: '周四', day: '6/4' },
      { week: '周五', day: '6/5' }
    ],
    times: ['上午 8:00-12:00', '下午 14:00-17:00', '全天 8:00-17:00'],
    selectedHospital: null,
    selectedDept: -1,
    patientType: 'self',
    selectedDate: -1,
    selectedTime: -1,
    patientDesc: '',
    servicePrice: 280,

    userName: app.globalData.currentUser.name,
    userPhone: app.globalData.currentUser.phone,
    familyPatients: app.globalData.patients.filter(p => p.relation !== '本人'),

    hospitalName: '',
    deptName: '',
    dateStr: '',
    timeStr: '',
    patientName: app.globalData.currentUser.name
  },

  selectService(e) {
    const i = e.currentTarget.dataset.index
    this.setData({ serviceType: i })
  },
  selectHospital(e) {
    const id = e.currentTarget.dataset.id
    const h = this.data.hospitals.find(x => x.id == id)
    this.setData({ selectedHospital: id, hospitalName: h.name })
  },
  selectDept(e) {
    const i = e.currentTarget.dataset.index
    this.setData({ selectedDept: i, deptName: this.data.departments[i] })
  },
  selectSelf() {
    this.setData({ patientType: 'self', patientName: this.data.userName })
  },
  selectFamily(e) {
    const i = e.currentTarget.dataset.index
    this.setData({ patientType: i, patientName: this.data.familyPatients[i].name })
  },
  selectDate(e) {
    const i = e.currentTarget.dataset.index
    this.setData({ selectedDate: i, dateStr: this.data.dates[i].week + ' ' + this.data.dates[i].day })
  },
  selectTime(e) {
    const i = e.currentTarget.dataset.index
    this.setData({ selectedTime: i, timeStr: this.data.times[i] })
  },
  onInputDesc(e) { this.setData({ patientDesc: e.detail.value }) },
  addPatient() { wx.navigateTo({ url: '/pages/patient-manage/patient-manage' }) },

  nextStep() {
    if (this.data.step == 0) {
      if (!this.data.selectedHospital) return wx.showToast({ title: '请选择医院', icon: 'none' })
      if (this.data.selectedDept == -1) return wx.showToast({ title: '请选择科室', icon: 'none' })
      this.setData({ step: 1 })
    } else if (this.data.step == 1) {
      if (this.data.selectedDate == -1) return wx.showToast({ title: '请选择日期', icon: 'none' })
      if (this.data.selectedTime == -1) return wx.showToast({ title: '请选择时段', icon: 'none' })
      this.setData({ step: 2 })
    } else {
      wx.showModal({
        title: '预约成功',
        content: '已收到您的陪诊预约申请，请等待陪诊员接单',
        success() { wx.switchTab({ url: '/pages/orders/orders' }) }
      })
    }
  },
  prevStep() {
    if (this.data.step > 0) this.setData({ step: this.data.step - 1 })
  }
})
