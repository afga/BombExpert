modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Button",
			img : "ButtonComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = "Button color:";
			outputDOMElems[1].innerHTML = "Button text:";
		}

		function onchange(data, outputDOMElems){
			var buttonColor = getDataElemByName(data, "buttonColor").value;
			var buttonText = getDataElemByName(data, "buttonText").value;
			var batteryCount = generalData.batteryCount;
			var batteryCountIsSet = batteryCount !== "" && !isNaN(Number(batteryCount));
			var indicators = generalData.indicators;
			var checkCAR = false;
			var resCARon = "";
			var checkFRK = false;
			var resFRKon = "";
			var resultElem = outputDOMElems[2];
			var holdRelease = function(){
				if(buttonColor === "")
					return "Set the Button's color.";
				if(buttonText === "") 
					return "Set the Button's text.";
				if(buttonColor==="blue" &&
					buttonText==="Abort")
					return "Hold";
				if(buttonText==="Detonate"){
					if(!batteryCountIsSet)
						return "Set the battery count.";
					else if(batteryCount > 1)
						return "Release";
				}
				if(buttonColor==="white"){
					if(hasLitIndicator("CAR"))
						return "Hold";
					else{
						checkCAR = true;
						resCARon = "Hold";
					}
				}
				if(!batteryCountIsSet)
					return "Set the battery count.";
				else {
					if(batteryCount > 2){
						if(hasLitIndicator("FRK"))
							return "Release";
						else{
							checkFRK = true;
							resFRKon = "Release";
						}
					}
				}
				if(buttonColor==="yellow")
					return "Hold";
				if(buttonColor==="red" &&
						buttonText==="Hold")
					return "Release";
				else
					return "Hold";
			}();

			var resText = "";
			if(checkCAR && !checkFRK && resCARon !== holdRelease){
				resText += "Check for lit <b>CAR</b> indicator. If not present or not lit:<br>";
			} else if(!checkCAR && checkFRK && resFRKon !== holdRelease){
				resText += "Check for lit <b>FRK</b> indicator. If not present or not lit:<br>";
			} else if(checkCAR && checkFRK && (resCARon !== holdRelease || resFRKon !== holdRelease)){
				resText += "Check for lit <b>CAR and FRK</b> indicators. If not present or not lit:<br>";
			}
			
			if(holdRelease === "Release"){
				resText += "<b>Press</b> and release immediately.";
			}else if(holdRelease === "Hold"){
				resText += "<b>Hold</b> down the button and check the appearing light:<br>";
				resText += "<b>Blue</b>: release when <b>4</b> is visible.<br>";
				resText += "<b>Yellow</b>: release when <b>5</b> is visible.<br>";
				resText += "Anything else: release when <b>1</b> is visible.";
			}else{
				resText += holdRelease;
			}
			resultElem.innerHTML = resText;

			function hasLitIndicator(indicator){
				for(var i=0;i<indicators.length;++i){
					if(indicators[i]===indicator)
						return true;
				}
				return false;
			}
		}

		return {
			fields : [
				{func : "out", type : "text", name : "buttonColorLabel"},
				{func : "in", type : "radioC", name : "buttonColor", values : ["blue", "white", "yellow", "red", "none"]},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "text", name : "buttonTextLabel"},
				{func : "in", type : "select", name : "buttonText", values : ["Abort","Detonate","Hold","[Other]"]},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "text", name : "outText"}
			],
			init : init,
			onchange : onchange
		}
	}
});