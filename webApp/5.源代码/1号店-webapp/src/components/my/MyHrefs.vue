<template>
    <div class="hrefs">
      <div class="href1">
        <img src="../../assets/img/my-hrefs1.jpg"/>
        <span>充值中心</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs2.jpg"/>
        <span>会员中心</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs1.jpg"/>
        <span>天天签到</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs3.jpg"/>
        <span>客户服务</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs4.jpg"/>
        <span>我的预约</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs5.jpg"/>
        <span>联名卡</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs6.jpg"/>
        <span>三单有礼</span>
      </div>
      <div class="href1">
        <img src="../../assets/img/my-hrefs7.jpg"/>
        <span>发票中心</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyHrefs"
    }
</script>

<style scoped>
    .hrefs{
      width:100%;
      display: flex;
      flex-wrap: wrap;
      border-bottom:.1rem solid #f6f6f6;
      padding-bottom:.15rem;
    }
    .hrefs .href1{
      width:25%;
      text-align: center;
    }
    .href1 img{
      width:.33rem;
      height:.33rem;
      margin:.15rem auto .1rem;
    }
    .href1 span{
      font-size:.14rem;
    }
</style>
