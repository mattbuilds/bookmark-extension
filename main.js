var folders = localStorage["folders"];

$(document).ready(function(){
	if (folders===undefined){
		folders = [];
	}
	$("#create_folder").hide();
	$("#create_link").hide();
	DisplayFolders(folders);

	$("#add_folder").click(function(){
		$("#create_folder").show();
		$("#add_folder").hide();
		$("#add_link").hide();	
	});

	$("#submit_folder").click(function(){
		var name = $("#folder_name").val();
		CreateFolder(folders, name);
		$("#create_folder").hide();
		$("#add_folder").show();
		$("#add_link").show();	
	});

	$("#add_link").click(function(){
		$("#create_link").show();
		$("#add_folder").hide();
		$("#add_link").hide();
	});

	$("#submit_link").click(function(){
		$("#create_link").hide();
		$("#add_folder").show();
		$("#add_link").show();	
	})
});