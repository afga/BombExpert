function getDataForSolver(solverIndex){
	var data = [];
	solvers[solverIndex].inputFields.forEach(function(field, index){
		var newData = {};
		var isData = false;
		switch(field.type){
			case "lineBreak":
				break;
			case "text":
				isData = true;
				newData.name = field.name;
				newData.value = $("#"+getInputId(solverIndex, field.name)).value;
				break;
			default:
				console.log("ismeretlen input type: "+field.type);
		}
		if(isData === true){
			data.push(newData);
		}
	});
	return data;
}

function getOutputDOMElementsForSolver(solverIndex){
	var outElems = [];
	solvers[solverIndex].outputFields.forEach(function(field, index){
		var elem;
		var isElem = false;
		switch(field.type){
			case "text":
				isElem = true;
				elem = $("#"+getOutputId(solverIndex, index));
				break;
			default:
				 console.log("ismeretlen output type: "+field.type);
		}
		if(isElem === true){
			outElems.push(elem);
		}
	});
	return outElems;
}

function getDataElemByName(data, name){
	for(var i = 0; i < data.length; ++i){
		if(data[i].name === name){
			return data[i];
		}
	}
	console.log("ismeretlen input mezo: "+name);
	return "";
}