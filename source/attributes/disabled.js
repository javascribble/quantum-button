import { query, setAttribute } from '../../references/quantum.js';

export const disabled = root => {
    const button = query(root, 'button');
    return value => setAttribute(button, 'disabled', value);
};