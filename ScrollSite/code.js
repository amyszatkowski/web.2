$(".scrolling").scrollFlight();


/// Image fade in ///

$("#imageRight").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageLeft").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageRight2").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageLeft2").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageRight3").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageLeft3").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageRight4").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageLeft4").on("arrived",function(e){
	$(this).addClass("on-page");
	});


$("#imageRight5").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageLeft5").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageRight6").on("arrived",function(e){
	$(this).addClass("on-page");
	});

$("#imageLeft6").on("arrived",function(e){
	$(this).addClass("on-page");
	});


$("#top").on("arrived", function(e){
$(".li").removeClass("selected");
$(this).addClass("selected");
})


///Dot Menu ////



$(".scroller").scrollFlight();

$(".section").on("arriving rearriving",function() {
  $(this).find(".title").addClass("arrived");
});


$(".section").on("arriving rearriving",function() {
  // Grab find the href of the menu it to go to
  var href='#' + this.id;

  // Unselect the current menu item
  $(".menu a.selected").removeClass("selected");

  // Add a class of selected to the menu item with this page as an anchor
  $(".menu").find("a[href='" + href + "']").addClass("selected");
});

// Optional support for smooth scroll
$(".menu a").on("click",function(e) {
  // prevent the browser from jumping
  e.preventDefault();

  // Get the position of the page 
  var top = $($(this).attr('href')).position().top;

  // Animate to the body to scroll to the proper place
  $('html, body').stop().animate({ scrollTop: top });
});



