modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Test Module",
			img : "test.png" //icons/test.png
		};
	},

	getSolver : function(){
		var mapValue = "";

		function init(outputDOMElems){
			outputDOMElems[0].style.backgroundImage = 'url("img/dontKnow.png")';
		}

		function onchange(data, outputDOMElems){
			var outText = "";

			outText += "text: "+getDataElemByName(data, "testText").value;
			outText += "<br />\n";

			var col1 = getDataElemByName(data, "testRadioColor").value;
			if(col1 === "")
				outputDOMElems[0].style.backgroundImage = 'url("img/dontKnow.png")';
			else if(col1 === "red")
				outputDOMElems[0].style.backgroundImage = 'url("img/cut.png")';
			else
				outputDOMElems[0].style.backgroundImage = 'url("img/dontCut.png")';
			outText += "radio color: "+col1;
			outText += "<br />\n";

			outText += "radio text: "+getDataElemByName(data, "testRadioText").value;
			outText += " ";
			outText += getDataElemByName(data, "testRadioColor2").value;
			outText += "<br />\n";

			outText += "select: "+getDataElemByName(data, "testSelect").value;
			outText += "<br />\n";

			outText += "img checkbox: ";
			getDataElemByName(data, "testCheckImg").value.forEach(function(item){
				outText += item + ' ';
			});
			outText += "<br />\n";
			outText += "map: " + mapValue;
			outText += "<br />\n";


			outputDOMElems[1].innerHTML = outText; 
		}

		function mapHandler(value, fieldName){
			mapValue += value;
		}


		return {
			fields : [
				{func : "in", type : "textBox", name : "testText"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "radioC", name : "testRadioColor", values : ["red","black","white","yellow","blue","none"]},
				{func : "out", type : "imgBox", name : "resImg"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "radioT", name : "testRadioText", values : ["A","B","C"]},
				{func : "in", type : "radioC", name : "testRadioColor2", values : ["red","blue","black"]},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "select", name : "testSelect", values : ["Abort","Detonate","Hold","[Other]"]},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "checkI", name : "testCheckImg", values : ["1-copyright.png","2-filledstar.png","3-hollowstar.png","4-smileyface.png","5-doublek.png"], folder : "keypads"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "imgMap", name : "testImgMap", img : "mctree.gif", values : [
					{shape : "circle", coords : "186,112,14", value : "A"},
					{shape : "circle", coords : "254,260,14", value : "B"},
					{shape : "circle", coords : "309,260,14", value : "C"},
					{shape : "circle", coords : "268,185,14", value : "D"},
					{shape : "circle", coords : "132,38,14", value : "E"},
					{shape : "circle", coords : "91,260,14", value : "F"},
					{shape : "circle", coords : "378,185,14", value : "G"},
					{shape : "circle", coords : "32,260,14", value : "H"},
					{shape : "circle", coords : "77,112,14", value : "I"},
					{shape : "circle", coords : "228,260,14", value : "J"},
					{shape : "circle", coords : "323,185,14", value : "K"},
					{shape : "circle", coords : "146,260,14", value : "L"},
					{shape : "circle", coords : "404,112,14", value : "M"},
					{shape : "circle", coords : "297,112,14", value : "N"},
					{shape : "circle", coords : "432,185,14", value : "O"},
					{shape : "circle", coords : "200,260,14", value : "P"},
					{shape : "circle", coords : "390,260,14", value : "Q"},
					{shape : "circle", coords : "159,185,14", value : "R"},
					{shape : "circle", coords : "51,185,14", value : "S"},
					{shape : "circle", coords : "350,38,14", value : "T"},
					{shape : "circle", coords : "105,185,14", value : "U"},
					{shape : "circle", coords : "63,260,14", value : "V"},
					{shape : "circle", coords : "214,185,14", value : "W"},
					{shape : "circle", coords : "282,260,14", value : "X"},
					{shape : "circle", coords : "335,260,14", value : "Y"},
					{shape : "circle", coords : "364,260,14", value : "Z"}
				], attributes: [
					{name: "width", value: "472"},
					{name: "height", value: "295"}
				]},
				{func : "out", type : "text", name : "out"}
			],
			init : init,
			onchange : onchange,
			mapHandler : mapHandler
		}
	}
});