<template>
	<div id="polifileModule">
		<div class="header">
			<i class="iconfont icon-personal"></i>
			<div class='userInfo' @click="toLogin">
				<p>未登录</p>
				<p>点击登录账号</p>
			</div>
		</div>
		<div class="content">
			<h2>我的资产</h2>
			<p class='line'></p>
			<div class="myAssetList">
				<div class='assetItem'>
					<span>￥0</span>
					<span>回馈金</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>红包</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>优惠券</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>津贴</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>礼品卡</span>
				</div>
			</div>
			<!-- 列表选项 -->
			<div class="personalList">
				<div class="navItem" v-for='(item, index) in personalList' :key='index'>
					<i class='iconfont ' :class='item.icon'></i>
					<p>{{item.name}}</p>
				</div>
			</div>
			<!-- 退出登录 -->
			<div class="logout">
				<span>退出登录</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				userInfo: {
					
				},
				personalList: [
					{
						name: '我的订单',
						icon: 'icon-dingdan'
					},
					{
						name: '我的拼团',
						icon: 'icon-pintuan'
					},
					{
						name: '领红包',
						icon: 'icon-hongbao'
					},
					{
						name: '我的积分',
						icon: 'icon-jifen'
					},
					{
						name: '地址管理',
						icon: 'icon-dizhi'
					},
					{
						name: '账号安全',
						icon: 'icon-zhanghaoanquan'
					},
					{
						name: '联系客服',
						icon: 'icon-kefu'
					},
					{
						name: '用户反馈',
						icon: 'icon-wode-'
					},
					{
						name: '帮助中心',
						icon: 'icon-bangzhuzhongxin1'
					},
					{
						name: '退还/售后',
						icon: 'icon-shouhou'
					}
				]
			}
		},
		methods: {
			toLogin(){
				this.$router.replace('/login')
			}
		},
		
	}
</script>

<style lang="stylus">
#polifileModule	
	.header
		height 270px
		display flex
		padding 64px 0 0 30px
		background-color #C5A973
		box-sizing border-box
		.icon-personal
			width 152px
			height 152px
			padding-right 30px
		.userInfo
			padding-top 40px
	.content
		h2
			height 104px
			line-height 104px
			margin-left 5%
			font-size 36px
		.line
			height 3px
			background-color #eee
			width 95%
			margin-left 5%
		.myAssetList
			width 90%
			margin 20px auto
			display flex 
			.assetItem
				width 25%
				display flex
				flex-direction column
				align-items center
				font-size 24px
				color #333333
				line-height 50px
		.personalList
			display flex
			flex-wrap wrap
			border-top 20px solid #eee
			.navItem
				width 33.3333%
				text-align center
				border-bottom 3px solid #eee
				border-right 3px solid #eee
				box-sizing border-box
				padding-top 60px
				&:nth-child(3n)
					border-right none
				.iconfont 
					font-size 70px
				p
					font-size 26px
					line-height 110px
		.logout
			border-top 40px solid #eee
			border-bottom 40px solid #eee
			height 120px
			margin-bottom 88px
			text-align center
			line-height 120px
				
</style>