function CreateFolder(folders, name){
  folders[name] = [];
	DisplayFolders(folders);
}

function DisplayFolders(folders){
	$("#folders").html('');
	for (var key in folders){
  	$("#folders").append(
  		"<div class='folder' id=folder_"+ key +">" + key +"</div>"
  	);
  }
  console.log(folders);
}

function FolderPage(folders, folderId){
  for(var key in folders){
    if (key === folderId){
      folder = folders[key];
      DisplayLinks(key, folder);
    }
  }
}

function DisplayLinks(link, folder){
  $("#folders").hide();
  $("#add_folder").hide();
  $("#display_links").show();
  $("#display_links").html('');
  $("#display_links").append(
    "<div>" + link +"</div>"
  );
  console.log(folder);
  for (i=0; i < folder.length; i++){
    $("#display_links").append(
      "<div>" + folder[i].title +"</div>"
    );
  }
  $("#display_links").append(
    "<button class=back>Back</button>"
  )
}

function SetCreateLink(folders){
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
}

function CreateLink(folders, folder, title, link){
  for (var key in folders){
    if (key === folder){
      //console.log(folders);
      folders[key].push({"title": title, "link" : link});
    }
  }
}

function SetPath(){
  chrome.tabs.getSelected(null, function(tab){
    var pathname = tab.title;
    localStorage["path"] = pathname;
  })
}