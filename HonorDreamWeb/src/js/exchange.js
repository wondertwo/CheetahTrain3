/**
 * Created by CM on 2017/7/27.
 */
$(function() {
    var exchange = {
        selected: function(obj) {
            var hasClassName = obj.hasClass('active');
            if(!hasClassName) {
                obj.addClass('active');
            } else {
                obj.removeClass('active');
            }
        }
    }

    var oUl = $('.list');
    var oSure = $('.sure');
    var oA = oSure.find('a');
    var count = 0;
    var oLi = oUl.find('li');

    oUl.on('click', 'span' , function() {
        var _this = $(this);
        exchange.selected(_this);
        var hasClassNum = _this.hasClass('num');
        if(!hasClassNum) {
            _this.addClass('num');
            count++;
        } else {
            _this.removeClass('num');
            --count;
        }
        var sureWord = '确认(' + count + ')';
        oA.html(sureWord);
    });

    var oSpan = $('#bottom').find('.checkbox');

    oSpan.on('click', function() {
        var _this = $(this);
        for(var i=0, len=oLi.length ; i<len ; i++) {
            oLi.eq(i).find('span').addClass('active');
        }
        if(_this.hasClass('active')) {
            for(var j=0, lens=oLi.length ; j<lens ; j++) {
                (function() {
                    // alert(oLi.eq(j).find('span'))
                    oLi.eq(j).find('span').removeClass('active');
                    oLi.eq(j).find('span').removeClass('num');
                })(j);
            }
        }
        exchange.selected(_this);
        var sureWord = '确认';
        oA.html(sureWord);
        count = 0;
    })
})


