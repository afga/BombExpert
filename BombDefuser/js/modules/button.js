modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Button",
			img : "ButtonComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = "Not enough information.";
		}

		function onchange(data, outputDOMElems){
			
		}

		return {
			fields : [
				{func : "in", type : "radioC", name : "buttonColor", values : ["blue", "white", "yellow", "red", "none"]},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "radioT", name : "buttonText", values : ["Abort", "Detonate", "Hold", "Other"]},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "radioC", name : "lightColor", values : ["blue", "white", "yellow", "none"]},
				{func : "out", type : "text", name : "outText"}
			],
			init : init,
			onchange : onchange
		}
	}
});