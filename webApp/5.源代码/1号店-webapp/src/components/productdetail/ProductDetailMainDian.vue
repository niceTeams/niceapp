<template>
  <section class="dian">
    <h2>名创优品官方旗舰店</h2>
    <p>
      <span>描述相符<i style="font-style: normal"> 9.5</i></span>
      <span>服务态度<i style="font-style: normal"> 9.6</i></span>
      <span>发货速度<i style="font-style: normal"> 9.6</i></span>
    </p>
    <p>
      <a>联系客服</a>
      <a>进入店铺</a>
    </p>
  </section>
</template>

<script>
    export default {
        name: "ProductDetailMainDian"
    }
</script>

<style scoped>
  main .dian{
    overflow: hidden;
    margin-top: 10px;
    background: #fff;
    padding: 10px 16px;
    padding-bottom: 20px;
  }
  main .dian h2{
    font-size: 18px;
    line-height: 2.4;

  }
  main .dian p{
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  main .dian p span {
    margin-right: 7px;
    margin-left: 5px;
    color: #666;
    padding-right: 20px;
    background: url("../../assets/images/detail-jian.png") no-repeat 85px ;
    background-size: .11rem auto;
  }
  main .dian p span i{
    color: #e64d47;
  }
  main .dian p a{
    font-size: 14px;
    margin-top: 10px;
    padding: 8px 53px;
    border-radius: 2px;
    color: black;
  }
  main .dian p a:nth-child(1){
    margin-right: 15px;
    background:url("../../assets/images/detail-dian1.png") no-repeat 24px center;
    background-size:.22rem auto;
    background-color: #f8f8f8;
  }
  main .dian p a:nth-child(2){
    background:url("../../assets/images/detail-dian2.png") no-repeat 24px center;
    background-size:.22rem auto;
    background-color: #f8f8f8;
  }
</style>
