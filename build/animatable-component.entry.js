import { r as registerInstance, c as createEvent, h, g as getElement } from './index-5378d6cd.js';
import { g as getKeyFramesByAnimation } from './index-f15f2e9e.js';
import { g as getElementToAnimate, c as clearPropsWithOptions, A as AnimationManager } from './index-11e37e52.js';

const AnimatableComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Start the animation when the component is mounted.
         */
        this.autoPlay = false;
        this.onStart = createEvent(this, "start", 3);
        this.onFinish = createEvent(this, "finish", 3);
        this.onCancel = createEvent(this, "cancel", 3);
    }
    get element() {
        return getElementToAnimate(this.el);
    }
    animationDidChangeHandler(animation) {
        this.keyFrames = getKeyFramesByAnimation(animation);
    }
    /**
     * Get keyFrames of the animation from string data.
     * @param text - The string with the keyFrames of the animation.
     */
    keyFramesDidChangeHandler(text) {
        if (text !== undefined)
            this.keyFrames = JSON.parse(text);
    }
    /**
     * Get options of the animation from string data.
     * @param text - The string with the options of the animation.
     */
    optionsDidChangeHandler(options) {
        clearPropsWithOptions(this, options);
    }
    /**
     * Get options of the animation from string data.
     * @param text - The string with the options of the animation.
     */
    optionsDataDidChangeHandler(text) {
        if (text !== undefined)
            this.options = JSON.parse(text);
    }
    setCurrenTime(newValue) {
        this.manager.currentAnimation.currentTime = newValue;
    }
    /**
     * Returns the current time value of the animation in milliseconds, whether running or paused.
     */
    async getCurrentTime() {
        return Promise.resolve(this.manager.currentAnimation.currentTime);
    }
    setStartTime(newValue) {
        this.manager.currentAnimation.startTime = newValue;
    }
    /**
     * Returns the scheduled time when an animation's playback should begin.
     */
    async getStartTime() {
        return Promise.resolve(this.manager.currentAnimation.startTime);
    }
    /**
     * Indicates whether the animation is currently waiting
     * for an asynchronous operation such as initiating playback
     * or pausing a running animation.
     */
    async getPending() {
        return Promise.resolve(this.manager.currentAnimation.pending);
    }
    setPlaybackRate(newValue) {
        this.manager.currentAnimation.playbackRate = newValue;
    }
    /**
     * Returns the playback rate of the animation.
     */
    async getPlaybackRate() {
        return Promise.resolve(this.manager.currentAnimation.playbackRate);
    }
    /**
     * Returns an enumerated value describing the playback state of an animation.
     */
    async getPlayState() {
        return Promise.resolve(this.manager.currentAnimation.playState);
    }
    /**
     * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
     */
    async cancel() {
        this.manager.currentAnimation.cancel();
    }
    /**
     * Sets the current playback time to the end of the animation
     * corresponding to the current playback direction.
     */
    async finish() {
        this.manager.currentAnimation.finish();
    }
    /**
     * Suspends playback of the animation.
     */
    async pause() {
        this.manager.currentAnimation.pause();
    }
    /**
     * Starts or resumes playing of an animation.
     */
    async play() {
        this.manager.playAnimation();
    }
    /**
     * Reverses the playback direction, meaning the animation ends at its beginning.
     */
    async reverse() {
        this.manager.currentAnimation.reverse();
    }
    /**
     * Clear the current animation
     */
    async clear() {
        this.manager.clearAnimation();
    }
    /**
     * Destroy the current animation
     */
    async destroy() {
        this.manager.destroyAnimation();
    }
    /**
     * Initialize manager
     */
    componentWillLoad() {
        this.manager = new AnimationManager(this);
        this.manager.setState(this.element, this);
    }
    componentDidLoad() {
        this.manager.savedState();
    }
    componentWillUpdate() {
        this.manager.setState(this.element, this);
    }
    componentDidUpdate() {
        this.manager.savedState();
    }
    componentDidUnload() {
        this.destroy();
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
