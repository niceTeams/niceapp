<template>
  <div class="superProduct">
    <div class="productTit">
      <h3 class="p-title">超级单品</h3>
      <div id="countDown">
        <span id="hour">00</span>&nbsp;:&nbsp;
        <span id="minutes">00</span>&nbsp;:&nbsp;
        <span id="seconds">00</span>
      </div>
      <a href="#" class="p-href">精选好物等你来逛&gt;&gt;</a>
    </div>
    <div class="productScroll">
      <a href="#" class="productBox"  v-for="(n,idx) in list2" >
        <img class="productImg" :src="n.pic"/>
        <p class="productName">{{n.title}}</p>
        <div class="price">
          ￥<span class="price1">{{n.price1}}</span>
          <span class="price2">￥{{n.price2}}</span>
        </div>
      </a>
      <!--<a href="#" class="productBox">-->
        <!--<img class="productImg" src="../../../static/images/index-product2.jpg"/>-->
        <!--<p class="productName">伊赛 巴西进口牛肉</p>-->
        <!--<div class="price">-->
          <!--￥<span class="price1">25.8</span>-->
          <!--<span class="price2">￥55.0</span>-->
        <!--</div>-->
      <!--</a>-->
      <!--<a href="#" class="productBox">-->
        <!--<img class="productImg" src="../../../static/images/index-product3.jpg"/>-->
        <!--<p class="productName">金锣 千叶豆腐四包装</p>-->
        <!--<div class="price">-->
          <!--￥<span class="price1">9.8</span>-->
          <!--<span class="price2">￥19.9</span>-->
        <!--</div>-->
      <!--</a>-->
      <!--<a href="#" class="productBox">-->
        <!--<img class="productImg" src="../../../static/images/index-product3.jpg"/>-->
        <!--<p class="productName">金锣 千叶豆腐</p>-->
        <!--<div class="price">-->
          <!--￥<span class="price1">9.8</span>-->
          <!--<span class="price2">￥19.9</span>-->
        <!--</div>-->
      <!--</a>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexSuperProduct",
        props:["list2"]
    }
</script>

<style scoped>
  /*superProduct*/
  .superProduct{
    width:96%;
    background-color:white;
    margin:0 auto;
  }
  .superProduct .productTit{
    display: flex;
    height:.4rem;
    align-items: center;
  }
  .productTit .p-title{
    font-size:.16rem;
    margin-left:.1rem;
    margin-right:.05rem;
  }
  .productTit #countDown{
    font-size:.1rem;
    flex:1;
    margin-right:.05rem;
    display:flex;
  }
  #countDown span{
    background-color:#606060;
    display: block;
    height:.17rem;
    padding:0 .03rem;
    line-height:.17rem;
    color:white;
    border-radius:.03rem;
  }
  .productTit .p-href{
    font-size:.13rem;
    color:#fa2209;
    margin-right:.08rem;
  }
  .superProduct .productScroll{
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
  }
  .productScroll .productBox{
    width:1rem;
    display: block;
    margin-left:.1rem;
  }
  .productBox .productImg{
    width:1rem;
    height:1rem;
  }
  .productBox .productName{
    font-size:.12rem;
    width:1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:black;
    margin-top:.1rem;
    line-height:.12rem;
  }
  .productBox .price{
    font-size:.08rem;
    color:#ff3527;
    margin-top:.06rem;
    padding-bottom:.08rem;
  }
  .price .price1{
    font-size:.11rem;
    color:#ff3527;
  }
  .price .price2{
    color:#666;
    text-decoration:line-through;
  }
</style>
