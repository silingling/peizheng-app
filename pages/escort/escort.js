Page({
  data: {
    grabOrders: [
      {
        id: 1,
        hospital: '北京协和医院',
        dept: '内科',
        date: '2026-06-01',
        time: '上午 8:00-12:00',
        patient: '患者：张先生（65岁）',
        price: 280
      },
      {
        id: 2,
        hospital: '中国人民解放军总医院',
        dept: '骨科',
        date: '2026-06-01',
        time: '下午 14:00-17:00',
        patient: '患者：李阿姨（72岁）',
        price: 320
      },
      {
        id: 3,
        hospital: '首都医科大学宣武医院',
        dept: '神经科',
        date: '2026-06-02',
        time: '上午 8:00-12:00',
        patient: '患者：王叔叔（58岁）',
        price: 300
      }
    ]
  },

  grabOrder(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认接单',
      content: '确定抢这个订单吗？',
      success(res) {
        if (res.confirm) {
          wx.showToast({ title: '接单成功！', icon: 'success' })
        }
      }
    })
  },

  goGrab() {
    wx.pageScrollTo({ selector: '.grab-card' })
  },

  goOrderList() {
    wx.showToast({ title: '订单列表 — 开发中', icon: 'none' })
  },

  goProfile() {
    wx.showToast({ title: '个人中心 — 开发中', icon: 'none' })
  }
})