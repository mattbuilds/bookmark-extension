function CreateFolder(folders, name){
  folders.push(name);
  console.log(folders);
  DisplayFolders(folders);
}

function DisplayFolders(folders){
  $("#folders").html(folders);
}

function SetPath(){
  chrome.tabs.getSelected(null, function(tab){
    var pathname = tab.title;
    localStorage["path"] = pathname;
  })
}

