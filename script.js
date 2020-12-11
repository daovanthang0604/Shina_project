$(document).ready(function(){
        $(".best_house__image").hover(function(){
            $(">.overlay_box",this).animate({
                height: "toggle"
            });
        });
   $(".gallery_grid").isotope({
     itemSelector: '.grid-item'
   });
   $(".gallery_filter button").on("click",function(){
     var type = $(this).attr('data-type');
     console.log(type);
     $(".gallery_filter button").removeClass("button-active");
     $(this).addClass(" button-active");
     type = '.'+type;
     $('.gallery_grid').isotope({
         filter:type
      });
      });
      $('.single-item-carousel').owlCarousel({
        loop:true,
  			margin:10,
  			nav:true,
  			smartSpeed: 500,
  			autoplay: 5000,
  			navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
  			responsive:{
  				0:{
  					items:1
  				},
  				600:{
  					items:1
  				},
  				800:{
  					items:1
  				},
  				1024:{
  					items:1
  				},
  				1200:{
  					items:1
  				}
  			}
});

// count
var counters = $(".count");
 var countersQuantity = counters.length;
 var counter = [];

 for (i = 0; i < countersQuantity; i++) {
   counter[i] = parseInt(counters[i].innerHTML);
 }

 var count = function(start, value, id) {
   var localStart = start;
   setInterval(function() {
     if (localStart < value) {
       localStart++;
       counters[id].innerHTML = localStart;
     }
   }, 10);
 }

 for (j = 0; j < countersQuantity; j++) {
   count(0, counter[j], j);
 }
   // form validate
   // $('#send').on("click",function(){
   $('#contact-form').validate(
             {
              rules: {
                name: {
                  minlength: 2,
                  required: true
                },
                email: {
                  required: true,
                  email: true
                },
                subject:{
                  required: true,
                  minlength: 2,
                },
                message: {
                  minlength: 2,
                  required: true
                }
              },
              messages:{
                name: {required:"Please fill in the field!",
                minlength: "It should more than 2 letter!"
              },
                 email:{
                     required:   "Please fill in the field!",
                     email: "Enter a valid email"
                 },
                 subject:{
                   required:   "Please fill in the field!",
                   minlength: "It should more than 2 letter!"
                 },
                 message:{
                   required:   "Please fill in the field!",
                   minlength: "It should more than 2 letter!"
                 }
              },
              submitHandler: function (form) {
			$('#success').html("Your message was sent successfully!");
		}
            });
            $("#contact-form").on("submit", function(event) {
                event.preventDefault();

});
$(".nav-link").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});
AOS.init();
               // });
               window.onload=function(){
                $("#btn--all").click();
                }
    });
    