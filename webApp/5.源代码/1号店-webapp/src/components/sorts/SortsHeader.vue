<template>
  <header>
    <div class="col_left">
      <img src="../../assets/img/sorts-position.gif" alt="">
      <h3>西安</h3>
    </div>
    <div class="col_middle">
      <form action="">
        <img src="../../assets/img/sorts_search.gif" alt="">
        <input type="search" placeholder="抢1111金币 天天抽奖">
      </form>
    </div>
    <div class="col_right">
      <img src="../../assets/img/sorts_sao.gif" alt="">
      <img src="../../assets/img/sorts_message.gif" alt="">
    </div>
  </header>
</template>

<script>
    export default {
        name: "SortsHeader"
    }
</script>

<style scoped>
  header{
    position: fixed;
    top: 0;
    z-index: 50;
    width:100%;
    height:.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
    background-color: #ffffff;
  }
  header .col_left{
    display: flex;
    align-items: center;
    height:.3rem;
    font-size:.12rem;
    color:#f24d45;
  }
  .col_left img{
    width:.21rem;
    height:.25rem;
    margin-right:.04rem;
  }
  .col_left h3{
    font-size:.12rem;
    color:#f24d45;
    line-height: .3rem;
  }
  .col_middle{
    height:.3rem;
    position:relative;
  }
  .col_middle form{
    height:.3rem;
    display: flex;
    align-items: center;
  }
  .col_middle form img{
    width: .18rem;
    height:.18rem;
    position: absolute;
    left:.07rem;
    top:0.06rem;
  }
  .col_middle form input{
    background-color: #ededed;
    padding:.06rem 0 .06rem .27rem;
    outline: none;
    border:0;
    border-radius: 4px;
  }
  .col_right{
    display: flex;
  }
  .col_right img{
    width:.23rem;
    height:.23rem;
    margin-right:.12rem;
  }
  .col_right img:last-child{
    margin-right: 0;
  }
</style>
