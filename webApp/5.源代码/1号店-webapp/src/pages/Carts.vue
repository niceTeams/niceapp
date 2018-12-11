<template>
  <div class="all">
    <index-header></index-header>
    <carts-main @adds="addQal" @minuss="minQal" :lists1="products.productdetaildata" :lists2="products.cartsgooddata"></carts-main>
    <carts-buy :tm="totalMoney"  :dan="allCheck" :tn="totalNum" @check="checkzAll"></carts-buy>
    <!--<index-footer :tn="totalNum"></index-footer>-->
    <carts-footer></carts-footer>
  </div>
</template>

<script>
    import '../../static/jquery-1.8.3.min'
    import '../assets/css/base.css'
    import '../../static/allCheck'
    import CartsMain from "../components/carts/CartsMain";
    import CartsBuy from "../components/carts/CartsBuy";
    import CartApis from "../apis/CartApis";
    import IndexHeader from "../components/index/IndexHeader";
    import IndexFooter from "../components/index/IndexFooter";
    import CartsFooter from "../components/carts/CartsFooter";
    export default {
      name: "Carts",
      data(){
        return{
          totalNum: 0,
          totalMoney: 0,
          products: [],
          flag:false,
          allCheck:false
        }
      },
      components: {CartsFooter, IndexHeader,  CartsBuy, CartsMain},
      methods:{
          _countCarts(products){
            this.totalNum=0
            this.totalMoney=0
            products.productdetaildata.forEach((item,idx)=>{
              this.totalNum+=parseInt(item.qal)
              this.totalMoney+=item.qal*item.price
            })
          },

          _initPageData(){
                CartApis.getShopData(data=>{
                this._countCarts(data)
                this.products = data
                console.log(this.products)
              })
          },
          addQal(i) {
            this.products.productdetaildata[i].qal++
          },
        minQal(i) {
          if( this.products.productdetaildata[i].qal <=1){
            this.products.productdetaildata[i].qal =1
          }else{
            this.products.productdetaildata[i].qal--
          }
        },
        checkzAll:function(){
          // this._countCarts(this.products)
          $("#buy input").bindCheck($(".allcheck :checkbox"));

        },
      },

      created(){
        //首页加载数据
        this._initPageData()

      },
      mounted(){
        this.checkzAll()
        // console.log(222)
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

      },
      watch:{

        //监听product中的数量发生变化，重新计算
        products:{
          handler:function (n,o) {
            this._countCarts(this.products)
          },
          deep:true
        },

        totalMoney(n,o){
          if(!this.flag){
            if(n >=5000){
              console.log("")
              this.flag = true
            }
          }

        }
      }
    }
</script>

<style scoped>
  .all{ height:100%; display:flex;flex-direction:column;}
</style>
