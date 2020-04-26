import { K as KEYFRAMES, a as EASING_FUNCTIONS } from './index-f15f2e9e.js';

/**
 * Get element to animate
 */
const getElementToAnimate = (parent) => {
    return parent.shadowRoot !== null ? parent : (parent.firstElementChild
        || (parent.children.length && parent.children[0])
        || parent);
};

/**
 * Create a new animation.
 * @param param0 - The data of the new animation.
 */
function createAnimation(element, context) {
    const newKeyFrames = context.keyFrames
        || (context.animation && KEYFRAMES[context.animation])
        || (context.keyFramesData && JSON.parse(context.keyFramesData))
        || [];
    const options = getAnimationOptions(context);
    const newAnimation = element.animate(newKeyFrames, options);
    newAnimation.pause();
    if (context.currentTime !== undefined)
        newAnimation.currentTime = context.currentTime;
    if (context.startTime !== undefined)
        newAnimation.startTime = context.startTime;
    return newAnimation;
}
/**
 * Clear props of the animatable context.
 * @param context - Animatable context.
 * @param options - Keyframe options.
 */
function clearPropsWithOptions(context, options) {
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            if (key === 'id') {
                context.animateId = undefined;
            }
            else {
                context[key] = undefined;
            }
        }
    }
}
/**
 * Load the options of the animation.
 * @param param0 - The data of the new animation.
 */
function getAnimationOptions(context) {
    const animationOptions = context.options
        || (context.optionsData && JSON.parse(context.optionsData))
        || {};
    if (context.delay !== undefined)
        animationOptions.delay = context.delay;
    if (context.duration !== undefined)
        animationOptions.duration = context.duration;
    if (context.direction !== undefined)
        animationOptions.direction = context.direction;
    if (context.composite !== undefined)
        animationOptions.composite = context.composite;
    const easingType = (context.easing || animationOptions.easing);
    animationOptions.easing = EASING_FUNCTIONS[easingType] || easingType;
    if (context.endDelay !== undefined)
        animationOptions.endDelay = context.endDelay;
    if (context.fill !== undefined)
        animationOptions.fill = context.fill;
    if (context.animateId !== undefined)
        animationOptions.id = context.animateId;
    if (context.iterations !== undefined)
        animationOptions.iterations = context.iterations;
    if (context.iterationStart !== undefined)
        animationOptions.iterationStart = context.iterationStart;
    if (context.iterationComposite !== undefined)
        animationOptions.iterationComposite = context.iterationComposite;
    return animationOptions;
}
class AnimationManager {
    constructor(initState) {
        this.animation = null;
        /**
         * Emit `onStart` event and update class name with `fromClassName`.
         */
        this.onStartAnimation = () => {
            this.state.onStart.emit(this.element);
            if (this.state.fromClassName !== undefined) {
                this.className = this.element.className;
                this.element.className = this.state.fromClassName;
            }
        };
        /**
         * Emit `onCancel` event and restore class name.
         */
        this.onCancelAnimation = () => {
            this.state.onCancel.emit(this.element);
            if (this.state.fromClassName !== undefined &&
                this.className !== undefined) {
                this.element.className = this.className;
            }
        };
        /**
         * Emit `onFinish` event and update class name with `toClassName`.
         */
        this.onFinishAnimation = () => {
            const { element, state } = this;
            state.onFinish.emit(element);
            if (state.toClassName !== undefined) {
                element.className = state.toClassName;
            }
        };
        this.state = initState;
    }
    get currentAnimation() {
        return this.animation || this.loadAnimation();
    }
    set currentAnimation(value) {
        this.animation = value;
    }
    loadAnimation() {
        const { element, state } = this;
        const newAnimation = createAnimation(element, state);
        /**
         * Add listeners
         */
        newAnimation.addEventListener('finish', this.onFinishAnimation);
        newAnimation.addEventListener('cancel', this.onCancelAnimation);
        return this.animation = newAnimation;
    }
    clearAnimation() {
        if (this.animation === null)
            return;
        this.animation.removeEventListener('finish', this.onFinishAnimation);
        this.animation.removeEventListener('cancel', this.onCancelAnimation);
        this.animation = null;
    }
    destroyAnimation() {
        if (this.animation === null)
            return;
        const currentAnimation = this.animation;
        this.clearAnimation();
        currentAnimation.cancel();
    }
    /**
     * Emit start event if playState is not running or playing a new animation.
     */
    playAnimation() {
        debugger;
        if (this.currentAnimation.playState === 'running' &&
            !this.isUpdatingState)
            return;
        /**
         * Cancel current animation before to create another one
         */
        if (this.isUpdatingState) {
            this.destroyAnimation();
        }
        this.currentAnimation.play();
        this.onStartAnimation();
    }
    setState(element, newState) {
        this.isUpdatingState = true;
        this.element = element;
        this.state = newState;
    }
    savedState() {
        /**
         * Check if `autoPlay` is enabled to play a new animation and emit the event.
         */
        if (this.state.autoPlay) {
            this.playAnimation();
        }
        this.isUpdatingState = false;
    }
}

export { AnimationManager as A, clearPropsWithOptions as c, getElementToAnimate as g };
