import { template } from '../../references/quantum.js';

const html = `
<button><slot></slot></button>
`;

const css = `
button {
    color: var(--button-color, inherit);
    letter-spacing: var(--button-letter-spacing, 0.1em);
    text-transform: var(--button-text-transform, uppercase);
    background-color: var(--button-background-color, inherit);
    border-radius: var(--button-border-radius, 3px);
    padding: var(--button-padding, 0.7em 1em);
    box-sizing: border-box;
    font-size: inherit;
    line-height: 1em;
    cursor: pointer;
    outline: none;
    border: none;
}

    button:hover:not([disabled]) {
        color: var(--button-hover-color, inherit);
        background-color: var(--button-hover-background-color, inherit);   
    }

button.accent {
    color: var(--button-accent-color, inherit);
    background-color: var(--button-accent-background-color, inherit);
}

    button.accent:hover:not([disabled]) {
        color: var(--button-accent-hover-color, inherit);
        background-color: var(--button-accent-hover-background-color, inherit);
    }

button.outlined {
    border: solid var(--button-color, inherit) 1px;
    transition: border 0.1s;
}

    button.outlined:hover:not([disabled]) {
        border: solid var(--button-hover-color, inherit) 1px;
    }

button.raised {
    box-shadow: 1px 1px 3px -1px black;
    transition: box-shadow 0.1s;
}

    button.raised:hover:not([disabled]) {
        box-shadow: 2px 3px 4px -1px grey;
    }

button[disabled] {
    color: var(--button-disabled-color, inherit);
    border-color: var(--button-disabled-color, inherit);
    background-color: none;
    cursor: default;
}
`;

export const button = template(html, css);