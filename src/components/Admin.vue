<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!-- 添加pizza -->
			<app-new-pizza></app-new-pizza>
		</div>
		<div class="col-sm-12 col-md-4">
			<!-- 品种展示 -->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.name">
					<tr>
						<td>{{item.name}}</td>
						<td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza.vue'
	export default{
		components:{
			'app-new-pizza':NewPizza
		},
		data(){
			return{
				// name:'Heery'
				// getMenuItems:[]
			}
		},
		computed:{
			getMenuItems:{
				get(){
					// return this.$store.state.MenuItems
					return this.$store.getters.getMenuItems
				},
				set(){
					
				}
			},
		},
		methods:{
			deleteData(item){
			// 	fetch("https://pizza-f79ac.firebaseio.com/menu/"+item.id+"/.json",{
			// 		method:"DELETE",
			// 		headers:{
			// 			'Content-type':'application/json'
			// 		}
			// 	})
			// .then(res=>res.json())
			// .then(data=>this.$router.push({name:'menuLink'}))
			// .catch(err=>console.log(err))
			// }
			// this.http.delete("https://pizza-f79ac.firebaseio.com/menu/"+item.id+"/.json")
			// .then(res=>this.$router.push({name:'menuLink'}))
			// }
			this.http.delete("https://pizza-f79ac.firebaseio.com/menu/"+item.id+"/.json")
			.then(res=>this.$store.commit('removeItems',item))
			}
		},
		created() {
			fetch("https://pizza-f79ac.firebaseio.com/menu.json")
			.then(res=>{
				return res.json()
			})
			.then(data=>{
				console.log(data)
				let menuArray=[]
				for(let key in data){
					console.log(data[key])
					data[key].id=key
					menuArray.push(data[key])
				}
				/* 数据同步 */
				this.$store.commit('setMenuItems',menuArray)
				// this.getMenuItems=menuArray
			})
		}
		// beforeRouteEnter:(to,from,next)=>{ //进入组件之前
		// 	// alert("hello"+this.name); //现在拿不到this.name
		// 	// next();
		// 	next(vm=>{
		// 		alert('hello'+vm.name); //现在拿到了
		// 	})
		// },
		// beforeRouteLeave:(to,from,next)=>{ //离开组件
		// 	 if(confirm("确定离开吗?")==true){
		// 		 next();
		// 	 }else{
		// 		 next(false)
		// 	 }
		// }
	}
</script>

<style>
</style>
