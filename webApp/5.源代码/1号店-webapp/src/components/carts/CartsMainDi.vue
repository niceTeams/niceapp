<template>
  <section class="di">
    <p>喵～已经逛到底咯</p>
    <span></span>
  </section>
</template>

<script>
    export default {
        name: "CartsMainDi"
    }
</script>

<style scoped>
  main .di{
    height: .58rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main .di p{
    text-align: center;
    font-size: 15px;
    color: #aaa;
  }
  main .di span{
    display: block;
    margin-top: 6px;
    width: .54rem;
    height: .54rem;
    background: url("../../assets/image/di1.png") no-repeat;
    background-size: .54rem auto;
  }
</style>
