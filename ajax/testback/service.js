/**
 * Created by georgeRen on 2018/4/9.
 */
var express = require('express');
var app = express();
app.get('/hello/*', function(req, res){
    console.log(req.query.name);
    console.log(req.query.email);
    res.send('Get Over');
});

//http://localhost:8080/Bibased/adminLogin
app.get('/Bibased/adminLogin', function(req, res){
    console.log(req.query.admnum);
    console.log(req.query.admpwd);
    //解决跨域问题
    res.header("Access-Control-Allow-Origin", "*");

    if(req.query.admnum=="xiake" && req.query.admpwd==123){
        res.send('1001');//请求成功：数据正常
    }else {
        res.send('1002');//请求成功：数据异常
    }

});
app.listen(8080);
console.log('Listening on port 8080');