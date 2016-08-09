function getDataForSolver(solverIndex){
	var data = [];
	var formElems = $("#"+ getSolverId(solverIndex) +" form").elements;
	solvers[solverIndex].fields.forEach(function(field, index){
		if(field.func === "in" || field.func === "inout"){
			var newData = {};
			var isData = false;
			switch(field.type){
				case "textBox":
					isData = true;
					newData.name = field.name;
					newData.value = $("#"+getFieldId(field, solverIndex)).value;
					break;
				case "radioC":
				case "radioT":
					isData = true;
					newData.name = field.name;
					newData.value = "";
					formElems.namedItem(field.name).forEach(function(radio){
						if(radio.checked){
							newData.value = radio.value;
						}
					});
					break;
				case "checkI":
					isData = true;
					newData.name = field.name;
					newData.value = [];
					formElems.namedItem(field.name).forEach(function(radio){
						if(radio.checked){
							newData.value.push(radio.value);
						}
					});
					break;
				case "select":
					isData = true;
					newData.name = field.name;
					newData.value = "";
					var chs = $("#"+getFieldId(field, solverIndex)).children;
					for(var i = 0; i < chs.length; ++i){
						if(chs[i].selected){
							newData.value = chs[i].value;
						}
					}
					break;
				case "imgMap":
					break;
				default:
					console.log("ismeretlen input type: "+field.type);
			}
			if(isData === true){
				data.push(newData);
			}
		}
	});
	return data;
}

function getOutputDOMElementsForSolver(solverIndex){
	var outElems = [];
	solvers[solverIndex].fields.forEach(function(field, index){
		if(field.func === "out" || field.func === "inout"){
			var elem;
			var isElem = false;
			switch(field.type){
				case "text":
					isElem = true;
					elem = $("#"+getFieldId(field, solverIndex));
					break;
				default:
					console.log("ismeretlen output type: "+field.type);
			}
			if(isElem === true){
				outElems.push(elem);
			}
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

function mapHandler(value, solverIndex, fieldName){
	solvers[solverIndex].mapHandler(value, fieldName);
}