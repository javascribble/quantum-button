import { query } from '../../references/quantum.js';

export const outlined = root => {
    const button = query(root, 'button');
    return value => button.classList.add('outlined');
};