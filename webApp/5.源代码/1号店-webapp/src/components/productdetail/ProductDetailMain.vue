<template>
  <main>
   <product-detail-main-nav></product-detail-main-nav>
    <product-detail-main-menu></product-detail-main-menu>
    <product-detail-main-mayi></product-detail-main-mayi>
    <product-detail-main-talks></product-detail-main-talks>

    <product-detail-main-dian></product-detail-main-dian>

   <product-detail-main-goods :item="delist"></product-detail-main-goods>

    <product-detail-main-mayis></product-detail-main-mayis>

  </main>
</template>

<script>
    import ProductDetailMainNav from "./ProductDetailMainNav";
    import ProductDetailMainMenu from "./ProductDetailMainMenu";
    import ProductDetailMainMayi from "./ProductDetailMainMayi";
    import ProductDetailMainTalks from "./ProductDetailMainTalks";
    import ProductDetailMainDian from "./ProductDetailMainDian";
    import ProductDetailMainGoods from "./ProductDetailMainGoods";
    import ProductDetailMainMayis from "./ProductDetailMainMayis";
    export default {
        name: "ProductDetailMain",
        props:["delist"],
      components: {
        ProductDetailMainMayis,
        ProductDetailMainGoods,
        ProductDetailMainDian,
        ProductDetailMainTalks, ProductDetailMainMayi, ProductDetailMainMenu, ProductDetailMainNav}
    }
</script>

<style scoped>
  main{flex:1; background:#f5f5f5; overflow:auto;}
</style>
