$(document).ready(function () {
    var hide2  = true;
    $('.testimonial-slider .slide2').hide();
    var hide3 = true;
    $('.testimonial-slider .slide3').hide();
    var hide1 = false;
    
    $('.right-button button').click(function(){
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
    
    $('.left-button button').click(function(){
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



});