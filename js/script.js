$(document).ready(function () {
    var hide2  = true;
    $('.testimonial-slider .slide2').hide();
    var hide3 = true;
    $('.testimonial-slider .slide3').hide();
    var hide1 = false;
    
    $('.right-button i').click(function(){
       if(hide2 && hide3){
           $('.testimonial-slider .slide1').hide();
           hide1 = true;
           $('.testimonial-slider .slide2').fadeIn('slow');
           hide2 = false;
       }else if(hide1 && hide3){
           $('.testimonial-slider .slide2').hide();
           hide2 = true;
           $('.testimonial-slider .slide3').fadeIn('slow');
           hide3 = false;
       }else if(hide2 && hide1){
           $('.testimonial-slider .slide3').hide();
           hide3 = true;
           $('.testimonial-slider .slide1').fadeIn('slow');
           hide1= false;
       }
    });
    
    $('.left-button i').click(function(){
       if(hide2 && hide3){
           $('.testimonial-slider .slide1').hide();
           hide1 = true;
           $('.testimonial-slider .slide3').fadeIn('slow');
           hide3 = false;
       }else if(hide1 && hide2){
           $('.testimonial-slider .slide3').hide();
           hide3 = true;
           $('.testimonial-slider .slide2').fadeIn('slow');
           hide2 = false;
       }else if(hide1 && hide3){
           $('.testimonial-slider .slide2').hide();
           hide2 = true;
           $('.testimonial-slider .slide1').fadeIn('slow');
           hide1= false;
       }
    });

        var plastico = false;
        var metal = false;
        var madera = true;
        $('.juguetes-madera').show();
        $('.juguetes-metal').hide();
        $('.juguetes-plastico').hide();
    
    
        $('#btn-metal').click(function(e){
            e.preventDefault();
            metal = true;
            madera = false;
            plastico = false;
            $('.juguetes-plastico').hide();
            $('.juguetes-madera').hide();
            $('.juguetes-metal').fadeIn('slow');
            $('#btn-madera').removeClass();
            $('#btn-plastico').removeClass();
            $('#btn-metal').addClass('btn-sel');
        });
    
        $('#btn-madera').click(function(e){
            e.preventDefault();
            metal = false;
            madera = true;
            plastico = false;
            $('.juguetes-madera').fadeIn('slow');
            $('.juguetes-metal').hide();
            $('.juguetes-plastico').hide();
            $('#btn-metal').removeClass();
            $('#btn-plastico').removeClass();
            $('#btn-madera').addClass('btn-sel');
        });
    
        $('#btn-plastico').click(function(e){
            e.preventDefault();
            metal = false;
            madera = false;
            plastico = true;
            $('.juguetes-plastico').fadeIn('slow');
            $('.juguetes-metal').hide();
            $('.juguetes-madera').hide();
            $('#btn-madera').removeClass();
            $('#btn-metal').removeClass();
            $('#btn-plastico').addClass('btn-sel');
        });
});