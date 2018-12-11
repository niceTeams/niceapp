<template>
  <div class="recommend-list">
    <div class="cat-content">
      <div class="cat-box" v-for="n in list1">
        <div class="cat-box-img">
          <img :src="n.pic">
        </div>
        <span class="cat-name">{{n.title}}</span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "SortsRecommendList",
        props:["list1"]
    }
</script>

<style scoped>
  .recommend-list{
    overflow: scroll;
    background-color: #ffffff;
  }
  .recommend-list .cat-content{
    height:1.23rem;
    display: flex;
    box-sizing: border-box;
    /*justify-content: space-around;*/
    align-items: center;
    border-bottom: 1px solid #eee;
    /*overflow: scroll;*/
    /*flex-wrap: nowrap;*/
  }
  .cat-content .cat-box{
    /*flex-shrink: 0;*/
    width:.76rem;
    margin-left:.1rem;
  }
  .cat-box .cat-box-img{
    width:.6rem;
    height:.6rem;
    border:1px solid #e3e3e3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .cat-box-img img{
    width: .4rem;
    height:.39rem;
  }
  .cat-box .cat-name{
    display: block;
    font-size:.12rem;
    color:#979797;
    text-align: center;
  }
</style>
