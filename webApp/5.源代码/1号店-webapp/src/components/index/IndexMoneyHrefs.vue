<template>
  <div class="moneyHrefs">
    <a href="#" class="moneyHref">
      <!-- <img src="images/index-moneyHref1.jpg"/> -->
      <img src="../../../static/images/index-moneyHref1.gif"/>
      <p>天天签到</p>
    </a>
    <a href="#" class="moneyHref">
      <img src="../../../static/images/index-moneyHref2.jpg"/>
      <p>天天抽奖</p>
    </a>
    <a href="#" class="moneyHref">
      <img src="../../../static/images/index-moneyHref3.gif"/>
      <p>充值中心</p>
    </a>
    <a href="#" class="moneyHref">
      <img src="../../../static/images/index-moneyHref4.jpg"/>
      <p>领券中心</p>
    </a>
    <a href="#" class="moneyHref">
      <img src="../../../static/images/index-moneyHref5.jpg"/>
      <p>9.9元</p>
    </a>
  </div>
</template>

<script>
    export default {
        name: "IndexMoneyHrefs"
    }
</script>

<style scoped>
  /* moneyHrefs */
  .moneyHrefs{
    width:96%;
    display: flex;
    background-color: #f8fcfd;
    margin:.08rem auto;
    border-radius:.02rem;
  }
  .moneyHrefs .moneyHref{
    flex:1;
    font-size:.12rem;
    color:black;
    text-align: center;
    line-height: .12rem;
  }
  .moneyHref img{
    display: inline-block;
    border-radius: 50%;
    width:.48rem;
    height:.48rem;
    margin-top: .12rem;
  }
  .moneyHref p{
    margin-top: .08rem;
    margin-bottom: .15rem;
  }
</style>
