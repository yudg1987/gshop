import {
  CLEARCART,
  DECREASE_FOOD_COUNT,
  GETALLCATEGORIES,
  GETALLSHOPS, INCREASE_FOOD_COUNT,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS, RECEIVE_USER_INFO,
  REQUESTADDRESS, RESET_USER_INFO, SEARCHSHOPS
} from './mutation-types'
import Vue from 'vue'
export default {
  [REQUESTADDRESS] (state, {address}) {
    state.address = address
  },
  [GETALLCATEGORIES] (state, {categorys}) {
    state.categorys = categorys
  },
  [GETALLSHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  [INCREASE_FOOD_COUNT](state, {food}) {
    if(!food.count) { // 第一次增加
      // food.count = 1  // 新增属性(没有数据绑定)
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREASE_FOOD_COUNT](state, {food}) {
    if(food.count){
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  [CLEARCART](state) {
    if(state.cartFoods.length >0){
      //清除food中count数量
      state.cartFoods.forEach(food => food.count = 0)
      state.cartFoods=[]
    }
  },

  [SEARCHSHOPS](state,{searchShops}) {
      state.searchShops=searchShops
  },

  //用户相关接口
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },

}
