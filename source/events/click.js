import { animate, querySelector, stopPropagation } from '../../references/quantum.js';

const duration = 500;

const draw = (x, y, alpha, range) => `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${alpha}) ${range}%, transparent ${range}%)`;

export const click = (root, dispatch) => {
    const button = querySelector(root, 'button');
    const slot = querySelector(root, 'slot');
    slot.onclick = event => {
        if (button.hasAttribute('disabled')) {
            stopPropagation(event);
        }
    };

    const style = button.style;
    button.onmousedown = event => {
        let x = event.pageX - button.offsetLeft;
        let y = event.pageY - button.offsetTop;
        let elapsed = 0;
        animate(deltaTime => {
            if (elapsed < duration) {
                let ratio = elapsed / duration;
                let easing = ratio * (2 - ratio);
                style.backgroundImage = draw(x, y, 0.1 * (1 - easing), 100 * easing);
                elapsed += deltaTime;
                return true;
            } else {
                style.backgroundImage = 'none';
                return false;
            }
        });
    };
};