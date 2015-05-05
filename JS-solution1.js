

var count = function(max) {
	var tote = 0;
	if (max < 0) {
		console.log("Try again with a number greater than zero.")
	} else {
	
	for (var i = 0; i < max; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			tote += i;
		}
	}
}
console.log(tote)
}