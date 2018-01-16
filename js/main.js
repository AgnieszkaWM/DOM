
var x = document.getElementsByClassName ('button');
console.log(x);
var listLength = x.length;
console.log(listLength);

for (var i = 0; i<listLength; i++){
	var list = x.innerText;
	alert(list);
}
