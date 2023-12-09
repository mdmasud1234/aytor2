
$(function(){
  //search show or hide start
  $('#search_show_btn').on('click', function(){
    $('#search').addClass("show");
  });
  $('#search_hide_btn').on('click', function(){
    $('#search').removeClass("show");
  });
  //search show or hide End
  //cart show or hide start
  $('.bag_show_btn').on("click", function(){
    $('#shopping').addClass('show');
  });
  $('.bag_hide_btn').on("click", function(){
    $('#shopping').removeClass('show');
  });
  //cart show or hide End
   //popup js section start 
   $('.popup_hide_btn').on("click", function(){
    $('#popup_section').fadeOut();
  });
    //popup js section End 
})

