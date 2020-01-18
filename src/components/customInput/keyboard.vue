<template>
  <NumberKeyboard
    class="custom-key-board"
    ref="key-board"
    :style="{bottom: value.show?0:keyBoardHeight}"
    :show="value.show"
    theme="custom"
    :extra-key="extraKey"
    close-button-text="完成"
    :hide-on-click-outside="false"
    @close="$emit('close')"
    @input="$emit('handleClick', $event)"
    @delete="$emit('handleClickDelete')"
  />
</template>
<script>
import { NumberKeyboard } from 'vant'
// import func from '../../../vue-temp/vue-editor-bridge'
export default {
  data() {
    return {
      // 默认键盘位置
      keyBoardHeight: '-1000px'
    }
  },
  components: { NumberKeyboard },
  props: {
    value: {
      type: Object,
      default: function() {
        return {
          val: '',
          pos: null,
          show: false
        }
      }
    },
    extraKey: {
      type: String || null,
      default: null
    }
  },
  methods: {
    // 获取自定义键盘高度,实现自定义显隐
    getKeyBoardHeight() {
      this.keyBoardHeight = `-${
        this.$refs['key-board']
          ? this.$refs['key-board'].$el.offsetHeight + 50
          : 1000
      }px`
    },
    async EventListener(e) {
      try {
        await this.isParent(e.target, [...document.querySelectorAll('.input-container')])
      } catch (e) {
        this.$emit('close')
      }
    },
    // 判断当前dom对象是否是指定dom对象子级
    isParent(obj, parentObj) {
      return new Promise((resolve, reject) => {
        // 是否找到对应自定义input
        let flag = false
        for (let i in parentObj) {
          (function(obj) {
            while (
              obj !== undefined &&
              obj !== null &&
              obj.tagName.toUpperCase() !== 'BODY' &&
              !flag
            ) {
              if (obj === parentObj[i]) { flag = true }
              obj = obj.parentNode
            }
          })(obj)
        }
        flag ? resolve() : reject(new Error())
      })
    }
  },
  watch: {
    'value.show': {
      deep: true,
      handler(val) {
        document.body[(val ? 'add' : 'remove') + 'EventListener'](
          'touchstart',
          this.EventListener
        )
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getKeyBoardHeight()
    })
  }
}
</script>
<style>

.van-key {
  height: 106px !important;
  line-height: 106px !important;
  font-size: 48px !important;
  font-weight: 400;
  color: #030303;
}
.van-number-keyboard__sidebar {
  height: 424px !important;
}
.van-key--blue::after {
  border-color: #17C09D !important;
}
.van-key--blue, .van-key--blue.van-key--active {
  background-color: #17C09D !important;
}
.van-key--delete {
  height: 106px !important;
  line-height: 106px !important;
  font-size: 32px !important;
  font-weight: 400;
}
.van-key--close {
  height: 318px !important;
  line-height: 318px !important;
  font-weight: 400;
  background: #17C09D;
  font-size: 32px !important;
  font-weight: 400;
  color: #FFFFFF;
}
.custom-key-board {
  bottom: -1000px;
  display: block !important;
}
</style>
