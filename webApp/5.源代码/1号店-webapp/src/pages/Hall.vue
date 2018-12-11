<template>
  <div class="all">
    <main class="main">
      <hall-header></hall-header>
      <router-view></router-view>

    </main>
    <hall-footer></hall-footer>

  </div>
</template>

<script>
  import HallHeader from "../components/hall/HallHeader";
  import $ from  "jquery"
  import HallFooter from "../components/hall/HallFooter";
  // import BScroll from "better-scroll"
  export default {
    name: "Hall",
    data(){
      return{
        goodsAboutData:[],
        hotData:[]
      }
    },
    methods:{
      initPageData(){
        //获取数据
        // Apis.goodsAboutData(data=>{
        //   this.goodsAboutData = data
        //   console.log(this.goodsAboutData)
        // })
        // Apis.hotData(data=>{
        //   this.hotData = data
        //   console.log(this.hotData)
        // })
      },
    },
    created(){
      //加载首页
      this.initPageData()
    },
    mounted(){
      console.log(1)
      // $(".main").attr("idx",1)
      $(".main").scroll(function () {
        let scrollTop = $(".main").scrollTop();
          console.log(scrollTop)
          if(scrollTop>=59){
            $(".nav").css({
              position:"fixed",
              backgroundColor:"#fff",
              top:0,
              left:0
            })
          }else{
            $(".nav").css({
              position:"relative",
            })
          }
      })
      // window.addEventListener("scroll", function(){
      //
      //
      // });
    },
    components: {
      HallFooter,
      HallHeader
    }
  }
</script>

<style scoped>
  main{background: #fff ;padding-bottom: 40px }
  .main{
    overflow: auto;
  }

</style>
