/**
 * Created by CM on 2017/7/28.
 */
$(function() {
    // 缓存节点
    var oA = $('.leader').find('a');
    var oSpan = oA.find('span');
    var oGoodsList = $('.goods-list');

    oA.on('click', function() {
        var oIndex = oA.attr('index');
        if(oIndex === '1') {
            oGoodsList.css('display', 'none');
        } else {
            oGoodsList.css('display', 'block');
            oA.attr('index', 1);
        }
    })

})
