modules.push({
	getMenuEntry : function(){ 
		return {
			name : "Who's on First",
			img : "WhosOnFirstComponent.svg"
		};
	},

	getSolver : function(){

		function init(outputDOMElems){
			outputDOMElems[0].innerHTML = "Who's on First:";
            outputDOMElems[3].innerHTML = '<div class="whoBox bl"></div>';
		}

		function onchange(data, outputDOMElems){
            const displayValues = [{val:"",button:"bl"},
                {val:"BLANK",button:"rc"},
                {val:"C",button:"tr"},
                {val:"CEE",button:"br"},
                {val:"DISPLAY",button:"br"},
                {val:"FIRST",button:"tr"},
                {val:"HOLD ON",button:"br"},
                {val:"LEAD",button:"br"},
                {val:"LED",button:"lc"},
                {val:"LEED",button:"bl"},
                {val:"NO",button:"br"},
                {val:"NOTHING",button:"lc"},
                {val:"OKAY",button:"tr"},
                {val:"READ",button:"rc"},
                {val:"RED",button:"rc"},
                {val:"REED",button:"bl"},
                {val:"SAYS",button:"br"},
                {val:"SEE",button:"br"},
                {val:"THEIR",button:"rc"},
                {val:"THERE",button:"br"},
                {val:"THEY ARE",button:"lc"},
                {val:"THEY'RE",button:"bl"},
                {val:"UR",button:"tl"},
                {val:"YES",button:"lc"},
                {val:"YOU",button:"rc"},
                {val:"YOU ARE",button:"br"},
                {val:"YOU'RE",button:"rc"},
                {val:"YOUR",button:"rc"}];
            const buttonLabels = [{button:"BLANK",list:"WAIT, RIGHT, OKAY, MIDDLE, BLANK."},
                {button:"DONE",list:"SURE, UH&nbsp;HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU&nbsp;ARE, UH&nbsp;UH, DONE."},
                {button:"FIRST",list:"LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST."},
                {button:"HOLD",list:"YOU ARE, U, DONE, UH&nbsp;UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD."},
                {button:"LEFT",list:"RIGHT, LEFT."},
                {button:"LIKE",list:"YOU'RE, NEXT, U, UR, HOLD, DONE, UH&nbsp;UH, WHAT?, UH&nbsp;HUH, YOU, LIKE."},
                {button:"MIDDLE",list:"BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE."},
                {button:"NEXT",list:"WHAT?, UH&nbsp;HUH, UH&nbsp;UH, YOUR, HOLD, SURE, NEXT."},
                {button:"NO",list:"BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO."},
                {button:"NOTHING",list:"UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING."},
                {button:"OKAY",list:"MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY."},
                {button:"PRESS",list:"RIGHT, MIDDLE, YES, READY, PRESS."},
                {button:"READY",list:"YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY."},
                {button:"RIGHT",list:"YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT."},
                {button:"SURE",list:"YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH&nbsp;HUH, UR, SURE."},
                {button:"U",list:"UH&nbsp;HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH&nbsp;UH, DONE, U."},
                {button:"UH HUH",list:"UH&nbsp;HUH."},
                {button:"UH UH",list:"UR, U, YOU&nbsp;ARE, YOU'RE, NEXT, UH&nbsp;UH."},
                {button:"UHHH",list:"READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH."},
                {button:"UR",list:"DONE, U, UR."},
                {button:"WAIT",list:"UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT."},
                {button:"WHAT",list:"UHHH, WHAT."},
                {button:"WHAT?",list:"YOU, HOLD, YOU'RE, YOUR, U, DONE, UH&nbsp;UH, LIKE, YOU ARE, UH&nbsp;HUH, UR, NEXT, WHAT?."},
                {button:"YES",list:"OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES."},
                {button:"YOU",list:"SURE, YOU&nbsp;ARE, YOUR, YOU'RE, NEXT, UH&nbsp;HUH, UR, HOLD, WHAT?, YOU."},
                {button:"YOU ARE",list:"YOUR, NEXT, LIKE, UH&nbsp;HUH, WHAT?, DONE, UH&nbsp;UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU&nbsp;ARE."},
                {button:"YOU'RE",list:"YOU, YOU'RE."},
                {button:"YOUR",list:"UH&nbsp;UH, YOU&nbsp;ARE, UH&nbsp;HUH, YOUR."}]
            var display = getDataElemByName(data,"display").value.toUpperCase();
            var delDis = getDataElemByName(data,"deleteDisplay").value;
            var button = getDataElemByName(data,"buttonLabel").value.toUpperCase();
            var delBut = getDataElemByName(data,"deleteButton").value;

            var displayOut = outputDOMElems[3];
            var buttonOut = outputDOMElems[6];
            
            if(delDis !== ""){
                outputDOMElems[1].value = ""; // display input
                outputDOMElems[2][0].checked = false; // delete "button"
                displayOut.innerHTML = "";
                return;
            }
            if(delBut !== ""){
                outputDOMElems[4].value = ""; // button input
                outputDOMElems[5][0].checked = false; // delete "button"
                buttonOut.innerHTML = "";
                return;
            }

            // Display
            var possibleDisplayIndexes = [];
            if(display === "")
                possibleDisplayIndexes.push(0);
            else{
                displayValues.forEach(function(value, index){
                    if(value.val.indexOf(display) !== -1)
                        possibleDisplayIndexes.push(index);
                });
            }
            var dispRet = "";
            if(possibleDisplayIndexes.length == 0){
                dispRet = '<p>No matching values.</p>';
            } else {
                var divs = [];
                possibleDisplayIndexes.forEach(function(dispIndex){
                    var entry = displayValues[dispIndex];
                    divs.push(`<div class="whoBox ${entry.button}">${entry.val}</div>`);
                });
                dispRet = divs.join("");
            }
            displayOut.innerHTML = dispRet;

            // Button
            var possibleButtonIndexes = [];
            buttonLabels.forEach(function(btn, index){
                if(btn.button.indexOf(button) !== -1)
                    possibleButtonIndexes.push(index);
            });
            var btnRet = "";
            if(possibleButtonIndexes.length == 0){
                btnRet = '<p>No matching labels.</p>';
            } else {
                var lists = [];
                possibleButtonIndexes.forEach(function(btnIndex){
                    var entry = buttonLabels[btnIndex];
                    lists.push(`<li>"<b>${entry.button}</b>": ${entry.list}</li>`);
                })
                btnRet = '<ul class="whoList">'+lists.join("")+'</ul>';
            }
            buttonOut.innerHTML = btnRet; 
		}

		return {
			fields : [
                {func : "out", type : "text", name : "whoLabel"},
                {func : "inout", type : "textBox", name : "display"},
                {func : "inout", type : "radioC", name : "deleteDisplay", values : ["red"]},
                {func : "layout", type : "lineBreak"},
                {func : "out", type : "box", name : "displayOut"},
                {func : "layout", type : "lineBreak"},
                {func : "inout", type : "textBox", name : "buttonLabel"},
                {func : "inout", type : "radioC", name : "deleteButton", values : ["red"]},
                {func : "layout", type : "lineBreak"},
                {func : "out", type : "text", name : "buttonOut"},
			],
			init : init,
			onchange : onchange
		}
	}
});