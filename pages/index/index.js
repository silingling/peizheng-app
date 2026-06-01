Page({
  data: {
    searchVal: '',
    banners: [
      { title: '专业陪诊，暖心相伴', desc: '从挂号到取药，全程陪护', tag: '7×24小时服务', bg: 'linear-gradient(135deg, #07c160, #06ad56)' },
      { title: '子女远程下单', desc: '身在外地也能为父母预约陪诊', tag: '实时进度推送', bg: 'linear-gradient(135deg, #1989fa, #3d9bf5)' },
      { title: '金牌陪诊员', desc: '实名认证，专业培训，经验丰富', tag: '好评率98%', bg: 'linear-gradient(135deg, #ee0a24, #f23d57)' }
    ],
    stats: [
      { num: '500+', label: '服务患者' },
      { num: '50+', label: '合作医院' },
      { num: '98%', label: '好评率' },
      { num: '7×24', label: '全天服务' }
    ],
    hospitals: [
      { id: 1, name: '北京协和医院', shortAddr: '东城区', count: 128 },
      { id: 2, name: '解放军总医院', shortAddr: '海淀区', count: 96 },
      { id: 3, name: '北大第三医院', shortAddr: '海淀区', count: 85 },
      { id: 4, name: '宣武医院', shortAddr: '西城区', count: 72 },
      { id: 5, name: '北京天坛医院', shortAddr: '丰台区', count: 68 }
    ]
  },
  onSearch(e) { console.log('搜索:', e.detail) },
  goPatient() { wx.navigateTo({ url: '/pages/patient/patient' }) },
  goSubstitute() { wx.showToast({ title: '代办服务 — 开发中', icon: 'none' }) },
  goNurse() { wx.showToast({ title: '护士到家 — 开发中', icon: 'none' }) },
  goHospice() { wx.showToast({ title: '转运护送 — 开发中', icon: 'none' }) },
  goEscort() { wx.navigateTo({ url: '/pages/escort/escort' }) },
  goAdmin() { wx.navigateTo({ url: '/pages/admin/admin' }) }
})
