import { Component, template, setAttribute } from '../../references/quantum.js';
import { animateRadialGradient } from '../utilities/animation.js';
import html from '../templates/button.js';

export class Button extends Component {
    #button;

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');
        this.#button.type = this.type;

        const slot = this.shadowRoot.querySelector('slot');
        animateRadialGradient(slot, this.#button);
    }

    static template = template(html);

    static attributes = [
        'disabled'
    ];

    disabledChangedCallback(value) {
        setAttribute(this.#button, 'disabled', value);
    }
}

customElements.define('quantum-button', Button);