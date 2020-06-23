import { query } from '../../references/quantum.js';

export const accent = root => {
    const button = query(root, 'button');
    return value => button.classList.add('accent');
};