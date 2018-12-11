
import {AJAXURL} from "../commons/schema"
export default  {
  getShopData(cb){
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
