const app = getApp()

Page({
  data: {
    step: 1,
    serviceTypes: ['全程陪诊', '代取报告', '代取药品', '代办住院'],
    serviceType: 0,
    hospitals: [
      { id: 1, name: '北京协和医院', shortAddr: '东城区', count: 128 },
      { id: 2, name: '中国人民解放军总医院', shortAddr: '海淀区', count: 96 },
      { id: 3, name: '北京大学第三医院', shortAddr: '海淀区', count: 85 },
      { id: 4, name: '首都医科大学宣武医院', shortAddr: '西城区', count: 72 },
      { id: 5, name: '北京天坛医院', shortAddr: '丰台区', count: 68 }
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
    selectedService: null,
    selectedPatient: 'self',
    selectedDate: -1,
    selectedTime: -1,
    patientDesc: '',
    servicePrice: 280,

    userName: app.globalData.currentUser.name,
    userPhone: app.globalData.currentUser.phone,
    familyPatients: app.globalData.patients.filter(p => p.relation !== '本人'),

    currentService: '',
    currentHospital: '',
    currentDept: '',
    currentDate: '',
    currentTime: '',
    currentPatientName: ''
  },

  selectService(e) { this.setData({ serviceType: e.currentTarget.dataset.index }) },
  selectHospital(e) {
    const id = e.currentTarget.dataset.id
    const h = this.data.hospitals.find(x => x.id == id)
    this.setData({ selectedHospital: id, currentHospital: h.name })
  },
  selectDept(e) {
    const idx = e.currentTarget.dataset.index
    this.setData({ selectedDept: idx, currentDept: this.data.departments[idx] })
  },
  selectPatient(e) {
    this.setData({ 
      selectedPatient: e.currentTarget.dataset.type,
      currentPatientName: this.data.userName
    })
  },
  selectFamily(e) {
    const idx = e.currentTarget.dataset.index
    this.setData({ 
      selectedPatient: idx,
      currentPatientName: this.data.familyPatients[idx].name
    })
  },
  selectDate(e) {
    const idx = e.currentTarget.dataset.index
    this.setData({ selectedDate: idx, currentDate: this.data.dates[idx].week + ' ' + this.data.dates[idx].day })
  },
  selectTime(e) {
    const idx = e.currentTarget.dataset.index
    this.setData({ selectedTime: idx, currentTime: this.data.times[idx] })
  },
  onInputDesc(e) { this.setData({ patientDesc: e.detail.value }) },

  addPatient() {
    wx.navigateTo({ url: '/pages/patient-manage/patient-manage' })
  },

  nextStep() {
    if (this.data.step == 1) {
      if (!this.data.selectedHospital) return wx.showToast({ title: '请选择医院', icon: 'none' })
      if (this.data.selectedDept == -1) return wx.showToast({ title: '请选择科室', icon: 'none' })
      this.setData({ 
        step: 2,
        currentService: this.data.serviceTypes[this.data.serviceType]
      })
    } else if (this.data.step == 2) {
      if (this.data.selectedDate == -1) return wx.showToast({ title: '请选择日期', icon: 'none' })
      if (this.data.selectedTime == -1) return wx.showToast({ title: '请选择时段', icon: 'none' })
      this.setData({ step: 3 })
    } else {
      wx.showModal({
        title: '预约成功',
        content: '已收到您的陪诊预约申请，请等待陪诊员接单',
        success() {
          wx.navigateTo({ url: '/pages/orders/orders' })
        }
      })
    }
  },
  prevStep() { if (this.data.step > 1) this.setData({ step: this.data.step - 1 }) }
})
