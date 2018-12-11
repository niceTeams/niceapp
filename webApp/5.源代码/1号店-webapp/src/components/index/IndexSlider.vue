<template>
  <div class="swiper-container" id="slider_vue">
    <div class="swiper-wrapper">
      <div href="#" class="swiper-slide" v-for="s in sliderImgs">
        <img :src="s.sliderImg"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "../../../static/js/swiper.js"
    export default {
        name: "IndexSlider",
        data(){
            return{
              sliderImgs:[
                {sliderImg:'../../../static/images/index-swiper1.jpg'},
                {sliderImg:'../../../static/images/index-swiper2.jpg'},
                {sliderImg:'../../../static/images/index-swiper3.jpg'},
                {sliderImg:'../../../static/images/index-swiper4.jpg'}
              ]
            }
        },
      mounted(){
        new Swiper(".swiper-container",{
          loop: true,
          autoplay: {
            delay: 1200,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        })
      }
    }
</script>

<style scoped>
  @import "../../assets/css/swiper.css";
  /* slider */
  .swiper-container {
    width: 3.75rem;
    height: 1.69rem;
    background-color:skyblue;
  }
  .swiper-slide img{
    width:3.75rem;
    height:1.69rem;
  }
</style>
