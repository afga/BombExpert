modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Wire Sequences",
			img : "WireSequenceComponent.svg"
		};
	},

	getSolver : function(){

		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = 'Wire Sequences:';
            for(var i = 0; i < 15; ++i){
			    outputDOMElems[i+1].style.backgroundImage = 'url("img/dontKnow.png")';
            }
		}

		function onchange(data, outputDOMElems){
            var rules = {red:["C","B","A","AC","B","AC","ABC","AB","B"],
                         blue:["B","AC","B","A","B","BC","C","AC","A"],
                         black:["ABC","AC","B","AC","B","BC","AB","C","C"]};
            var wires = [];
            var count = {red: 0, blue: 0, black: 0};

            console.log(data);


            
            function setResult(index, image){
                outputDOMElems[index+1].style.backgroundImage = `url("img/${image}")`;
            }
		}

        var fields = [];
        fields.push({func : "out", type : "text", name : "wiresLabel"});
        for(var i = 0; i < 15; i++){
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