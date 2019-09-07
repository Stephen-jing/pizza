import Vue from 'vue'
import Vuex from 'vuex'

// import menu from './module/menu';
// import users from './module/users';
// import status from './module/status';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    //设置属性
    menuItems:{},
    currentUser: localStorage.user || null,
    isLogin: localStorage.user
  },
  getters:{
    getMenuItems: state => state.menuItems,
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations:{
    // 改变属性的状态
    setMenuItems(state,data){
      state.menuItems = data
    },

    // 将匹配到对象,在menuItems数组中删除
    removeMenuItems(state,data){
      state.menuItems.forEach((item,index) => {
        if(item == data){
          state.menuItems.splice(index,1)
        }
      });
    },
    // 将新添加的pizza Push到menuItems属性中
    pushToMenuItems(state,data){
      state.menuItems.push(data)
    },
    loginStatus(state, status) {
      state.isLogin = status
    },
    // 更改用户的状态信息
    userStatus(state, user) {
      if (user) {
        state.currentUser = user
        state.isLogin = true
      } else {
        state.currentUser = null
        state.isLogin = false
      }
    }
  },
  actions:{
    // 应用mutations
    setUser({ commit }, user) {
      commit("userStatus", user)
    }
  }
})