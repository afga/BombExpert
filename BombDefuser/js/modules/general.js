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
			outputDOMElems[2].innerHTML = "Has parallel port:";
			outputDOMElems[3].innerHTML = "Strikes:";
			outputDOMElems[4].innerHTML = "Number of batteries:";
			outputDOMElems[5].innerHTML = "Lit indicators:";
		}

		function onchange(data, outputDOMElems){
			generalData = {};
			generalData.serialLastDigit = getDataElemByName(data, "serialLastDigit").value;
			generalData.serialVowel = getDataElemByName(data, "serialVowel").value;
			generalData.parallelPort = getDataElemByName(data, "parallelPort").value;
			generalData.strikes = getDataElemByName(data, "strikes").value;
			generalData.batteryCount = getDataElemByName(data, "batteryCount").value;
			generalData.indicators = getIndicatorValues();

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
				{func : "out", type : "text", name : "parallelPortLabel"},
				{func : "in", type : "radioT", name : "parallelPort", values : ["Yes", "No"]},
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