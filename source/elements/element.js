import { Quantum, define } from '../../references/quantum.js';
import { element } from '../templates/element.js';
import { name } from '../attributes/name.js';
import { click } from '../events/click.js';

export class Element extends Quantum {
    constructor() {
        super(element);
    }

    static elements = {
        slot: 'slot'
    };

    static attributes = {
        name
    };

    static events = {
        click
    };
}

define(Element);