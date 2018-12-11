<template>
  <section class="header">
    <ul>
      <li>
      </li>
      <li>
        <input type="text" placeholder="搜索商品" >
      </li>
      <li>

      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "ProductListHeader"
    }
</script>

<style scoped>
  main .header{
    overflow: hidden;
  }
  main .header ul{
    height: .52rem;
    padding: .1rem .12rem;
    display: flex;
    justify-content:space-between;
    align-items:center;
  }
  main .header ul li{ text-align:center;}
  main .header ul li:nth-child(1),
  main .header ul li:nth-child(3){
    width:.25rem;
    height:.25rem;
  }
  main .header ul li:nth-child(1){
    background:url("../../assets/images/list-h1.png") no-repeat ;
    background-size: .25rem auto;
  }
  main .header ul li:nth-child(3){
    background:url("../../assets/images/list-h2.png") no-repeat ;
    background-size: .25rem auto;
  }
  main .header ul li:nth-child(2){
    flex: 1;
    margin: 0 15px;
  }
  main .header ul li:nth-child(2) input{
    height: .3rem;
    width:100%;
    padding-left:.38rem;
    line-height:.3rem;
    background:url(../../assets/images/list-h3.png) no-repeat 10px .05rem;
    background-size:.19rem auto;
    background-color:#f5f5f5;
    color:#b1b1b1;
    border: 0;
    border-radius:.06rem;
    font-size:13px;
  }
</style>
