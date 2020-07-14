import { Component, setAttribute } from '../../references/quantum.js';
import { animateRadialGradient } from '../utilities/animation.js';

export class Button extends Component {
    #button;

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');
        const slot = this.shadowRoot.querySelector('slot');
        animateRadialGradient(slot, this.#button);
    }

    static template = document.querySelector('#quantum-button');

    static attributes = [
        'accented',
        'disabled',
        'outlined',
        'raised',
        'round',
        'type'
    ];

    disabledChangedCallback(value) {
        setAttribute(this.#button, 'disabled', value);
    }

    typeChangedCallback(value) {
        setAttribute(this.#button, 'type', value);
    }
}

customElements.define('quantum-button', Button);