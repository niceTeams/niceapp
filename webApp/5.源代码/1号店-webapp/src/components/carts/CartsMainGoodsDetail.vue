<template>

    <dl>
      <dt><img :src="item1.pic"></dt>
      <dd>
        <div>
          <h4>{{item1.title}}</h4>
          <p class="ma1">马克华菲·小寨银泰城</p>
          <span class="bao1">包邮</span>
        </div>
        <div class="erdiv">
          <p><span class="sp1"></span><span class="sp2">立省35.8元</span></p>
          <p>
            <label>￥{{item1.price}}<i style="font-style: normal">￥895</i></label>
            <span>已售{{item1.qal}}件</span>
          </p>
        </div>
      </dd>
    </dl>


</template>

<script>
    export default {
        name: "CartsMainGoodsDetail",
        props:["item1","idx1"]
    }
</script>

<style scoped>

  main .goods>div>div{
    display: flex;
    flex-wrap: wrap;
  }
  main .goods>div dl{
    width: 48%;
    margin-top: 10px;
  }
  main .goods>div dl:nth-child(1){
    margin-right: 13px;
  }
  main .goods>div dl:nth-child(3){
    margin-right: 13px;
  }
  main .goods>div dl:nth-child(5){
    margin-right: 13px;
  }
  main .goods>div dl dt{
    height: 1.55rem;
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
  main .goods>div dl dd div.erdiv{
    margin-top: 5px;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1){
    display: flex;
    align-items: center;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1) span.sp1{
    display: inline-block;
    width:.7rem;
    height:.18rem;
    background: url("../../assets/image/s3.png") no-repeat;
    background-size: auto .18rem;
  }
  main .goods>div dl dd div.erdiv p:nth-child(1) span.sp2{
    font-size: 14px;
    color: #caab7b;
    margin-left: 5px;
  }
  main .goods>div dl dd div.erdiv p:nth-child(2){
    margin-top: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  main .goods>div dl dd div.erdiv p:nth-child(2) label{
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
  main .goods>div dl dd div.erdiv p:nth-child(2) label i{
    color: #888;
    margin-left: 6px;
    font-size: 13.5px;
    font-weight: normal;
    text-decoration: line-through;
  }
  main .goods>div dl dd div.erdiv p:nth-child(2) span{
    color: #888;
    margin-top: 4px;
    font-size: 14px;
  }
</style>
