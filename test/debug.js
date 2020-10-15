import '/node_modules/@javascribble/quantum/source/global.js';
import '/node_modules/@javascribble/quantum-icon/source/global.js';
import '/source/global.js';

document.body.style.visibility = 'visible';

document.querySelectorAll('quantum-button').forEach(button => button.addEventListener('click', console.log));