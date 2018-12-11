<template>
  <section class="goodlist">
    <div class="title1">
      <input type="checkbox"  >
      <h3>自营</h3>
    </div>
    <ul class="allcheck">
      <CartsMainProduct @add="addNum" @minus="minusNum" :key="i" :item="p" :idx="i"  v-for="(p,i) in lists"></CartsMainProduct>
    </ul>
  </section>
</template>

<script>
    import '../../../static/jquery-1.8.3.min'
    import '../../../static/allCheck'
    import CartsMainProduct from "./CartsMainProduct";
    export default {
        name: "CartsMainProductList",
        props:["lists"],
        methods:{
          minusNum(i){
            console.log(i)
            this.$emit("minus",i)
          },
          addNum(i){
            console.log(i)
            this.$emit("add",i)
          }
        },
        components: {CartsMainProduct},
        updated(){
            $(".title1  input").bindCheck($(".allcheck :checkbox"));
            // total();
        }
    }
</script>

<style scoped>
  main .goodlist{
    overflow:hidden;
  }
  main .goodlist .title1{
    height: .4rem;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  main .goodlist .title1 input{
    width: .16rem;
    height: .16rem;
    border: 1px solid #888;
    background: #fff;
    border-radius: 50%;
  }
  main .goodlist  .title1 h3{
    flex: 1;
    margin-left: 15px;
    font-size:16px;
  }

</style>
