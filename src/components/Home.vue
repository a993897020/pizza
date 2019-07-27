<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家来品尝pizza</h1>
				<h2>这里有你非常喜欢吃的pizza</h2>
				<Button class="btn btn-success" @click="go">Let's order!</Button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			go(){
				//跳转到上一个浏览的页面
				// this.$router.go(-1);			
				
				// 指定跳转的地址
				// this.$router.replace(/menu')
				
				//指定跳转路由的名字
				// this.$router.replace({name:'loginLink'})
				
				//通过push跳转 （推荐）
				this.$router.push({name:'menuLink'})
				}
		}
	}
</script>

<style>
	#home{
		background: url(../assets/pizza.jpg);
		height: 85vh;
		padding: 10%;
	}
	h1,h2{
		margin: 6%;
	}
	.background{
		background: #eee;
		opacity: .8;
		max-width:70vw ;
		padding: 20px 0;
		margin: 0 auto;
	}
</style>
