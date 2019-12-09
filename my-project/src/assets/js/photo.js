var curIndex = 1;
displayCur();
function change(index) {
	if (curIndex != index) {
		curIndex = index;
		displayCur();
		console.log(curIndex);
	}
}
function prev() {
	if (curIndex != 1) 
		curIndex --;
	else
		curIndex = 3;
	displayCur();
}
function next() {
	if (curIndex != 3)
		curIndex ++;
	else
		curIndex = 1;
	displayCur();
}
function displayCur() {
	var x = document.getElementsByClassName("pic");
	var dot = document.getElementById('bottom').children;
	for (var z = 0; z < 3 ; z ++ ) {
		dot[z].className = 'dot';
	}
	for (var y = 0; y < 3; y ++ ) {
		x[y].style.display = 'none';
	}
	x[curIndex - 1].style.display = 'block';
	dot[curIndex - 1].className = 'dot active';
}