<template>
  <section id="buy">
    <div>
      <p>
        <input type="checkbox" @click="checks" v-model="allCheck" >
        <label >全选</label>
      </p>
      <p>
        <span>合计</span>
        <label>￥<i style="font-style: normal">{{tm}}</i></label>
      </p>

    </div>
    <a href="#">结算(<i style="font-style: normal">{{tn}}</i>)</a>

  </section>
</template>

<script>
    export default {
        name: "CartsBuy",
        props:["tm","tn"],
        data(){
          return{
            allCheck: false
          }
        },
        methods:{
          checks(i){
            this.$emit("check",i)
          }
        }

    }
</script>

<style scoped>
  #buy{
    height: .5rem;
    display: flex;
    position: fixed;
    bottom: 53px;
    width: 100%;
    left: 0;
    padding-left: 15px;
    background: #fff;
    align-items: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #ccc;
  }
  #buy>div{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  #buy>div p{
    height: 100%;
    line-height:.5rem;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  #buy>div p:nth-child(1) input{
    width: .16rem;
    height: .16rem;
    margin-right: 10px;
    display: inline-block;
    border: 1px solid #888;
    background: #ff0;
    border-radius: 50%;
  }
  #buy>div p:nth-child(2){
    margin-right: 15px;

  }
  #buy>div p:nth-child(2) label{
    color: #fe386b;
    font-weight: bold;
    font-size: 18px;
  }

  #buy>a{
    display: inline-block;
    padding:0 22px;
    background: #a6a6a6;
    line-height: .5rem;
    font-size:16px;
    color: #fff;
    text-align: center;
    height: 100%;
  }
</style>
