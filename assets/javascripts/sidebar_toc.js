// $(window).scroll(function() {
//   var sidebarTop = $('.toc_contents').offset().top; // sidebarの画面上部からの距離
//   var scrollTop = $(window).scrollTop(); // 現在のスクロール位置
//   if (scrollTop > sidebarTop) {
//     $('.toc_contents').css('position', 'fixed').css('top', '0'); // sidebarを画面上部に固定する
//   } else {
//     $('.toc_contents').css('position', 'static'); // sidebarを通常の位置に戻す
//   }
// });

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
  // tockサイドバーを展開する
  $('.sidebar_toc_item').click(function(e) {
    $(this).children('ul').slideToggle('fast');
    e.stopPropagation();
  });
});

// $(function() {
//     var nav = $('.toc_contents');
//     //navの位置    
//     var navTop = nav.offset().top;
//     //スクロールするたびに実行
//     $(window).scroll(function () {
//         var winTop = $(this).scrollTop();
//         //スクロール位置がnavの位置より下だったらクラスfixedを追加
//         if (winTop >= navTop) {
//             nav.addClass('fixed')
//         } else if (winTop <= navTop) {
//             nav.removeClass('fixed')
//         }
//     });
// });

// $(document).ready(function() {
//   $(window).on('scroll', function() {
//     $(".toc_contents").each(function() {
//       var distanceFromTop = $(this).offset().top;
//       if (distanceFromTop <= 0) {
//         $(this).css({
//           position: 'fixed',
//           top: '0'
//         });
//       } else {
//         $(this).css({
//           position: 'static',
//           top: 'auto'
//         });
//       }
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   // const element = document.querySelector('.toc_contents');
//   // element.addEventListener('scroll', (e) => {
//   //   e.preventDefault();
//   //   element.scrollTo({ top: 0, behavior: 'smooth' });
//   // });
//   $(window).scroll(function() {
//     var sidebarTop = $('.toc_contents').offset().top; // sidebarの画面上部からの距離
//     var scrollTop = $(window).scrollTop(); // 現在のスクロール位置
//     if (scrollTop > sidebarTop) {
//       $('.toc_contents').css('position', 'fixed').css('top', '0'); // sidebarを画面上部に固定する
//     } else {
//       $('.toc_contents').css('position', 'static'); // sidebarを通常の位置に戻す
//     }
//   });
//   // const element = document.querySelector('.toc_contents');
//   // element.addEventListener('scroll', (e) => {
//   //   e.preventDefault();
//   //   element.scrollTop = 0;
//   // });
//   // $(window).on('scroll', function() {
//   //   $(".toc_contents").each(function() {
//   //     var distanceFromTop = $(this).offset().top;
//   //     if (distanceFromTop <= 0) {
//   //       $(this).css({
//   //         position: 'fixed',
//   //         top: '0'
//   //       });
//   //     } else {
//   //       $(this).css({
//   //         position: 'static',
//   //         top: 'auto'
//   //       });
//   //     }
//   //   });
//   // });
// })

