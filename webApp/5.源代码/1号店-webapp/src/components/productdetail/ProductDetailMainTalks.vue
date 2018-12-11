<template>
  <section class="talks">
    <p>
      <span>评价<i style="font-style: normal">(2500+)</i></span>
      <label><i style="font-style: normal">99% </i>好评</label>
    </p>
    <p>炒鸡炒鸡棒创优品官方旗舰超级超级棒棒哒...</p>
    <div>
      <img src="../../assets/images/detail-img4.png">
      <img src="../../assets/images/detail-img6.png">
    </div>
    <a>查看更多热评</a>
  </section>
</template>

<script>
    export default {
        name: "ProductDetailMainTalks"
    }
</script>

<style scoped>
  main .talks{
    overflow: hidden;
    background: #fff;
    margin-top: 10px;
    padding: 0 15px;
  }
  main .talks p:nth-child(1){
    line-height: 3;
    display: flex;
    justify-content: space-between;
  }
  main .talks p:nth-child(1) span{
    font-size: 18px;
    font-weight: bold;
  }
  main .talks p:nth-child(1) span i{
    font-size: 14px;
    color: black;
    font-weight: normal;
  }
  main .talks p:nth-child(1) label{
    font-size: 16px;
    color: black;
  }
  main .talks p:nth-child(1) label i{
    font-size: 15px;
    color: #fb1c14;
    font-weight: normal;
  }

  main .talks p:nth-child(2){
    font-size: 14px;
  }
  main .talks>div{
    display: flex;
  }
  main .talks>div img{
    height: 1rem;
    margin-top: 10px;
    margin-right: 10px;
    width: 1rem;
    border: 1px solid #f7f7f7;
  }
  main .talks a{
    margin:15px 100px;
    padding: 6px 20px;
    border: 1px solid #eb1105;
    color: #eb1105;
    border-radius: 3px;
    display: inline-block;
  }
</style>
