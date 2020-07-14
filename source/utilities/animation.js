import { animate } from '../../references/quantum.js';

export const draw = (slot, button, duration = 500) => {
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
                let ratio = elapsed / duration;
                let easing = ratio * (2 - ratio);
                let alpha = 0.1 * (1 - easing);
                let range = 100 * easing;
                style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${alpha}) ${range}%, transparent ${range}%)`;
                return true;
            } else {
                style.backgroundImage = 'none';
                return false;
            }
        });
    };
};