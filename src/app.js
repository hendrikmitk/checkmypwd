/////////////
// D A T A //
/////////////

const a = document.getElementById("security-feature-a");
const b = document.getElementById("security-feature-b");
const c = document.getElementById("security-feature-c");
const d = document.getElementById("security-feature-d");
const e = document.getElementById("security-feature-e");
const pwd = document.getElementById("pwd");

/////////////
// M A I N //
/////////////

function inspectInput() {
	a.style.color = "#ff0000";
	b.style.color = "#ff0000";
	c.style.color = "#008000";
	d.style.color = "#ff0000";
	e.style.color = "#008000";
	if (pwd.value.length >= 8) a.style.color = "#008000"; // PWD HAS 8 OR MORE CHARACTERS
	if (pwd.value.match(/\d+/g) !== null) b.style.color = "#008000"; // PWD CONTAINS A NUMBER
	if (pwd.value.length > 22) c.style.color = "#ff0000"; // PWD HAS MORE THAN 22 CHARACTERS
	if (pwd.value.match(/[!@#$%^&§*()_+\-=\[\]{};':"\\|,.<>\/?]/g) !== null) d.style.color = "#008000"; // PWD CONTAINS SPECIAL CHARACTER
	if (pwd.value.match(/[ ]+/g) !== null) e.style.color = "#ff0000"; // PWD CONTAINS SPACES
	if (pwd.value.length < 1) a.style.color = b.style.color = c.style.color = d.style.color = e.style.color = "#5e5a5a"; // RESET COLOR ON EMPTY INPUT
}

/////////////
// H E A R //
/////////////

pwd.addEventListener("input", inspectInput, false);
pwd.addEventListener("paste", inspectInput, false);
pwd.addEventListener("change", inspectInput, false);
pwd.addEventListener("keydown", inspectInput, false);
