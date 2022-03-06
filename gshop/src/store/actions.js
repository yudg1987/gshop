import {
  reqSearchShops,
  reqShopGoods,
  reqShopInfo,
  reqShopRating,
  requestAddress,
  requestAllCategories,
  requestAllShops
} from '../api/senfAjaxRequest'
import {
  REQUESTADDRESS,
  GETALLCATEGORIES,
  GETALLSHOPS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS, INCREASE_FOOD_COUNT, DECREASE_FOOD_COUNT, CLEARCART, SEARCHSHOPS, RECEIVE_USER_INFO, RESET_USER_INFO
} from './mutation-types'
export default {
  async getAddress ({commit, state}) {
    const latitude = state.latitude
    const longitude = state.longitude
    const geohash = latitude + ',' + longitude
    const result = await requestAddress(geohash)
    // alert(result)
    // 发送ajax请求
    if (result.code === 0) {
      const address = result.data
      // alert(address)
      commit(REQUESTADDRESS, {address})
    }
  },
  async getAllCategories ({commit}) {
    const result = await requestAllCategories()
    // alert(result)
    // 发送ajax请求
    if (result.code === 0) {
      const categorys = result.data
      // alert(address)
      commit(GETALLCATEGORIES, {categorys})
    }
  },
  async getallshops ({commit, state}) {
    const latitude = state.latitude
    const longitude = state.longitude
    const result = await requestAllShops({latitude, longitude})
    // alert(result)
    // 发送ajax请求
    if (result.code === 0) {
      const shops = result.data
      // alert(address)
      commit(GETALLSHOPS, {shops})
    }
  },

  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRating()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  async updateCount({commit}, {isAdd,food}) {
    //alert(food)
    if(isAdd){
      commit(INCREASE_FOOD_COUNT,{food})
    }else{
      commit(DECREASE_FOOD_COUNT,{food})
    }

  },
  //清空购物车
  clearCart({commit}){
    commit(CLEARCART)
  },

  async searchShops({commit,state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(keyword,geohash)
    if (result.code === 0) {
      const searchShops = result.data
      commit(SEARCHSHOPS, {searchShops})
      // 数据更新了, 通知一下组件
      //callback && callback()
    }
  },

  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  // 异步登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
}
