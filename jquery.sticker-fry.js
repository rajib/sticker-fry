function stickerFry(dom){
	var regex = new RegExp('\~[^\\s~]+\~', 'g');
	var target_dom = $(dom);
	var image_path = "stickers";
	
	var result = target_dom.text().match(regex);
	if(result){
		$.each(result, function( index, value ) {
			var sticker_image = value.replace(/\~/g, '');
			var sticker_full_path = image_path + '/' + sticker_image + '.png';
			var sticker_image_dom = '<img src="'+sticker_full_path+'">';
			
			$(dom + ":contains("+value+")").each(function(){
			    $(this).html($(this).html().replace(value, sticker_image_dom));
			});	
		});	
	}
}
