
//ハンバーガーメニュー

$(function(){
  $('.navBtn').on('click', function(){
    $(this).toggleClass('active');
    $(".gNav").toggleClass('active');
    return false;
  });
});

//search
$(function(){
  $('#search').on('click', function(){
    $('.search-wrap').addClass('openSearch');
  });
});

$(function(){
  $('#close-search').on('click', function(){
    $('.search-wrap').removeClass('openSearch');
  });
});

//accordion

$(function () {
  $('.menu-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
    $('.menu-title').not(this).removeClass('open');
    $('.menu-title').not($(this)).next('.inner-items').slideUp();
  });
});


  $('.close').on('click',function () {
    $('.menu-title').removeClass("open");
    $(this).parent().slideUp();
  });

  //fadein left
  $('.banner-img').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInLeft');
        this.destroy();
      }
    },
    offset: `60%`,
  });

//animate__fadeIn
  $('.ecImg').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeIn');
        this.destroy();
      }
    },
    offset: `60%`,
  });



//cart-img slide

$(".page1").on("click", function () {
  $(".slide1").addClass("view");
  $(".slide2").removeClass("view");
});

$(".page2").on("click", function () {
  $(".slide2").addClass("view");
  $(".slide1").removeClass("view");
});
