// font Zoom
(function ($) {
  $.fn.fontResize = function(options){
    var increaseCount = 0;
    var self = this;

    var changeFont = function(element, amount){
      var baseFontSize = parseInt(element.css('font-size'), 10);
      var baseLineHeight = parseInt(element.css('line-height'), 10);
      element.css('font-size', (baseFontSize + amount) + 'px');
      element.css('line-height', (baseLineHeight + amount) + 'px');
    };

    options.increaseBtn.on('click', function (e) {
      e.preventDefault();
      if(increaseCount === 5){ return; }
      self.each(function(index, element){
        changeFont($(element), 2);
      });
      increaseCount++;
    });

    options.decreaseBtn.on('click', function (e) {
      e.preventDefault();
      if(increaseCount === -5){ return; }
      self.each(function(index, element){
        changeFont($(element), -2);
      });
      increaseCount--;
    });

    options.resetBtn.on('click', function(e) {
      e.preventDefault();
      $('[style^="font-size"]').removeAttr('style')

    })
  }
})(jQuery);

$(function () {
  $('body,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input').fontResize({
    increaseBtn: $('.zoom_plus'),
    decreaseBtn: $('.zoom_min'),
    resetBtn: $('.nav_refresh')
  });
});

// $('.over_head_nav.two').on('click', 'li', function(){
//    $('body, .red_block, .right_bg').css({
//      'background-color' : '#fff',
//    });
//    $('label,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input').css({
//      'color' : '#454b53'
//    })
// })

// var obj_color = {
//       'color': '#454b53',
//       'color': '#fff',
//       'color': '#ceb62c',
//       'color': '#454b53',
//       'color': '#fff'
// }
// var obj_bgColor = {
//       1 : '#fff',
//       2 : '#454b53',
//       3 : '#454b53',
//       4 : '#ffde10',
//       5 : '#0072bc'
// }

// for(var obj in obj_bgColor){
//   console.log(obj_bgColor[obj])
// }


// $.each(obj_bgColor, function(index, value) {
// console.log(obj_bgColor[index])
// })

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
		dots : true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots : true,
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
        // centerMode: true,
        // centerPadding: '25px',
        slidesToShow: 2,
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
        dots : false,
      }
    }
  ]
});

$('.mySlider4').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


//main css
var colap = $('.colap');
var navbutton = $('.nav_button');

  navbutton.click(function(){
   colap.slideToggle(1000);
});

// $(window).resize(function(){
//   if($(window).width() > 768){
//     colap.css('display','block')
//   }else{
//     colap.css('display','none')
//   }
// })

$(window).resize(function(){
  if($(window).width() > 767){
    $('.colap').removeAttr('style')
  }
})

//progressCircle
$('.vote form').on('click','.prog-circle', function(){
  $(this).parents('.sircleIn').next('.radio').find('input[name="vote"]').click()
})

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
    
  })


// font Zoom

  // var myDocument = $('body *').not('.navigacia:first-child, .navigacia:first-child *')
  // function fontSize(flag){
    
  //   if(flag != 'reset'){

  //     for(var i = 0; myDocument.length > i; i++){
  //       var fontSize = parseInt($(myDocument[i]).css('font-size'))
  //       fontSize = flag == '+' ? fontSize + 1 : fontSize - 1
  //       $(myDocument[i]).css('font-size',fontSize)
  //    }
  //   }else{
  //      $('[style^="font-size"]').removeAttr('style')
  //     }
  //  }


  //  $('.over_head_nav.one').on('click', '.zoom_min', function(){
  //    fontSize('-');
  //  })

  //  $('.over_head_nav.one').on('click', '.zoom_plus', function(){
  //    fontSize('+')
  //  })   
  //  $('.over_head_nav_three').on('click', '.nav_refresh', function(){
  //    fontSize('reset')
  //  })

// club.html აირჩიე პაკეტი
$('.text').on('click', '.Choose_package', function(){
  $('.btn_under').fadeToggle();
  $('.btn_arrow_down').css({
    '-webkit-transform' : 'rotate(180deg)',
      '-moz-transform' : 'rotate(180deg)',
            'transform' : 'rotate(180deg)'
  })

})