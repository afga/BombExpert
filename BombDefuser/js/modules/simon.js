modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Simon",
			img : "SimonComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = "Simon Says:";
			outputDOMElems[1].innerHTML = "Make sure you have serial vowel and strikes filled out in general."; 
		}

		function onchange(data, outputDOMElems){
			const colors = ["red", "blue", "green", "yellow"];
			// rules[No vowel/Vowel][0/1/2 strikes][red/blue/green/yellow]
			const rules = [
				[	// No vowel
					/* 0 strike */ [1,3,2,0],
					/* 1 strike */ [0,1,3,2],
					/* 2 strikes*/ [3,2,1,0]
				],
				[	// Vowel
					/* 0 strike */ [1,0,3,2],
					/* 1 strike */ [3,2,1,0],
					/* 2 strikes*/ [2,0,3,1]
				]
			];
			var input = getDataElemByName(data,"currColor").value;
			var serialHasVowel = false;
			if(generalData.serialVowel !== "Yes" && generalData.serialVowel !== "No"){
				outputDOMElems[1].innerHTML = "Make sure you have serial vowel and strikes filled out in general."; 
			} else {
				serialHasVowel = generalData.serialVowel === "Yes";
				outputDOMElems[1].innerHTML = "Make sure you have strikes filled out in general.";
			}
			if(input !== ""){
				var ind1 = serialHasVowel ? 1 : 0;
				var ind2 = generalData.strikes === undefined ? 0 : Number(generalData.strikes);
				var ind3 = colorIndex(input);
				var resColorIndex = rules[ind1][ind2][ind3];
				var resColor = colors[resColorIndex];
				outputDOMElems[2].innerHTML = `<div class="inputColorBox ${resColor}"></div>`;
			}

			function colorIndex(color){
				return colors.indexOf(color);
			}
		}

		return {
			fields : [
                {func : "out", type : "text", name : "simonLabel"},
				{func : "out", type : "text", name : "warningLabel"},
				{func : "in", type : "radioC", name : "currColor", values : ["red", "blue", "green", "yellow"]},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "box", name : "outBox"}
			],
			init : init,
			onchange : onchange
		}
	}
});