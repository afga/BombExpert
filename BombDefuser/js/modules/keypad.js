modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Keypad",
			img : "KeypadComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].style.backgroundImage = 'url("img/dontKnow.png")';
			outputDOMElems[1].style.backgroundImage = 'url("img/dontKnow.png")';
			outputDOMElems[2].style.backgroundImage = 'url("img/dontKnow.png")';
			outputDOMElems[3].style.backgroundImage = 'url("img/dontKnow.png")';
		}

		function onchange(data, outputDOMElems){
			
		}

		return {
			fields : [
				{func : "in", type : "checkI", name : "pads1", values : ["1-copyright.svg","2-filledstar.svg","3-hollowstar.svg","4-smileyface.svg","5-doublek.svg","6-omega.svg"], folder : "keypads"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "checkI", name : "pads2", values : ["7-squidknife.svg","8-pumpkin.svg","9-hookn.svg","11-six.svg","12-squigglyn.svg","13-at.svg"], folder : "keypads"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "checkI", name : "pads3", values : ["14-ae.svg","15-meltedthree.svg","16-euro.svg","18-nwithhat.svg","19-dragon.svg","20-questionmark.svg"], folder : "keypads"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "checkI", name : "pads4", values : ["21-paragraph.svg","22-rightc.svg","23-leftc.svg","24-pitchfork.svg","26-cursive.svg","27-tracks.svg"], folder : "keypads"},
				{func : "layout", type : "lineBreak"},
				{func : "in", type : "checkI", name : "pads5", values : ["28-balloon.svg","30-upsidedowny.svg","31-bt.svg"], folder : "keypads"},
				{func : "layout", type : "lineBreak"},
				{func : "out", type : "imgBox", name : "result1"},
				{func : "out", type : "imgBox", name : "result2"},
				{func : "out", type : "imgBox", name : "result3"},
				{func : "out", type : "imgBox", name : "result4"}
			],
			init : init,
			onchange : onchange
		}
	}
});