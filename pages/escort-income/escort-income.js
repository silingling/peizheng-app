Page({
  data: {
    incomes: [
      { id: 1, title: '北京协和医院·全程陪诊', time: '2026-05-31 08:00-12:00', amount: 280, status: '已结算', statusClass: 'settled' },
      { id: 2, title: '北京大学第三医院·全程陪诊', time: '2026-05-30 14:00-17:00', amount: 320, status: '已结算', statusClass: 'settled' },
      { id: 3, title: '北京天坛医院·代取报告', time: '2026-05-28 09:00-10:00', amount: 80, status: '已结算', statusClass: 'settled' },
      { id: 4, title: '北京协和医院·全程陪诊', time: '2026-05-25 08:00-12:00', amount: 280, status: '待结算', statusClass: 'pending' },
      { id: 5, title: '首都医科大学宣武医院·全程陪诊', time: '2026-05-23 14:00-17:00', amount: 300, status: '待结算', statusClass: 'pending' }
    ]
  },
  doWithdraw() {
    wx.showModal({
      title: '确认提现',
      content: '将提现 ¥1,880.00 到微信零钱',
      success(r) { if (r.confirm) wx.showToast({ title: '提现申请已提交，T+1到账', icon: 'success' }) }
    })
  }
})
