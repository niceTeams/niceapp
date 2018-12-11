<template>
  <section class="mayi">
    <div class="dixian1">
                <span>
                    <span>
                    <strong style="font-weight: normal"></strong>
                       你可能还想买
                    </span>
                </span>
    </div>
  </section>
</template>

<script>
    export default {
        name: "CartsMainMayi"
    }
</script>

<style scoped>
  main .mayi{
    overflow: hidden;
  }
  main  .mayi  .dixian1{
    height:.12rem;
    border-bottom:1px solid black;
    text-align:center;
    margin:0 .65rem;
    margin-bottom: .2rem;
    margin-top: .1rem;
  }
  main  .mayi  .dixian1>span{
    padding:0 .18rem;
    display:inline-block;
    background:#f5f5f5;
    font-size: 15px;
    color: #999999;
  }
  main  .mayi  .dixian1>span span{
    display: flex;
    align-items: center;
    font-size: 15px;
    color: black;
    font-weight: bold;
  }
  main  .mayi p{
    margin: 0 .2rem;
    color:#bbb;
    font-size: 14px;
  }
  main  .mayi  .dixian1 span strong{
    margin-right:4px;
    display: inline-block;
    width:.2rem ;
    height: .2rem;
    background: url("../../assets/image/xin.png") no-repeat;
    background-size: .2rem auto;
  }

</style>
