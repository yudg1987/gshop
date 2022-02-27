<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(starClass ,index) in starClasses" :key="index" :class="starClass"></span>
  </div>
</template>

<script>
// on half off个数 小数字部分小于0.5不算星 大于等于0.5算half半星
const onCount = 'on'
const halfCount = 'half'
const offCount = 'off'
export default {
  name: 'Star',
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses () {
      const {score} = this
      const scs = []
      // 得分整数部分
      const scoreInteger = Math.floor(score)
      for (let i = 0; i < scoreInteger; i++) {
        scs.push(onCount)
      }
      if (10 * score - 10 * scoreInteger >= 5) {
        scs.push(halfCount)
      }
      while (scs.length < 5) {
        scs.push(offCount)
      }
      // alert(scs)
      return scs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.star //2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/stars/star48_on')
      &.half
        bg-image('./images/stars/star48_half')
      &.off
        bg-image('./images/stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star36_on')
      &.half
        bg-image('./images/stars/star36_half')
      &.off
        bg-image('./images/stars/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star24_on')
      &.half
        bg-image('./images/stars/star24_half')
      &.off
        bg-image('./images/stars/star24_off')
</style>
