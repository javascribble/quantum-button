import { animate, query, has, stopPropagation } from '../../references/quantum.js';

const duration = 500;

export const click = (root, dispatch) => {
    const button = query(root, 'button');
    const slot = query(root, 'slot');
    slot.onclick = event => {
        if (has(button, 'disabled')) {
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
                let alpha = 0.1 * (1 - easing);
                let range = 100 * easing;
                style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${alpha}) ${range}%, transparent ${range}%)`;
                elapsed += deltaTime;
                return true;
            } else {
                style.backgroundImage = 'none';
                return false;
            }
        });
    };
};