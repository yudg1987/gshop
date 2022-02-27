<template>
  <div>
    <section class="msite">
      <!--首页头部 slot插槽占位符-->
      <head-top :title="address.name">
        <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
        <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
      </head-top>
      <div class="miste-content-wrapper">
        <div class="miste-content">
          <!--首页导航-->
          <nav class="msite_nav">
            <div class="swiper-container" v-if="categorys.length>0">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(categorys,index) in categorysArray" :key="index">
                  <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                    <div class="food_container">
                      <img :src="baseImageUrl+category.image_url">
                    </div>
                    <span>{{ category.title }}</span>
                  </a>
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
            <!--初始上分分类没有显示加载-->
            <img src="./images/nav/msite_back.svg" alt="back" v-else/>
          </nav>
          <!--首页附近商家-->
          <div class="msite_shop_list">
            <div class="shop_header">
              <i class="iconfont icon-xuanxiang"></i>
              <span class="shop_header_title">附近商家</span>
            </div>
            <shop-list></shop-list>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop'
import Swiper from 'swiper'
// 引入轮播图组件swiper样式
import 'swiper/dist/css/swiper.min.css'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Msite',
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {ShopList, HeadTop},
  computed: {
    ...mapState(['address', 'categorys', 'shops']),
    // 商品种类一维数组生成二维数组
    categorysArray () {
      const {categorys} = this
      const categorysArray = []
      let minArray = []
      categorys.forEach(c => {
        if (minArray.length === 8) {
          minArray = []
        }
        if (minArray.length === 0) {
          categorysArray.push(minArray)
        }
        minArray.push(c)
      })
      return categorysArray
    }
  },
  mounted () {

  },
  watch: {
    categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
      // 使用setTimeout可以实现效果, 但不是太好
      /** setTimeout(() => {
        // 创建一个Swiper实例对象, 来实现轮播
        new Swiper('.swiper-container', {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }, 100) */

      // 界面更新就立即创建Swiper对象
      this.$nextTick(() => { // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
        // 创建一个Swiper实例对象, 来实现轮播
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
        // eslint-disable-next-line no-new
        new BScroll('.miste-content-wrapper', {
          click: true
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
