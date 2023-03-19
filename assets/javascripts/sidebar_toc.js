$(function() {
  // tockサイドバーを画面上部でスクロール停止
  var $toc = $('.toc_contents'),
      $window = $(window),
      tocTop = $toc.offset().top;
  $window.on('scroll', function() {
    if ($window.scrollTop() >= tocTop) {
      $toc.css({
        position: 'fixed',
        top: '0',
        height: $toc.outerHeight() + 'px'
      });
    } else {
      $toc.css({
        position: 'static',
        height: 'auto'
      });
    }
  });
  // サイドバーのtocに子要素がある場合＋を付加する
  // $('.sidebar_toc_item').each(function(){
  //   if($(this).children('ul').length > 0){
  //     $(this).addClass('has-child');
  //     $(this).children('ul').hide();
  //     $(this).children('span').remove();
  //     $(this).prepend('<span>+</span>');
  //   }
  // });
  // +ボタン押下でサイドバーのtocに子要素があれば展開する
  $('.has-child > span').on('click',function(e){
    $(this).toggleClass('open');
    $(this).parent().toggleClass('open');
    if ($(this).hasClass('ui-icon-circle-plus')) {
      $(this).removeClass('ui-icon-circle-plus');
      $(this).addClass('ui-icon-circle-minus');
    } else {
      $(this).removeClass('ui-icon-circle-minus');
      $(this).addClass('ui-icon-circle-plus');
    }
    $(this).siblings('ul').slideToggle('fast');
    e.stopPropagation();
  });
});
