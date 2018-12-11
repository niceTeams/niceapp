<template>
  <div>
    <section class="mayi">
      <div>
        <div >
          <span>促销</span>
          <span class="man">会员特价</span>
          <span>店铺会员可享受会员特价，最低...</span>
        </div>
        <span></span>
      </div>
    </section>

    <section class="mayi" >
      <div>
        <div class="bao">
          <span>规格</span>
          <span>甜蜜梦境</span>

        </div>
        <span></span>
      </div>
      <div>
        <div >
          <span>配送</span>
          <span>陕西 西安市 新城区</span>
        </div>
        <span></span>
      </div>
      <p>现货，店铺单笔订单不满59元，在线支付运费8元，
        由名创优品官方旗舰店 从广东东菀市发货，并提供售后服务。</p>

    </section>

    <section class="mayi">
      <div>
        <div >
          <span>参数</span>
          <span>产品参数 & 包装清单</span>
        </div>
        <span></span>
      </div>
    </section>
    <section class="mayi">
      <div>
        <div >
          <span>服务</span>
          <span class="zhi">支持7天无理由退货</span>
        </div>
        <span></span>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "ProductDetailMainMayi"
    }
</script>

<style scoped>
  main .mayi{
    overflow: hidden;
    background: #fff;
    padding: 0 6px;
  }
  main .mayi>div{
    overflow: hidden;
    background: #fff;
    display: flex;
    align-items: center;
    /*border-bottom: 1px solid #ddd;*/
    border-top: 1px solid #ddd;
  }
  main .mayi>div>div{
    flex: 1;
    height: .45rem;
    display: flex;
    align-items: center;
  }
  main .mayi>div>div span{
    font-size: 13px;
    margin-left: 15px;
  }
  main .mayi>div>div span:nth-child(1){
    color: #383838;
    font-size: 15px;
    font-weight: bold;
  }
  main .mayi>div>div span.man{
    padding: 0 4px;
    border-radius: 2px;
    color: #fff;
    border: 1px solid #fe386b;
    background: #fe386b;
  }
  main .mayi>div>span{
    display: inline-block;
    width: .24rem;
    height: .24rem;
    background: url("../../assets/images/detail-dian.png") no-repeat center;
    background-size: .28rem auto;

  }
  main .mayi>div>div span.zhi{
    background: url("../../assets/images/detail-dui.png") no-repeat;
    background-size: .2rem;
    padding-left: 24px;
  }


  main .mayi>div:nth-child(2){
    border-bottom: 0;
  }
  main .mayi>div:nth-child(2)>div{
    height: .3rem;
  }
  main .mayi>p{
    width: 78%;
    margin: 0 auto;
    line-height: 1.5;
    font-size: 13px;
    color: #666;
    padding-left: 18px;
    margin-bottom: 10px;
  }
</style>
