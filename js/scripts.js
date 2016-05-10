

$(document).ready(function(){
  $(window).scroll(function(){
    var prueba = $(this).scrollTop();
    
    if (prueba > 100) {
      $(".menubar").addClass("navegacion");
      $(".mostrar-modal").addClass("navegacion");
    }
      else if (prueba < 100) {
      $(".menubar").removeClass("navegacion");
      $(".mostrar-modal").removeClass("navegacion");
    }
  });

  $('.mostrar-modal').click(function(){
    $('.mostrar-modal').hide();
    $('.cerrar-modal').show(500);
  });
  
  $('.cerrar-modal').click(function(){
    $('.mostrar-modal').show(600);
    $('.cerrar-modal').hide(400);
  });
  

});

jQuery(function() {
        
   setTimeout(function() {
        jQuery('#d1').fadeIn(300, function() {
            jQuery('#d2').fadeIn(2000);  
            jQuery('#d3').fadeIn(6000);                
        });            
    }, 300);
    
        
});