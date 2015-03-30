function addImage(image, link, likes, caption){

	var $div = $("<div>");

	var $image = $("<img>").attr("src", image);

	var $link = $("<a>").attr("href", link);

	var $likes =$("<h5>").text(likes);

	var $caption = $("<h3>").text(caption);

	$div.append($image).append($link).append($likes).append($caption);

	$("#container").append($div);

}


addImage("money dance!.gif",
        "http://fuckyeahlizlemon.tumblr.com/",
        720, "Get it.");
        
addImage("self-five.gif",
        "https://www.tumblr.com/tagged/liz-lemon-gif",
        432, "Nothing like a self-five.");
        
addImage("liz runs.gif",
        "http://www.reactiongifs.com/tag/liz-lemon/",
        543, "SPRINGTIME");
        
addImage("sensuality.gif",
        "http://lizlemongifs.tumblr.com/",
        344, "I will use my...sensuality.");
