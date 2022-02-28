import {
  GETALLCATEGORIES,
  GETALLSHOPS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  REQUESTADDRESS
} from './mutation-types'
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
  }

}
