<template>
  <div>
    <div class="my-list borderBottom">
      <div class="my-list-top">
        <span>我的订单</span>
        <a href=""><span>查看全部</span><img src="../../assets/img/my_tip.gif" alt=""></a>
      </div>
      <div class="my-list-bottom">
        <div class="my-list-box">
          <img src="../../assets/img/my-list1.jpg"/>
          <span>待付款</span>
        </div>
        <div class="my-list-box">
          <img src="../../assets/img/my-list2.jpg"/>
          <span>代收货</span>
        </div>
        <div class="my-list-box">
          <img src="../../assets/img/my-list3.jpg"/>
          <span>待评价</span>
        </div>
        <div class="my-list-box">
          <img src="../../assets/img/my-list4.jpg"/>
          <span>待换货</span>
        </div>
      </div>
    </div>
    <div class="my-list">
      <div class="my-list-top">
        <span>我的资产</span>
      </div>
      <div class="my-list-bottom">
        <div class="my-list-box">
          <img src="../../assets/img/my-list5.jpg"/>
          <span>优惠券</span>
        </div>
        <div class="my-list-box">
          <img src="../../assets/img/my-list6.jpg"/>
          <span>账户余额</span>
        </div>
        <div class="my-list-box">
          <img src="../../assets/img/my-list7.jpg"/>
          <span>金币</span>
        </div>
        <div class="my-list-box">
          <img src="../../assets/img/my-list8.jpg"/>
          <span>礼品卡</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "MyList"
    }
</script>

<style scoped>
  .my-list{
    width:100%;
    background: #fff;
  }
  .borderBottom{
    border-bottom:.1rem solid #f6f6f6;
  }
  .my-list .my-list-top{
    width:95%;
    height:.43rem;
    display: flex;
    /*box-sizing: border-box;*/
    margin-left:5%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .my-list-top span{
    display: block;
    font-size:.14rem;
    color:#222222;
  }
  .my-list-top a{
    display: flex;
    margin-right:.15rem;
  }
  .my-list-top a span{
    display: block;
    font-size:.14rem;
    color: #979797;
    margin-right:.1rem;
  }
  .my-list-top a img{
    width:.085rem;
    height:.14rem;
  }
  .my-list .my-list-bottom{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top:.1rem;
    padding-bottom:.1rem;
  }
  .my-list-box img{
    width:.29rem;
    height:.27rem;
    margin:.05rem auto;
  }
  .my-list-box span{
    display: block;
    font-size:.14rem;
    color: #979797;
  }
</style>
