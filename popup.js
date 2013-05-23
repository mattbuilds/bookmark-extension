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

function SetPath(){
  chrome.tabs.getSelected(null, function(tab){
    var pathname = tab.title;
    localStorage["path"] = pathname;
  })
}

