modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Keypad",
			img : "KeypadComponent.svg"
		};
	},

	getSolver : function(){
		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = 'Keypads:';
			outputDOMElems[1].innerHTML = 'Resulting order:'
			for(var i = 0; i < 4; ++i){
				outputDOMElems[i+2].style.backgroundImage = 'url("img/dontKnow.png")';
			}
		}

		function onchange(data, outputDOMElems){
			var sets = [
				[25,12,26,11,7,9,21],
				[15,25,21,23,3,9,18],
				[1,8,23,5,14,26,3],
				[10,19,27,7,5,18,4],
				[22,4,27,20,19,17,2],
				[10,15,24,13,22,16,6]
			];
			var imgs = ["1-copyright.svg","2-filledstar.svg","3-hollowstar.svg","4-smileyface.svg","5-doublek.svg","6-omega.svg","7-squidknife.svg","8-pumpkin.svg","9-hookn.svg","11-six.svg","12-squigglyn.svg","13-at.svg","14-ae.svg","15-meltedthree.svg","16-euro.svg","18-nwithhat.svg","19-dragon.svg","20-questionmark.svg","21-paragraph.svg","22-rightc.svg","23-leftc.svg","24-pitchfork.svg","26-cursive.svg","27-tracks.svg","28-balloon.svg","30-upsidedowny.svg","31-bt.svg"];
			console.log(data)
			var currSel = [];
			getDataElemByName(data,"pads1").value.forEach(function(itemI){
				currSel.push(parseInt(itemI)+1);
			});
			getDataElemByName(data,"pads2").value.forEach(function(itemI){
				currSel.push(7+parseInt(itemI));
			});
			getDataElemByName(data,"pads3").value.forEach(function(itemI){
				currSel.push(13+parseInt(itemI));
			});
			getDataElemByName(data,"pads4").value.forEach(function(itemI){
				currSel.push(19+parseInt(itemI));
			});
			getDataElemByName(data,"pads5").value.forEach(function(itemI){
				currSel.push(25+parseInt(itemI));
			});

			if(currSel.length > 0){
				var possibleSets = [];
				sets.forEach(function(set, setIdx){
					var s = setIdx;
					currSel.forEach(function(act){
						if(set.indexOf(act)==-1)
							s = -1;
					});
					if(s == setIdx){
						possibleSets.push(setIdx);
					}
				});
				var possibleNums = [];
				possibleSets.forEach(function(setId){
					sets[setId].forEach(function(num){
						possibleNums.push(num);
					})
				})
				var numsToDisable = [];
				for(var i = 1; i < 28; i++){
					if(possibleNums.indexOf(i) == -1){
						numsToDisable.push(i);
					}
				}
				//TODO disableInputs(numsToDisable) // and enable all the others

				if(currSel.length == 4){
					setResult(possibleSets[0]);
				} else {
					setResult(-1);
				}
			}
			
			function setResult(setId){
				if(setId == -1){
					init(outputDOMElems);
				}
				else{
					var cnt = 0;
					sets[setId].forEach(function(id){
						if(currSel.indexOf(id) != -1){
							outputDOMElems[2 + cnt++].style.backgroundImage = 'url(img/keypads/' + imgs[id-1] + ')';
						}
					});
				}
			}
		}

		return {
			fields : [
				{func : "out", type : "text", name : "keypadsLabel"},
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
				{func : "out", type : "text", name : "resultLabel"},
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