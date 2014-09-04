jQuery(document).ready(function(){

	jQuery('.show_popup').click(function(event){

		

		var ids=jQuery(this).attr("id");
		jQuery("#"+ids+"-info").show();

		jQuery("#upskillRead-info").hide();
		jQuery("#course-info").hide();
        jQuery("#about-info").hide();
		jQuery("#profile4-info").hide();
        jQuery("#profile5-info").hide();

		if(ids== 'upskillRead'){
			
			//alert(ids);

			jQuery("#upskillRead-info").fadeToggle(1000);
			jQuery(".background_overlay").fadeToggle(500);

			event.preventDefault();
        
		}
		else if(ids== 'course'){
			
			//alert(ids);
			jQuery("#course-info").fadeIn(1000);
      jQuery(".background_overlay").fadeIn(500);
			event.preventDefault();
		}
        else if(ids== 'about'){
			
			//alert(ids);
			jQuery("#about-info").fadeIn(1000);
      jQuery(".background_overlay").fadeIn(500);
			event.preventDefault();
		}
        else if(ids== 'partner'){
			
			//alert(ids);
			jQuery("#partner-info").fadeIn(1000);
      jQuery(".background_overlay").fadeIn(500);
			event.preventDefault();
		}
		
		

	});



		jQuery(".cancel, .background_overlay").click(function(){
          jQuery("#upskillRead-info").hide();
          jQuery("#course-info").hide();
          jQuery("#about-info").hide();
          jQuery("#partner-info").hide();
          jQuery(".background_overlay").hide();
        });







});

