<template>
    <div class="big">
        <hall-goods-about></hall-goods-about>
    </div>
</template>

<script>
    import HallGoodsAbout from "./HallGoodsAbout";
    export default {
        name: "HallGoodGoods",
      components: {HallGoodsAbout}
    }
</script>

<style scoped>
  .big{
    background: #fff;
    padding:0 12px;
  }
</style>
