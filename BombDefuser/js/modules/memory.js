modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Memory",
			img : "MemoryComponent.svg"
		};
	},

	getSolver : function(){

		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = 'Memory:';
			outputDOMElems[1].innerHTML = '(Display / Position / Label)';
            for(var i = 3; i < 17; i++){
                outputDOMElems[i].disabled = true;
            }
            outputDOMElems[17].innerHTML = "";
		}

		function onchange(data, outputDOMElems){
            init(outputDOMElems);
            var lastSetStage = -1;
            var display = [];
            var outText = outputDOMElems[17];
            outText.innerHTML = "";
            for(var i = 0; i < 5; ++i){
               display[i] = Number(inputElem("display", i+1).value);
            }
            console.log(display);

            // Stage 1
            switch(display[0]){
            case 1:
            case 2:
                inputElem("position", 1).value = "2";
                inputElem("position", 1).disabled = true;
                inputElem("label", 1).disabled = false;
                inputElem("display", 2).disabled = false;
                break;
            case 3:
                inputElem("position", 1).value = "3";
                inputElem("position", 1).disabled = true;
                inputElem("label", 1).disabled = false;
                inputElem("display", 2).disabled = false;
                break;
            case 4:
                inputElem("position", 1).value = "4";
                inputElem("position", 1).disabled = true;
                inputElem("label", 1).disabled = false;
                inputElem("display", 2).disabled = false;
                break;
            default:
                outText.innerHTML = "Set the display of the 1st stage."; 
                inputElem("position", 1).disabled = true;
                inputElem("label", 1).disabled = true;
                lastSetStage = 0;
            }
            // Stage 2
            if(lastSetStage == -1){
                if(inputElem("label", 1).value === ""){
                    outText.innerHTML = "Set the label of the 1st stage.<br>";
                }
                switch(display[1]){
                case 1:
                    inputElem("label", 2).value = "4";
                    inputElem("position", 2).disabled = false;
                    inputElem("label", 2).disabled = true;
                    inputElem("display", 3).disabled = false;
                    break;
                case 2:
                case 4:
                    inputElem("position", 2).value = inputElem("position", 1).value;
                    inputElem("position", 2).disabled = true;
                    inputElem("label", 2).disabled = false;
                    inputElem("display", 3).disabled = false;
                    break;
                case 3:
                    inputElem("position", 2).value = "1";
                    inputElem("position", 2).disabled = true;
                    inputElem("label", 2).disabled = false;
                    inputElem("display", 3).disabled = false;
                    break;
                default:
                    outText.innerHTML += "Set the display of the 2nd stage."; 
                    inputElem("position", 2).disabled = true;
                    inputElem("label", 2).disabled = true;
                    lastSetStage = 1;
                }
            }
            // Stage 3
            if(lastSetStage == -1){
                if(inputElem("label", 2).value === ""){
                    outText.innerHTML = "Set the label of the 2nd stage.<br>";
                }
                if(inputElem("position", 2).value === ""){
                    outText.innerHTML = "Set the position of the 2nd stage.<br>";
                }
                switch(display[2]){
                case 1:
                    inputElem("label", 3).value = inputElem("label", 2).value;
                    inputElem("position", 3).disabled = false;
                    inputElem("label", 3).disabled = true;
                    inputElem("display", 4).disabled = false;
                    break;
                case 2:
                    inputElem("label", 3).value = inputElem("label", 1).value;
                    inputElem("position", 3).disabled = false;
                    inputElem("label", 3).disabled = true;
                    inputElem("display", 4).disabled = false;
                    break;
                case 3:
                    inputElem("position", 3).value = "3";
                    inputElem("position", 3).disabled = true;
                    inputElem("label", 3).disabled = false;
                    inputElem("display", 4).disabled = false;
                    break;
                case 4:
                    inputElem("label", 3).value = "4";
                    inputElem("position", 3).disabled = false;
                    inputElem("label", 3).disabled = true;
                    inputElem("display", 4).disabled = false;
                    break;
                default:
                    outText.innerHTML += "Set the display of the 3rd stage."; 
                    inputElem("position", 3).disabled = true;
                    inputElem("label", 3).disabled = true;
                    lastSetStage = 2;
                }
            }
            // Stage 4
            if(lastSetStage == -1){
                if(inputElem("label", 3).value === ""){
                    outText.innerHTML = "Set the label of the 3rd stage.<br>";
                }
                if(inputElem("position", 3).value === ""){
                    outText.innerHTML = "Set the position of the 3rd stage.<br>";
                }
                switch(display[3]){
                case 1:
                    inputElem("position", 4).value = inputElem("position", 1).value;
                    inputElem("position", 4).disabled = true;
                    inputElem("label", 4).disabled = false;
                    inputElem("display", 5).disabled = false;
                    break;
                case 2:
                    inputElem("position", 4).value = "1";
                    inputElem("position", 4).disabled = true;
                    inputElem("label", 4).disabled = false;
                    inputElem("display", 5).disabled = false;
                    break;
                case 3:
                case 4:
                    inputElem("position", 4).value = inputElem("position", 2).value;
                    inputElem("position", 4).disabled = true;
                    inputElem("label", 4).disabled = false;
                    inputElem("display", 5).disabled = false;
                    break;
                default:
                    outText.innerHTML += "Set the display of the 4th stage."; 
                    inputElem("position", 4).disabled = true;
                    inputElem("label", 4).disabled = true;
                    lastSetStage = 3;
                }
            }
            // Stage 5
            if(lastSetStage == -1){
                if(inputElem("label", 4).value === ""){
                    outText.innerHTML = "Set the label of the 4th stage.<br>";
                }
                switch(display[4]){
                case 1:
                    inputElem("label", 5).value = inputElem("label", 1).value;
                    break;
                case 2:
                    inputElem("label", 5).value = inputElem("label", 2).value;
                    break;
                case 3:
                    inputElem("label", 5).value = inputElem("label", 4).value;
                    break;
                case 4:
                    inputElem("label", 5).value = inputElem("label", 3).value;
                    break;
                default:
                    outText.innerHTML += "Set the display of the 5th stage."; 
                    lastSetStage = 4;
                }
            }

            function inputElem(field, stage){
                switch(field){
                    case "display":
                        return outputDOMElems[3*stage - 1];
                    case "position":
                        return outputDOMElems[3*stage];
                    case "label":
                        return outputDOMElems[3*stage + 1];
                }
                console.log(`Unknown input field: ${field}`);
                return {};
            }
		}

		return {
			fields : [
                {func : "out", type : "text", name : "memoryLabel"},
                {func : "out", type : "text", name : "disp-pos-val"},
                {func : "inout", type : "numBox", name : "display1", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos1", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "lab1", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "inout", type : "numBox", name : "display2", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos2", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "lab2", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "inout", type : "numBox", name : "display3", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos3", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "lab3", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "inout", type : "numBox", name : "display4", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos4", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "lab4", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "inout", type : "numBox", name : "display5", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos5", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "lab5", min : 1, max : 4, step : 1},
                {func : "out", type : "text", name : "outText"},
			],
			init : init,
			onchange : onchange
		}
	}
});