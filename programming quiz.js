/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
	// check divisibility

	if (x % 3 === 0 && x % 5 === 0) {
		console.log("JuliaJames");
	} else {
		if (x % 3 === 0) {
			console.log("Julia");
		}
		if (x % 5 === 0) {
			console.log("James");
		}
	}
	if (x % 3 !== 0 && x % 5 !== 0) {
		console.log(x);
	}
	// print Julia, James, or JuliaJames

	// increment x
	x++;
}
