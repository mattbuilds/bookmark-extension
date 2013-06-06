function Attributes(){
	this.attributes = []

	var checkType = function(type){
		if (type==="text_field"){
			return ""
		}
		else{
			return []
		}
	}

	this.addAttribute = function(name, type){
		this.attributes.push(
			{
				"name": name,
				"type": type,
				"values": checkType(type)
			}
		)
	}

	this.addValue = function(name, value){

	}
}