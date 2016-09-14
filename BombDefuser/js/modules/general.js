modules.push({
	getMenuEntry : function(){ 
		return {
			name : "General",
			img : "GeneralComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
		}

		function onchange(data, outputDOMElems){
			generalData.push({ name: "serialLastDigit", value : getDataElemByName(data,"serialLastDigit").value});
		}

		return {
			fields : [
				{func : "in", type : "textBox", name : "serialLastDigit"}
			],
			init : init,
			onchange : onchange
		}
	}
});