$(document).ready(function(){
  //三大指針詳細全文read-more功能
  $(".article").hide();
  $(".cd-top").hide();
  $(".read-more").click(function(){
    var id = $(this).attr('id');
    
    if($(this).hasClass('active')){
      $('.'+id).slideToggle("400");
      $(this).removeClass("active");
      $(".cd-top").hide();
      return;
    }
    
    $(".read-more").removeClass("active");
    $(".article").hide();
    
    
    $("."+id).slideDown("400");
    $(".cd-top").show();
    $('#'+id).addClass("active");

    $('html,body').animate({
      scrollTop: $(".pointer-detail").offset().top
    }, "show");
    return false;
  });

  //三大指針-手機版-展開全文
  $(".all-btn").click(function(){
    var id = $(this).attr('id');

    // if($(".read-more").hasClass('active')){
    //   $('.'+id+" .content-hide").hide();
    //   $(this).removeClass("active");
    //   return;
    // }
    
    // $(".all-btn").removeClass("active");
    // $(".content-hide").hide();
    
    
    $("."+id).slideDown("400");
    $('#'+id).addClass("active");
    $("#"+id).hide();
  });


  //圖片放大鏡
  // $host = $('[mag-thumb="inner"]');
  // $host.mag();
});