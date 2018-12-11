<template>
  <!--importBox-->
  <div class="importBox">
    <div class="import">
      <img class="importImg" src="../../../static/images/enter-import1.jpg"/>
      <div class="importText border">
        <span>账号</span>
        <input type="text" placeholder="请输入手机号/用户名/邮箱">
      </div>
    </div>
    <div class="import">
      <img class="importImg" src="../../../static/images/enter-import2.jpg"/>
      <div class="importText">
        <span>密码</span>
        <input type="text" placeholder="请输入密码">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EnterImportBox"
    }
</script>

<style scoped>
  /*importBox*/
  .importBox{
    width:100%;
    background-color: white;
  }
  .importBox .import{
    width:100%;
    display: flex;
    align-items: center;
  }
  .import .importImg{
    width:.25rem;
    height:.25rem;
    margin:.1rem .1rem .1rem .15rem;
  }
  .import .importText{
    flex:1;
    height:.45rem;
    display: flex;
    align-items: center;
  }
  .import .border{
    border-bottom:.01rem solid #f0f0f0;
  }
  .importText span{
    font-size:.16rem;
    margin-right:.16rem;
  }
  .importText input{
    padding:.12rem 0 .1rem;
    border:none;
    outline: none;
    font-size:.14rem;
  }
</style>
