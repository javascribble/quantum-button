import { animateRadialGradient } from '../utilities/animation.js';
import html from '../templates/button.js';

export class Button extends quantum.Component {
    #button;

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');

        const slot = this.shadowRoot.querySelector('slot');
        animateRadialGradient(slot, this.#button);
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['disabled']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'disabled':
                quantum.setAttribute(this.#button, attribute, currentValue);
                break;
        }
    }
}

quantum.define('quantum-button', Button);