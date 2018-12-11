<template>
  <!-- lottery -->
  <a href="#" class="lottery">
    <img class="lotteryImg" src="../../../static/images/index-lottery.jpg"/>
    <p class="lotteryText">天天抽大奖&nbsp;抢11111金币&gt;&gt;</p>
    <i class="iconfont icon-you"></i>
  </a>
</template>

<script>
    export default {
        name: "IndexLottery"
    }
</script>

<style scoped>
  /* lottery */
  .lottery{
    width:96%;
    background-color:white;
    display: flex;
    padding:.1rem 0;
    margin:0 auto;
    border-radius:.02rem;
  }
  .lottery .lotteryImg{
    width:.65rem;
    height:.15rem;
    margin:0 .1rem 0 .08rem;
  }
  .lottery .lotteryText{
    font-size:.13rem;
    color:black;
    flex:1;
  }
  .lottery .icon-you{
    font-size:.15rem;
    color:#666;
    margin-right:.1rem;
  }
</style>
