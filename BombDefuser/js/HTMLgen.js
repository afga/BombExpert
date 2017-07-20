function getHTMLEntryFromMenuEntry(menuE, index){
	var x = '';
	x += `<li class="menu-module" id="menu-i${index}">`;
	x += `<img src="img/icons/${menuE.img}">`;
	x += '</li>';
	return x;
}

function getSolverHTML(fields, solverIndex){
	var out = '';
	out += `<div class="solve-module" id="${getSolverId(solverIndex)}">`;
	out += `<form oninput="changed(${solverIndex});" onchange="changed(${solverIndex});">`;
	fields.forEach(function(field, index){
		switch(field.func){
			case 'in':
			case 'inout':
				switch(field.type){
					case 'textBox':
						out += getHTMLForInputText(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'numBox':
						out += getHTMLForInputNum(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'radioC':
						out += getHTMLForRadioColor(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case "radioI":
						out += getHTMLForRadioImg(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'radioT':
						out += getHTMLForRadioText(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'select':
						out += getHTMLForSelect(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'checkI':
						out += getHTMLForCheckImg(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'checkC':
						out += getHTMLForCheckColor(field, solverIndex, getFieldId(field, solverIndex));
						break;
					case 'imgMap':
						out += getHTMLForImgMap(field, solverIndex, getFieldId(field, solverIndex));
						break;
					default:
						console.log("unknown input type: " + field.type);
				}
				break;
			case 'out':
				switch(field.type){
					case 'text':
						out += `<p class="outText" id="${getFieldId(field, solverIndex)}"></p>`;
						break;
					case 'imgBox':
						out += `<div class="imgBox" id="${getFieldId(field, solverIndex)}"></div>`;
						break;
					case "box":
						out += `<div class="box" id="${getFieldId(field, solverIndex)}"></div>`;
						break;
					default:
						console.log("unknown output type: " + field.type);
				}
				break;
			case 'layout':
				switch(field.type){
					case 'lineBreak':
						out += '<br>';
						break;
					default:
						console.log("unknown layout type: " + field.type);
				}
				break;
			default:
				console.log("unknown func type: " + field.func);
		}
	});
	out += '</form>';
	//general solver shouldn't have a close button
	if (solverIndex !== 1){
		out += `<span class="close-button" onclick="removeSolver(${solverIndex})">×</span>`;
	}
	out += '</div>';
	return out;
}

function getSolverId(solverIndex){
	return `solver-i${solverIndex}`;
}

function getFieldId(field, solverIndex){
	return `field-s${solverIndex}-n${field.name}-t${field.type}`;
}

function getHTMLForInputText(field, solverIndex, id){
	return `<input type="text" id="${id}">`;
}

function getHTMLForInputNum(field, solverIndex, id){
	return `<input type="number" id="${id}"${getHTMLForAttributes(field.attributes)}>`;
}

function getHTMLForRadioColor(field, solverIndex, id){
	var ret = '';
	field.values.forEach(function(color, index){
		var id2 = `${id}-i${index}`;
		ret += `<input type="radio" class="radioC" name="${field.name}" value="${color}" id="${id2}">`;
		ret += `<label for="${id2}">`;
		ret += `<div class="inputColorBox ${color}"></div>`;
		ret += '</label>';
	});
	return ret;
}

function getHTMLForRadioImg(field, solverIndex, id){
	var ret = '';
	field.values.forEach(function(img, index){
		var id2 = `${id}-i${index}`;
		ret += `<input type="radio" class="radioI" name="${field.name}" value="${index}" id="${id2}">`;
		ret += `<label for="${id2}">`;
		ret += `<img class="inputCheckImg" src="img/${field.folder}/${img}" />`;
		ret += '</label>';
	});
	return ret;
}

function getHTMLForRadioText(field, solverIndex, id){
	var ret = '';
	field.values.forEach(function(text, index){
		var id2 = `${id}-i${index}`;
		ret += `<input type="radio" class="radioT" name="${field.name}" value="${text}" id="${id2}">`;
		ret += `<label for="${id2}">${text}</label>`;
	});
	return ret;
}

function getHTMLForSelect(field, solverIndex, id){
	var ret = '';
	ret += `<select size="${field.values.length}" id="${id}">`;
	field.values.forEach(function(text, index){
		ret += `<option value="${text}">${text}</option>`;
	});
	ret += '</select>';
	return ret;
}

function getHTMLForCheckImg(field, solverIndex, id){
	var ret = '';
	field.values.forEach(function(img, index){
		var id2 = `${id}-i${index}`;
		ret += `<input type="checkbox" class="checkI" name="${field.name}" value="${index}" id="${id2}">`;
		ret += `<label for="${id2}">`;
		ret += `<img class="inputCheckImg" src="img/${field.folder}/${img}">`;
		ret += '</label>';
	});
	return ret;
}

function getHTMLForCheckColor(field, solverIndex, id){
	var ret = '';
	field.values.forEach(function(color, index){
		var id2 = `${id}-i${index}`;
		ret += `<input type="checkbox" class="checkC" name="${field.name}" value="${index}" id="${id2}">`;
		ret += `<label for="${id2}">`;
		ret += `<div class="inputColorBox ${color}"></div>`;
		ret += '</label>';
	});

	return ret;
}

function getHTMLForImgMap(field, solverIndex, id){
	var ret = '';
	ret += `<map name="${id}" id="${id}">`;
	field.values.forEach(function(area, index){
		ret += `<area shape="${area.shape}" coords="${area.coords}" onclick="mapHandler('${area.value}', ${solverIndex});">`;
	});
	ret += '</map>';
	ret += `<img src="img/${field.img}" usemap="#${id}" id="img-${id}"${getHTMLForAttributes(field.attributes)}>`;
	return ret;
}

function getHTMLForAttributes(attributes){
	var ret = '';
	attributes.forEach(function(attr){
		ret += ` ${attr.name}="${attr.value}"`;
	});
	return ret;
}