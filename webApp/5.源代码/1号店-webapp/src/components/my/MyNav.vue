<template>
  <nav>
    <div class="nav_box">
      <img src="../../assets/img/my_love.gif" alt="">
      <span>我的关注</span>
    </div>
    <div class="nav_box">
      <img src="../../assets/img/my_foot.gif" alt="">
      <span>浏览足迹</span>
    </div>
    <div class="nav_box">
      <img src="../../assets/img/my_list.gif" alt="">
      <span>常规清单</span>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "MyNav"
    }
</script>

<style scoped>
  nav{
    width:100%;
    height:.83rem;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .nav_box img{
    width:.28rem;
    height:.29rem;
    margin-left:.14rem;
    margin-bottom:.12rem;
  }
  .nav_box span{
    display: block;
    text-align: center;
    font-size:.14rem;
    color: #979797;
  }
</style>
