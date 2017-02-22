var num = 99;

while (num > 0) {
	// check value of num
	var currBottle = num;
	var bottleNum = (num - 1);
	if (currBottle > 2) {
		console.log(currBottle + " bottles of juice on the wall! " + currBottle + " bottles of juice! Take one down, pass it around... " + bottleNum + " bottles of juice on the wall!")
	}
	if (currBottle === 2) {
		console.log(currBottle + " bottles of juice on the wall! " + currBottle + " bottles of juice! Take one down, pass it around... " + bottleNum + " bottle of juice on the wall!");
	}
	if (currBottle === 1) {
		console.log(currBottle + " bottle of juice on the wall! " + currBottle + " bottle of juice! Take one down, pass it around... " + bottleNum + " bottles of juice on the wall!");
	}
	num--;
}
