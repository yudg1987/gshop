<template>
  <section class="search">
    <head-top title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import HeadTop from '../../components/HeadTop/HeadTop'
import {mapState} from 'vuex'

export default {
  name: 'Search',
  components: {HeadTop},
  data() {
    return {
      keyword: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },

  methods: {
    search(){
      const keyword=this.keyword.trim();
      if(keyword){
        this.$store.dispatch('searchShops',keyword)
      }
    }
  },
  computed: {
    ...mapState(['searchShops'])
  },

  watch: {
    searchShops (value) {
      if (!value.length) { // 没有数据
        this.noSearchShops = true
      } else {// 有数据
        this.noSearchShops = false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.search  //搜索
  width 100%
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
</style>
