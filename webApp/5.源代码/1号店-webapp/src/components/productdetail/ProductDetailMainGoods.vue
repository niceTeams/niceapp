<template>
  <section class="goods">
    <h2>
      <a class="shus">相似商品</a>
      <a>相关搭配</a>
    </h2>
    <div>
      <dl v-for="n in item">
        <dt><img :src="n.pic"></dt>
        <dd>
          <div>
            <h4>{{n.title}}</h4>
          </div>
          <div class="erdiv">
            <p>
              <label>￥{{n.price}}</label>
            </p>
          </div>

        </dd>
      </dl>

    </div>

  </section>
</template>

<script>
    export default {
        name: "ProductDetailMainGoods",
        props:["item","idx"]
    }
</script>

<style scoped>
  main .goods{
    overflow: hidden;
    background: #fff;
    margin-top: 10px;
  }
  main .goods>h2{
    display: flex;
    height: .38rem;
    line-height: .38rem;
    border-bottom: 1px solid #eee;
  }
  main .goods>h2 a{
    margin-left: 75px;
    font-size: 16px;
  }
  main .goods>h2 a.shus{
    color:#eb1105;
    border-bottom: 1px solid #eb1105;
  }
  main .goods>div{
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
  }
  main .goods>div dl{
    width: 33%;
  }
  main .goods>div dl dt{
    height: 1.1rem;
    width: 100%;
  }
  main .goods>div dl dt img{
    height: 100%;
    width: 100%;

  }
  main .goods>div dl dd div h4{
    font-size: 15px;
    line-height: 1.8;
    color: black;
    font-weight: normal;
  }
  main .goods>div dl dd div p.ma1{
    font-size: 14px;
    color:#777 ;
  }
  main .goods>div dl dd div span.bao1{
    font-size: 13px;
    display: inline-block;
    margin-top: 8px;
    padding: 1px 6px;
    color:#dd6080 ;
    border: 1px solid #dd6080;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1){
    display: flex;
    padding-right: 8px;
    align-items: center;
    justify-content: space-between;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1) label{
    color:#ff3814;
    font-size: 18px;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1) label i{
    color: #888;
    margin-left: 6px;
    font-size: 13.5px;
    font-weight: normal;
    text-decoration: line-through;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1) span{
    color: #888;
    margin-top: 4px;
    font-size: 14px;
  }

</style>
