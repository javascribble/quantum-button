import { Component, template, define, setAttribute } from '../import.js';
import { enableAnimation } from '../utilities/animation.js';
import html from '../templates/button.js';

export class Button extends Component {
    #button;

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');

        enableAnimation(this.slots.get(''), this.#button);
    }

    static template = template(html);

    static get observedAttributes() { return ['disabled']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'disabled':
                setAttribute(this.#button, attribute, currentValue);
                break;
            // case 'loading':
            //     // Implement spinner on content.
            //     break;
        }
    }
}

define('quantum-button', Button);