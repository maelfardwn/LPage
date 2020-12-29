$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar1').addClass("sticky");
        }else{
            $('.navbar1').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show")
        }else{
            $('.scroll-up-button').removeClass("show")
        }  
    })

    //slide up 
    
    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar1 .menu').toggleClass("active")
        $('.navbar1 i').toggleClass("active")
    }) 
});