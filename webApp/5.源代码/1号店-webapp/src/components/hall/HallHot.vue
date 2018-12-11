<template>
  <div>
    <section class="slider-container">
      <div class="sliderTop">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/images/yi-bannerTop1.png"></div>
          <div class="swiper-slide"><img src="../../../static/images/yi-bannerTop2.png"></div>
          <div class="swiper-slide"><img src="../../../static/images/yi-bannerTop3.png"></div>
          <div class="swiper-slide"><img src="../../../static/images/yi-bannerTop1.png"></div>
        </div>
      </div>
    </section>
    <section class="banner"><img src="../../../static/images/yi-banner.png"></section>
    <section class="container">
        <div class="slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/images/yi-nav-slider1.png"></div>
                <div class="swiper-slide"><img src="../../../static/images/yi-nav-slider2.png"></div>
                <div class="swiper-slide"><img src="../../../static/images/yi-nav-slider3.png"></div>
                <div class="swiper-slide"><img src="../../../static/images/yi-nav-slider4.png"></div>
          </div>
        </div>
        <div class="goods">
          <h1>团聚美味饮食集，热场减馋尽兴</h1>
          <ul>
            <li>
              <img src="../../../static/images/yi-product1.png">
            </li>
            <li>
              <img src="../../../static/images/yi-product2.png">
            </li>
            <li>
              <img src="../../../static/images/yi-product3.png">
            </li>
          </ul>
          <div class="scan">
            <p>
              <a class="media">呱呱传媒&nbsp;&nbsp;</a> | <a class="media">&nbsp;&nbsp;<span>1331</span>人浏览</a>
            </p>
            <span class="num">18件宝贝</span>
          </div>
        </div>
        <div class="goods">
        <h1>刚柔并济，个性牛仔裙减龄试穿</h1>
        <ul>
          <li><img src="../../../static/images/yi-product4.png"></li>
          <li><img src="../../../static/images/yi-product5.png"></li>
          <li><img src="../../../static/images/yi-product6.png"></li>
        </ul>
        <div class="scan">
          <p>
            <a class="media">搭酱&nbsp;&nbsp;</a> |
            <a class="media">&nbsp;&nbsp;<span>1112</span>人浏览</a>
          </p>
          <span class="num">10件宝贝</span>
        </div>
      </div>
        <div class="goods-about goods">
          <div class="about-container">
            <div class="info">
              <h1 class="shen">巧用安抚奶嘴，提升萌宝颜值,提升萌宝颜值</h1>
              <p>
                <a class="media">搭酱&nbsp;</a> | <a class="media">&nbsp;<span>1092</span>人浏览</a>
              </p>
            </div>
            <div class="pic">
              <img src="../../../static/images/yi-list2.png">
            </div>
          </div>

          <div class="scan">
            <!--<span class="num">16件宝贝</span>-->
          </div>
        </div>
        <div class="goods-about goods">
          <div class="about-container">
            <div class="info">
              <h1 class="shen">巧用安抚奶嘴，提升萌宝颜值,提升萌宝颜值</h1>
              <p>
                <a class="media">搭酱&nbsp;</a> | <a class="media">&nbsp;<span>1092</span>人浏览</a>
              </p>
            </div>
            <div class="pic">
              <img src="../../../static/images/yi-list1.png">
            </div>
          </div>

        <div class="scan">
          <!--<span class="num">16件宝贝</span>-->
        </div>
      </div>
        <div class="video goods">
          <h1>抖音同款只能化妆灯台式镜子 好像很火呀</h1>
          <img src="../../../static/images/yi-video1.png">
          <div class="scan">
            <p>
              <a class="media">搭酱&nbsp;</a> | <a class="media">&nbsp;<span>1092</span>人浏览</a>
            </p>
            <span class="num">分享</span>
          </div>
        </div>
        <div class="goods-about goods">
          <div class="about-container">
            <div class="info">
              <h1 class="shen">巧用安抚奶嘴，提升萌宝颜值,提升萌宝颜值</h1>
              <p>
                <a class="media">搭酱&nbsp;</a> | <a class="media">&nbsp;<span>1092</span>人浏览</a>
              </p>
            </div>
            <div class="pic">
              <img src="../../../static/images/yi-list2.png">
            </div>
          </div>

          <div class="scan">
            <!--<span class="num">16件宝贝</span>-->
          </div>
        </div>
        <div class="goods-about goods">
          <div class="about-container">
            <div class="info">
              <h1 class="shen">巧用安抚奶嘴，提升萌宝颜值,提升萌宝颜值</h1>
              <p>
                <a class="media">搭酱&nbsp;</a> | <a class="media">&nbsp;<span>1092</span>人浏览</a>
              </p>
            </div>
            <div class="pic">
              <img src="../../../static/images/yi-list1.png">
            </div>
          </div>

          <div class="scan">
            <!--<span class="num">16件宝贝</span>-->
          </div>
        </div>
    </section>
  </div>
</template>

<script>
    import Swiper from "../../../static/swiper/dist/js/swiper"
    export default {
        name: "HallHot",
        mounted(){
          new Swiper(".slider", {
            loop: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            // autoplay: {
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }
          }),
            new Swiper(".sliderTop", {
              loop: true,
              slidesPerView: 'auto',
              centeredSlides: true,
              // autoplay: {
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }
            })
        },
    }
</script>

<style scoped>
@import "../../assets/css/hall.css";
.slider-container{
  background: #fff;
  overflow: hidden;
  padding-top: 10px;
}
.sliderTop{
    width:100%;
    height: 100%;
}
.sliderTop .swiper-slide{
  width:87%;
  height: 100%;
  margin:0 5px;
}
.sliderTop .swiper-slide img{
  width:100%;
  height: 100%;
}
.container{
  overflow: hidden;
  pading:0 12px;
}
.slider{
  width:126px;
  padding:0 12px;
}
.slider .swiper-wrapper{
  width:100%;
}
.slider .swiper-slide{
  width:100%;

}
.slider .swiper-slide img{
  width:100%;
}
</style>
