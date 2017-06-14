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

// $('.mySlider4').slick({
//   arrows : true,
//   dots : true,
//   autoplay : true,
//   autoplaySpeed : 20000,
//   cssEase : 'ease',
//   infinite: true,
//   slidesToShow : 5,
  
//     responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       }
//     },
//     {
//       breakpoint: 468,
//       settings: {
//         slidesToShow: 1,
//         dots: false,
//       }
//     }
//   ]
// });


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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
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

$('.icon').on('click','.fa.fa-search', function(event){
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

  var myDocument = $('body *').not('.navigacia:first-child, .navigacia:first-child *')
  function fontSize(flag){
    
    if(flag != 'reset'){

      for(var i = 0; myDocument.length > i; i++){
        var fontSize = parseInt($(myDocument[i]).css('font-size'))
        fontSize = flag == '+' ? fontSize + 1 : fontSize - 1
        $(myDocument[i]).css('font-size',fontSize)
     }
    }else{
       $('[style^="font-size"]').removeAttr('style')
      }
   }

   $('.over_head_nav.one').on('click', '.zoom_min', function(){
     fontSize('-')
   })
   $('.over_head_nav.one').on('click', '.zoom_plus', function(){
     fontSize('+')
   })   
   $('.over_head_nav_three').on('click', '.nav_refresh', function(){
     fontSize('reset')
   })


   $('.over_head_nav.two').on('click', 'li', function(){
    $('section').css({
      'background' : 'green',
      'color' : 'white'
    });
    $('section label, input, p, h1').css({
      'color' : 'white'
    })
   })
