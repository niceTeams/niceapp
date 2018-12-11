<template>
  <div class="cat-left">
    <div class="cat-nav">
      <div class="cat-li"><span>为您推荐</span></div>
      <div class="cat-li"><span>美容护理</span></div>
      <div class="cat-li"><span>手机数码</span></div>
      <div class="cat-li"><span>家用电器</span></div>
      <div class="cat-li"><span>家居家纺</span></div>
      <div class="cat-li"><span>电脑办公</span></div>
      <div class="cat-li"><span>运动户外</span></div>
      <div class="cat-li"><span>服装内衣</span></div>
      <div class="cat-li"><span>宠物用品</span></div>
      <div class="cat-li"><span>图书杂志</span></div>
      <div class="cat-li"><span>营养保健</span></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SortsCatLeft"
    }
</script>

<style scoped>
  .cat-left{
    position: fixed;
    height: 100%;
    background-color: #f4f4f4;
    overflow: scroll;
  }
  .cat-nav{
    height: 100%;
    padding-bottom:.7rem;
  }
  .cat-nav .cat-li{
    width: .8rem;
    height: .8rem;
    border-bottom: 1px solid #e3e3e3;
    text-align: center;
    line-height: .8rem;
  }
  .cat-li span{
    display: block;
    color:  #666;
    font-size:.12rem;
  }
</style>
