import { enableAnimation } from '../utilities/animation.js';

const { setAttribute } = quantum;

export class Button extends Quantum {
    #button = this.shadowRoot.querySelector('button');

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');

        enableAnimation(this.#button);
    }

    static get observedAttributes() { return ['disabled']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        setAttribute(this.#button, attribute, currentValue);
    }
}