(function(){
    new Vue({
        el:'#slider_vue',
        data:{
            sliderImgs:[
                {sliderImg:'images/index-swiper1.jpg'},
                {sliderImg:'images/index-swiper2.jpg'},
                {sliderImg:'images/index-swiper3.jpg'},
                {sliderImg:'images/index-swiper4.jpg'}
            ]
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
    })
})();
