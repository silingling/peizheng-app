Page({
  data: {
    step: 1,
    hospitals: [
      { id: 1, name: '北京协和医院', address: '东城区帅府园1号' },
      { id: 2, name: '中国人民解放军总医院', address: '海淀区复兴路28号' },
      { id: 3, name: '北京大学第三医院', address: '海淀区花园北路49号' },
      { id: 4, name: '首都医科大学宣武医院', address: '西城区长椿街45号' },
      { id: 5, name: '首都医科大学附属北京天坛医院', address: '丰台区南四环西路119号' },
      { id: 6, name: '中国医学科学院阜外医院', address: '西城区北礼士路167号' }
    ],
    departments: ['内科', '外科', '儿科', '妇产科', '骨科', '神经科', '肿瘤科', '心内科', '眼科', '耳鼻喉科'],
    dates: [
      { week: '今天', day: '5/31' },
      { week: '明天', day: '6/1' },
      { week: '周二', day: '6/2' },
      { week: '周三', day: '6/3' }
    ],
    times: ['上午 8:00-12:00', '下午 14:00-17:00'],
    selectedDept: -1,
    selectedDate: -1,
    selectedTime: -1,
    selectedHospital: '',
    patientName: '',
    patientPhone: '',
    patientDesc: ''
  },

  onSearchHospital(e) {
    const keyword = e.detail.value
    console.log('搜索医院:', keyword)
  },

  selectHospital(e) {
    const id = e.currentTarget.dataset.id
    const hospital = this.data.hospitals.find(h => h.id == id)
    this.setData({ selectedHospital: hospital.name })
    wx.showToast({ title: '已选择: ' + hospital.name, icon: 'none' })
  },

  selectDept(e) {
    this.setData({ selectedDept: e.currentTarget.dataset.index })
  },

  selectDate(e) {
    this.setData({ selectedDate: e.currentTarget.dataset.index })
  },

  selectTime(e) {
    this.setData({ selectedTime: e.currentTarget.dataset.index })
  },

  onInputName(e) {
    this.setData({ patientName: e.detail.value })
  },

  onInputPhone(e) {
    this.setData({ patientPhone: e.detail.value })
  },

  onInputDesc(e) {
    this.setData({ patientDesc: e.detail.value })
  },

  nextStep() {
    if (this.data.step < 3) {
      this.setData({ step: this.data.step + 1 })
    } else {
      wx.showModal({
        title: '预约成功',
        content: '已收到您的陪诊预约申请',
        success() {
          wx.navigateTo({ url: '/pages/orders/orders' })
        }
      })
    }
  },

  prevStep() {
    if (this.data.step > 1) {
      this.setData({ step: this.data.step - 1 })
    }
  }
})