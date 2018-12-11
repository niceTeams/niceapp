<template>
  <header>
    <div class="up1">
      <span></span>
      <span class="ersp"></span>
    </div>

  </header>
</template>

<script>
    export default {
        name: "ProductDetailHeader"
    }
</script>

<style scoped>
  header{ height:.45rem;
    background:#fff;
  }
  header .up1{
    height: .45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:5px 20px;
  }
  header .up1>span{
    width: .32rem;
    height: .32rem;
    background: url("../../assets/images/detail-1.png") no-repeat;
    background-size: .32rem auto;
  }
  header .up1>span.ersp{
    background: url("../../assets/images/detail-2.png") no-repeat;
    background-size: .32rem auto;
  }

</style>
