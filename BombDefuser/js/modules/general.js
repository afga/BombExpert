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
			outputDOMElems[1].innerHTML = "Serial has vowel:";
			outputDOMElems[2].innerHTML = "Strikes:";
			outputDOMElems[3].innerHTML = "Number of batteries:";
			outputDOMElems[4].innerHTML = "Lit indicators:";
		}

		function onchange(data, outputDOMElems){
			generalData = [];
			generalData.push({ name : "serialLastDigit", value : getDataElemByName(data, "serialLastDigit").value});
			generalData.push({ name : "serialVoewl", value : getDataElemByName(data, "serialVowel").value});
			generalData.push({ name : "strikes", value : getDataElemByName(data, "strikes").value});
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
				{func : "out", type : "text", name : "serialVowelLabel"},
				{func : "in", type : "radioT", name : "serialVowel", values : ["Yes", "No"]},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "text", name : "strikesLabel"},
				{func : "in", type : "radioT", name : "strikes", values : ["0", "1", "2"]},
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