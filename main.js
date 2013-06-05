var folders = localStorage["folders"];

$(document).ready(function(){
	if (folders===undefined){
		folders = {};
	}
	var page = new Page();
	var attributes = new Attributes();
	page.displayFolders(folders);
	page.displayHome();

	$("#folders").on('click', 'div.folder', function(){
		page.displayFolderPage(folders, $(this).text());
	});

	$("#add_folder").click(function(){
		page.displayAddFolder();
	});

	$("#add_attribute").click(function(){
		var name = $("#attribute_name").val();
		var type = $("#attribute_type").val();
		attributes.addAttribute(name, type);
		console.log(folders);
	})

	$("#submit_folder").click(function(){
		var name = $("#folder_name").val();
		CreateFolder(folders, name, page);
	});

	$("#display_links").on('click', 'button.back', function(){
		page.displayHome();		
	});

	$("#add_link").click(function(){
		SetCreateLink(folders, page);
	});

	$("#submit_link").click(function(){
		var folder = $("#folder_select").val();
		var title = $("#link_title").val();
		var link = $("#link").val();
		CreateLink(folders, folder, title, link, page);
	});
});