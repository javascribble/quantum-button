import { enableAnimation } from '../utilities/animation.js';
import html from '../templates/button.js';

export class Button extends Component {
    #button;

    constructor() {
        super();

        this.#button = this.shadowRoot.querySelector('button');

        enableAnimation(this.#button);
    }

    static template = template(html);

    static get observedAttributes() { return ['disabled']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        setAttribute(this.#button, attribute, currentValue);
    }
}

define('quantum-button', Button);