function CreateFolder(folders, name){
  	folders.push(name);
	DisplayFolders(folders);
}

function DisplayFolders(folders){
	$("#folders").html('');
	for (i=0; i<folders.length; i++){
  		$("#folders").append(
  			"<div id=folder_"+ folders[i] +">" + folders[i]+"</div>"
  		);
  	}
}

function SetCreateLink(folders){
	$("#folder_select").html('');
	for (i=0; i<folders.length; i++){
		$("#folder_select").append(
			"<option value="+folders[i]+">"+folders[i]+"</option>"
		);
	}
}

function CreateLink(folders){

}

function SetPath(){
  chrome.tabs.getSelected(null, function(tab){
    var pathname = tab.title;
    localStorage["path"] = pathname;
  })
}

