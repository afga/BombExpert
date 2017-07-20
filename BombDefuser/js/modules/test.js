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
					{shape : "rect", coords : "0,0,50,50", value : "A"},
					{shape : "rect", coords : "50,0,100,50", value : "B"}
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