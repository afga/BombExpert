window.addEventListener('load', function() {
	solverCounter = counter.create();
	buildMenu();
	registerEventListeners();
	createSolver(modules[0]);
} , false);

var solverCounter;

function resetEverything(){
	$("#solvers").innerHTML = "";
	solvers = [];
	generalData={};
	solverCounter = counter.create();
	createSolver(modules[0]);
}

function buildMenu(){
	for (var i = 1; i < modules.length; ++i){
		makeMenuItem(modules[i], i);
	}
}

function makeMenuItem(item, index){
	var menuE = item.getMenuEntry();
	var me = getHTMLEntryFromMenuEntry(menuE, index);
	$("#menu-cont").innerHTML += me;
}

function registerEventListeners(){
	for (var i = 1; i < modules.length; ++i){
		registerListener(modules[i], i);
	}
}

function registerListener(item, index){
	$("#menu-i"+index).addEventListener("click", function(){
		createSolver(item);
	}, false);
}

function createSolver(module){
	var solver = module.getSolver();
	var solverIndex = solverCounter.increaseValue();
	var solverHTML = getSolverHTML(solver.fields, solverIndex);
	solvers[solverIndex] = solver;
	var cont = document.createElement("div");
	cont.innerHTML = solverHTML;
	$("#solvers").appendChild(cont);
	var outDOM = getOutputDOMElementsForSolver(solverIndex);
	solvers[solverIndex].init(outDOM);
}

function removeSolver(solverIndex) {
	var solver = $('#'+getSolverId(solverIndex));
	var parent = solver.parentNode.parentNode;
	parent.removeChild(solver.parentNode);
	solvers[solverIndex] = undefined;
}

function changed(solverIndex){
	if(solverIndex === 0){
		changed(1);
	} else {
		if(solvers[solverIndex] !== undefined){
			var data = getDataForSolver(solverIndex);
			var outDOM = getOutputDOMElementsForSolver(solverIndex);

			solvers[solverIndex].onchange(data, outDOM);
		}
	}
	if(solverIndex === 1){
		for(var i = 2; i < solvers.length; ++i){
			changed(i);
		}
	}

}

function $(element){
  return document.querySelector(element);
}
