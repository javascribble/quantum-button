import { query, has, stopPropagation } from '../../references/quantum.js';

export const click = (root, dispatch) => {
    const slot = query(root, 'slot');
    const button = query(root, 'button');
    slot.onclick = event => {
        if (has(button, 'disabled')) {
            stopPropagation(event);
        }
    };
};