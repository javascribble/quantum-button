import { Component, template, define, setAttribute } from '../import.js';
import { animateRadialGradient } from '../utilities/animation.js';
import html from '../templates/button.js';

export class Button extends Component {
    #button;

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');

        const slot = this.shadowRoot.querySelector('slot');
        animateRadialGradient(slot, this.#button);
    }

    static template = template(html);

    static get observedAttributes() { return ['disabled']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'disabled':
                setAttribute(this.#button, attribute, currentValue);
                break;
        }
    }
}

define('quantum-button', Button);