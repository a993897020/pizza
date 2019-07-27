		export const setMenuItems=(state,data)=>{
			state.MenuItems=data
			console.log(state.MenuItems)
		}
		/* 将匹配到对象，在menuItems数组中删除 */
		export const removeItems=(state,data)=>{
			state.MenuItems.forEach((item,index)=>{
					if(item==data){
						state.MenuItems.splice(index,1)
					}
			});
		}
		/* 将新数据的pizza Push到MenuItems属性中 */
		export const pushMenuItems=(state,data)=>{
			state.MenuItems.push(data)
		}
		/* 更改用户状态的信息 */
		export const userStatus=(state,user)=>{
			if(user)
			{
				state.currenUser=user;
				state.isLogin=true
				
			}else{
			state.currenUser=null;
			state.isLogin=false
		}
	}