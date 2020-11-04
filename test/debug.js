import '/node_modules/@javascribble/quantum/source/export.js';
import '/node_modules/@javascribble/quantum-icon/source/export.js';
import '/source/export.js';

document.body.style.visibility = 'visible';

document.querySelectorAll('quantum-button').forEach(button => button.addEventListener('click', console.log));