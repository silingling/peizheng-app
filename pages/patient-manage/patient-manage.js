const app = getApp()

Page({
  data: {
    patients: app.globalData.patients,
    showModal: false,
    editMode: 'add',
    editId: null,
    form: { name: '', phone: '', gender: '男', age: '', relation: '本人' }
  },
  onShow() {
    this.setData({ patients: app.globalData.patients })
  },
  onFormName(e) { this.data.form.name = e.detail.value; this.setData({ form: this.data.form }) },
  onFormPhone(e) { this.data.form.phone = e.detail.value; this.setData({ form: this.data.form }) },
  onFormAge(e) { this.data.form.age = e.detail.value; this.setData({ form: this.data.form }) },
  setGender(e) { this.data.form.gender = e.currentTarget.dataset.val; this.setData({ form: this.data.form }) },
  setRelation(e) { this.data.form.relation = e.currentTarget.dataset.val; this.setData({ form: this.data.form }) },

  addPatient() {
    this.setData({
      showModal: true,
      editMode: 'add',
      editId: null,
      form: { name: '', phone: '', gender: '男', age: '', relation: '本人' }
    })
  },
  editPatient(e) {
    const p = app.globalData.patients.find(x => x.id == e.currentTarget.dataset.id)
    if (!p) return
    this.setData({
      showModal: true,
      editMode: 'edit',
      editId: p.id,
      form: { name: p.name, phone: p.phone, gender: p.gender, age: String(p.age), relation: p.relation }
    })
  },
  closeModal() { this.setData({ showModal: false }) },

  savePatient() {
    const f = this.data.form
    if (!f.name) return wx.showToast({ title: '请填写姓名', icon: 'none' })
    if (!f.phone) return wx.showToast({ title: '请填写手机号', icon: 'none' })

    if (this.data.editMode == 'add') {
      const newId = 'p' + (app.globalData.patients.length + 1)
      app.globalData.patients.push({
        id: newId, name: f.name, phone: f.phone, gender: f.gender, age: parseInt(f.age) || 0, relation: f.relation
      })
      wx.showToast({ title: '添加成功', icon: 'success' })
    } else {
      const p = app.globalData.patients.find(x => x.id == this.data.editId)
      if (p) { p.name = f.name; p.phone = f.phone; p.gender = f.gender; p.age = parseInt(f.age) || 0; p.relation = f.relation }
      wx.showToast({ title: '更新成功', icon: 'success' })
    }
    this.setData({ showModal: false, patients: app.globalData.patients })
  },

  deletePatient(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该就诊人吗？',
      success: (r) => {
        if (r.confirm) {
          app.globalData.patients = app.globalData.patients.filter(p => p.id != id)
          this.setData({ patients: app.globalData.patients })
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      }
    })
  }
})
