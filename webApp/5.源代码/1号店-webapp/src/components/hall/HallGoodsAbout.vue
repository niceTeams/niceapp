<template>
  <div>
    <div class="goods-about goods">
      <div class="about-container">
        <div class="info">
          <h1 class="shen">刚柔并济，个性牛仔裙减龄试穿刚柔并济，个性牛仔裙减龄试穿</h1>
          <p>
            <a class="media">女神时尚课堂&nbsp;</a> | <a class="media">&nbsp;<span>226</span>人浏览</a>
          </p>
        </div>
        <div class="pic">
          <img src="../../../static/images/yi-list1.png">
        </div>
      </div>
      <div class="scan">
        <!--<span class="num">16件宝贝</span>-->
      </div>
    </div>
    <div class="goods-about goods">
      <div class="about-container">
        <div class="info">
          <h1 class="shen">刚柔并济，个性牛仔裙减龄试穿，明天你好，哈哈哈</h1>
          <p>
            <a class="media">女神时尚课堂&nbsp;</a> | <a class="media">&nbsp;<span>226</span>人浏览</a>
          </p>
        </div>
        <div class="pic">
          <img src="../../../static/images/yi-list2.png">
        </div>
      </div>
      <div class="scan">
        <!--<span class="num">16件宝贝</span>-->
      </div>
    </div>
    <div class="goods-about goods">
      <div class="about-container">
        <div class="info">
          <h1 class="shen">刚柔并济，个性牛仔裙减龄试穿</h1>
          <p>
            <a class="media">女神时尚课堂&nbsp;</a> | <a class="media">&nbsp;<span>226</span>人浏览</a>
          </p>
        </div>
        <div class="pic">
          <img src="../../../static/images/yi-list3.png">
        </div>
      </div>
      <div class="scan">
        <!--<span class="num">16件宝贝</span>-->
      </div>
    </div>
    <div class="goods-about goods">
      <div class="about-container">
        <div class="info">
          <h1 class="shen">刚柔并济，个性牛仔裙减龄试穿</h1>
          <p>
            <a class="media">女神时尚课堂&nbsp;</a> | <a class="media">&nbsp;<span>226</span>人浏览</a>
          </p>
        </div>
        <div class="pic">
          <img src="../../../static/images/yi-list4.png">
        </div>
      </div>
      <div class="scan">
        <!--<span class="num">16件宝贝</span>-->
      </div>
    </div>
    <div class="goods-about goods">
      <div class="about-container">
        <div class="info">
          <h1 class="shen">刚柔并济，个性牛仔裙减龄试穿</h1>
          <p>
            <a class="media">女神时尚课堂&nbsp;</a> | <a class="media">&nbsp;<span>226</span>人浏览</a>
          </p>
        </div>
        <div class="pic">
          <img src="../../../static/images/yi-list2.png">
        </div>
      </div>
      <div class="scan">
        <!--<span class="num">16件宝贝</span>-->
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "HallGoodsAbout",
      props:["item1","idx1"]
    }
</script>

<style scoped>
  main{
    background: #fff;
    padding:0 12px;
  }
  .goods-about{
    /*position: relative;*/
  }
  .about-container{
    display: flex;
  }
  .about-container .info,.pic{
    width:50%;
  }
  .pic img{width:100%}
  .about-container .info h1{
    line-height: 20px;
    font-size: 18px;
    padding-top:15px;

  }
  .about-container .info p{
    padding-top: 34px;
  }
  .about-container div.scan{
    /*height: 40px;*/
    position: relative;
    bottom: 34px;
    right: 0;
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
