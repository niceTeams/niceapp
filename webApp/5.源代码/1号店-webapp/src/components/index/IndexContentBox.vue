<template>
  <div class="contentBox">
    <index-slider></index-slider>
    <index-money-hrefs></index-money-hrefs>
    <index-lottery></index-lottery>
    <index-gift-bag></index-gift-bag>
    <index-super-product :list2="list1"></index-super-product>
    <index-super-brands></index-super-brands>
    <index-go-box></index-go-box>
    <index-go-box2></index-go-box2>
  </div>
</template>

<script>
    import IndexSlider from "./IndexSlider";
    import IndexMoneyHrefs from "./IndexMoneyHrefs";
    import IndexLottery from "./IndexLottery";
    import IndexGiftBag from "./IndexGiftBag";
    import IndexSuperProduct from "./IndexSuperProduct";
    import IndexSuperBrands from "./IndexSuperBrands";
    import IndexGoBox from "./IndexGoBox";
    import IndexGoBox2 from "./IndexGoBox2";
    export default {
        name: "IndexContentBox",
        props:["list1"],
      components: {
        IndexGoBox2,
        IndexGoBox,
        IndexSuperBrands, IndexSuperProduct, IndexGiftBag, IndexLottery, IndexMoneyHrefs, IndexSlider}
    }
</script>

<style scoped>
  /*contentBox*/
  .contentBox{
    flex:1;
    overflow: scroll;
  }
</style>
