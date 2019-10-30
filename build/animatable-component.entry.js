import { r as registerInstance, c as createEvent, h, d as getElement } from './core-a3674212.js';
import { b as Animations, c as ANIMATION_KEY_ERROR, a as EASING_FUNCTIONS } from './animations-dd6985d6.js';

const AnimatableComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Start the animation when the component is mounted.
         */
        this.autoPlay = true;
        this.onfinish = createEvent(this, "finish", 7);
        this.oncancel = createEvent(this, "cancel", 7);
    }
    animationDidChangeHandler(animation) {
        const keyFrames = Animations[animation];
        if (keyFrames && keyFrames.length) {
            this.keyFrames = keyFrames;
        }
        else {
            throw new Error(ANIMATION_KEY_ERROR);
        }
    }
    /**
     * Get keyFrames of the animation from string data.
     * @param text - The string with the keyFrames of the animation.
     */
    keyFramesDidChangeHandler(text) {
        if (text)
            this.keyFrames = JSON.parse(text);
    }
    optionsDidChangeHandler(options) {
        for (const key in options) {
            this[key] = undefined;
        }
    }
    /**
     * Get options of the animation from string data.
     * @param text - The string with the options of the animation.
     */
    optionsDataDidChangeHandler(text) {
        if (text)
            this.options = JSON.parse(text);
    }
    setCurrenTime(newValue) {
        if (this.currentAnimation)
            this.currentAnimation.currentTime = newValue;
    }
    /**
     * Returns the current time value of the animation in milliseconds, whether running or paused.
     */
    async getCurrentTime() {
        return this.currentAnimation.currentTime;
    }
    setStartTime(newValue) {
        if (this.currentAnimation)
            this.currentAnimation.startTime = newValue;
    }
    /**
     * Returns the scheduled time when an animation's playback should begin.
     */
    async getStartTime() {
        return this.currentAnimation.startTime;
    }
    /**
     * Indicates whether the animation is currently waiting
     * for an asynchronous operation such as initiating playback
     * or pausing a running animation.
     */
    async getPending() {
        return this.currentAnimation.pending;
    }
    setPlaybackRate(newValue) {
        if (this.currentAnimation)
            this.currentAnimation.playbackRate = newValue;
    }
    /**
     * Returns the playback rate of the animation.
     */
    async getPlaybackRate() {
        return this.currentAnimation.playbackRate;
    }
    /**
     * Returns an enumerated value describing the playback state of an animation.
     */
    async getPlayState() {
        return this.currentAnimation.playState;
    }
    /**
     * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
     */
    async cancel() {
        return this.currentAnimation.cancel();
    }
    /**
     * Sets the current playback time to the end of the animation
     * corresponding to the current playback direction.
     */
    async finish() {
        return this.currentAnimation.finish();
    }
    /**
     * Suspends playback of the animation.
     */
    async pause() {
        return this.currentAnimation.pause();
    }
    /**
     * Starts or resumes playing of an animation.
     */
    async play() {
        return this.currentAnimation.play();
    }
    /**
     * Reverses the playback direction, meaning the animation ends at its beginning.
     */
    async reverse() {
        return this.currentAnimation.reverse();
    }
    getAnimationOptions() {
        const animationOptions = this.options
            || (this.optionsData && JSON.parse(this.optionsData))
            || {};
        if (this.delay !== undefined)
            animationOptions.delay = this.delay;
        if (this.duration !== undefined)
            animationOptions.duration = this.duration;
        if (this.direction)
            animationOptions.direction = this.direction;
        if (this.composite)
            animationOptions.composite = this.composite;
        if (this.easing) {
            const defaultEasing = this.easing;
            animationOptions.easing = EASING_FUNCTIONS[defaultEasing] || this.easing;
        }
        if (this.endDelay !== undefined)
            animationOptions.endDelay = this.endDelay;
        if (this.fill)
            animationOptions.fill = this.fill;
        if (this.animateId !== undefined)
            animationOptions.id = this.animateId;
        if (this.iterations !== undefined)
            animationOptions.iterations = this.iterations;
        if (this.iterationStart !== undefined)
            animationOptions.iterationStart = this.iterationStart;
        if (this.iterationComposite)
            animationOptions.iterationComposite = this.iterationComposite;
        return animationOptions;
    }
    createAnimation() {
        const element = (this.el.firstElementChild
            || (this.el.children.length && this.el.children[0])
            || this.el);
        const options = this.getAnimationOptions();
        const keyFrames = this.keyFrames
            || (this.animation && Animations[this.animation])
            || (this.keyFramesData && JSON.parse(this.keyFramesData))
            || [];
        const animation = element.animate(keyFrames, options);
        animation.onfinish = () => this.onfinish.emit(element);
        animation.oncancel = () => this.oncancel.emit(element);
        if (this.currentTime !== undefined)
            animation.currentTime = this.currentTime;
        if (this.startTime !== undefined)
            animation.startTime = this.startTime;
        this.currentAnimation = animation;
    }
    playAnimation() {
        if (this.currentAnimation) {
            this.currentAnimation.play();
        }
    }
    componentWillLoad() {
        this.createAnimation();
        if (this.autoPlay)
            this.playAnimation();
    }
    componentDidUpdate() {
        this.createAnimation();
        if (this.autoPlay)
            this.playAnimation();
    }
    render() {
        return h("slot", null);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "animation": ["animationDidChangeHandler"],
        "keyFramesData": ["keyFramesDidChangeHandler"],
        "options": ["optionsDidChangeHandler"],
        "optionsData": ["optionsDataDidChangeHandler"],
        "currentTime": ["setCurrenTime"],
        "startTime": ["setStartTime"],
        "playbackRate": ["setPlaybackRate"]
    }; }
};

export { AnimatableComponent as animatable_component };
