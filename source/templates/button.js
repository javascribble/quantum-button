import { template } from '../../references/quantum.js';

const html = `
<button><slot></slot></button>
`;

const css = `
button {
    color: var(--quantum-button-color);
    letter-spacing: var(--quantum-button-letter-spacing);
    text-transform: var(--quantum-button-text-transform);
    background-color: var(--quantum-button-background-color);
    border-radius: var(--quantum-button-border-radius);
    padding: var(--quantum-button-padding);
    box-sizing: border-box;
    font-size: inherit;
    line-height: 1em;
    cursor: pointer;
    outline: none;
    border: none;
}

    button:hover:not([disabled]) {
        color: var(--quantum-button-hover-color);
        background-color: var(--quantum-button-hover-background-color);   
    }

button.accent {
    color: var(--quantum-button-accent-color);
    background-color: var(--quantum-button-accent-background-color);
}

    button.accent:hover:not([disabled]) {
        color: var(--quantum-button-accent-hover-color);
        background-color: var(--quantum-button-accent-hover-background-color);
    }

button.outlined {
    border: solid var(--quantum-button-color) 1px;
    transition: border 0.1s;
}

    button.outlined:hover:not([disabled]) {
        border: solid var(--quantum-button-hover-color) 1px;
    }

button.raised {
    box-shadow: 1px 1px 3px -1px black;
    transition: box-shadow 0.1s;
}

    button.raised:hover:not([disabled]) {
        box-shadow: 2px 3px 4px -1px grey;
    }

button[disabled] {
    color: var(--quantum-button-disabled-color);
    border-color: var(--quantum-button-disabled-color);
    background-color: none;
    cursor: default;
}
`;

export const button = template(html, css);