function Page(){
	this.displayHome = function(){
		$("#folders").show();
		$("#create_folder").hide();
		$("#display_links").hide();
		$("#create_attributes").hide();
		$("#create_link").hide();
		$("#add_folder").show();
		$("#add_link").show();
	}

	this.displaySetCreateLink = function(){
		$("#folders").hide();
		$("#create_link").show();
		$("#add_folder").hide();
		$("#add_link").hide();
	}

	this.displayCreateAttributes = function(){
		$("#create_attributes").show();
	}

	this.displayAddFolder = function(){
		$("#folders").hide();
		$("#create_folder").show();
		$("#add_folder").hide();
		$("#add_link").hide();
		this.displayCreateAttributes();	
	}

	this.displayFolders = function (folders){
		$("#folders").html('');
		for (var key in folders){
  			$("#folders").append(
  				"<div class='folder' id=folder_"+ key +">" + key +"</div>"
  			);
  		}
  		this.displayHome();
	}

	this.displayLinks = function(link, folder){
		$("#folders").hide();
		$("#add_folder").hide();
		$("#display_links").show();
		$("#display_links").html('');
		$("#display_links").append(
			"<div>" + link +"</div>"
		);
		for (i=0; i < folder.length; i++){
			$("#display_links").append(
		  		"<div>" + folder[i].title +"</div>"
			);
		}
		$("#display_links").append(
			"<button class=back>Back</button>"
		)
	}

	this.displayAttributes = function(attributes){
		$("#attributes").html('');
		for(i=0; i<attributes.length; i++){
			console.log(attributes[i]);
			$("#attributes").append(
	  			"<div id="+attributes[i].name +">Attribute: "+ 
	  			attributes[i].name + " New Value: " +
	  			"<input type='text' name='val_text' id='val_text'/>" +
	  			"<input type='button' value='Add Value' name='add_value' id='add_value'/></div>"
	  		);
	  	}
	}

	this.displayFolderPage = function (folders, folderId){
	  	for(var key in folders){
	    	if (key === folderId){
	      		folder = folders[key].links;
	      		this.displayLinks(key, folder);
	    	}
	  	}
	}
}