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

export const reqSearchShops = (keyword, geohash) => ajax( BASE_URL+'/search_shops', {keyword, geohash})


// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')
