$(function(){
    $('.ban-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        pauseOnHover:false,
      });

      $('.about-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },

        ]
      });
      $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2500,
        arrows:false,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },

        ]
      });
      $('.main-comment-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2500,
        arrows:true,
        pauseOnHover:false,
        prevArrow:".left-icon",
        nextArrow:".right-icon",
      });

      $('.counter').counterUp({
        delay: 10,
        time: 2500
    });

    $(window).scroll(function(){
      var top=$(this).scrollTop()
      if(top > 300){
        $(".navbar").addClass("sticky-stick")
      }
       else{
        $(".navbar").removeClass("sticky-stick")

      }
      if(top >300){
        $(".back-to-top").fadeIn(300)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }

    })
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop:0},1000)
    })

    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'circle-fade',
    overlayColor:'rgba(17, 17, 17, 0.7)',
    });


    new VenoBox({
      selector: '.my-video-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
    });

    $(".back").click(function(){
      $(".icon").toggleClass("close");  
    });


    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 10
      }, 1000);
    });
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      scrollLink.each(function () {
        var sectionhead = $(this.hash).offset().top - 40;
        if (scrollTop >= sectionhead) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
    });
  


    

})
