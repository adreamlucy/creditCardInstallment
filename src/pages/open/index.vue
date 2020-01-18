<template>
  <div class="open-box">
    <div class="installment-bank bottom-border">
       <div class="bank-info">
         <div class="bank-title">分期银行</div>
         <div class="bank-name"><img src="@/assets/imgs/bank_icon.png" />工商银行 信用卡</div>
       </div>
       <div class="installment-hint">
         <div class="hint-title"></div>
         <div>请保证该信用卡可用分期额度充足</div>
       </div>
    </div>
    <div class="installment-item">
      <div class="item-title">信用卡号</div>
      <custom-input
          v-if="showInput"
          v-model="installmentInfo.bank_card_no"
          placeholder="请输入本人信用卡号"
          :max="-1"
          :maxLength="7"
          :toFixed="0"
          ref="myCustomInput"
          type="CARD"
          :key="bank_card_no"
          extraKey=""
          @clearable="handleClearAble('bank_card_no')"
        ></custom-input>
    </div>
    <van-cell-group style="margin-top: 20px;">
      <van-field v-model="installmentInfo.real_name" placeholder="持卡人姓名" size="large" label-align="left" label="姓名" class="custom-field" clearable label-width=90></van-field>
    </van-cell-group>
   
    <div class="installment-item">
      <div class="item-title">身份证号</div>
      <custom-input
          v-if="showInput"
          v-model="installmentInfo.id_card_no"
          placeholder="持卡人身份证号"
          :max="-1"
          :maxLength="7"
          :toFixed="0"
          ref="myCustomInput"
          type="ID"
          :key="id_card_no"
          extraKey="X"
          @clearable="handleClearAble('id_card_no')"
        ></custom-input>
    </div>
    <div class="installment-item">
      <div class="item-title">手机号</div>
      <custom-input
          v-if="showInput"
          v-model="installmentInfo.mobile_no"
          placeholder="银行柜面预留手机号"
          :max="-1"
          :maxLength="7"
          :toFixed="0"
          ref="myCustomInput"
          type="MOBILE"
          :key="mobile_no"
          extraKey=""
          @clearable="handleClearAble('mobile_no')"
        ></custom-input>
    </div>
    <div class="installment-protocol">
      <img v-if="checkProtocol" src="@/assets/imgs/check_protocol.png" @click="checkProtocol = !checkProtocol" />
      <img v-if="!checkProtocol" src="@/assets/imgs/uncheck_protocol.png" @click="checkProtocol = !checkProtocol" />
      我已阅读并同意
      <span style="color: #17C09D;">《信用卡分期服务协议》</span>
    </div>
    <div class="open-btn">
      <van-button size="bigger" v-if="checkProtocol" type="primary" class="custom-primary-btn">立即分期</van-button>
      <van-button size="bigger" v-if="!checkProtocol" type="primary" class="custom-primary-btn disabled">立即分期</van-button>
      <div class="open-hint"><img src="@/assets/imgs/jiami.png" />信息已加密处理，仅用于银行验证</div>
    </div>
  </div>  
</template>
<script>
// import CustomInput from '@/components/customInput/input'
export default {
  name: 'open_account',
  data() {
    return {
      showInput: true,
      installmentInfo: {
        bank_card_no: ''
      },
      bank_card_no: 'BANK_CARD_NO',
      checkProtocol: true
    }
  },
  methods: {
    handleClearAble(key) {
      this.installmentInfo[key] = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.open-box {
  // padding-left: 16px;
  height: 100%;
  background: #F7F7F7;
  .installment-bank {
    box-sizing: border-box;
    padding-left: 16px;
    background: #FFFFFF;
    position: relative;
    @include flex(column, center, center);
    height: 70px;
    .bank-info {
      @include flex(row, flex-start, center);
      .bank-title {
        text-align: left;
        width: 90px;
        color: $font-color23;
        font-size: 16px;
        line-height:20px;
      }
      .bank-name {
        display: inline-block;
        color: $font-color89;
        font-size: 16px;
        line-height: 20px;
        img {
          width: 14px;
        }
      }
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: #E7E8ED;
        left: 16px;
        bottom: 0px;
      }
    }
    .installment-hint {
      @include flex(row, flex-start, center);
      margin-top: 10px;
      line-height: 16px;
      color: #E6A23C;
      font-size: 12px;
      .hint-title {
        width: 90px;
      }
    }
  }
  .bottom-border::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 1px;
    background: #E7E8ED;
  }
  .installment-item {
    box-sizing: border-box;
    position: relative;
    @include flex(row, flex-start, center);
    padding-left: 16px;
    height: 52px;
    background: #FFFFFF;
    .item-title {
      text-align: left;
      width: 90px;
      font-size: 16px;
      color: $font-color23;
    }
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background: #E7E8ED;
      left: 16px;
      bottom: 0px;
    }
  }
  .custom-field {
    line-height: 29px;
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background: #E7E8ED;
      left: 16px;
      bottom: 0px;
    }
  }
  /deep/ .van-field__label--left {
    text-align: left;
    color: $font-color23;
    font-size: 16px;
    width:90px;
    margin-right: 5px;
  }
  /deep/ .van-field__control {
    color: $font-color23;
    font-size: 16px;
    &::-webkit-input-placeholder {
        color: #bdc3ce;
      }
    &::-moz-placeholder {
        color: #bdc3ce;
      }
    &::-ms-input-placeholder {
       color: #bdc3ce;
      }
     &::-moz-placeholder {
       color: #bdc3ce;
      }
  }
  .installment-protocol {
    box-sizing: border-box;
    @include flex(row, flex-start, center);
    padding-left: 16px;
    height: 50px;
    color: #6F7884;
    font-size: 14px;
    img {
      width: 16px;
      margin-right: 3px;
    }
  }
  .open-btn {
    .custom-primary-btn {
      width: 295px;
      background: #17C09D;
      border-color: #17C09D;
      color: #ffffff;
      border-radius: 4px;
      margin-top: 20px;
      &.disabled {
        background: #E7E8ED;
        border-color: #E7E8ED;
        color: #BDC3CE;
      }
    }
    .open-hint {
      @include flex(row, center, center);
      height: 40px;
      font-size: 11px;
      color: $font-color89;
      img {
        width: 12px;
        margin-right: 3px;
      }
    }
  }
}
</style>