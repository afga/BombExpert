modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Test Module",
			img : "test.png" //icons/test.png
		};
	},

	getSolver : function(){
		function onchange(data, outputDOMElems){
			var outText = "";
			outText += getDataElemByName(data, "testText").value;
			outText += "<br />\n";
			outText += getDataElemByName(data, "testRadioColor").value;
			outText += "<br />\n";



			outputDOMElems[0].innerHTML = outText; 
		};

		return {
			inputFields : [
				{type : "text", name : "testText" },
				{type : "lineBreak"},
				{type : "radioC", name : "testRadioColor", values : ["red","black","white","yellow","blue"]},
				{type : "lineBreak"},
				{type : "radioT", name : "testRadioText", values : ["A","B","C"]},
				{type : "radioC", name : "testRadioColor2", values : ["red","blue","black"]},
				{type : "lineBreak"},
				{type : "select", name : "testSelect", values : ["Abort","Detonate","Hold","[Other]"]},
				{type : "lineBreak"},
				{type : "checkI", name : "testCheckImg", values : ["1-copyright.png","2-filledstar.png","3-hollowstar.png","4-smileyface.png","5-doublek.png"], folder : "keypads"},
				{type : "lineBreak"},
				{type : "imgMap", name : "testImgMap", img : "mctree.gif", values : [{shape:"rect",coords:"0,0,50,50"}]}
			],
			outputFields : [
				{type : "text", name : "out"}
			],
			onchange : onchange
		}
	}
});