modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Passwords",
			img : "PasswordComponent.svg"
		};
	},

	getSolver : function(){

		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = 'Passwords:';
		}

		function onchange(data, outputDOMElems){
            
            
		}

		return {
			fields : [
                {func : "out", type : "text", name : "passwordsLabel"},
                {func : "in", type : "textBox", name : "letter1"},
				{func : "layout", type : "lineBreak"},
                {func : "in", type : "textBox", name : "letter2"},
				{func : "layout", type : "lineBreak"},
                {func : "in", type : "textBox", name : "letter3"},
				{func : "layout", type : "lineBreak"},
                {func : "in", type : "textBox", name : "letter4"},
				{func : "layout", type : "lineBreak"},
                {func : "in", type : "textBox", name : "letter5"},
				{func : "layout", type : "lineBreak"},
                {func : "out", type : "text", name : "outText"},
			],
			init : init,
			onchange : onchange
		}
	}
});