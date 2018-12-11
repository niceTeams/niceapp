<template>
  <header>
    <div class="bannerTop"><img src="../../assets/images/yi-header.png"></div>
    <section class="nav">
      <ul>
        <router-link tag="li" to="/hall/hallHot" exact>热点</router-link>
        <router-link tag="li" to="/hall/hallVideo">视频</router-link>
        <router-link tag="li" to="/hall/hallGoods">好物</router-link>
        <router-link tag="li" to="/hall/hallList">清单</router-link>
      </ul>
    </section>
  </header>

</template>

<script>
  import $ from "jquery"
  export default {
    name: "HallHeader",
    data() {
      return {
        name:'热点',
        current:0,
        navList: [
          {select: '热点', "to": '/hall/hallHot', active: true},
          {select: '视频', "to": '/hall/hallVideo', active: false},
          {select: '好物', "to": '/hall/hallGoods', active: false},
          {select: '清单', "to": '/hall/hallList', active: false}
        ]
      }
    },
    methods:{
      addClass:function(index){
        this.current=index;
      }
    }
    // mounted(){
    //     window.addEventListener("scroll", function(){
    //       let scrollTop = $(window).scrollTop;
    //       if(scrollTop>=52){
    //         $(".nav").css({
    //           position:"fixed",
    //           backgroundColor:"#fff",
    //           top:0,
    //           left:0
    //         })
    //       }else{
    //         $(".nav").css({
    //           position:"relative",
    //         })
    //       }
    //     });
    // }
  }
</script>

<style scoped>
  header{
    width:100%;
  }
  .bannerTop{
    height: 59px;
    width:100%;
  }
  .bannerTop img{
    width: 100%;
  }
  .nav{
    width:100%;
    padding:8px 63px 10px;
    background: #fff;
    z-index:1000;
  }
  .nav ul{
    display: flex;
  }
  .nav ul li{
    flex: 1;
    font-size: 15px;
    text-align: center;

  }
  .router-link-exact-active{
    border-radius: 12px 0 12px 0px;
    background: #fe3367;
    color: #fff;
  }
  .router-link-active {
    border-radius: 12px 0 12px 0px;
    background: #fe3367;
    color: #fff;
  }
</style>
