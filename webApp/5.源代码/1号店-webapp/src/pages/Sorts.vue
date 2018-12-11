<template>
  <div>
    <!--<sorts-header></sorts-header>-->
    <sorts-header2></sorts-header2>
    <div class="min-wrap">
      <div class="category_wrap">
        <sorts-cat-left></sorts-cat-left>
        <div class="cat-right">
          <sorts-recommend-list :list1="products.sortsdata"></sorts-recommend-list>
          <sorts-pool-wrap :list2="products.productIndexdata"></sorts-pool-wrap>
        </div>
      </div>
    </div>
    <sorts-footer></sorts-footer>
  </div>

</template>

<script>
    import  "../assets/css/iconfont.css"
    import "../assets/css/public.css"
    import CartApis from "../apis/CartApis";
    // import SortsHeader from "../components/sorts/SortsHeader";
    import SortsCatLeft from "../components/sorts/SortsCatLeft";
    import SortsRecommendList from "../components/sorts/SortsRecommendList";
    import SortsPoolWrap from "../components/sorts/SortsPoolWrap";
    import SortsFooter from "../components/sorts/SortsFooter";
    import SortsHeader2 from "../components/sorts/SortsHeader2";
    export default {
        name: "Sorts",
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
      components: {SortsHeader2, SortsFooter, SortsPoolWrap, SortsRecommendList, SortsCatLeft}
    }
</script>

<style scoped>
  .min-wrap{
    margin: .5rem  0  .5rem 0;

  }
  .category_wrap{
    height:100%;

  }
  .cat-right{
    margin-left: .81rem;
    height: 100%;
    /*overflow: auto;*/
    /*padding-bottom: .5rem;*/
  }
</style>
