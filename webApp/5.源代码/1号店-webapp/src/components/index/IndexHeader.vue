<template>
  <header>
    <div class="location">
      <i class="iconfont icon-location"></i>
      西安
    </div>
    <a href="#" class="search">
      <i class="iconfont icon-search"></i>
      <p class="searchText">抢11111金币&nbsp;天天抽奖</p>
      <img class="searchImg" src="../../../static/images/index-gold.jpg">
    </a>
    <div class="icons">
      <i class="iconfont icon-saoyisao"></i>
      <i class="iconfont icon-message"></i>
    </div>
  </header>
</template>

<script>
    export default {
        name: "IndexHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    display: flex;
    align-items:center;
    position: fixed;
    left:0;
    top:0;
    z-index:100;
    color:white;
  }
  .location{
    font-size:.13rem;
    margin-left:.12rem;
    margin-right:.1rem;
    display: flex;
    align-items:center;
  }
  .location i{
    font-size:.2rem;
    margin-right:.02rem;
  }
  .search{
    font-size:.14rem;
    color:#616161;
    background-color:white;
    display: flex;
    align-items: center;
    flex:1;
    margin:.09rem 0;
    border-radius:.04rem;
    padding:.04rem;
  }
  .search .icon-search{
    font-size:.2rem;
    margin:0 .04rem 0 .02rem;
  }
  .search .searchText{
    flex:1;
  }
  .search .searchImg{
    width:.24rem;
    height:.24rem;
    border-radius: 50%;
  }
  .icons{
    margin-left:.1rem;
  }
  .icons .iconfont{
    font-size:.2rem;
    margin-right:.08rem;
  }
</style>
