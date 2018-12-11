<template>
  <header>
    <div class="head">
      <img src="../../assets/img/my_set.gif">
      <img class="rightImg" src="../../assets/img/my_message.gif">
    </div>
    <div class="head_bottom">
      <router-link tag="a" to="/enter" class="face" href="#">
        <img src="../../../static/images/my-face.jpg"/>
      </router-link>
      <p class="enterLogin">登录/注册</p>
    </div>
  </header>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    background-color: #f82835;

  }
  .head{
    /*height:1.125rem;*/
    height:1.2rem;
    display: flex;
    justify-content: space-between;
  }
  .head img{
    width:.265rem;
    height:.265rem;
    margin:.2rem .16rem;
  }
  .head_bottom{
    width:100%;
    height:.6rem;
    background-color: white;
    border-top-left-radius:  2.05rem .16rem ;
    border-top-right-radius: 2.05rem .16rem ;
    position: relative;
  }
  .head_bottom .face{
    position: absolute;
    left:calc(50% - 0.35rem);
    top:-0.35rem;
  }
  .face img{
    width:.69rem;
    height:.69rem;
    border-radius: 50%;
  }
  .head_bottom .enterLogin{
    font-size:.15rem;
    text-align: center;
    padding-top:.36rem;
  }

</style>
