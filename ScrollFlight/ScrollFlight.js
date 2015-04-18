

$(".scrolling").scrollFlight();


$(".iframe-cover").on("arriving", function(e){
	$(this).addClass("appeared");
});

$("#title1").on("arrived",function(e){
	$(this).addClass("on-page");
	});


$("#title2").on("arrived",function(e){
	$(this).addClass("on-page");
	});

