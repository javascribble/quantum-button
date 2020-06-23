import { query, setTypedAttribute } from '../../references/quantum.js';

export const disabled = root => {
    const button = query(root, 'button');
    return value => setTypedAttribute(button, 'disabled', value);
};