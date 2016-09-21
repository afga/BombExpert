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
			var buttonColor = getDataElemByName(data, "buttonColor").value;
			var buttonText = getDataElemByName(data, "buttonText").value;
			var lightColor = getDataElemByName(data, "lightColor").value;
			var batteryCount = getDataElemByName(data, "batteryCount").value;
			var indicators = getDataElemByName(data, "indicators").value;
			function holdRelease(){
				if(buttonColor!=="" &&
					buttonText!=="" &&
					batteryCount!==""){
					if(buttonColor==="blue" &&
						buttonText==="Abort")
						return "Hold";
					else if(batteryCount>1 &&
							buttonText==="Detonate")
						return "Release";
					else if(buttonColor==="white" &&
							hasLitIndicator("CAR"))
						return "Hold";
					else if(batteryCount>2 &&
							hasLitIndicator("FRK"))
						return "Release";
					else if(buttonColor==="yellow")
						return "Hold";
					else if(buttonColor==="red" &&
							buttonText==="Hold")
						return "Release";
					else
						return "Hold";
				}
				else{
					return "Not enough information";
				}
			}

			if(holdRelease() === "Release"){
				outputDOMElems[0].innerHTML = "Press and release immediately.";
			}
			else if(holdRelease() === "Hold"){
				if(lightColor!==""){
					if(lightColor==="blue")
						outputDOMElems[0].innerHTML = "Release when 4 is visible.";
					else if(lightColor==="yellow")
						outputDOMElems[0].innerHTML = "Release when 5 is visible.";
					else
						outputDOMElems[0].innerHTML = "Release when 1 is visible.";
				}
				else{
					init(outputDOMElems);
				}
			}
			else{
				init(outputDOMElems);
			}

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
				{func : "in", type : "radioC", name : "buttonColor", values : ["blue", "white", "yellow", "red", "none"]},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "select", name : "buttonText", values : ["Abort","Detonate","Hold","[Other]"]},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "radioC", name : "lightColor", values : ["blue", "white", "yellow", "none"]},
				{func : "out", type : "text", name : "outText"}
			],
			init : init,
			onchange : onchange
		}
	}
});