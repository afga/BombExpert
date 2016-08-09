function getHTMLEntryFromMenuEntry(menuE, index){
	var x = "";
	x += '<li class="menu-module" id="menu-i' + index + '">';
	x += menuE.name;
	x += '</li>';
	return x;
}

function getSolverHTML(fields, solverIndex){
	var out = "";
	out += '<div class="solve-module" id="'+getSolverId(solverIndex)+'">\n';
	out += '<form oninput="changed(' + solverIndex + ');" onchange="changed(' + solverIndex + ');">\n';
	fields.forEach(function(field, index){
		switch(field.func){
			case "in":
			case "inout":
				switch(field.type){
					case "textBox":
						out += getHTMLForInputText(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case "radioC":
						out += getHTMLForRadioColor(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case "radioT":
						out += getHTMLForRadioText(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case "select":
						out += getHTMLForSelect(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case "checkI":
						out += getHTMLForCheckImg(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case "imgMap":
						out += getHTMLForImgMap(field, solverIndex, getFieldId(field, solverIndex));
						break;
					default:
						console.log("ismeretlen input type: "+field.type);
				}
				break;
			case "out":
				switch(field.type){
					case "text":
						out += '<p class="outText" id="'+getFieldId(field, solverIndex)+'"></p>';
						break;
					case "imgBox":
						out += '<div class="imgBox" id="'+getFieldId(field, solverIndex)+'"></div>';
						break;
					default:
						console.log("ismeretlen output type: "+field.type);
				}
				break;
			case "layout":
				switch(field.type){
					case "lineBreak":
						out += "<br />\n";
						break;
					default:
						console.log("ismeretlen layout type: "+field.type);
				}
				break;
			default:
				console.log("ismeretlen funct type: "+field.func);
		}
	});
	out += '</form>\n';
	out += "</div>";
	return out;
}

function getSolverId(solverIndex){
	return "solver-i"+solverIndex;
}

function getFieldId(field, solverIndex){
	return "field-s"+solverIndex+"-n"+field.name+"-t"+field.type;
}

function getHTMLForInputText(field, solverIndex, id){
	return '<input type="text" id="'+id+'"/>\n';
}

function getHTMLForRadioColor(field, solverIndex, id){
	var ret = "";
	field.values.forEach(function(color, index){
		var id2 = id+"-i"+index;
		ret += '<input type="radio" class="radioC" name="'+field.name+'" value="'+color+'"" id="'+id2+'">\n';
		ret += '<label for="'+id2+'">\n';
		ret += '	<div class="inputColorBox" style="background-color:'+color+'"></div>\n';
		ret += '</label>\n';
	});
	return ret;
}

function getHTMLForRadioText(field, solverIndex, id){
	var ret = "";
	field.values.forEach(function(text, index){
		var id2 = id+"-i"+index;
		ret += '<input type="radio" class="radioT" name="'+field.name+'" value="'+text+'"" id="'+id2+'">\n';
		ret += '<label for="'+id2+'">'+text+'</label>\n';
	});
	return ret;
}

function getHTMLForSelect(field, solverIndex, id){
	var ret = "";
	ret += '<select size="'+field.values.length+'" id="'+id+'">\n';
	field.values.forEach(function(text, index){
		ret += '	<option value='+text+'>'+text+'</option>\n';
	});
	ret += '</select>\n';
	return ret;
}

function getHTMLForCheckImg(field, solverIndex, id){
	var ret = "";
	field.values.forEach(function(img, index){
		var id2 = id+"-i"+index;
		ret += '<input type="checkbox" class="checkI" name="'+field.name+'" value="'+index+'" id="'+id2+'">\n';
		ret += '<label for="'+id2+'">\n';
		ret += '	<img class="inputCheckImg" src="img/'+field.folder+'/'+img+'" />\n';
		ret += '</label>\n';
	});
	return ret;
}

function getHTMLForImgMap(field, solverIndex, id){
	var ret = "";
	ret += '<img src="img/'+field.img+'" usemap="'+ id +'" />\n';
	ret += '<map name="'+ id +'">\n';
	field.values.forEach(function(area, index){
		ret += '<area shape="'+ area.shape +'" coords="'+ area.coords +'" onclick="mapHandler(\''+ area.value + '\', ' + solverIndex +');changed('+solverIndex+')"/>\n';
	});
	ret += '</map>\n';
	return ret;
}