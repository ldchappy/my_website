/**
 * Created by ldc on 2017/9/5.
 */
$(function(){
    //$('.web').on('mouseenter','mouseleave','div',function(){
    //    var that = this.dataset;
    //    console.log(this.dataset);
    //
    //    $(this).toggleClass("sb")
    //});
    var lis = $('.section3_ul').children('li');

    $.each(lis,function(i,v){

        v.style.backgroundImage = 'url(images/website/website'+(i)+'.png)';
        v.style.left = i * 70+'px';


        lis[i].onmouseenter = function(){
            for (var i = 0; i < lis.length; i++) {
                if(i<=$(this).index()){
                    animate(lis[i],{'left':70 *i});
                }else{
                    animate(lis[i],{'left':70*i + 620});
                }
            }
        }

        lis[i].onmouseout = function(){
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i],{'left':70 * i});
            }
        }
    })

    function animate(tag, obj) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var flag = true;
            for (var k in obj) {
                var leader = parseInt(getStyle(tag, k)) || 0;
                var target = obj[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader + "px";

                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(tag.timer);
            }
        }, 20);
    }

    function getStyle(tag, attr) {
        return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
    }
})
