// pages/personalInfo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		skills: [
			{
				desc: "html, css, es6",
				percent: 90
			},
			{
				desc: "nodejs",
				percent: 60
			},{
				desc: "react",
				percent: 70
			},
			{
				desc: "angular1.x",
				percent: 80
			},
			{
				desc: "webpack",
				percent: 50
			},
			{
				desc: "git",
				percent: 60
			}
		],
		selfAssessment: [
			"富有团队精神，愿意接受新知识新思维，解决问题及学习能力良好",
			"喜欢思考，阳光活泼，善于总结，及时查漏补缺，英语阅读能力良好",
			"喜欢大前端，对各种前端框架前端新技术兴趣浓厚（尤其react），同时对于前端代码的eslint规范化，工程化有一定的掌握，对于前端项目的git版本控制、服务端部署有所涉猎"
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		// 使用type='2d'属性，必须保证基础库不低于2.9
		const query = wx.createSelectorQuery()
	
		query.select('#myCanvas')
			.fields({ node: true, size: true })
			.exec((res) => {
				const canvas = res[0].node
				const ctx = canvas.getContext('2d')
				const dpr = wx.getSystemInfoSync().pixelRatio

				canvas.width = res[0].width * dpr
				canvas.height = res[0].height * dpr
				ctx.scale(dpr, dpr)

				// 获取canvas的宽、高, 不能获取乘以dpr之后的宽、高
				const {width, height} = res[0];
				console.log(width, height,canvas)
				// 设置画布： 以height为边长的一个偏容器右边的正方形
				const center = [width - height, 0];	// 从左上角开始
				ctx.fillStyle = '#ddd'
				ctx.fillRect(center[0], center[1], 200, 200)

				// ctx.lineWidth = 10
				ctx.beginPath()
				ctx.strokeStyle = 'blue'
				// 最内层的60度的圆弧，起点坐标[width - height / 2, height / 2]
				// 1、直线经过的第一个点的坐标[width - height / 2 + 20*Math.cos(30*Math.PI/180), height / 2+20*Math.sin(30*Math.PI/180)]
				// 2、绘制圆弧
				// 3、再绘制直线
				ctx.moveTo(width-height/2, height/2);
				ctx.lineTo(width-height/2 + 20*Math.cos(30*Math.PI/180), height/2+20*Math.sin(30*Math.PI/180))
				ctx.arc(width - height / 2, height / 2, 20, Math.PI / 6, Math.PI / 2)
				ctx.lineTo(width-height/2, height/2)

				ctx.lineTo(width-height/2 + 35*Math.cos(30*Math.PI/180), height/2+35*Math.sin(30*Math.PI/180))
				ctx.arc(width - height / 2, height / 2, 35, Math.PI / 6, Math.PI / 2)
				ctx.lineTo(width-height/2, height/2)

				ctx.lineTo(width-height/2 + 50*Math.cos(30*Math.PI/180), height/2+50*Math.sin(30*Math.PI/180))
				ctx.arc(width - height / 2, height / 2, 50, Math.PI / 6, Math.PI / 2)
				ctx.lineTo(width-height/2, height/2)

				ctx.lineTo(width-height/2 + 65*Math.cos(30*Math.PI/180), height/2+65*Math.sin(30*Math.PI/180))
				ctx.arc(width - height / 2, height / 2, 65, Math.PI / 6, Math.PI / 2)
				ctx.lineTo(width-height/2, height/2)

				ctx.lineTo(width-height/2 + 80*Math.cos(30*Math.PI/180), height/2+80*Math.sin(30*Math.PI/180))
				ctx.arc(width - height / 2, height / 2, 80, Math.PI / 6, Math.PI / 2)
				ctx.lineTo(width-height/2, height/2)

				ctx.stroke()
			})
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})