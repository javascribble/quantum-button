import { query } from '../../references/quantum.js';

export const type = root => value => {
    const button = query(root, 'button');
    return value => button.type = value;
};