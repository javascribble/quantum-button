import { radialGradientOptions } from '../constants/animation.js';

const { animate } = quantum;

const formatGradient = (x, y, alpha, range) => `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${alpha}) ${range}%, transparent ${range}%)`;

export const enableAnimation = (button, options) => {
    const { duration, alpha } = {
        ...radialGradientOptions,
        ...options
    };

    button.addEventListener('click', event => {
        if (button.hasAttribute('disabled')) {
            event.stopPropagation();
        }
    });

    const style = button.style;
    button.addEventListener('mousedown', event => {
        let x = event.pageX - button.offsetLeft;
        let y = event.pageY - button.offsetTop;
        animate(time => {
            const { elapsed } = time;
            if (elapsed < duration) {
                let progress = elapsed / duration;
                let easing = progress * (2 - progress);
                style.backgroundImage = formatGradient(x, y, alpha * (1 - easing), 100 * easing);
                return true;
            } else {
                style.backgroundImage = 'none';
                return false;
            }
        });
    });
};