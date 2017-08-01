/**
 * Created by CM on 2017/7/27.
 */
$(function() {
    var Panel = {
        rankList: function(data) {
            var container = $('.near-panel .list');
            var html = '';
            for(var i=0, len = data.length; i<len ; i++) {
                var curItem = data[i];
                html += '' +
                    '<li>' +
                    '   <a href="./details.html">' +
                    '       <div id="user-info">' +
                    '           <img src="' + curItem.via + '" alt="用户头像">' +
                    '           <div>' +
                    '               <span>' + curItem.username + '</span>' +
                    '               <span class="distance">距离：' + curItem.dis + '米</span>|<span class="duration">' + curItem.time + '分钟前来过</span>' +
                    '           </div>' +
                    '       </div>' +
                    '       <div id="goods-show">' +
                    '           <img src="' + curItem.img + '" alt="外星人电脑">' +
                    '           <img src="' + curItem.img + '" alt="外星人电脑">' +
                    '           <img src="' + curItem.img + '" alt="外星人电脑">' +
                    '       </div>' +
                    '       <div id="goods-describe">' + curItem.describe + '</div>' +
                    '   </a>' +
                    '</li>'
            }
            container.html(html);
        }
    };


    function initPanel() {
        //var api = 'http://127.0.0.1:8080/data/info.json';
        var api = '/data/result.json';

        var data = {};
        $.ajax({
            type: 'GET',
            url: api,
            data: data,
            dataType: 'json',
            success: function (res) {
                console.log(res.users);
                Panel.rankList(res.users);
            },
            error: function (err) {
                console.error(err);
            }
        });
    }

    initPanel();
});