<template>
	<div id="polifileContainer">
		<div class="header">
			<i class="iconfont icon-personal" @click="toLogin"></i>
			<div class='userInfo' @click="toLogin">
				<p style="font-size:20px">点击登录账号</p>
			</div>
		</div>
		<div class="content">
			<h2>我的资产</h2>
			<p class='line'></p>
			<div class="assetList">
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
				personalList: [
					{
						name: '我的订单',
						icon: 'icon-dingdan'
					},
					{
						name: '周六一起拼',
						icon: 'icon-rili'
					},
					{
						name: '售后服务',
						icon: 'icon-shouhou'
					},
					{
						name: '邀请返利',
						icon: 'icon-yaoqinghan'
					},
					{
						name: '优先购',
						icon: 'icon-gouwu'
					},
					{
						name: '积分中心',
						icon: 'icon-jifen1'
					},
					{
						name: '会员俱乐部',
						icon: 'icon-huiyuan2'
					},
					{
						name: '地址管理',
						icon: 'icon-ziyuan'
					},
					{
						name: '账号安全',
						icon: 'icon-anquan4'
					},
					{
						name: '帮助与客服',
						icon: 'icon-kefu'
          },
          {
						name: '意见反馈',
						icon: 'icon-yijianfankui1'
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

<style scoped lang="stylus" rel="stylesheet/stylus">
#polifileContainer	
	.header
		height 270px
		display flex
		padding 64px 0 0 30px
		background-color #C5A973
		box-sizing border-box
		.icon-personal
			font-size 110px
			padding-right 30px
		.userInfo
			padding-top 40px
	.content
		h2
			height 104px
			line-height 104px
			margin-left 5%
			font-size 28px
		.line
			height 3px
			background-color #eee
			width 95%
			margin-left 5%
		.assetList
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
				padding-top 50px
				&:nth-child(3n)
					border-right none
				.iconfont 
					font-size 60px
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