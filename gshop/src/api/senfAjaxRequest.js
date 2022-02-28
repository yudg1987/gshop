/**
 * 与后台交互模块
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
/**
 * 根据经纬度获取位置详情
 * @param geohash
 * @returns {*|Promise<unknown>}
 */
export const requestAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
export const requestAllCategories = () => ajax(BASE_URL + '/index_category')
export const requestAllShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})
// 不加api 为了不让代理拦截
export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/goods')
export const reqShopRating = () => ajax('/ratings')
