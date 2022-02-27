import {GETALLCATEGORIES, GETALLSHOPS, REQUESTADDRESS} from './mutation-types'
export default {
  [REQUESTADDRESS] (state, {address}) {
    state.address = address
  },
  [GETALLCATEGORIES] (state, {categorys}) {
    state.categorys = categorys
  },
  [GETALLSHOPS] (state, {shops}) {
    state.shops = shops
  }

}
