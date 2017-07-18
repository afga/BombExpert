modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Wire Sequences",
			img : "WireSequenceComponent.svg"
		};
	},

	getSolver : function(){
        var rowsNum = 15;

		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = 'Wire Sequences:';
            for(var i = 0; i < rowsNum; ++i){
			    outputDOMElems[i+1].style.backgroundImage = 'url("img/dontKnow.png")';
            }
		}

		function onchange(data, outputDOMElems){
            var rules = {red:["C","B","A","AC","B","AC","ABC","AB","B"],
                         blue:["B","AC","B","A","B","BC","C","AC","A"],
                         black:["ABC","AC","B","AC","B","BC","AB","C","C"]};
            var count = {red: 0, blue: 0, black: 0};

            for(var i = 0; i < rowsNum; i++){
                var color = getColor(i);    // "red", "blue", "black", ""
                var letter = getLetter(i);  // "A", "B", "C", ""
                if(letter !== ""){
                    switch(color){
                    case "red":
                        if(rules.red[count.red].indexOf(letter) !== -1)
                            setResult(i, "cut.png");
                        else
                            setResult(i, "dontCut.png");
                        count.red++;
                        break;
                    case "blue":
                        if(rules.blue[count.blue].indexOf(letter) !== -1)
                            setResult(i, "cut.png");
                        else
                            setResult(i, "dontCut.png");
                        count.blue++;
                        break;
                    case "black":
                        if(rules.black[count.black].indexOf(letter) !== -1)
                            setResult(i, "cut.png");
                        else
                            setResult(i, "dontCut.png");
                        count.black++;
                        break;
                    default:
                        setResult(i, "dontKnow.png");
                    }
                } else {
                    setResult(i, "dontKnow.png");
                }
            }

            function getColor(index){
                return getDataElemByName(data, `color${index+1}`).value;
            }
            function getLetter(index){
                var letters = ["A","B","C"];
                var letterIndexString = getDataElemByName(data, `letter${index+1}`).value;
                if(letterIndexString !== ""){
                    return letters[Number(letterIndexString)];
                } else {
                    return "";
                }
            }
            function setResult(index, image){
                outputDOMElems[index+1].style.backgroundImage = `url("img/${image}")`;
            }
		}

        var fields = [];
        fields.push({func : "out", type : "text", name : "wiresLabel"});
        for(var i = 0; i < rowsNum; i++){
            fields.push({func : "in", type : "radioC", name : `color${i+1}`, values : ["red","blue","black"]});
            fields.push({func : "in", type : "radioI", name : `letter${i+1}`, values : ["A.png","B.png","C.png"], folder : "other"});
            fields.push({func : "out", type : "imgBox", name : `res${i+1}`});
            fields.push({func : "layout", type : "lineBreak"});
        }

		return {
			fields : fields,
			init : init,
			onchange : onchange
		}
	}
});