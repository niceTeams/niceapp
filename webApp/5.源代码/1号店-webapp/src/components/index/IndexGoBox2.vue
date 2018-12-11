<template>
  <!--goBox2-->
  <div class="goBox">
    <div class="goBox1">
      <img src="../../../static/images/index-go1-3.jpg"/>
      <img src="../../../static/images/index-go1-4.jpg"/>
    </div>
    <div class="goBox2">
      <div class="go-small">
        <img src="../../../static/images/index-go2-4.jpg"/>
        <p>大闸蟹</p>
      </div>
      <div class="go-small">
        <img src="../../../static/images/index-go2-5.jpg"/>
        <p>猪牛羊肉</p>
      </div>
      <div class="go-small">
        <img src="../../../static/images/index-go2-6.jpg"/>
        <p>海鲜水产</p>
      </div>
      <div class="go-small">
        <img src="../../../static/images/index-go2-5.jpg"/>
        <p>猪牛羊肉</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexGoBox2"
    }
</script>

<style scoped>
  /*goBox*/
  .goBox{
    width:96%;
    margin:0 auto .08rem;
  }
  .goBox .goBox1{
    display: flex;
  }
  .goBox1 img{
    width:50%;
    height:1.25rem;
  }
  .goBox .goBox2{
    display: flex;
    padding-top: 10px;
    overflow: scroll;
    background-color: white;
  }
  .goBox2 .go-small{
    margin-right:.2rem;
  }
  .goBox2 .go-small:first-child{
    margin-left:.15rem;
  }
  .go-small img{
    width:.8rem;
    height:.8rem;
  }
  .go-small p{
    font-size: .12rem;
    text-align: center;
    line-height: .35rem;
  }
</style>
