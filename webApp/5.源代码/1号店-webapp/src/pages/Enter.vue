<template>
    <div class="content">
      <enter-header></enter-header>
      <enter-content-box></enter-content-box>
      <enter-bottom></enter-bottom>
    </div>
</template>

<script>
    import EnterHeader from "../components/enter/EnterHeader";
    import EnterContentBox from "../components/enter/EnterContentBox";
    import EnterBottom from "../components/enter/EnterBottom";
    export default {
        name: "Enter",
      components: {EnterBottom, EnterContentBox, EnterHeader}
    }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size:.2rem;
  }
</style>
