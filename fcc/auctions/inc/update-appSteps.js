// DEMO CODE ONLY DO NOT USE
function updateAppSteps (num) {
	var $sidebar = $('.sidebar').find('ol').first(),
		activeStepNum = num,
		activeStep = $sidebar.children('li').eq(activeStepNum),
		stepLabel = '<span><span class="icon-arrow-right"></span>' + activeStep.find('a:first').text(),
		errorStep = $sidebar.find('.icon-error').parent();
		
		//no showing check icon in Form175	
	/*for (i=0; i<num; i++) {
		if (i==1 ) {
			continue;	
		} else {
	
			$sidebar.find('li').eq(i).find('a').prepend('<span class="icon-check"></span>');	
		}
	}	*/

	$sidebar.find('li').removeClass('active');
	activeStep.addClass('active').html(stepLabel);
	activeStep.find('span:last').append('<span class="visuallyhidden">Current Step is </span>');
	
	
	errorStep.append('<span class="visuallyhidden"> step contains errors.</span>')
	
	
	// "Disable" Certify Link 
	if ($('#frm-userProfile').length == 1 ) {
	  /*$sidebar.find('li:last-child').html('<span class="disabled">Certify &amp; Submit</span>');	*/
	  $sidebar.children('li').last().html('<span class="disabled">Certify &amp; Submit</span>');
	}
	
};

var path = window.location.pathname.split('/')[2];
		
if (path != undefined) {
	$('.login-name').find('a').attr('href', '../search.html');	
}
// DEMO CODE ONLY DO NOT USE