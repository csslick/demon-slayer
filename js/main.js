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

  // 시놉시스 팝업
  var val = location.href.substr(
    location.href.lastIndexOf('=') + 1
  );
  if(val == 1) {
    $('#synop').addClass('show');
  } else {
    $('#synop').removeClass('show');
  }  

});