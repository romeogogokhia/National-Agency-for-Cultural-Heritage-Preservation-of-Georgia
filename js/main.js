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
  arrows : true,
  dots : true,
  autoplay : true,
  autoplaySpeed : 20000,
  cssEase : 'ease',
  infinite: true,
  slidesToShow : 5,
  
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
        dots: false,
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