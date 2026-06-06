//your JS code here. If required.
const incBtn = document.querySelector("#incBtn");
const counter = document.querySelector("#counter");

incBtn.addEventListener("click", () => {
	let curr = counter.innerText;
	let next = Number(curr) + 1;
	alert(next);
	counter.innerText = next;
})