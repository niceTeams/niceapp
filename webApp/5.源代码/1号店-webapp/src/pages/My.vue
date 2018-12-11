<template>
  <div class="bigBox">
    <my-header></my-header>
    <my-nav></my-nav>
    <my-banner></my-banner>
    <my-list></my-list>
    <my-banner2></my-banner2>
    <my-hrefs></my-hrefs>
    <my-footer2></my-footer2>
  </div>
</template>

<script>
  import  "../assets/css/iconfont.css"
  import "../assets/css/public.css"
    import MyHeader from "../components/my/MyHeader";
  import MyNav from "../components/my/MyNav";
  import MyBanner from "../components/my/MyBanner";
  import MyList from "../components/my/MyList";
  import MyFooter2 from "../components/my/MyFooter2";
  import MyBanner2 from "../components/my/MyBanner2";
  import MyHrefs from "../components/my/MyHrefs";
    export default {
        name: "My",
      components: {MyHrefs, MyBanner2, MyFooter2, MyList, MyBanner, MyNav, MyHeader}
    }
</script>

<style scoped>
  .bigBox{
    width: 100%;
    -webkit-flex:1;
    overflow-y:scroll;
    /*overflow-x:hidden;*/
    padding-bottom:.55rem;
  }
</style>
