<style scoped>
  .model-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .carmodel-wrap .popup-shade {
    opacity: 1;
    z-index: 101;
  }
  .model-content {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 102;
    overflow: hidden;
  }
  .model-inner {
    width: 94.667%;
    margin: 0 auto;
    border-radius: 12px;
    background: rgba(255,255,255,0.9);
    position: relative;
    overflow: hidden;
  }
  .model-title {
    width: 100%;
    height: 46px;
    line-height: 46px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #8F8E94;
    text-align: center;
    position: relative;
  }
  .model-scroll {
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .options-cells {
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
    height: auto;
    overflow: hidden;
  }
  .options-cell {
    width: 100%;
    height: 54px;
    line-height: 54px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.3px;
    text-align: center;
    position: relative;
  }
  .options-cell.checked {
    color: #FE3824;
  }
  .options-cell:after,
  .model-title:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid #cbccce;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .options-cell:last-child {
    border-radius: 0 0 12px 12px;
  }
  .options-cell:last-child:after {
    display: none;
  }
  .model-cancel {
    display: block;
    width: 94.667%;
    height: 54px;
    line-height: 54px;
    background: #FFFFFF;
    border-radius: 12px;
    margin: 10px auto;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #333333;
    text-align: center;
  }
  .model-cancel:active {
    background: #ECECEC;
  }
</style>

<template>
  <div
    class="model-wrap"
    v-if="show"
    >
    <div
      class="popup-shade fadeIn"
      @click.stop="handleClosePopup"
      ></div>
    <div class="model-content slideToTop-enter">
      <div class="model-inner">
        <div class="model-title">{{title}}</div>
        <div 
          class="model-scroll"
          ref="modelScroll"
          >
          <div class="options-cells">
            <div 
              class="options-cell avtive-class"
              :class="{'checked': option.checked}"
              v-for="option in optionsData" 
              @click.stop="handleClickOption(option)" 
              >{{option.value}}</div>
          </div>
        </div>
      </div>
      <a 
        href="javascript:;" 
        class="model-cancel"
        @click.stop="handleClosePopup()"
        >取消</a>
    </div>
  </div>
</template>

<script>
import { container, config } from '../landrover/business/index'
import MallService from '../service/mall.service'
import { ui } from '../landrover/foundation/index'

const mallService = container.mallService

export default {
  data() {
    return {
      optionsModelShow: this.show,
      optionsData: this.options
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: '弹窗'
    },
    type: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    /**
     * 关闭弹出层.
     */
    handleClosePopup() {
      this.optionsModelShow = false
      this.optionsData = []
      this.$emit("bindtap")
    },
    handleClickOption(option) {
 
      const query = {
        type: this.type,
        data: {
          id: option.id,
          value: option.value,
          checked: true
        }       
      }
      basics.bindWinOpenScroll()
      this.$emit("bindtap",query)
    },
    handleBindScroll() {
      setTimeout(() => {
        const modelScroll = this.$refs.modelScroll
        const winScroll = new IScroll(modelScroll,{
          click: true
        }) 
      })
    }
  },
  watch: {
    'show': function(val) {
      const that = this
      this.optionsModelShow = val
      this.optionsData = this.options
      if(val) {
        basics.bindWinCloseScroll()
        this.handleBindScroll()
      }else {
        basics.bindWinOpenScroll()
      }
    }
  }
}
</script>
