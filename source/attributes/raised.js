import { query } from '../../references/quantum.js';

export const raised = root => {
    const button = query(root, 'button');
    return value => button.classList.add('raised');
};