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
				{type : "checkI", name : "testCheckImg", values : ["key_01.png","key_02.png","key_03.png"]},
				{type : "lineBreak"},
				{type : "imgMap", name : "testImgMap", img : "mapimg.png", values : [{shape:"rect",coords:"0,0,50,50"}]}
			],
			outputFields : [
				{type : "text", name : "out"}
			],
			onchange : onchange
		}
	}
});