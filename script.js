//your JS code here. If required.
let count=0;
document.getElementById("increment-counter").addEventListener("click",function(){
	alert(count);
	count++;

});
const counter = document.getElementById("counter");

document.getElementById("incrementBtn").addEventListener("click", function () {
    counter.textContent = Number(counter.textContent) + 1;
});