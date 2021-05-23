$(function(){

  // ヘッダーナビボタンをクリックした時の挙動
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });

  // ヘッダーナビからリンクを選んだ時の挙動
  $('.nav-item a').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
    $('#nav-btn').toggleClass('-active');
  });

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var headerHight=100;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});