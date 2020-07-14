import { template } from '../../references/quantum.js';

export const button = template(`
<style>
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

    :host([accented]) > button {
        color: var(--quantum-button-accent-color);
        background-color: var(--quantum-button-accent-background-color);
    }

        :host([accented]) > button:hover:not([disabled]) {
            color: var(--quantum-button-accent-hover-color);
            background-color: var(--quantum-button-accent-hover-background-color);
        }

    :host([outlined]) > button {
        border: solid var(--quantum-button-color) 1px;
        transition: border 0.1s;
    }

        :host([outlined]) > button:hover:not([disabled]) {
            border: solid var(--quantum-button-hover-color) 1px;
        }

    :host([raised]) > button {
        box-shadow: 1px 1px 3px -1px black;
        transition: box-shadow 0.1s;
    }

        :host([raised]) > button:hover:not([disabled]) {
            box-shadow: 2px 3px 4px -1px grey;
        }

    :host([round]) > button {
        border-radius: 100px;
    }

    [disabled] {
        color: var(--quantum-button-disabled-color);
        border-color: var(--quantum-button-disabled-color);
        background-color: none;
        cursor: default;
    }
</style>
<button><slot></slot></button>
`);