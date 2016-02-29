/**
 * 
 */

function normalFunction() {
	alert("I'm a normal function.");
}

function withArgsFunction(name) {
	alert ("Welcome to javaScript " + name);
}
function returnFunction(name) {
	return "Welcome to javaScript " + name;
}

function takeFunctionAsArgs(func) {
	var rcvd = func;
	alert(rcvd);
}

function returningFunction() {
	return {
		addClass : function() {
			alert("Add Class Called")
		},
		removeClass : function() {
			alert("remove Class Called")
		}
	};
}