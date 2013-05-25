var folders = localStorage["folders"];

$(document).ready(function(){
	if (folders===undefined){
		folders = {};
	}
	$("#create_folder").hide();
	$("#create_link").hide();
	$("#display_links").hide();
	DisplayFolders(folders);

	$("#folders").on('click', 'div.folder', function(){
		var folderId = $(this).text();
		FolderPage(folders, folderId);
	});

	$("#add_folder").click(function(){
		$("#folders").hide();
		$("#create_folder").show();
		$("#add_folder").hide();
		$("#add_link").hide();	
	});

	$("#submit_folder").click(function(){
		var name = $("#folder_name").val();
		CreateFolder(folders, name);
		$("#folders").show();
		$("#create_folder").hide();
		$("#add_folder").show();
		$("#add_link").show();	
	});

	$("#display_links").on('click', 'button.back', function(){
		$("#folders").show();
		$("#create_folder").hide();
		$("#display_links").hide();
		$("#add_folder").show();
		$("#add_link").show();		
	});

	$("#add_link").click(function(){
		SetCreateLink(folders);
		$("#folders").hide();
		$("#create_link").show();
		$("#add_folder").hide();
		$("#add_link").hide();
	});

	$("#submit_link").click(function(){
		var folder = $("#folder_select").val();
		var title = $("#link_title").val();
		var link = $("#link").val();
		CreateLink(folders, folder, title, link);
		$("#folders").show();
		$("#create_link").hide();
		$("#add_folder").show();
		$("#add_link").show();	
	});
});