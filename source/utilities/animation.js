import { animate } from '../../references/quantum.js';

const formatGradient = (x, y, alpha, range) => `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${alpha}) ${range}%, transparent ${range}%)`;

export const radialGradientOptions = {
    duration: 500,
    alpha: 0.5
};

export const animateRadialGradient = (slot, button, options) => {
    const { duration, alpha } = {
        ...radialGradientOptions,
        ...options
    };

    slot.onclick = event => {
        if (button.hasAttribute('disabled')) {
            event.stopPropagation();
        }
    };

    const style = button.style;
    button.onmousedown = event => {
        let x = event.pageX - button.offsetLeft;
        let y = event.pageY - button.offsetTop;
        animate(state => {
            const elapsed = state.elapsedTime;
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
    };
};