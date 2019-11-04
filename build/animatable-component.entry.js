import { r as registerInstance, c as createEvent, h, d as getElement } from './core-03a88eb7.js';
import { b as Animations, c as ANIMATION_KEY_ERROR, a as EASING_FUNCTIONS } from './animations-079e04da.js';

const AnimatableComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Start the animation when the component is mounted.
         */
        this.autoPlay = true;
        this.onFinishAnimation = () => this.onFinish.emit(this.getElement());
        this.onCancelAnimation = () => this.onCancel.emit(this.getElement());
        this.onStart = createEvent(this, "start", 7);
        this.onFinish = createEvent(this, "finish", 3);
        this.onCancel = createEvent(this, "cancel", 3);
    }
    get currentAnimation() {
        const animation = this._animation;
        if (!animation) {
            this._animation = this.createAnimation();
            return this._animation;
        }
        return animation;
    }
    set currentAnimation(value) {
        this._animation = value;
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
            if (options.hasOwnProperty(key)) {
                if (key === 'id')
                    this.animateId = undefined;
                else
                    this[key] = undefined;
            }
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
        this.currentAnimation.currentTime = newValue;
    }
    /**
     * Returns the current time value of the animation in milliseconds, whether running or paused.
     */
    async getCurrentTime() {
        return this.currentAnimation.currentTime;
    }
    setStartTime(newValue) {
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
        /**
         * Prevent emit start event if playState is running
         */
        if (this.currentAnimation.playState !== 'running') {
            this.onStart.emit(this.getElement());
        }
        return this.currentAnimation.play();
    }
    /**
     * Reverses the playback direction, meaning the animation ends at its beginning.
     */
    async reverse() {
        return this.currentAnimation.reverse();
    }
    /**
     * Destroy the current animation
     */
    async destroy() {
        this.currentAnimation.removeEventListener('finish', this.onFinishAnimation);
        this.currentAnimation.removeEventListener('cancel', this.onCancelAnimation);
        this.currentAnimation.finish();
        return this.currentAnimation = null;
    }
    getElement() {
        return (this.el.firstElementChild
            || (this.el.children.length && this.el.children[0])
            || this.el);
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
        const element = this.getElement();
        const options = this.getAnimationOptions();
        const keyFrames = this.keyFrames
            || (this.animation && Animations[this.animation])
            || (this.keyFramesData && JSON.parse(this.keyFramesData))
            || [];
        const animation = element.animate(keyFrames, options);
        if (this.currentTime !== undefined)
            animation.currentTime = this.currentTime;
        if (this.startTime !== undefined)
            animation.startTime = this.startTime;
        /**
         * Disable auto play by default
         */
        if (!this.autoPlay)
            animation.pause();
        /**
         * Add listeners
         */
        animation.addEventListener('finish', this.onFinishAnimation);
        animation.addEventListener('cancel', this.onCancelAnimation);
        return animation;
    }
    componentWillLoad() {
        this.currentAnimation = this.createAnimation();
    }
    async componentWillUpdate() {
        await this.destroy();
        this.currentAnimation = this.createAnimation();
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
