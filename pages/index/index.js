Page({
  data: {
    banners: [
      { title: '专业陪诊，暖心相伴', desc: '从挂号到取药，全程陪护', tag: '7×24小时服务', bg: 'linear-gradient(135deg, #1aad8a, #20c997)' },
      { title: '子女远程下单', desc: '身在外地也能为父母预约陪诊', tag: '实时进度推送', bg: 'linear-gradient(135deg, #667eea, #764ba2)' },
      { title: '金牌陪诊员', desc: '实名认证，专业培训，经验丰富', tag: '好评率98%', bg: 'linear-gradient(135deg, #f093fb, #f5576c)' }
    ],
    hospitals: [
      { id: 1, name: '北京协和医院', shortAddr: '东城区', count: 128 },
      { id: 2, name: '中国人民解放军总医院', shortAddr: '海淀区', count: 96 },
      { id: 3, name: '北京大学第三医院', shortAddr: '海淀区', count: 85 },
      { id: 4, name: '首都医科大学宣武医院', shortAddr: '西城区', count: 72 },
      { id: 5, name: '北京天坛医院', shortAddr: '丰台区', count: 68 }
    ]
  },
  goPatient() { wx.navigateTo({ url: '/pages/patient/patient' }) },
  goSubstitute() { wx.showToast({ title: '代办服务 — 开发中', icon: 'none' }) },
  goNurse() { wx.showToast({ title: '护士到家 — 开发中', icon: 'none' }) },
  goHospice() { wx.showToast({ title: '转运护送 — 开发中', icon: 'none' }) },
  goEscort() { wx.navigateTo({ url: '/pages/escort/escort' }) },
  goAdmin() { wx.navigateTo({ url: '/pages/admin/admin' }) }
})
