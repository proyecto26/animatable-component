import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-5378d6cd.js';
import { g as getKeyFramesByAnimation } from './index-f15f2e9e.js';
import { c as clearPropsWithOptions, A as AnimationManager } from './index-11e37e52.js';

const animatableCubeCss = ":host{--size:var(--animatable-cube-size, var(--animatable-cube-width, var(--animatable-cube-height, 100px)));--perspective:var(--animatable-cube-perspective, 1000px);--perspective-origin:var(--animatable-cube-perspective-origin, 50% 50%);--display:var(--animatable-cube-display, flex);--transition-property:var(--animatable-cube-transition-property, (width, height));--transition-duration:var(--animatable-cube-transition-duration, 0);--transition-delay:var(--animatable-cube-transition-delay, 0);--transition-timing-function:var(--animatable-cube-transition-timing-function, initial);--align-items:var(--animatable-cube-align-items, center);--justify-content:var(--animatable-cube-justify-content, center);--margin:var(--animatable-cube-margin, 0);--padding:var(--animatable-cube-padding, 0);--face-border:var(--animatable-cube-face-border, none);--face-background:var(--animatable-cube-face-background, white);--face-background-size:var(--animatable-cube-face-background-size, 100% 100%);--face-animation:var(\n    --animatable-cube-face-animation,\n    backgroundAnimation\n    var(--animatable-cube-face-animation-duration, 0s)\n    var(--animatable-cube-face-animation-timing-function, initial)\n    var(--animatable-cube-face-animation-delay, 0s)\n    var(--animatable-cube-face-animation-iteration-count, infinite)\n    var(--animatable-cube-face-animation-direction, alternate)\n  );--face-size:calc(var(--size)/2);--face-transform-origin:var(--animatable-cube-face-transform-origin, center center);perspective:var(--perspective);perspective-origin:var(--perspective-origin);padding:var(--padding);margin:var(--margin);display:var(--display);align-items:var(--align-items);justify-content:var(--justify-content);width:var(--size);height:var(--size);transition-property:var(--transition-property);transition-duration:var(--transition-duration);transition-delay:var(--transition-delay);transition-timing-function:var(--transition-timing-function)}:host>div{display:block;height:100%;width:100%;max-width:100%;position:relative;background:transparent;transform-style:preserve-3d;transform:var(--animatable-cube-transform, translateZ(-var(--face-size)));transform-origin:var(--animatable-cube-transform-origin, initial);transition:transform var(--transition-duration)}.face{background:var(--animatable-cube-face-background, var(--face-background));position:absolute;height:100%;width:100%;border:var(--face-border);transition:transform var(--transition-duration);transform-origin:var(--face-transform-origin)}.front{transform:rotateY(0deg)\n    translateZ(var(--face-size));will-change:transform;background:var(--animatable-cube-front-face-background, var(--face-background));background-size:var(--animatable-cube-front-face-background-size, var(--face-background-size));animation:var(--animatable-cube-front-face-animation, var(--face-animation))}.back{transform:rotateY(180deg)\n    translateZ(var(--face-size));will-change:transform;background:var(--animatable-cube-back-face-background, var(--face-background));background-size:var(--animatable-cube-back-face-background-size, var(--face-background-size));animation:var(--animatable-cube-back-face-animation, var(--face-animation))}.right{transform:rotateY(90deg)\n    translateZ(var(--face-size));will-change:transform;background:var(--animatable-cube-right-face-background, var(--face-background));background-size:var(--animatable-cube-right-face-background-size, var(--face-background-size));animation:var(--animatable-cube-right-face-animation, var(--face-animation))}.left{transform:rotateY(-90deg)\n    translateZ(var(--face-size));will-change:transform;background:var(--animatable-cube-left-face-background, var(--face-background));background-size:var(--animatable-cube-left-face-background-size, var(--face-background-size));animation:var(--animatable-cube-left-face-animation, var(--face-animation))}.top{transform:rotateX(90deg)\n    translateZ(var(--face-size));will-change:transform;background:var(--animatable-cube-top-face-background, var(--face-background));background-size:var(--animatable-cube-top-face-background-size, var(--face-background-size));animation:var(--animatable-cube-top-face-animation, var(--face-animation))}.bottom{transform:rotateX(-90deg)\n    translateZ(var(--face-size));will-change:transform;background:var(--animatable-cube-bottom-face-background, var(--face-background));background-size:var(--animatable-cube-bottom-face-background-size, var(--face-background-size));animation:var(--animatable-cube-bottom-face-animation, var(--face-animation))}@keyframes backgroundAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}";

const Cube = class {
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
        return this.el.shadowRoot.querySelector(':host > div');
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
    }
    componentDidLoad() {
        this.manager.setState(this.element, this);
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
        return (h(Host, null, h("div", null, h("div", { class: "front face" }, h("slot", { name: 'front-face' })), h("div", { class: "back face" }, h("slot", { name: 'back-face' })), h("div", { class: "right face" }, h("slot", { name: 'right-face' })), h("div", { class: "left face" }, h("slot", { name: 'left-face' })), h("div", { class: "top face" }, h("slot", { name: 'top-face' })), h("div", { class: "bottom face" }, h("slot", { name: 'bottom-face' })), h("slot", null))));
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
Cube.style = animatableCubeCss;

export { Cube as animatable_cube };
