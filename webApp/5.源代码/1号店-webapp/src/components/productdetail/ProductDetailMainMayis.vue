<template>
  <section class="mayis">
    <a>继续拖动查看图文详情</a>
  </section>
</template>

<script>
    export default {
        name: "ProductDetailMainMayis"
    }
</script>

<style scoped>
  main .mayis{
    overflow: hidden;
    background: #fff;
    text-align: center;
    height: .4rem;
    line-height: .4rem;
  }
  main .mayis>a{
    margin: 0 auto;
    font-size: 13px;
    padding-left: 20px;
    background: url("../../assets/images/detail-hui.png") no-repeat 0px 2px;
    background-size: .15rem auto;
  }

</style>
