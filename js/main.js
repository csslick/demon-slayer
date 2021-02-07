// main.js

$(function(){

  // gnb 열기
  $('.btn-toggle').on('click', function(){
    $('#gnb').addClass('show');
    console.log('click');
  });

  // gnb 닫기
  $('.btn-close').on('click', function(){
    $('#gnb').removeClass('show');
  });

  
  // 시놉시스 팝업 & 메뉴 active
  var val = location.href.substr(location.href.lastIndexOf('=') + 1);
  console.log(val);
  if(val == 1) {
    $('#synop').addClass('show');
    $('#gnb ul li').removeClass('active');
    $('#gnb ul li a:contains(시놉시스)').parent().addClass('active');

  } else {
    $('#synop').removeClass('show');
  }  

});