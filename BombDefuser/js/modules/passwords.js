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
            var passwords = ["about","after","again","below","could",
                             "every","first","found","great","house",
                             "large","learn","never","other","place",
                             "plant","point","right","small","sound",
                             "spell","still","study","their","there",
                             "these","thing","think","three","water",
                             "where","which","world","would","write"];
            var drums = [];
            for(var i = 0; i < 5; i++){
                drums.push(getDataElemByName(data,`letter${i+1}`).value);
            }
            var possiblePwds = [];
            passwords.forEach(function(pwd){
                if(possible(pwd))
                    possiblePwds.push(pwd);
            });
            var res = possiblePwds.length > 9 ? "Too many results." : possiblePwds.join(", ");
            outputDOMElems[1].innerHTML = res === "" ? "No matching pwd." : res;

            function possible(pwd){
                for(var i = 0; i < 5; i++){
                    if(drums[i] !== "" && drums[i].indexOf(pwd[i]) == -1)
                        return false;
                }
                return true;
            }            
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