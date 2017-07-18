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
            console.log(data);

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