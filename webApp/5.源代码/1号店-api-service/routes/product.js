var express = require('express');
var router = express.Router();
var productlist = require("../data/productlist")


router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS")
    res.jsonp(productlist)
});

module.exports = router;
