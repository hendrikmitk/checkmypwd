/////////////////
// S E L E C T //
/////////////////

const a = document.getElementById('security-feature-a');
const b = document.getElementById('security-feature-b');
const c = document.getElementById('security-feature-c');
const d = document.getElementById('security-feature-d');
const e = document.getElementById('security-feature-e');
const pwdInput = document.getElementById('pwd');
const clearButton = document.getElementById('clear-button');
const copyButton = document.getElementById('copy-button');

/////////////////
// D E F I N E //
/////////////////

const inspectInput = () => {
	a.style.color = '#ff0000';
	b.style.color = '#ff0000';
	c.style.color = '#008000';
	d.style.color = '#ff0000';
	e.style.color = '#008000';
	if (pwdInput.value.length >= 8) a.style.color = '#008000'; // HAS 8 OR MORE CHARACTERS
	if (pwdInput.value.match(/\d+/g) !== null) b.style.color = '#008000'; // CONTAINS A NUMBER
	if (pwdInput.value.length > 22) c.style.color = '#ff0000'; // HAS MORE THAN 22 CHARACTERS
	if (pwdInput.value.match(/[!@#$%^&§*()_+\-=\[\]{};':"\\|,.<>\/?]/g) !== null) d.style.color = '#008000'; // CONTAINS SPECIAL CHARACTER
	if (pwdInput.value.match(/[ ]+/g) !== null) e.style.color = '#ff0000'; // CONTAINS SPACES
	if (pwdInput.value.length < 1)
		a.style.color = b.style.color = c.style.color = d.style.color = e.style.color = '#5e5a5a'; // RESET COLOR ON EMPTY INPUT
};

const copyInput = () => {
	if (!pwdInput.value) return;
	pwdInput.focus();
	pwdInput.select();
	try {
		alert(`Text "${pwdInput.value}" copied to clipboard`);
	} catch (err) {
		alert('Unable to copy text');
	}
};

const clearInput = () => {
	if (pwdInput.value) {
		pwdInput.value = '';
		pwdInput.focus();
		inspectInput();
	}
};

/////////////////
// L I S T E N //
/////////////////

window.addEventListener('load', inspectInput);
pwdInput.addEventListener('input', inspectInput);
pwdInput.addEventListener('paste', inspectInput);
pwdInput.addEventListener('change', inspectInput);
pwdInput.addEventListener('keydown', inspectInput);

clearButton.addEventListener('click', clearInput);

copyButton.addEventListener('click', copyInput);
