(function ($){
	$.fn.imagePopup = function(){
		/*
			*iterating through each image Gallery
			*
			*
			*
			*/
		return this.each(function(){
			/*
			*declaring new elements variable
			*
			*/
			var $overlay;
			setOverlayProperties();
			function setOverlayProperties(){
				$overlay = $('<di></div>');
				$overlay.css({"background": 'rgba(0, 0, 0, 0.5)', "position": "absolute", "top":"0px", "left":"0px", "display": "none", "text-align":"center", "width": "100%", "height": "100%", "padding-top": "05%");
				
			}
			
			
		})
	}
}(jQuery));