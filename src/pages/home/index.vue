<template>
  <div class="card-installment">
    <div class="installment-info">
      <div class="pay-info">
        <div>支付金额<img src="@/assets/imgs/pay_info.png" /></div>
        <div class="pay-money">￥1006.04</div>
      </div>
      <div class="poundage-info">
        <div></div>
        <div class="poundage-money">支付通道手续费：￥6.04</div>
      </div>
    </div>
    <div class="installment-bank">
      <div>分期银行</div>
      <div>工商银行 信用卡（1234) <img src="@/assets/imgs/arrow_right.png" /></div>
    </div>
   <div class="installment-list">
     <div class="list-item"
      v-for="(item, index) in installmentFeeList"
      :key="index"
      :class="index === checkId ? 'active-list-item' : ''"
      @click="setInstallment(index, item)"
     >
       <div class="item-money">￥{{ item.installment_amount }} x {{ item.installment }}期</div>
       <div class="item-poundage">手续费 ￥{{ item.fee }}/期</div>
     </div>
   </div>
   <div class="installment-btn">
    <van-button type="primary" size='bigger' class="cunstom-btn-primary">立即分期</van-button>
    <div class="poundage-hint"><img src="@/assets/imgs/poundage_hint.png" />信用卡分期手续费收取方式请以发卡行为准</div>
   </div>
  </div> 
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      installmentFeeList: [
        { installment_amount: 500008, installment: 3, fee: 20 },
        { installment_amount: 500008, installment: 6, fee: 20 },
        { installment_amount: 500008, installment: 9, fee: 20 },
        { installment_amount: 500008, installment: 12, fee: 20 }
      ],
      checkId: 0
    }
  },
  methods: {
    setInstallment (index, item) {
      this.checkId = this.checkId === index ? this.checkId : index
      console.log('点击事件======>', index, item)
    }
  }
}
</script>
<style lang="scss" scope>
.card-installment {
  box-sizing: border-box;
  padding-left: 16px;
  // padding-right: 16px;
  .installment-info {
    height: 72px;
    @include flex (column, center, center);
    line-height: 20px;
    position: relative;
    .pay-info {
      @include flex (row, space-between, center);
      color: #232C37;
      font-size:16px;
      img {
        width: 16px;
        margin-left: 3px;
      }
      .pay-money {
        font-size:18px;
        font-weight:600;
        color: #E6A23C;
      }
    }
    .poundage-info {
      margin-top: 5px;
      @include flex (row, space-between, center);
      font-size: 12px;
      color: #89939F;
      line-height: 16px;
    }
    .poundage-money,.pay-money {
      padding-right: 16px;
    }
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #E7E8ED;
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
  }
  .installment-bank {
    @include flex (row, space-between, center);
    font-size: 16px;
    color: #232C37;
    margin-top: 15px;
    padding-right: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
    img {
      width: 20px;
      vertical-align: text-top;
    }
  }
  .installment-list {
    box-sizing: border-box;
    padding-right: 16px;
    @include flex (row, space-between, flex-start);
    flex-wrap: wrap;
    margin-top: 11px;
    .list-item {
      @include flex (column, space-evenly, center);
      box-sizing: border-box;
      width: 165px;
      height: 80px;
      border: 1px solid #BDC3CE;
      border-radius: 2px;
      margin-bottom: 11px;
      .item-money {
        font-size: 16px;
        color: #6F7884;
        line-height:22px;
      }
      .item-poundage {
        font-size: 12px;
        color: #89939F;
        line-height: 16px;
      }
    }
    .active-list-item {
      background:rgba(23,192,157,0.05);
      border: 1px solid #17C09D;
      color: #17C09D;
      .item-money{
        color: #17C09D;
      }
      .item-poundage {
        color: #17C09D;
      }
    }
  }
  .installment-btn {
    margin-top: 80px;
    padding-right: 16px;
    .cunstom-btn-primary {
      width: 295px;
      background: $bg-color;
      border-color: $border-color;
      border-radius: 4px;
    }
    .poundage-hint {
      @include flex (row, center, center);
      font-size: 11px;
      color: #89939F;
      height: 16px;
      margin-top:6px;
      img {
        width: 12px;
        margin-right: 3px;
      }
    }
  }
}
</style>