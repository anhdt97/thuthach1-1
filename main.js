$(function () {

//header

    window.onscroll=function(){
        var header = document.getElementById("header");
        if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200){
            header.style.position ="fixed";
        }
        else{
            header.style.position="relative";
        }
    }
    

//back to top

    $(window).on('scroll',function(){
        if($(this).scrollTop() > 50){
            $('#back').fadeIn();
        } else{
            $('#back').fadeOut();
        }
    })

    $('#back').on('click',function(event){
        event.preventDefault();
    $('html,body').animate({scrollTop:0},600);

    })

//form
    $('#contactForm').on('click',function(event){
        event.preventDefault();
    })

//nav-bar
  
    $('.icon-bar').on('click',function(){
        $('.nav-bar').toggle('xuathien');
    })  

    $('.close').on('click',function(){
        $('.nav-bar').toggle('bienmat');
    })

    $('.onClick1 a').on('click',function(event){
        event.preventDefault();
        $('.bienmat1').toggle('xuathien');
    })
    $('.onClick2 a').on('click',function(event){
        event.preventDefault();
        $('.bienmat2').toggle('xuathien');
    })


//slide alov

    $('.a1').on('click',function(event){
        event.preventDefault();
        $('.bienmat1').toggle('xuathien');
    })
    $('.a2').on('click',function(event){
        event.preventDefault();
        $('.bienmat2').toggle('xuathien');
    })
    $('.a3').on('click',function(event){
        event.preventDefault();
        $('.bienmat3').toggle('xuathien');
    })

//scrollTop

    // $('li a').on('click',function(event){
    //     event.preventDefault();
    //     part = $(this).attr('href');
    //     position = $(part).offset().top;
    //     $('html,body').animate({scrollTop : position},600);
    // })
})

