define(['vue','utils/server'],function (Vue) {
    new Vue({
        el: '#app',
        data: {
            message: '<h1>菜鸟教程</h1>'
        },
        created:function(){
            $.server.res('api/user').then(function (data) {

                console.log(data);
            },function (data) {

            })
        }
    })
});