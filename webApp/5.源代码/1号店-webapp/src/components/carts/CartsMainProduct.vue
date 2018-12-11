<template>
  <div>
    <li>
      <div class="title2">
        <input type="checkbox" v-model="item.isCheck">
        <h4>兰蔻(开元商城钟楼店)</h4>
      </div>
      <div class="con">
        <input type="checkbox" v-model="item.isCheck">
        <div class="rcon">
          <img :src="item.pic"/>
          <div >
            <div class="gai">
              <h3>{{item.title}}</h3>
              <span>￥{{item.price}}<i style="font-style: normal">×{{item.qal}}</i></span>
            </div>
            <p style="color: #888">规格:50ml</p>
            <p>
              <label >数量：</label>
              <span @click="minus(idx)">-</span>
              <input type="text" v-model="item.qal">
              <span @click="add(idx)">+</span>
            </p>

          </div>
        </div>
      </div>

    </li>

  </div>

</template>

<script>
    export default {
        name: "CartsMainProduct",
        props:["item","idx"],
        methods:{
          minus(i){
            this.$emit("minus",i)
          },
          add(i){
            this.$emit("add",i)
          }
        }
    }
</script>

<style scoped>
  main .goodlist ul li{
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 10px;
    overflow: hidden;
  }
  main .goodlist ul li .title2{
    height: .38rem;
    margin-left: 15px;
    display: flex;
    align-items: center;
  }
  main .goodlist  ul li .title2 input{
    width: .16rem;
    height: .16rem;
    border: 1px solid #888;
    background: #fff;
    border-radius: 50%;
  }
  main .goodlist  ul li  .title2  h4{
    flex: 1;
    color: black;
    margin-left: 15px;
    font-size:15px;
    font-weight: normal;
  }
  main .goodlist ul li .con{
    display: flex;
    padding: 15px 15px;
    border-top: 1px solid #ddd;
    align-items: center;
  }
  main .goodlist ul li .con>input{
    width: .17rem;
    height: .17rem;
    border: 1px solid #888;
    background: #fff;
    border-radius: 50%;
  }
  main .goodlist ul li .con>div{
    flex: 1;
    margin-left: 15px;
    display: flex;

  }
  main .goodlist ul li .con>div img{
    width: 100px;
    height: 100px;
  }
  main .goodlist ul li .con>div>div{
    flex: 1;
    margin-left: 10px;

  }
  main .goodlist ul li .con>div>div .gai{
    display: flex;
  }
  main .goodlist ul li .con>div>div .gai h3{
    flex: 1;
    font-size: 15px;
    font-weight: normal;
  }
  main .goodlist ul li .con>div>div .gai span{
    width: .5rem;
    display: flex;
    font-size: 17px;
    font-weight: bold;
    text-align: right;
    flex-direction: column;
  }
  main .goodlist ul li .con>div>div .gai span i{
    font-weight: normal;
    font-size: 16px;
    color: #888;
  }
  main .goodlist ul li div p{
    font-size: 14px;
    line-height: 30px;
    display: flex;
    align-items: center;
    height: 30px;
  }
  main .goodlist ul li div p span{
    display: inline-block;
    width: 30px;
    height: 20px;
    line-height: 20px;
    background: #6c6c6c;
    font-size: 20px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  main .goodlist ul li div p  input{
    width: 35px;
    height: 22px;
    margin: 0 3px;
    text-align: center;
  }

</style>
