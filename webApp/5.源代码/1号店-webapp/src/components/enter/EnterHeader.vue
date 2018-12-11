<template>
  <header>
    <router-link tag="a" to="/my" href="#" class="closeBtn">关闭</router-link>
    <p class="headerText">登录</p>
    <a href="#" class="loginBtn">注册</a>
  </header>
</template>

<script>
    export default {
        name: "EnterHeader"
    }
</script>

<style scoped>
  /*header*/
  header{
    width:100%;
    display: flex;
    justify-content: space-between;
    height:.5rem;
    align-items:center;
    background-color: white;
    margin-bottom:.16rem;
  }
  .closeBtn{
    font-size:.15rem;
    color:#e63932;
    margin-left:.15rem;
  }
  .headerText{
    font-size:.18rem;
  }
  .loginBtn{
    font-size:.15rem;
    color:#e63932;
    margin-right:.15rem;
  }
</style>
