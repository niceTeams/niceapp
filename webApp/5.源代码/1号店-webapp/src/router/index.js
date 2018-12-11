import Vue from 'vue'
import Router from 'vue-router'
import Productlist from '../pages/Productlist'
import ProductDetail from '../pages/productDetail'
import Index from '../pages/Index'
import Enter from '../pages/Enter'
import Sorts from '../pages/Sorts'
import My from '../pages/My'
import Hall from '../pages/Hall'
import HallGoodGoods from '../components/hall/HallGoodGoods'
import HallList from '../components/hall/HallList'
import HallHot from '../components/hall/HallHot'
import HallBigVideo from '../components/hall/HallBigVideo'
import Carts from '../pages/Carts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/productlist',
      name: 'Productlist',
      component: Productlist
    },
    {
      path: '/Carts',
      name:'Carts',
      component:Carts
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/enter',
      name: 'Enter',
      component: Enter
    },
    {
      path: '/sorts',
      name: 'Sorts',
      component: Sorts
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path:'/hall',
      name:'hall',
      component:Hall,
      children:[
        {
          path:'',
          component:HallHot
        },
        {
          path:'hallHot',
          name:"hallHot",
          component:HallHot
        },
        {
          path:'hallVideo',
          name:"hallVideo",
          component:HallBigVideo
        },

        {
          path:'hallList',
          name:"hallList",
          component:HallList
        },
        {
          path:'hallGoods',
          name:"hallGoods",
          component:HallGoodGoods
        },
      ],
      linkActiveClass:"active"
    },

  ]
})
