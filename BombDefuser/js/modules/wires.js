modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Wires",
			img : "WireComponent.svg"
		};
	},

	getSolver : function(){

		function init(outputDOMElems){
            outputDOMElems[0].innerHTML = 'Wires:';
            for(var i = 0; i < 6; ++i){
			    outputDOMElems[i+1].style.backgroundImage = 'url("img/dontKnow.png")';
            }
		}

		function onchange(data, outputDOMElems){
            var colors = [];
            var colorNum = {red:0,blue:0,white:0,black:0,yellow:0};
            var empty = ["","","","","",""];
            var serialLastDigitEven = getDataElemByName(data, "serialLastDigit").value % 2 == 0;
            for(var i = 1; i <= 6; ++i){
                var col = getDataElemByName(data, "wire"+i+"Color").value;
                if(col === ""){
                    init(outputDOMElems);
                    return outputDOMElems[7].innerHTML = 'Missing wire indicators.';
                }
                if(col !== "none")
                    colors.push({c:col,i:i});
                else
                    empty[i-1] = "none";
            }
            colors.forEach(function(color){
                switch(color.c){
                    case "red":
                        colorNum.red++;
                        break;
                    case "blue":
                        colorNum.blue++;
                        break;
                    case "white":
                        colorNum.white++;
                        break;
                    case "black":
                        colorNum.black++;
                        break;
                    case "yellow":
                        colorNum.yellow++;
                        break;
                    default:
                        console.log("ismeretlen szin: "+color.c);
                }
            });

            function lastWire(color){
                for(var i = colors.length-1; i >= 0; --i){
                    if(color===undefined ||colors[i].c === color){
                        return colors[i];
                    }
                }
                return {c:"",i:0};
            }
            function nthWire(n){
                if(colors.length >= n){
                    return colors[n-1];
                }
                return {c:"",i:0};
            }

            var cut = function(){
                switch(colors.length){
                    case 3:
                        if(colorNum.red === 0)
                            return nthWire(2).i;
                        else if(lastWire().c === "white")
                            return lastWire().i;
                        else if(colorNum.blue > 1)
                            return lastWire("blue").i;
                        else
                            return lastWire().i;
                    case 4:
                        if(colorNum.red > 1){
                            if(getDataElemByName(data, "serialLastDigit").value ===undefined)
                                return 0;
                            else if(!serialLastDigitEven)
                                return lastWire("red").i;
                        }
                        else if(lastWire().c === "yellow" && colorNum.red == 0)
                            return nthWire(1).i;
                        else if(colorNum.blue == 1)
                            return nthWire(1).i;
                        else if(colorNum.yellow > 1)
                            return lastWire().i;
                        else
                            return nthWire(2).i;
                    case 5:
                        if(lastWire().c === "black"){
                            if(getDataElemByName(data, "serialLastDigit").value ===undefined)
                                return 0;
                            else if(!serialLastDigitEven)
                                return nthWire(4).i;
                        }
                        else if(colorNum.red == 1 && colorNum.yellow > 1)
                            return nthWire(1).i;
                        else if(colorNum.black == 0)
                            return nthWire(2).i;
                        else
                            return nthWire(1).i;
                    case 6:
                        if(colorNum.yellow == 0){
                            if(getDataElemByName(data, "serialLastDigit").value ===undefined)
                                return 0;
                            else if(!serialLastDigitEven)
                                return nthWire(3).i;
                        }
                        else if(colorNum.yellow == 1 && colorNum.white > 1)
                            return nthWire(4).i;
                        else if(colorNum.red == 0)
                            return lastWire().i;
                        else
                            return nthWire(4).i;
                    default:
                        return -1;
                }
            }();
            if(cut > 0){
                setResult(cut);
            } else {
                init(outputDOMElems);
                switch(cut){
                case -1:
                    outputDOMElems[7].innerHTML = 'Invalid wire count.';    
                    break;
                case 0:
                    outputDOMElems[7].innerHTML = 'Missing serial last digit.';
                    break;
                }
            }

            function setResult(index){
                outputDOMElems[7].innerHTML = '';
                for(var i = 0; i < 6; ++i){
                    if(i+1 === index){
                        outputDOMElems[i+1].style.backgroundImage = 'url("img/cut.png")';
                    } else if(empty[i] === "none"){
                        outputDOMElems[i+1].style.backgroundImage = 'url("img/dontKnow.png")';
                    } else {
                        outputDOMElems[i+1].style.backgroundImage = 'url("img/dontCut.png")';
                    }
                }
            }
		}

        var fields = [{func : "out", type : "text", name: "wiresLabel"}];
        for(var i = 1; i <= 6; ++i){
            fields.push({func : "in", type : "radioC", name : "wire"+i+"Color", values : ["red","black","white","yellow","blue","none"]});
            fields.push({func : "out", type : "imgBox", name : "res"+i});
            fields.push({func : "layout", type : "lineBreak"});
        }
        fields.push({func : "out", type : "text", name : "outText"});

		return {
			fields : fields,
			init : init,
			onchange : onchange
		}
	}
});