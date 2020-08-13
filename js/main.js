'use strict'
{
    // Topメッセージ
    setTimeout(function() {
        $("#top-message").removeClass("none");
    }, 1500);

    // トップのアニメーション
    $(function(){
      $(".top-img img:not(:first-child)").hide();
      setInterval(function() {
        $(".top-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".top-img");
      },4000);
    });



// 上下フワッとアニメーション
    function showElementAnimation() {
        var element = document.getElementsByClassName('js-animation');
        if(!element) return; 
        
        var showTiming = window.innerHeight > 768 ? 200 : 60;
        var scrollY = window.pageYOffset;
        var windowH = window.innerHeight;
      
        for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
          } else if(scrollY + windowH < elemY) {
            
            element[i].classList.remove('is-show');
          }
        }
      }
      showElementAnimation();
      window.addEventListener('scroll', showElementAnimation);


//   くるくるアニメーション
    var scrollAnimationElm = document.querySelectorAll('.sa');
    var scrollAnimationFunc = function() {
    for(var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 300;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('show');
        }
    }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);

    // ハンバーガーメニュー
    $(function(){
      $(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
        } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
        }
        $("#global-navi").stop().animate({
          right: rightVal
        }, 200);
      });
    });

    // 上に戻るボタン
    $(document).ready(function() {
        var pagetop = $('.pagetop');
          $(window).scroll(function () {
             if ($(this).scrollTop() > 100) {
                  pagetop.fadeIn();
             } else {
                  pagetop.fadeOut();
                  }
             });
             pagetop.click(function () {
                 $('body, html').animate({ scrollTop: 0 }, 500);
                    return false;
         });
      });
      
}