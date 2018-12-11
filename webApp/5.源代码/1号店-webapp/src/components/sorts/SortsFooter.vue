<template>
  <div class="footer">
    <router-link tag="a" to="/" href="#" class="pageHref">
      <img src="../../../static/images/footer-index-gray.jpg"/>
      <p>首页</p>
    </router-link>
    <router-link tag="a" to="/sorts" href="#" class="pageHref">
      <img src="../../../static/images/footer-details-red.jpg"/>
      <p class="redText">分类</p>
    </router-link>
    <router-link tag="a" to="/hall" href="#" class="pageHref">
      <img src="../../../static/images/footer-1pintang-gray.jpg"/>
      <p>1品堂</p>
    </router-link>
    <router-link tag="a" to="/Carts" href="#" class="pageHref">
      <img src="../../../static/images/footer-car-gray.jpg"/>
      <p>购物车</p>
    </router-link>
    <router-link tag="a" to="/my" href="#" class="pageHref">
      <img src="../../../static/images/footer-my-gray.jpg"/>
      <p>我的1号店</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "SortsFooter"
    }
</script>

<style scoped>
  /*footer*/
  .footer{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color:white;
  }
  .footer .pageHref{
    flex:1;
    text-align: center;
  }
  .pageHref img{
    width:.25rem;
    height:.25rem;
    display: inline-block;
    margin-top:.05rem;
  }
  .pageHref p{
    font-size:.1rem;
    line-height: .2rem;
    color:#666;
  }
  .pageHref .redText{
    color:#f14c5a;
  }
</style>
