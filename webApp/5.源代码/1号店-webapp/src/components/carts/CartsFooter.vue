<template>
  <div class="footer">
    <router-link tag="a" to="/" href="#" class="pageHref">
      <img src="../../../static/images/footer-index-gray.jpg"/>
      <p >首页</p>
    </router-link>
    <router-link tag="a" to="/sorts" href="#" class="pageHref">
      <img src="../../../static/images/footer-details-gray.jpg"/>
      <p>分类</p>
    </router-link>
    <router-link tag="a" to="/hall" href="#" class="pageHref">
      <img src="../../../static/images/footer-1pintang-gray.jpg"/>
      <p>1品堂</p>
    </router-link>
    <router-link tag="a" to="/Carts" href="#" class="pageHref">
      <img src="../../../static/images/footer-car-red.jpg" class="bianimg"/>
        <!--<i style="font-style: normal" class="bianhua">{{tn}}</i>-->
      <p class="redText">购物车</p>
    </router-link>
    <router-link tag="a" to="/my" href="#" class="pageHref">
      <img src="../../../static/images/footer-my-gray.jpg"/>
      <p>我的1号店</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "CartsFooter",
        // props:["tn"]
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
  .footer i.bianhua{
    width: .18rem;
    height: .18rem;
    font-size: 14px;
    text-align: center;
    display: block;
    border: 1px solid #f5446e;
    border-radius: 50%;
    position: absolute;
    top:2px;
    color: #f5446e;
    right: 83px;
  }
  .footer img.bianimg{
    position: relative;
  }
</style>
