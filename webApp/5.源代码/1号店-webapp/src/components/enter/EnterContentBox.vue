<template>
    <div class="contentBox">
      <enter-import-box></enter-import-box>
      <!--enterBtn-->
      <a href="#" class="enterBtn">登录</a>
      <!--forget-->
      <a href="#" class="forget">忘记密码？</a>
    </div>
</template>

<script>
    import EnterImportBox from "./EnterImportBox";
    export default {
        name: "EnterContentBox",
      components: {EnterImportBox}
    }
</script>

<style scoped>
  /*contentBox*/
  .contentBox{
    flex:1;
    overflow: scroll;
  }
  /*enterBtn*/
  .enterBtn{
    width:90%;
    height:.45rem;
    background-color:#3894f8;
    color:white;
    border-radius:.03rem;
    margin:.1rem auto;
    text-align: center;
    font-size:.16rem;
    line-height:.45rem;
    display: block;
  }
  /*forget*/
  .forget{
    font-size:.15rem;
    color:#3894f8;
    margin-left:.08rem;
    text-decoration: underline;
  }
</style>
