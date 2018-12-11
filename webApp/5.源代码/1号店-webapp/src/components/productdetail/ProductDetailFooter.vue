<template>
  <footer>
    <div>
      <p>
        <span></span>
        <label>购物车</label>
      </p>
      <p>
        <span></span>
        <label>关注</label>
      </p>

    </div>
    <a href="#">加入购物车</a>

  </footer>
</template>

<script>
    export default {
        name: "ProductDetailFooter"
    }
</script>

<style scoped>
  footer{
    height: .52rem;
    display: flex;
    padding-left: 15px;
    background: #fff;
    align-items: center;
    border-top: 1px solid #eee;
  }
  footer>div{
    flex: 1;
    height: 100%;
    display: flex;

  }
  footer>div p{
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 10px;
    align-items: center;
  }
  footer>div p span{
    width: .34rem;
    height: .3rem;
    display: inline-block;
    margin-top: 3px;
  }
  footer>div p:nth-child(1) span{
    background:url("../../assets/images/detail-f1.png") no-repeat;
    background-size: .34rem auto;
  }
  footer>div p:nth-child(2) span{
    background:url("../../assets/images/detail-f2.png") no-repeat;
    background-size: .32rem auto;
  }

  footer>div p:nth-child(2){
    margin-right: 15px;

  }
  footer>div p label{
    color: #333;
    font-size: 14px;
  }

  footer>a{
    display: inline-block;
    padding:0 22px;
    background: #ff3c26;
    line-height: .5rem;
    font-size:18.5px;
    color: #fff;
    text-align: center;
    height: 100%;
  }
</style>
