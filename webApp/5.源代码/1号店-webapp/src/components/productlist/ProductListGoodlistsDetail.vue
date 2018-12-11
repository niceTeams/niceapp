<template>
  <li>
    <div class="list-yi">
      <img :src="item2.pic">
    </div>
    <div class="list-er">
      <p>
        <span>自营</span>
        {{item2.title}}
      </p>
      <label>每满200减100</label>
      <p class="list-te">
        <span><i style="font-style: normal">￥</i>{{item2.price}}</span>
        <label></label>
      </p>
      <p>
        <span>评论8.7万+条</span>
        <span>
                <i style="font-style: normal">99%</i>
                    好评
            </span>
        <span></span>
      </p>

    </div>
  </li>
</template>

<script>
    export default {
        name: "ProductListGoodlistsDetail",
        props:["item2","idx2"]
    }
</script>

<style scoped>
  main .goodlists ul li{
    height: 1.36rem;
    display: flex;
  }
  main .goodlists ul li div.list-yi{
    padding: 10px 0px;
  }
  main .goodlists ul li div.list-yi>img{
    width: 1.16rem;
    height: 1.16rem;
  }
  main .goodlists ul li>div.list-er{
    flex: 1;
    height: 100%;
    margin:0px 12px;
    border-bottom: 1px solid #ccc;
  }
  main .goodlists ul li>div.list-er p{
    font-size: 13px;
    line-height: 1.6;
  }
  main .goodlists ul li>div.list-er p:nth-child(1){
    margin-top: 10px;
  }
  main .goodlists ul li>div.list-er p:nth-child(1) span{
    color: #fff;
    background: #ff030b;
    border-radius: 2px;
    padding: 1px 4px;
  }
  main .goodlists ul li>div.list-er p>span{
    padding: 2px 4px;
  }
  main .goodlists ul li>div.list-er>label{
    color: #ea5247;
    border: 1px solid #ea5247;
    border-radius: 2px;
    display: inline-block;
    margin-top: 10px;
    font-size: 13px;
    padding: 0px 3px;
  }
  main .goodlists ul li>div.list-er p.list-te{
    display: flex;
    align-items: center;

  }
  main .goodlists ul li>div.list-er p.list-te span{
    display: inline-block;
    font-size: 18px;
    color: #ea0d02;
    font-weight: bold;

  }
  main .goodlists ul li>div.list-er p.list-te label{
    display: inline-block;
    margin-left: 3px;
    width: .64rem;
    height: .15rem;
    background: url("../../assets/images/list-sp1.png") no-repeat right;
    background-size: .64rem auto;
  }
  main .goodlists ul li>div.list-er p.list-te span i{
    font-size: 14px;
  }
  main .goodlists ul li>div.list-er p:last-child>span{
    color: #999;
  }
  main .goodlists ul li>div.list-er p:last-child>span i{
    color: #dc2d2a;
  }
</style>
