<template>
  <main class="main">
    <carts-main-product-list @add="addlast" @minus="minuslast" :lists="lists1"></carts-main-product-list>
    <CartsMainMayi></CartsMainMayi>
    <CartsMainGoods :goods="lists2"></CartsMainGoods>

  </main>
</template>

<script>
    import CartsMainProductList from "./CartsMainProductList";
    import CartsMainMayi from "./CartsMainMayi";
    import CartsMainGoods from "./CartsMainGoods";
    export default {
      name: "CartsMain",
      props:["lists1","lists2"],
      methods:{
        addlast(i){
          this.$emit("adds",i)
        },
        minuslast(i){
          this.$emit("minuss",i)
        }
      },
      components: { CartsMainGoods, CartsMainMayi, CartsMainProductList}
    }
</script>

<style scoped>
  main{flex:1; background:#f5f5f5; overflow:auto;
  padding-top: 50px}
</style>
