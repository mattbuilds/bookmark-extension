var folders = localStorage["folders"];

$(document).ready(function(){
	if (folders===undefined){
		folders = [];
	}
	$("#create_folder").hide();

	DisplayFolders(folders);
	$("#add_folder").click(function(){
		$("#create_folder").show();	
	});
	$("#submit_folder").click(function(){
		var name = $("#folder_name").val();
		CreateFolder(folders, name);
		$("#create_folder").hide();
	})
});