/* Life Jacket
	Author: Josh Bussey
	Description: A collection of content patches that will assist large scale sites in achieving 508 compliance.
*/
function lifeJacket() {
	
	//Iframes with no titles
	
	//Select all iframes with no title
	var iframeNoTitle = $('iframe').attr('title', '');
	
	//Run only if issue exists on page
	if ( iframeNoTitle.length > 0 ) {
		iframeNoTitle.attr('title', '').each( function() {
			var iframeSrc = $(this).attr('src');
			//Set title as src attribute value
			$(this).attr('title', iframeSrc);
		});
	}
	
	//Links with no titles
	
	//Select all links with no title
	var linkNoTitle = $('a').attr('title', '');	

	//Run only if issue exists on page
	if ( linkNoTitle.length > 0 ) {	
		linkNoTitle.attr('title', '').each(function() {
			var linkText = $(this).attr('href');
			//Adds a unique title to links without one
			$(this).attr("title", linkText );
		});
	}

	//Images with no alt attribute
	
	//Select all images with no alt attribute
	var imgNoAlt = $('img').attr('alt', '');	

	//Run only if issue exists on page
	if ( imgNoAlt.length > 0 ) {	
		imgNoAlt.each(function() {
			var imgAlt = $(this).attr('src');
			//Adds a unique title to links without one
			$(this).attr("alt", imgAlt );
		});
	}
}
