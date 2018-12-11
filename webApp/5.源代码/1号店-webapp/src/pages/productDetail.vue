<template>
  <div class="all">
      <product-detail-header></product-detail-header>
      <product-detail-main :delist="products.productdetaildata"></product-detail-main>
      <product-detail-footer></product-detail-footer>
  </div>
</template>

<script>
    import "../assets/css/base.css"
    import CartApis from "../apis/CartApis";
    import ProductDetailHeader from "../components/productdetail/ProductDetailHeader";
    import ProductDetailMain from "../components/productdetail/ProductDetailMain";
    import ProductDetailFooter from "../components/productdetail/ProductDetailFooter";
    export default {
        name: "productDetail",
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
      components: {ProductDetailFooter, ProductDetailMain, ProductDetailHeader}
    }
</script>

<style scoped>
  .all{ height:100%; display:flex;flex-direction:column;}
</style>
