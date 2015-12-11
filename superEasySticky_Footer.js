function superEasySticky_Footer(SE_windowHeight, SE_space) {
	$(document).ready(function() {
        
    
		var windowHeight = $(document).height();
		var footerHeight = $('footer').height();
		if(SE_windowHeight === undefined) {
			SE_windowHeight = 50;
		}
		if(SE_space === undefined) {
			SE_space = 20;
		}
		$('body, html').css('height', windowHeight - SE_windowHeight);
		$('body').wrapInner("<div id='#main_wrapping_div' style='min-height:100%; position:relative;'></div>").find('div').css({'padding-bottom' : footerHeight + SE_space});
		$('footer').css({
			'position' : 'absolute',
			'bottom' : 0,
			'left' : 0,
			'right' : 0,
			'height' : 'auto',
			'display': 'block'
		});
	});
}