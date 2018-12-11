<template>
  <main class="main">
      <product-list-header></product-list-header>
      <product-list-choose></product-list-choose>
      <product-list-goodlists :prlist="products.goodlistdata"></product-list-goodlists>
  </main>
</template>

<script>
    import $ from "jquery"
    import "../assets/css/base.css"
    import CartApis from "../apis/CartApis";
    import ProductListHeader from "../components/productlist/ProductListHeader";
    import ProductListChoose from "../components/productlist/ProductListChoose";
    import ProductListGoodlists from "../components/productlist/ProductListGoodlists";
    export default {
        name: "productList",
        data(){
        return{
          products: []
        }
      },
      methods:{
        _initPageData(){
          CartApis.getShopData(data=>{
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

       // $(".main").attr("idx",1)
        window.addEventListener("scroll", function(){
          let scrolltop=$(window).scrollTop()
          // console.log(scrolltop)
          if(scrolltop>=52){
            $(".choose").css({
              position:"fixed",
              backgroundColor:"#fff",
              top:0,
              left:0
            })
          }else{
            $(".choose").css({
              position:"relative",
            })
          }
        })
      },
      components: {ProductListGoodlists, ProductListChoose, ProductListHeader},

    }
</script>

<style scoped>
  main{
    display:flex;
    flex-direction:column;
    background:#fff;
    overflow:auto;
  }
</style>
