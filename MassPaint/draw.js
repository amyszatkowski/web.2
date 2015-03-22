record();
reset();
hide();
speed(0);

///TOOLS////

$("#button-save").on("click",function() {
 downloadRecording();
 $(".tool").removeClass("selected");
 $(this).addClass("selected");
});

$("#button-replay").on("click",function() {
 replay();
$(".tool").removeClass("selected");
 $(this).addClass("selected");
});

$("#button-pen").on("click",function(){
	$(".tool").removeClass("selected");
	$(this).addClass("selected");

});

$("#button-eraser").on("click",function() {
  $(".tool").removeClass("selected");
  $(this).addClass("selected");
  tool = "eraser";
  lineWidth(100);
  lineColor("white");
});


///START STAMPS////

$("#button-bubble").on("click", function(){
	$(".tool.selected").removeClass("selected");
	$(this).addClass("selected");
	tool = "bubble"
	lineWidth(width);
	lineColor(color);
});

function bubble(){
		angle(0)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)
		forward(2)
		rotate(6)

		move(6,6)

		forward(2)
		rotate(7)
		forward(2)
		rotate(7)
		forward(2)
		rotate(7)
		forward(2)
		rotate(7)
		forward(2)


		
	

};


$("#button-bubbleSmall").on("click", function(){
	$(".tool.selected").removeClass("selected");
	$(this).addClass("selected");
	tool = "bubbleSmall"
	lineWidth(width);
	lineColor(color);
});


function bubbleSmall(){
	angle(0)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)

	move(4,1)
	
	forward(2)
	rotate(10)
	forward(2)
	rotate(10)
	forward(2)


};


$("#button-flower").on("click", function(){
	$(".tool.selected").removeClass("selected");
	$(this).addClass("selected");
	tool = "flower"
	lineWidth(width);
	lineColor(color);
});

function flower(){
		angle(0)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)

		rotate(75)

		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)

		rotate(75)

		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)

		rotate(75)

		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)

				rotate(75)

		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)


				rotate(75)

		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)
		forward(3)
		rotate(5)



};


$("#button-flowerSmall").on("click", function(){
	$(".tool.selected").removeClass("selected");
	$(this).addClass("selected");
	tool = "flowerSmall"
	lineWidth(width);
	lineColor(color);
});

function flowerSmall(){
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
		forward(3)
	rotate(15)
	forward(3)
	rotate(15)

	rotate(74)

	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
		forward(3)
	rotate(15)
	forward(3)
	rotate(15)

	

	rotate(74)


	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
		forward(3)
	rotate(15)
	forward(3)
	rotate(15)


	rotate(74)

	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
		forward(3)
	rotate(15)
	forward(3)
	rotate(15)


	rotate(74)

	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
	forward(3)
	rotate(15)
		forward(3)
	rotate(15)
	forward(3)
	rotate(15)











}

///END STAMPS///



///START COLORS////

$("#button-black").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("black")
});

$("#button-brightBlue").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#33CCFF")
});

$("#button-medBlue").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#99CCFF")
});

$("#button-darkBlue").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#0093B8")
});

$("#button-oceanBlue").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#CCFFFF")
});
$("#button-trueBlue").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#0099FF")
});

$("#button-orange").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#FFB42F")
});

$("#button-darkOrange").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#CC5600")
});

$("#button-green").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#0AF54B")
});


$("#button-darkGreen").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#4A8C00")
});

$("#button-yellow").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#F3EF00")
});

$("#button-darkYellow").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#CBC700")
});

$("#button-spongeYellow").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#FFFF00")
});

$("#button-brown").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#996600")
});

$("#button-red").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#E62E00")
});

$("#button-purple").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#CC00CC")
});

$("#button-pink").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#FF92EB")
});

$("#button-sand").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#FFFFCC")
});


$("#button-greyGreen").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#006666")
});

$("#button-seaweed").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#849822")
});

$("#button-sandDark").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#E6E6B8")
});

$("#button-white").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("white")
});

$("#button-gray").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#B3BAB3")
});

$("#button-lightGray").on("click", function(){
	$(".color").removeClass("selected");
	$(this).addClass("selected");

	lineColor("#DEE1DE")
});

////LINE WIDTH/////


$("#button-lineLight").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(1)
});

$("#button-lineReg").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(5)
});

$("#button-lineMed").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(10)
});

$("#button-lineBold").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(25)
});

$("#button-lineBlack").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(50)
});

$("#button-lineUltra").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(80)
});

$("#button-lineSuper").on("click", function(){
	$(".line").removeClass("selected");
	$(this).addClass("selected");

	lineWidth(100)
});


///END COLORS///






////DRAW/////

var drawing = false;
var tool = "pen";
var color = "black";

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen") { 
    drawing = true;
  }
});

$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});



///STAMPS///

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" || tool == "flowerSmall" || tool == "bubbleSmall"  || tool == "flower") { 
    drawing = true;
  } else if(tool == "bubble") {
    bubble();
  }
});

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" || tool == "bubble" || tool == "flowerSmall" || tool == "flower") { 
    drawing = true;
  } else if(tool == "bubbleSmall") {
    bubbleSmall();
  }
});

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" || tool == "bubble" || tool == "bubbleSmall"  || tool == "flowerSmall") { 
    drawing = true;
  } else if(tool == "flower") {
    flower();
  }
});

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" || tool == "bubble" || tool == "bubbleSmall" || tool == "flower") { 
    drawing = true;
  } else if(tool == "flowerSmall") {
    flowerSmall();
  }
});








