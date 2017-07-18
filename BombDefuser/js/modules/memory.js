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
			outputDOMElems[1].innerHTML = '(Display / Position / Value)';
		}

		function onchange(data, outputDOMElems){
			
		}

		return {
			fields : [
                {func : "out", type : "text", name : "memoryLabel"},
                {func : "out", type : "text", name : "disp-pos-val"},
                {func : "in", type : "numBox", name : "display1", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos1", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "num1", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "in", type : "numBox", name : "display2", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos2", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "num2", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "in", type : "numBox", name : "display3", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos3", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "num3", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "in", type : "numBox", name : "display4", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos4", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "num4", min : 1, max : 4, step : 1},
                {func : "layout", type : "lineBreak"},
                {func : "in", type : "numBox", name : "display5", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "pos5", min : 1, max : 4, step : 1},
                {func : "inout", type : "numBox", name : "num5", min : 1, max : 4, step : 1},
			],
			init : init,
			onchange : onchange
		}
	}
});