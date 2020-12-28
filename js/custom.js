jQuery(document).ready(function(e){

    /**
     * Scroll Nav Sticky
     */
    
    $(window).resize(function () { 
       //console.log($(window).width());
        
    });
    if($(window).width() <= 992) {
        $('nav').addClass('navbar-scrolled');
    }

    $(window).scroll(function(){
        var navbar_height = $('nav').height();
        //console.log(navbar_height);
        //if ($(this).scrollTop() > 50) {
        if ($(this).scrollTop() > navbar_height) {
           $('nav').addClass('navbar-scrolled');
        } else if ($(window).width() > 992) {
           $('nav').removeClass('navbar-scrolled');
        }
    });
    

})

