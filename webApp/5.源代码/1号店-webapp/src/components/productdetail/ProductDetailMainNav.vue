<template>
  <nav>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/images/1.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/2.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/images/3.jpg"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
  </nav>
</template>

<script>
    import Swiper from ' ../../../static/swiper.js'
    export default {
        name: "ProductDetailMainNav",
        mounted(){
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            pagination: '.swiper-pagination'
          })
        }
    }
</script>

<style scoped>
  @import'../../assets/css/swiper.css';
  main nav{
    height:2.6rem;
    background: #fff;
  }
  main nav .swiper-container{
    width: 100%;
    height: 100%;
  }
  main nav img{
    width: 100%;
    height: 100%;
  }
</style>
