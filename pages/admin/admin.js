Page({
  data: {
    adminTab: 0,
    chartData: [{ day: '5/25', value: 18 },{ day: '5/26', value: 22 },{ day: '5/27', value: 15 },{ day: '5/28', value: 25 },{ day: '5/29', value: 30 },{ day: '5/30', value: 28 },{ day: '5/31', value: 20 }],
    rankList: [{ name: '王阿姨', count: 86 },{ name: '李师傅', count: 72 },{ name: '张护士', count: 65 },{ name: '刘大姐', count: 48 }],
    staffList: [{ id: 1, name: '王阿姨', status: '已认证', count: 86, rating: 4.9 },{ id: 2, name: '李师傅', status: '已认证', count: 72, rating: 4.8 },{ id: 3, name: '赵女士', status: '待审核', count: 0, rating: 0 }],
    allOrders: [{ id: 1001, hospital: '北京协和医院', dept: '内科', date: '6/1', patient: '张先生', escort: '王阿姨', statusText: '待服务', statusClass: 'pending' },{ id: 1002, hospital: '北医三院', dept: '骨科', date: '5/30', patient: '李阿姨', escort: '李师傅', statusText: '进行中', statusClass: 'ongoing' }],
    userList: [{ id: 1, name: '张先生', phone: '138****1234', orders: 3 },{ id: 2, name: '李阿姨', phone: '139****5678', orders: 5 },{ id: 3, name: '王叔叔', phone: '136****9012', orders: 1 }]
  },
  switchTab(e) { this.setData({ adminTab: e.currentTarget.dataset.index }) },
  approveStaff(e) { wx.showToast({ title: '已通过审核', icon: 'success' }) },
  rejectStaff(e) { wx.showToast({ title: '已拒绝', icon: 'none' }) }
})
