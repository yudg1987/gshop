import {requestAddress, requestAllCategories, requestAllShops} from '../api/senfAjaxRequest'
import {REQUESTADDRESS, GETALLCATEGORIES, GETALLSHOPS} from './mutation-types'
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
  }
}
