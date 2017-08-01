/**
 * Created by CM on 2017/7/26.
 */
$(function() {
    // 缓存节点
    var oA = $('#menu').find('a');
    var oMask = $('#mask');
    var oShare = $('#share');
    var oBtn = oShare.find('button');


    oA.on('click', function() {
        oMask.css('display', 'block');
        oShare.css('display', 'block');
    })

    oBtn.on('click', function() {
        oMask.css('display', 'none');
        oShare.css('display', 'none');
    })
})
