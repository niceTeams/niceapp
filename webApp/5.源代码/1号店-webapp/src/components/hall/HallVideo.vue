<template>
  <div>

    <div class="video goods" >
      <h1>{{item.title}}</h1>
      <img :src="item.pic">
      <div class="scan">
        <p>
          <a class="media">{{item.media}}&nbsp;</a> | <a class="media">&nbsp;<span>{{item.scan}}</span>次播放</a>
        </p>
        <span class="num"><img src="../../assets/images/share.png"></span>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HallVideo",
      props:["item","idx"],
    }
</script>

<style scoped>
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
  .video>img{
    width:100%;
  }
  .video span.num{
    background: none;
    color: #262626;
  }
  .video span.num img{
    width:22px;
    height: 22px;
  }
</style>
