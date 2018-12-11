<template>
  <div class="pool_wrap" >
    <a href="" v-for="m in list2">
      <div  class="product">
        <div class="pic">
          <img :src="m.pic">
        </div>
        <div class="info">
          <div class="inner-info">
            <div class="name">{{m.title}}</div>
            <div class="atc_tag">
              <div class="sku_tag">满减</div>
            </div>
            <div class="message">
              <div class="price">¥ {{m.price1}}</div>
              <div class="comment"></div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
    export default {
        name: "SortsPoolWrap",
        props:["list2"]
    }
</script>

<style scoped>
  .product{
    display: flex;
    background: #fff;
    padding: .16rem 0;
    height: 1.2rem;
    border-bottom: 1px solid #f4f4f4;
  }
  .product .pic{
    width:.6rem;
    height:.6rem;
    margin-left:.1rem;
  }
  .pic img{
    width:.8rem;
    height:.8rem;
    border: 1px solid #eee;
  }
  .product .info{
    box-sizing: border-box;
    height: .9rem;
    padding-right:.13rem;
    padding-left:.13rem;
  }
  .inner-info{
    margin-left: 18px;
  }
  .inner-info .name{
    color: #333;
    font-size:.12rem;
    max-height: .34rem;
    line-height: .18rem;
    overflow: hidden;
  }
  .inner-info .atc_tag{
    margin-top: .05rem;
    height:.15rem;
  }
  .atc_tag .sku_tag{
    background-color: #fff;
    float: left;
    margin-top: 5px;
    margin-right: .05rem;
    color: #eb1105;
    border: 1px solid #eb1105;
    border-radius: 2px;
    padding: 0px 3px;
    font-size: .11rem;
    text-align: center;
  }
  .inner-info .message{
    height: .24rem;
   display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .12rem;
  }
  .message .price{
    float: left;
    color: #ff2b15;
    font-size: .16rem;
  }
  .message .comment{
    float: right;
    width: .3rem;
    height: .3rem;
    background: url("../../assets/images/list-car.png") no-repeat;
    background-size: .28rem;
  }
</style>
