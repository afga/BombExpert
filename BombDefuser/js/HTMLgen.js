function getHTMLEntryFromMenuEntry(menuE, index){
	var x = "";
	x += '<li class="menu-module" id="menu-i' + index + '">';
	x += menuE.name;
	x += '</li>';
	return x;
}

function getSolverHTML(inFields, outFields, solverIndex){
	var out = "";
	out += '<div class="solve-module" id="'+getSolverId(solverIndex)+'">\n';
	out += '<form oninput="changed(' + solverIndex + ');" onchange="changed(' + solverIndex + ');">\n';
	inFields.forEach(function(field, index){
		switch(field.type){
			case "lineBreak":
				out += "<br />\n";
				break;
			case "text":
				out += getHTMLForInputText(field, solverIndex);
				break;
			case "radioC":
				out += getHTMLForRadioColor(field, solverIndex);
				break;
			case "radioT":
				out += getHTMLForRadioText(field, solverIndex);
				break;
			case "select":
				out += getHTMLForSelect(field, solverIndex);
				break;
			case "checkI":
				out += getHTMLForCheckImg(field, solverIndex);
				break;
			case "imgMap":
				out += getHTMLForImgMap(field, solverIndex);
				break;
			default:
				console.log("ismeretlen input type: "+field.type);
		}
		out += "\n";
	});
	out += '</form>\n';
	outFields.forEach(function(field, index){
		switch(field.type){
			case "text":
				out += '<p class="outText" id="'+getOutputId(solverIndex, index)+'"></p>';
				break;
			default:
				console.log("ismeretlen output type: "+field.type);
		}
	});
	out += "</div>";
	return out;
}

function getSolverId(solverIndex){
	return "solver-i"+solverIndex;
}

function getInputId(solverIndex, fieldName){
	return "input-s"+solverIndex+"-n"+fieldName;
}

function getInputIdForRadio(solverIndex, fieldName, radioIndex){
	return "input-s"+solverIndex+"-n"+fieldName+"-i"+radioIndex;
}

function getInputIdForCheckbox(solverIndex, fieldName, checkboxIndex){
	return "input-s"+solverIndex+"-n"+fieldName+"-i"+checkboxIndex;
}

function getOutputId(solverIndex, fieldIndex){
	return "output-s"+solverIndex+"-i"+fieldIndex;
}

function getHTMLForInputText(field, solverIndex){
	return '<input type="text" id="'+getInputId(solverIndex, field.name)+'"/>';
}

function getHTMLForRadioColor(field, solverIndex){
	var ret = "";
	field.values.forEach(function(color, index){
		var id = getInputIdForRadio(solverIndex, field.name, index);
		ret += '<input type="radio" class="radioC" name="'+field.name+'" value="'+color+'"" id="'+id+'">\n';
		ret += '<label for="'+id+'">\n';
		ret += '	<div class="inputColorBox" style="background-color:'+color+'"></div>\n';
		ret += '</label>\n';
	});
	return ret;
}

function getHTMLForRadioText(field, solverIndex){
	var ret = "";
	field.values.forEach(function(text, index){
		var id = getInputIdForRadio(solverIndex, field.name, index);
		ret += '<input type="radio" class="radioT" name="'+field.name+'" value="'+text+'"" id="'+id+'">\n';
		ret += '<label for="'+id+'">'+text+'</label>\n';
	});
	return ret;
}

function getHTMLForSelect(field, solverIndex){
	var ret = "";
	ret += '<select size="'+field.values.length+'" id="'+getInputId(solverIndex, field.name)+'">\n';
	field.values.forEach(function(text, index){
		ret += '<option value='+text+'>'+text+'</option>\n';
	});
	ret += '</select>\n';
	return ret;
}

function getHTMLForCheckImg(field, solverIndex){
	var ret = "";
	field.values.forEach(function(img, index){
		var id = getInputIdForCheckbox(solverIndex, field.name, index);
		ret += '<input type="checkbox" class="checkI" name="'+field.name+'" value="'+index+'" id="'+id+'">\n';
		ret += '<label for="'+id+'">\n';
		ret += '	<img class="inputCheckImg" src="img/'+field.folder+'/'+img+'" />\n';
		ret += '</label>\n';
	});
	return ret;
}

function getHTMLForImgMap(field, solverIndex){
	var ret = "";
	ret += '<img src="img/'+field.img+'" usemap="'+ field.name +'" />\n';
	ret += '<map name="'+ field.name +'">\n';
	field.values.forEach(function(area, index){
		ret += '<area shape="'+ area.shape +'" coords="'+ area.coords +'" onclick="mapHandler('+ area.value + ', ' + solverIndex +');"/>\n';
	});
	ret += '</map>\n';
	return ret;
}