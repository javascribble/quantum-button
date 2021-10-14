import { enableAnimation } from '../utilities/animation.js';
import button from '../templates/button.js';

export class Button extends Quantum {
    #button = this.shadowRoot.querySelector('button');

    constructor() {
        super();

        enableAnimation(this.#button);
    }

    static get observedAttributes() { return ['disabled']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.#button.setAttribute(attribute, currentValue);
    }
}

Button.define('quantum-button', button);