<template>
  <div class="goBox">
    <div class="goBox1">
      <img src="../../../static/images/index-go1-1.jpg"/>
      <img src="../../../static/images/index-go1-2.jpg"/>
    </div>
    <div class="goBox2">
      <div class="go-small">
        <img src="../../../static/images/index-go2-1.jpg"/>
        <p>牛奶</p>
      </div>
      <div class="go-small">
        <img src="../../../static/images/index-go2-2.jpg"/>
        <p>坚果炒货</p>
      </div>
      <div class="go-small">
        <img src="../../../static/images/index-go2-3.jpg"/>
        <p>巧克力/糖果</p>
      </div>
      <div class="go-small">
        <img src="../../../static/images/index-go2-2.jpg"/>
        <p>饼干</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexGoBox"
    }
</script>

<style scoped>
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
