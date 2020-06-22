import { Quantum, define } from '../../references/quantum.js';
import { button } from '../templates/button.js';
import { name } from '../attributes/name.js';
import { click } from '../events/click.js';

export class Button extends Quantum {
    constructor() {
        super(button);
    }

    static attributes = {
        name
    };

    static events = {
        click
    };
}

define(Button);