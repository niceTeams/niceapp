<template>
    <main>
      <div class="big">
        <hall-goods></hall-goods>
      </div>
    </main>
</template>

<script>
    import HallGoods from "./HallGoods";
    import HallHeader from "./HallHeader";
    export default {
        name: "HallList",
      components: {HallHeader, HallGoods}
    }
</script>

<style scoped>
.big{
  padding:0 12px
}
</style>
