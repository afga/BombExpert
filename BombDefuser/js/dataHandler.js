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
	generalData.forEach(function(entry){
		data.push({name:entry.name,value:entry.value});
	});
	return data;
}

function getOutputDOMElementsForSolver(solverIndex){
	var outElems = [];
	var formElems = $("#"+ getSolverId(solverIndex) +" form").elements;
	solvers[solverIndex].fields.forEach(function(field, index){
		if(field.func === "out" || field.func === "inout"){
			switch(field.type){
				case "textBox":
				case "select":
				case "imgMap":
				case "text":
				case "imgBox":
					var elem = $("#"+getFieldId(field, solverIndex));
					outElems.push(elem);
					break;
				case "radioC":
				case "radioT":
				case "checkI":
					var elem = [];
					formElems.namedItem(field.name).forEach(function(e){
						elem.push(e);
					});
					outElems.push(elem);
					break;
				default:
					console.log("ismeretlen out type: "+field.type);
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