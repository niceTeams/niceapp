<template>
  <section class="menu">
    <p>名创优品(MINISO) 咱们裸熊系列香水 花果淡香持久 香水 甜蜜梦境</p>
    <p>
      <span><i style="font-style: normal">￥</i>99.9</span>
      <a>降价通知</a>
    </p>

  </section>
</template>

<script>
    export default {
        name: "ProductDetailMainMenu"
    }
</script>

<style scoped>
  main  .menu{
    padding:0 15px;
    overflow: hidden;
    padding-bottom: 10px;
    background: #fff;
  }
  main  .menu  h2{
    font-size: 22.3px;
    color: #fe386b;
    line-height: 1.5;
    margin-top: 10px;
  }
  main  .menu  p{
    font-size: 16.3px;
    line-height: 1.5;
    color: black;
    margin-top: 5px;
  }
  main  .menu  p:last-child{
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#888
  }
  main  .menu  p:last-child span{
    color: #f72f0e;
    font-size: 22px;
  }
  main  .menu  p:last-child span i{
    font-size: 16px;
  }
  main  .menu  p:last-child a{
    padding: 2px 12px;
    color: black;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
</style>
