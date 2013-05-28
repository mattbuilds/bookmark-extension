function Attributes(){
	var attributes = []

	var checkType = function(type){
		if (type==="text_field"){
			return ""
		}
		else{
			return []
		}
	}

	this.addAttribute = function(name, type){
		attributes.push(
			{
				"name": name,
				"type": type,
				"values": checkType(type)
			}
		)
		console.log(attributes);
	}
}