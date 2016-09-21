modules.push({
	getMenuEntry : function(){ 
		return {
			name : "General",
			img : "GeneralComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = "Last digit of serial number:";
			outputDOMElems[1].innerHTML = "Number of batteries:";
			outputDOMElems[2].innerHTML = "Lit indicators:";
		}

		function onchange(data, outputDOMElems){
			generalData = [];
			generalData.push({ name : "serialLastDigit", value : getDataElemByName(data, "serialLastDigit").value});
			generalData.push({ name : "batteryCount", value : getDataElemByName(data, "batteryCount").value});
			generalData.push({ name : "indicators", value : getIndicatorValues()});

			function getIndicatorValues(){
				var out = [];
				var inds = ["CAR", "FRK"];
				getDataElemByName(data, "indicators").value.forEach(function(itemI){
					out.push(inds[itemI]);
				});
				return out;
			}
		}

		return {
			fields : [
				{func : "out", type : "text", name : "serialLabel"},
				{func : "in", type : "textBox", name : "serialLastDigit"},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "text", name : "batteryLabel"},
				{func : "in", type : "textBox", name : "batteryCount"},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "text", name : "indicatorLabel"},
				{func : "in", type : "checkI", name : "indicators", values : ["CAR.png", "FRK.png"], folder : "indicators"}				
			],
			init : init,
			onchange : onchange
		}
	}
});