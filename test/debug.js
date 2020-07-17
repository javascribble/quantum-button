import '/source/main.js';
import '/references/quantum-icon.js';

document.body.style.visibility = 'visible';

document.querySelectorAll('quantum-button').forEach(button => button.addEventListener('click', console.log));