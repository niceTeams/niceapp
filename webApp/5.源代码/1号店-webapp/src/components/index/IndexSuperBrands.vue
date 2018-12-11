<template>
  <div class="superBrands">
    <div class="brandBox">
      <h3 class="brandTit">超级品牌</h3>
      <div class="brandImgs">
        <img src="../../../static/images/index-fish1-1.jpg"/>
        <img src="../../../static/images/index-fish1-2.jpg"/>
      </div>
    </div>
    <div class="brandBox">
      <h3 class="brandTit">超级品类</h3>
      <div class="brandImgs">
        <img src="../../../static/images/index-fish2-1.jpg"/>
        <img src="../../../static/images/index-fish2-2.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexSuperBrands"
    }
</script>

<style scoped>
  /*.superBrands*/
  .superBrands{
    width:96%;
    margin:0 auto .08rem;
    background-color: white;
    display: flex;
  }
  .superBrands .brandBox{
    width:50%;
  }
  .superBrands .brandBox:nth-child(1){
    background-color:#fef7e5;
  }
  .superBrands .brandBox:nth-child(2){
    background-color:#f2f6ff;
  }
  .brandBox .brandTit{
    font-size:.16rem;
    line-height:.35rem;
    text-indent:.05rem;
  }
  .brandBox .brandImgs{
    display: flex;
    justify-content:space-around;
    padding-bottom:.08rem;
  }
  .brandImgs img:nth-child(1){
    width:.9rem;
    height:.95rem;
  }
  .brandImgs img:nth-child(2){
    width:.75rem;
    height:.95rem;
  }
</style>
