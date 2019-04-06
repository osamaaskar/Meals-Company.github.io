$(function(){
    
    "use strict"
    
    //Toggle Menu Icon
    
    $('.menu').click(function(){
        $('.menu').toggleClass('active');
        $('.menu-bar').toggleClass('active');
    });
    
    
    //background as the same as window size
    
    var winh = $(window).height();
    $('.header').height(winh);
    
    //Show Scroll Button
      $(window).scroll(function(){
        var n = $(this).scrollTop();
        if(n > 250){
          $('.sroll-button i').fadeIn();
        } else{
          $('.sroll-button i').fadeOut();
        }
      });
    //Scroll To Top By Button
      $('.sroll-button i').click(function(){
        $('body,html').animate({
          scrollTop :0
        },1000);
      });  
    
     //Scroll To Section
    
        $('.menu-bar li a').click(function(e){

               e.preventDefault();

            $('body,html').animate({
              scrollTop: $('#' + $(this).data('scroll')).offset().top
            },1000);
            $(this).parent().addClass('b-active').siblings().removeClass('b-active');
        });
    
  
});

//Spinner Loading When Window Is Loading

$(window).on('load',function(){
    $('.sk-folding-cube').fadeOut(2000,function(){
        $('.loading').fadeIn(2000);
    });
});