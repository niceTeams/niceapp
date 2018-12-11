<template>
    <div class="container">
      <hall-goods  :key="i" :item2="s" :idx2="i" v-for="(s,i) in list1.goods"></hall-goods>
      <hall-goods-about :key="idx" :item1="g" :idx1="idx" v-for="(g,idx) in list1.goodsAbout"></hall-goods-about>
      <hall-video :key="index" :item="v" :idx="index" v-for="(v,index) in list1.video"></hall-video>
    </div>
</template>

<script>
    import HallGoods from "./HallGoods";
    import HallGoodsAbout from "./HallGoodsAbout";
    import HallVideo from "./HallVideo";
    export default {
        name: "HallGoodsContainer",
        props:["list1"],

        components: {HallVideo, HallGoodsAbout, HallGoods}
    }
</script>

<style scoped>
  .container{
    overflow: hidden;
    width: 100%;
    background: #fff;
    padding:0 12px;
  }
</style>
