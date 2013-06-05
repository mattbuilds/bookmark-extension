function CreateFolder(folders, name, page){
  folders[name] = {"links":[], "attributes":[]};
	page.displayFolders(folders);
  console.log(folders);
}

function SetCreateLink(folders, page){
	$("#folder_select").html('');
	for (var key in folders){
	    $("#folder_select").append(
			"<option value="+ key +">"+ key +"</option>"
		);
	}
  chrome.tabs.getSelected(null, function(tab){
    $("#link_title").val(tab.title);
    $("#link").val(tab.url);
  })
  page.displaySetCreateLink();
}

function CreateLink(folders, folder, title, link, page){
  for (var key in folders){
    if (key === folder){
      //console.log(folders);
      folders[key].links.push({"title": title, "link" : link});
    }
  }
  page.displayHome();
}