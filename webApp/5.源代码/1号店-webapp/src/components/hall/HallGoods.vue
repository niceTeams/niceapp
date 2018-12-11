<template>
  <main>
    <div class="goods">
      <h1>刚柔并济，个性牛仔裙减龄试穿</h1>
      <ul>
        <li><img src="../../../static/images/yi-product1.png"></li>
        <li><img src="../../../static/images/yi-product2.png"></li>
        <li><img src="../../../static/images/yi-product3.png"></li>
      </ul>
      <div class="scan">
        <p>
          <a class="media">搭酱&nbsp;&nbsp;</a> |
          <a class="media">&nbsp;&nbsp;<span>1112</span>人浏览</a>
        </p>
        <span class="num">10件宝贝</span>
      </div>
    </div>
    <div class="goods">
      <h1>刚柔并济，个性牛仔裙减龄试穿,明天你好，兔子</h1>
      <ul>
        <li><img src="../../../static/images/yi-product4.png"></li>
        <li><img src="../../../static/images/yi-product5.png"></li>
        <li><img src="../../../static/images/yi-product6.png"></li>
      </ul>
      <div class="scan">
        <p>
          <a class="media">搭酱&nbsp;&nbsp;</a> |
          <a class="media">&nbsp;&nbsp;<span>1112</span>人浏览</a>
        </p>
        <span class="num">10件宝贝</span>
      </div>
    </div>
    <div class="goods">
      <h1>刚柔并济，个性牛仔裙减龄试穿</h1>
      <ul>
        <li><img src="../../../static/images/yi-list1.png"></li>
        <li><img src="../../../static/images/yi-list2.png"></li>
        <li><img src="../../../static/images/yi-list3.png"></li>
      </ul>
      <div class="scan">
        <p>
          <a class="media">搭酱&nbsp;&nbsp;</a> |
          <a class="media">&nbsp;&nbsp;<span>1112</span>人浏览</a>
        </p>
        <span class="num">10件宝贝</span>
      </div>
    </div>
    <div class="goods">
      <h1>刚柔并济，个性牛仔裙减龄试穿</h1>
      <ul>
        <li><img src="../../../static/images/yi-product1.png"></li>
        <li><img src="../../../static/images/yi-product2.png"></li>
        <li><img src="../../../static/images/yi-product3.png"></li>
      </ul>
      <div class="scan">
        <p>
          <a class="media">搭酱&nbsp;&nbsp;</a> |
          <a class="media">&nbsp;&nbsp;<span>1112</span>人浏览</a>
        </p>
        <span class="num">10件宝贝</span>
      </div>
    </div>
    <div class="goods">
      <h1>刚柔并济，个性牛仔裙减龄试穿</h1>
      <ul>
        <li><img src="../../../static/images/yi-product4.png"></li>
        <li><img src="../../../static/images/yi-product5.png"></li>
        <li><img src="../../../static/images/yi-product6.png"></li>
      </ul>
      <div class="scan">
        <p>
          <a class="media">搭酱&nbsp;&nbsp;</a> |
          <a class="media">&nbsp;&nbsp;<span>1112</span>人浏览</a>
        </p>
        <span class="num">10件宝贝</span>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        name: "HallGoods",
        props:["item2","idx2"]
    }
</script>

<style scoped>
  .big{
    background: #fff;
    padding:0 12px;
  }
  .goods{
    width: 100%;
    /*overflow: hidden;*/
    background: #fff;
    padding:8px 0 ;
    border-bottom: 1px solid#ccc;
  }
  .goods h1{
    font-size: 16px;
    line-height: 41px;
  }
  .goods ul{
    display: flex;
  }
  .goods ul li{
    width:33.333%;
    margin:0 4px;
  }
  .goods ul li img{
    width:100%;
  }
  .goods p{
    color:#bfbfbf;
    line-height: 38px;

  }
  .goods p a{
    color:#a0a0a0;
    font-size:11px;
  }
  .goods div.scan{
    display: flex;
    justify-content: space-between;
    position: relative;
    /*bottom: 9px;*/
    right: 0;
  }
  .goods span.num{
    background: #808080;
    border-radius: 12px 0 12px 0px;
    height: 22px;
    line-height: 22px;
    margin: auto 0;
    padding:0 6px;
    font-size:12px;
    color:#f5f5f5;
  }
</style>
