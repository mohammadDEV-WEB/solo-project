// =================================icon loaded ==========================================
$(window).on("load", function () {
  $(".loaded").fadeOut(1000);
  $(".bg-loaded").delay(350).fadeOut("slow");
});
// =================================navbar button take active ===========================================
$(".smooth-scroll").click(function (e) {
  const allElement = document.querySelectorAll(".smooth-scroll");
  allElement.forEach(function (value) {
    if (value.classList.contains("active")) {
      value.classList.remove("active");
    } else {
      const target = e.target;
      target.classList.add("active");
    }
  });
});
// ===============================take active for home btn =========================================
$(".btn-home").click(function () {
  $(this).addClass("active");
});

// =============================== style for nav-btn in small screen =======================================
$(".nav-button").click(function () {
  $(this).toggleClass("change");
  $(this).css({ "z-index": "10", outline: "0" });
});
// =============================== style for navbar =======================================
$(window).on("scroll load", function () {
  var scroll = window.scrollY;
  var width = window.innerWidth;
  if (scroll >= 75) {
    $(".navbar").css("background-color", "white");
    $(".navbar").css("padding", "10px 8px");
    $(".navbar-brand img").attr("src", "./img/logo/logo-dark.png");
    $(".navbar").css("box-shadow", "0px 3px 5px #999");
    $(".line1,.line2,.line3").removeClass("bg-white");
    $(".line1,.line2,.line3").addClass("bg-dark");
    const btnNav = $(".nav-button").attr("class");
    if (btnNav == "navbar-toggler nav-button border-0 change") {
      $(".line1,.line2,.line3").removeClass("bg-dark");
      $(".line1,.line2,.line3").addClass("bg-white");
    } else {
      $(".line1,.line2,.line3").addClass("bg-dark");
      $(".line1,.line2,.line3").removeClass("bg-white");
    }
    $(".nav-button").addClass("border-0");
  } else {
    $(".navbar").css("padding", "40px 20px");
    $(".navbar-brand img").attr("src", "./img/logo/logo.png");
    $(".navbar").css("background-color", "transparent");
    $(".navbar").css("box-shadow", "0px 0px 0px");
    $(".line1,.line2,.line3").addClass("bg-white");
    $(".line1,.line2,.line3").removeClass("bg-dark");
  }
  // =======================================take class to nav for small screen  ================================
  if (width <= 752) {
    $("nav").addClass("flex-row-reverse");
    $(".navbar-nav").removeClass("flex-row");
    $(".navbar-nav").addClass("nav-mobail");
  } else {
    $("nav").removeClass("flex-row-reverse");
    $(".navbar-nav").removeClass("nav-mobail");
    $(".navbar-nav").addClass("flex-row");
  }
});
// =============================== progress-bar =======================================
$(window).on("load", function () {
  $(".progress-all").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("valuenow") + "%",
          },
          1000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
// =====================================owl-carousel===============================
$(window).ready(function () {
  $(".owl-carousel-1").owlCarousel({
    items: 2,
    autoplay: true,
    margin: 20,
    loop: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });
});
// ====================================services2===================================
$(function () {
  $("#responsiveTabsDemo").responsiveTabs({
    animation: "slide",
  });
});
// ===============================img gallery==================================
$(window).on("load", function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
// ==================================card show on testimonials=================================
var showCard = 1;
testimonialFn();
function activeCard(n) {
  testimonialFn((showCard = n));
}
function testimonialFn() {
  var card = $(".testimonial");

  for (let i = 0; i < card.length; i++) {
    $(card[i]).css("display", "none");
  }

  $(card[showCard - 1]).fadeIn(1000);
}
$("#carouselButtons").on("click", "span", function () {
  var dataBtn = $(this).attr("data-carousel");
  activeCard(dataBtn);
  $(this).parent().find(".active").removeClass("active");
  $(this).addClass("active");
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
})
// ============================client on owl...================================
$(function () {
  $("#clients-list").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
// =========================scroll body with click btn==============================
$(function () {
  $('.smooth-scroll').click(function (e) {
    e.preventDefault()
    var attrEle=$(this).attr('href')
    $('html,body').animate({
      scrollTop:$(attrEle).offset().top
    },1250,'easeInOutExpo')
  })
})
// =========================take wow plugin the project======================
$(function(){
  new WOW().init();
})
// ========================take animation for home=========================
$(window).on('load',function () {
  $('#home-heading-1').addClass('animate__fadeInDown')
  $('#home-heading-2').addClass('animate__lightSpeedInLeft')
  $('.home-p').addClass('animate__zoomIn')
  $('#home-btn').addClass('animate__zoomIn')
  $('#arrow-down').addClass('animate__zoomIn')
})