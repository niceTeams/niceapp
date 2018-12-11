<template>
    <div class="content">
      <index-header></index-header>
      <index-content-box :list1="products.productIndexdata"></index-content-box>
      <index-footer></index-footer>
    </div>
</template>

<script>
  import $ from "jquery"
  import "../assets/css/public.css"
  import "../assets/css/iconfont.css"
  import dataApis from "../apis/CartApis"
  import IndexHeader from "../components/index/IndexHeader";
  import IndexContentBox from "../components/index/IndexContentBox";
  import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "Index",
      components: {IndexFooter, IndexContentBox, IndexHeader},
      data(){
          return{
            products:[]
          }
      },
      methods:{
        _initPageData(){
          dataApis.getShopData(data=>{
            this.products = data
            console.log(this.products)
          })
        }
      },
      created(){
        //首页加载数据
        this._initPageData()
      },
      mounted(){
        console.log(1)
        // $(".contentBox").attr("idx",1)
        $(".contentBox").scroll(function () {
          let scrolltop=$(".contentBox").scrollTop()
          // console.log(scrolltop)
          if(scrolltop>=168){
            $("header").css({
              backgroundColor:"#fff",
            })
            $(".location").css({
              color:"red"
            })
            $(".icons").css({
              color:"red"
            })
            $(".search").css({
              background:"#f6f6f6"
            })
          }else{
            $("header").css({
              background:"rgba(255,255,255,0)"

            })
            $(".location").css({
              color:"white"
            })
            $(".icons").css({
              color:"white"
            })
            $(".search").css({
              background:"#fff"
            })
          }
        })
        // window.addEventListener("scroll", function(){
        //
        //   let scrolltop=$(".contentBox").scrollTop()
        //   console.log(scrolltop)


      }
    }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size:.2rem;
  }
</style>
