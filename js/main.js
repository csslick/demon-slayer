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

  $('#gnb a[href*="synop"]').on('click', function(e){
    // e.preventDefault();
    // $('#synop').addClass('show');
    // location.href = './index.html?synop=1';
    console.log('synop');
  }) 
  
  console.log(location.href);
  var val = location.href.substr(
    location.href.lastIndexOf('=') + 1
  );
  if(val == 1) {
    $('#synop').addClass('show');
  } else {
    $('#synop').removeClass('show');
  }  

});