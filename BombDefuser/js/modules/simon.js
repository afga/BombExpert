modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Simon",
			img : "SimonComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = "Waiting for input...<br />(Make sure you have serial vowel<br />and strikes filled out in general.)"; 
		}

		function onchange(data, outputDOMElems){
			
		}

		return {
			fields : [
				{func : "in", type : "radioC", name : "currColor", values : ["red", "blue", "yellow", "green"]},
				{func : "out", type : "text", name : "out"}
			],
			init : init,
			onchange : onchange
		}
	}
});