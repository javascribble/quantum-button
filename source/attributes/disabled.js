import { setAttribute } from '../../references/quantum.js';

export const disabled = shadow => value => setAttribute(shadow.button, 'disabled', value);