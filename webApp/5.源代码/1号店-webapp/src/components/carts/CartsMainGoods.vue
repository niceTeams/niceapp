<template>
  <section class="goods">
    <div>
      <CartsMainGoodsDetail :key="i1" :item1="p1" :idx1="i1" v-for="(p1,i1) in goods"></CartsMainGoodsDetail>
    </div>
  </section>
</template>

<script>


    import CartsMainGoodsDetail from "./CartsMainGoodsDetail";
    export default {
      name: "CartsMainGoods",
      props:["goods"],
      components: {CartsMainGoodsDetail},
    }
</script>

<style scoped>
  main .goods{
    overflow: hidden;
    background: #fff;
    padding-bottom: 10px;
  }
  main .goods>div{
    padding: 8px 15px;
    padding-bottom: 96px;
    display: flex;
    flex-wrap: wrap;
  }


</style>
