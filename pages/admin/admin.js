Page({
  data: {
    adminTab: 0,
    staffList: [
      { id: 1, name: '王阿姨', status: '已认证', statusClass: 'verified', count: 86, rating: 4.9, area: '朝阳区' },
      { id: 2, name: '李师傅', status: '已认证', statusClass: 'verified', count: 72, rating: 4.8, area: '海淀区' },
      { id: 3, name: '赵女士', status: '待审核', statusClass: 'pending', count: 0, rating: 0, area: '东城区' },
      { id: 4, name: '刘大姐', status: '待审核', statusClass: 'pending', count: 0, rating: 0, area: '西城区' }
    ],
    allOrders: [
      { id: 1001, hospital: '北京协和医院', dept: '内科', date: '06-01', patient: '张先生', escort: '王阿姨', price: 280, statusText: '待服务', statusClass: 'pending' },
      { id: 1002, hospital: '北医三院', dept: '骨科', date: '05-30', patient: '李阿姨', escort: '李师傅', price: 320, statusText: '进行中', statusClass: 'ongoing' },
      { id: 1003, hospital: '北京天坛医院', dept: '神经科', date: '05-28', patient: '赵大爷', escort: '刘大姐', price: 300, statusText: '已完成', statusClass: 'done' },
      { id: 1004, hospital: '北京协和医院', dept: '心内科', date: '05-25', patient: '王叔叔', escort: '王阿姨', price: 280, statusText: '已完成', statusClass: 'done' }
    ],
    userList: [
      { id: 1, name: '张先生', phone: '138****1234', orders: 3 },
      { id: 2, name: '李阿姨', phone: '139****5678', orders: 5 },
      { id: 3, name: '王叔叔', phone: '136****9012', orders: 1 },
      { id: 4, name: '赵大爷', phone: '135****3456', orders: 2 }
    ]
  },
  switchTab(e) { this.setData({ adminTab: e.detail.index }) },
  approveStaff() { wx.showToast({ title: '已通过审核', icon: 'success' }) }
})
