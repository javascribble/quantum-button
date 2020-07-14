const resources = [
    '/node_modules/@javascribble/quantum-icon/source/templates/icon.html',
    '/source/templates/button.html'
];

Promise.all(resources.map(resource => fetch(resource).then(response => response.text().then(html => document.body.insertAdjacentHTML('beforeend', html)))));

document.querySelectorAll('quantum-button').forEach(button => button.addEventListener('click', console.log));