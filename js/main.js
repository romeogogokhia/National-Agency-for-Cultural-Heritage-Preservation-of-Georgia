// font Zoom
(function ($) {
    $.fn.fontResize = function(options){
        if(localStorage.increaseCount > 3 || localStorage.increaseCount < 0){
            localStorage.increaseCount = 0;
        }
        var self = this;

        var changeFont = function(elements, amount){
            elements.each(function(index, domNode){
                var element = $(domNode);
                var baseFontSize = parseInt(element.css('font-size'), 10);
                var baseLineHeight = parseInt(element.css('line-height'), 10);
                element.css('font-size', (baseFontSize + amount) + 'px');
                element.css('line-height', (baseLineHeight + amount) + 'px');
            });
        };

        // set font size to whatever was storage in localStorage
        changeFont(self, localStorage.increaseCount * 1);

        options.increaseBtn.on('click', function (e) {
            e.preventDefault();
            if(localStorage.increaseCount >= 3){ return; }
            changeFont(self, 1);
            localStorage.increaseCount++;
        });

        options.decreaseBtn.on('click', function (e) {
            e.preventDefault();
            if(localStorage.increaseCount <= 0){ return; }
            changeFont(self, -1);
            localStorage.increaseCount--;
        });

        options.resetBtn.on('click', function(e) {
            e.preventDefault();
            $('[style*="font-size"]').not('.prog-circle').removeAttr('style');
            $('[style*="background-color"]').removeAttr('style');
            $('[style*="color"]').removeAttr('style');
            localStorage.increaseCount = 0;
            localStorage.background = undefined;
            localStorage.color = undefined;
        })

    }
})(jQuery);

$(function () {
    $('body,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input,label').not('body, .over_header, .over_header *').fontResize({
        increaseBtn: $('.zoom_plus'),
        decreaseBtn: $('.zoom_min'),
        resetBtn: $('.nav_refresh, .nav_refr')
    });
});

$(function(){
    $('.over_head_nav.two').on('click','li',function(){
        var bg = $(this).css('background-color');
        var color = $(this).css('color');
        $('section, .navigacia, .over_header, .nav_repeat, .secind_menu, .pagination>li>a').not('body, .over_header, .over_header *').css('background-color', bg);
        $('label,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input, .nav_repeat, .secind_menu, .pagination>li>a').not('body, .over_header, .over_header *, .footer_form *').css('color', color);
        localStorage.background = bg;
        localStorage.color = color;
    });
});

if(localStorage.background !== undefined){
    $('section, .navigacia, .over_header, .nav_repeat, .secind_menu, .pagination>li>a').not('body, .over_header, .over_header *').css('background-color', localStorage.background);
}

if(localStorage.color !== undefined){
    $('label,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input, .nav_repeat, .secind_menu, .pagination>li>a').not('body, .over_header, .over_header *').css('color', localStorage.color);
}

$('.nav_close, .nav_cl').click(function(){
    $('.over_header, .over_head_trinagle').css('display', 'none')
});



//slick slider
$('.mySlider').slick({
    arrows : false,
    dots : true,
    vertical : true,
    autoplay : true,
    autoplaySpeed : 20000,
    cssEase : 'ease',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots : true
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots : true
            }
        }
    ]
});

$('.mySlider2').slick({
    arrows : false,
    dots : true,
    autoplay : true,
    autoplaySpeed : 20000,
    cssEase : 'ease',
    infinite: true,
    slidesToShow : 3,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '25px',
                slidesToShow: 1
            }
        }
    ]
});

$('.mySlider3').slick({
    arrows : false,
    dots : true,
    autoplay : true,
    autoplaySpeed : 200000,
    cssEase : 'ease',
    infinite: true,
    slidesToShow : 1,

    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots : false
            }
        }
    ]
});

$('.mySlider4').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    cssEase : 'ease',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.mySlider6').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.mySlider5').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
});

//main css
var colap = $('.colap');
var navbutton = $('.nav_button');

navbutton.click(function(){
    colap.slideToggle(1000);
});

$(window).resize(function(){
    if($(window).width() > 767){
        $('.colap').removeAttr('style')
    }
});

//progressCircle
$('.vote form').on('click','.prog-circle', function(){
    $(this).parents('.sircleIn').next('.radio').find('input[name="vote"]').click()
});

// dropdown mobile touch
$( 'li.drop_down:has(ul)' ).doubleTapToGo();

//search
$('.search_wrap').on('click','button.icon', function(event){
    if(!$('.search_wrap #search').val()){
        event.preventDefault()
    }
    $('#search').animate({
            'border':'1px solid #d4d5d6',
            'width':'300px'
        },
        {
            duration: 100,
            complete: function() {
                $( this ).focus();
            }
        });
});



$('.form-group').on('click', '.glasses_icon', function(){
    $('.over_header, .over_head_trinagle').fadeToggle(700)

});
