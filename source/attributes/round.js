import { query } from '../../references/quantum.js';

export const round = root => {
    const button = query(root, 'button');
    return _ => button.style.borderRadius = '100px';
};