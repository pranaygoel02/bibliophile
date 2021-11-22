  $(document).ready(function(){
    $(window).on("scroll",function(){
      var wn = $(window).scrollTop();
      if(wn > 120){
        $(".navbar").css("background","#1836b2");
      }
      else{
        $(".navbar").css("background","transparent");
      }
    });
  });

  $(document).ready(function() {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});