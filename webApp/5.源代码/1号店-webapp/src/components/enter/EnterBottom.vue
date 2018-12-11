<template>
  <div class="bottom">
    <p class="bottomText1">
      ——————&nbsp;&nbsp;合作账号登录&nbsp;&nbsp;——————
    </p>
    <div class="images">
      <a href="#">
        <img src="../../../static/images/enterMethod1.jpg"/>
      </a>
      <a href="#">
        <img src="../../../static/images/enterMethod2.jpg"/>
      </a>
      <a href="#">
        <img src="../../../static/images/enterMethod3.jpg"/>
      </a>
      <a href="#">
        <img src="../../../static/images/enterMethod4.jpg"/>
      </a>
      <a href="#">
        <img src="../../../static/images/enterMethod5.jpg"/>
      </a>
    </div>
    <p class="bottomText2">
      登录即代表你已经同意
      <a href="#">1号店隐私政策</a>
    </p>
  </div>
</template>

<script>
    export default {
        name: "EnterBottom"
    }
</script>

<style scoped>
  /*bottom*/
  .bottom{
    width:100%;
  }
  .bottom .bottomText1{
    font-size:.14rem;
    color:#8d8d8d;
    text-align: center;
    margin-bottom:.3rem;
  }
  .bottom .images{
    display: flex;
    justify-content: space-around;
    margin-bottom:.15rem;
  }
  .images a:first-child{
    margin-left: .2rem;
  }
  .images a:last-child{
    margin-right: .2rem;
  }
  .images img{
    width:.46rem;
    height:.46rem;
    border-radius: 50%;
  }
  .bottom .bottomText2{
    font-size:.14rem;
    color:#b5b5b5;
    text-align: center;
    margin-bottom:.1rem;
  }
  .bottomText2 a{
    color:#818181;
    text-decoration:underline;
  }
</style>
