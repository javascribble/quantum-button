import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-icon/source/main.js';
import '/source/main.js';

document.body.style.visibility = 'visible';

document.querySelectorAll('quantum-button').forEach(button => button.addEventListener('click', console.log));