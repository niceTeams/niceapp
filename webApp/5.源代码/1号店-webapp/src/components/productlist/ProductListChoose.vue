<template>
  <section class="choose">
    <div>
      <a href="#">综合排序<span></span></a>
      <a href="#">仅看自营</a>
      <a href="#">品牌<span></span></a>
      <span>筛选</span>
    </div>
  </section>
</template>

<script>
    export default {
        name: "ProductListChoose"
    }
</script>

<style scoped>
  main .choose{
    overflow: hidden;
    padding: 8px 12px;
    width:100%;
  }
  main .choose>div{
    height: .27rem;
    display: flex;
    align-items: center;

  }
  main .choose>div>a{
    width: .9rem;
    height: 100%;
    padding-left: 10px;
    line-height: .28rem;
    background: #f9f9f9;
    border-radius: 3px;
    margin-right: 11px;
    font-size: 14px;
    position: relative;

  }
  main .choose>div>a:nth-child(2){
    text-align: center;
    padding-left: 0;
  }
  main .choose>div>a:nth-child(3){
    padding-left: 24px;
  }
  main .choose>div>a:nth-child(3)>span{
    position: absolute;
    right: 20px;
    top:10px;
  }
  main .choose>div>a>span{
    width: .11rem;
    height: .11rem;
    background: url("../../assets/images/list-xia.png") no-repeat;
    background-size: .11rem auto;
    position: absolute;
    right: 8px;
    top:10px;
  }
  main .choose>div>span{
    font-size: 14px;
    margin-left: 10px;
    color: #666;
  }
</style>
