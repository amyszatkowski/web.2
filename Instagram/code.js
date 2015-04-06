function addImage(image, link, likes, caption){

	var $div = $("<div>");

	var $image = $("<img>").attr("src", image);

	var $link = $("<a>").attr("href", link);

	var $likes =$("<h5>").text(likes);

	var $caption = $("<h3>").text(caption);

	$link.append($image);

    $div.append($link).append($likes).append($caption);

	$("#container").append($div);

}


function drawImages(data) {
	
	for(var i = 0; i < data.data.length; i++){ 
  		var item = data.data[i] 

		var image = item.images.standard_resolution.url;
		var link = item.link;
		var likes = item.likes.count;
		var caption = item.caption.text;
	

		addImage(image, link, likes, caption); 

	}

};




