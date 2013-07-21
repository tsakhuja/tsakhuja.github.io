
var varId;
            jQuery(document).ready(function() {
		$('.popover_button').live('click', function($e){
			$e.preventDefault();
		    varId=($(this).attr('id'));
		    console.log(varId);
		    
		    
		  
		    if ($('#'+varId).hasClass('active')) {
			    $('#'+varId).removeClass('active');
			 $('#popover_'+varId).fadeToggle('fast');
			} else {
			    $('.popover_button').removeClass('active');
			    $('#'+varId).addClass('active');
			   
			     $('.popover').stop(true, true).hide();
			    $('#popover_'+varId).fadeToggle('fast');
			}
		  
		   

});
		
		/* to close the popover if anything else is clicked */
		$('body').click(function(event) {
			if (!$(event.target).closest('.popover').length && !$(event.target).closest('.popover_button').length) {
				$('.popover').stop(true, true).hide();
			    $('#'+varId).removeClass('active');
			};
		});		
	});