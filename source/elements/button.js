import { Quantum, define } from '../../references/quantum.js';
import { button } from '../templates/button.js';
import { accent } from '../attributes/accent.js';
import { disabled } from '../attributes/disabled.js';
import { outlined } from '../attributes/outlined.js';
import { raised } from '../attributes/raised.js';
import { round } from '../attributes/round.js';
import { type } from '../attributes/type.js';
import { click } from '../events/click.js';

export class Button extends Quantum {
    constructor() {
        super(button);
    }

    static attributes = {
        accent,
        disabled,
        outlined,
        raised,
        round,
        type
    };

    static events = {
        click
    };
}

define(Button);