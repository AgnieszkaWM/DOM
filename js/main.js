
var withButtonClass = document.getElementsByClassName ('button');
console.log(withButtonClass);
var listLength = withButtonClass.length;
console.log(listLength);

for (var i = 0; i<listLength; i++){
	alert(withButtonClass[i].innerText);
}
