modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Complicated Wires",
			img : "VennWireComponent.svg"
		};
	},

	getSolver : function(){

		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = 'Complicated Wires:';
            for(var i = 0; i < 6; ++i){
			    outputDOMElems[i+2].style.backgroundImage = 'url("img/dontKnow.png")';
            }
		}

		function onchange(data, outputDOMElems){
            var wires = [];
            var leds = getDataElemByName(data,"leds").value;
            var reds = getDataElemByName(data,"reds").value;
            var blues = getDataElemByName(data,"blues").value;
            var stars = getDataElemByName(data,"stars").value;
            var batteryWarning = false;
            var serialWarning = false;
            var parallelWarning = false;
            for(var i = 0; i < 6; i++){
                var str = String(i);
                wires.push({led:(leds.indexOf(str) !== -1),
                            red:(reds.indexOf(str) !== -1),   
                            blue:(blues.indexOf(str) !== -1),   
                            star:(stars.indexOf(str) !== -1)})
            }
            wires.forEach(function(wire, i){
                switch(needToCut(wire)){
                case "C":
                    setResult(i, "cut.png");
                    break;
                case "D":
                    setResult(i, "dontCut.png");
                    break;
                case "B":
                    if(generalData.batteryCount === "" || isNaN(Number(generalData.batteryCount))){
                        setResult(i, "battery.png");
                        batteryWarning = true;
                    } else {
                        if(Number(generalData.batteryCount >= 2))
                            setResult(i, "cut.png");
                        else
                            setResult(i, "dontCut.png");
                    }
                    break;
                case "P":
                    if(generalData.parallelPort === "" || generalData.parallelPort === undefined){
                        setResult(i, "parallelPort.png");
                        parallelWarning = true;
                    } else {
                        if(generalData.parallelPort === "Yes")
                            setResult(i, "cut.png");
                        else
                            setResult(i, "dontCut.png");
                    }
                    break;
                case "S":
                    if(generalData.serialLastDigit === "" || generalData.serialLastDigit === undefined){
                        setResult(i, "serial.png");
                        serialWarning = true;
                    } else {
                        if(generalData.serialLastDigit % 2 === 0)
                            setResult(i, "cut.png");
                        else
                            setResult(i, "dontCut.png");
                    }
                    break;
                }
            });
            var warnings = "";
            warnings += batteryWarning ? "<br>Set the battery count." : "";
            warnings += parallelWarning ? "<br>Set if there is a parallel port." : "";
            warnings += serialWarning ? "<br>Set the serial number's last digit." : "";
            outputDOMElems[8].innerHTML = warnings; 

            function needToCut(w){
                if(!w.star && !w.led && (w.red || w.blue) ||
                   !w.star &&  w.led &&  w.red && w.blue) 
                    return "S";
                if(!w.led && !w.blue)
                    return "C";
                if(!w.star &&  w.led && !w.red && !w.blue ||
                    w.star && !w.led && !w.red &&  w.blue ||
                    w.star &&  w.led &&  w.red &&  w.blue)
                    return "D";
                if(!w.blue)
                    return "B";
                else
                    return "P";
            }
            function setResult(index, image){
                outputDOMElems[index+2].style.backgroundImage = `url("img/${image}")`;
            }
		}

		return {
			fields : [
                {func : "out", type : "text", name : "wiresLabel"},
                {func : "in", type : "checkI", name : "leds", values : ["led.png","led.png","led.png","led.png","led.png","led.png"], folder : "other"},
                {func : "layout", type : "lineBreak"},	
                {func : "in", type : "checkC", name : "reds", values : ["red","red","red","red","red","red"]},
                {func : "layout", type : "lineBreak"},
                {func : "in", type : "checkC", name : "blues", values : ["blue","blue","blue","blue","blue","blue"]},
                {func : "layout", type : "lineBreak"},
                {func : "in", type : "checkI", name : "stars", values : ["star.png","star.png","star.png","star.png","star.png","star.png"], folder : "other"},
                {func : "layout", type : "lineBreak"},
				{func : "out", type : "text", name : "paddingLabel"},
                {func : "out", type : "imgBox", name : "res1"},
                {func : "out", type : "imgBox", name : "res2"},
                {func : "out", type : "imgBox", name : "res3"},
                {func : "out", type : "imgBox", name : "res4"},
                {func : "out", type : "imgBox", name : "res5"},
                {func : "out", type : "imgBox", name : "res6"},
                {func : "out", type : "text", name : "outText"},
			],
			init : init,
			onchange : onchange
		}
	}
});