const proxy =require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/Homework01',{
            target:'http://192.168.0.28:8080/Homework01',
            changeOrigin: true
        })
    )
}