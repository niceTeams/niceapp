<template>
  <section class="goodlists">
    <ul>
      <product-list-goodlists-detail :key="i2" :item2="p2" :idx2="i2" v-for="(p2,i2) in prlist" ></product-list-goodlists-detail>
    </ul>

  </section>
</template>

<script>
    import ProductListGoodlistsDetail from "./ProductListGoodlistsDetail";
    export default {
        name: "ProductListGoodlists",
        props:["prlist"],
        components: {ProductListGoodlistsDetail}
    }
</script>

<style scoped>
  main .goodlists{
    overflow: hidden;
  }
  main .goodlists ul{
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

</style>
