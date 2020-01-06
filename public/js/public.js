$(document).ready(function () {
    var sectionTop=$('header img').height();//设置section内容顶部间距
    $('header').height(sectionTop);

    var userSetHeight=sectionTop/2;//设置顶部右侧菜单行高，垂直居中显示
    $('.user-set').css({'height':userSetHeight,'line-height':userSetHeight+'px'});
    $('.system-menu').css({'height':userSetHeight,'line-height':userSetHeight+'px'});
    $('#cssmenu > ul > li').css({'height':userSetHeight,'line-height':userSetHeight+'px'});
    $('#cssmenu > ul > li > a').css({'height':userSetHeight,'line-height':userSetHeight+'px'});
    $('#cssmenu > ul > > ul > li > a').css({'height':userSetHeight/1.5,'line-height':userSetHeight/1.5+'px'});
    $('section').css({'height':$(window).height()-sectionTop});
    //构建容器高度，比例1%-100%
    var wrapperHd=$('section').height();
    for(var i=1;i<101;i++) {
        var n='.height'+i;
        var w='.col-'+i;
        var t='.top'+i;
        var l='.left'+i;
        $(n).css({'height':wrapperHd*i*0.01});
        $(w).css({'width':i+'%'});
        $(t).css({'top':wrapperHd*i*0.01});
        $(l).css({'left':i+'%'});
    }

    var tabsHeight=$('.column-header').height();
    $('.column-header ,.tab-title,.column-header-subtitle,.table-title').css({'line-height':tabsHeight+'px'});
    $('.tab-title .item,.column-header-line a').css({'height':tabsHeight-3,'line-height':tabsHeight-3+'px'});

    $('.offline-box i,.kaohe-box i,.o2o-box i').css({'width':$('.offline-box i,.kaohe-box i,.o2o-box i').height()});
    $('.strategy-box li').css({'line-height':$('.strategy-box li').height()+'px'});
    $('.pop-title').css({'height':wrapperHd*0.05,'line-height':wrapperHd*0.05+'px'});
    $('.pop-close').css({'width':wrapperHd*0.05,'height':wrapperHd*0.05});
    $('.pop-close,.pop-bg').click(function(){
        $('.pop-mask').fadeOut();
    });
    $('.select-date a').css({'height':wrapperHd*0.04-6+'px','width':wrapperHd*0.04-6+'px','line-height':wrapperHd*0.04-6+'px'})
    $('.order-pop-close').width($('.order-pop-close').height());
    $('.jihe-open-list,.jihe-open-list span').css({'height':$('.jihe-open-list').width()});

    $.fn.myHoverTip = function(divId) {
        var div = $("." + divId); //要浮动在这个元素旁边的层
        div.css("position", "absolute");//让这个层可以绝对定位
        var self = $(this); //当前对象
        self.hover(function() {
                div.css("visibility", "visible");
                var p = self.position(); //获取这个元素的left和top

                var x = p.left + 20;//获取这个浮动层的left
                var docWidth = $(document).width();//获取网页的宽
                if (x > docWidth - div.width() - 20) {
                    x = p.left - div.width();
                }
                div.css({"left": x});
                div.show();
            },
            function() {
                div.css("visibility", "hidden");
            }
        );
        return this;
    };
    for(var tips_i=1;tips_i<100;tips_i++) {//调用
        var tips_title='.viewReInfo'+tips_i;
        var tips_content='receiptInfo'+tips_i;
        $(tips_title).myHoverTip(tips_content);
    }

});