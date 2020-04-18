import {
  h,
  Component,
  Element,
  Prop,
  Event,
  EventEmitter,
  Method,
  Watch
} from '@stencil/core';

import {
  IAnimatableComponent
} from '../../models/animatable';

import {
  AnimationsType,
  getKeyFramesByAnimation
} from '../../animations';

import {
  AnimationManager,
  clearPropsWithOptions,
  getElementToAnimate
} from '../../utils';

/**
 * animatable-component
 */
@Component({
  tag: 'animatable-component'
})
export class AnimatableComponent implements IAnimatableComponent {
  /**
   * Animation manager for Animatable
   */
  private manager: AnimationManager

  @Element() el!: HTMLElement

  get element(): HTMLElement {
    return getElementToAnimate(this.el);
  }

  /**
   * Name of the animation to get the keyFrames
   */
  @Prop() animation?: AnimationsType
  @Watch('animation')
  animationDidChangeHandler(animation: AnimationsType) {
    this.keyFrames = getKeyFramesByAnimation(animation);
  }

  /**
   * Keyframes of the animation.
   */
  @Prop({
    mutable: true,
    reflect: true
  }) keyFrames?: Keyframe[]

  /**
   * Keyframes of the animation in string format.
   */
  @Prop() keyFramesData?: string

  /**
   * Get keyFrames of the animation from string data.
   * @param text - The string with the keyFrames of the animation.
   */
  @Watch('keyFramesData')
  keyFramesDidChangeHandler(text: string) {
    if (text !== undefined) this.keyFrames = JSON.parse(text);
  }

  /**
   * Default options of the animation.
   */
  @Prop({
    mutable: true,
    reflect: true
  }) options?: KeyframeAnimationOptions

  /**
   * Get options of the animation from string data.
   * @param text - The string with the options of the animation.
   */
  @Watch('options')
  optionsDidChangeHandler(options: KeyframeAnimationOptions) {
    clearPropsWithOptions(this, options);
  }

  /**
   * Default options of the animation in string format.
   */
  @Prop() optionsData?: string

  /**
   * Get options of the animation from string data.
   * @param text - The string with the options of the animation.
   */
  @Watch('optionsData')
  optionsDataDidChangeHandler(text: string) {
    if (text !== undefined) this.options = JSON.parse(text);
  }
  /**
   * A DOMString with which to reference the animation.
   */
  @Prop({ mutable: true }) animateId?: string
  /**
   * The number of milliseconds to delay the start of the animation.
   * Defaults to 0.
   */
  @Prop({ mutable: true }) delay?: number
  /**
   * The number of milliseconds to delay after the end of an animation.
   */
  @Prop({ mutable: true }) endDelay?: number
  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   * Defaults to 0.
   */
  @Prop({ mutable: true }) duration?: number
  /**
   * Direction of the animation.
   */
  @Prop({ mutable: true }) direction?: PlaybackDirection
  /**
   * Determines how values are combined between this animation and other,
   * separate animations that do not specify their own specific composite operation.
   * Defaults to `replace`.
   */
  @Prop({ mutable: true }) composite?: CompositeOperation
  /**
   * The rate of the animation's change over time.
   */
  @Prop({ mutable: true }) easing?: string
  /**
   * Dictates whether the animation's effects should be reflected
   * by the element(s) prior to playing ("backwards"), retained after the animation
   * has completed playing ("forwards"), or both. Defaults to "none".
   */
  @Prop({ mutable: true }) fill?: FillMode
  /**
   * The number of times the animation should repeat.
   * Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
   */
  @Prop({ mutable: true }) iterations?: number
  /**
   * Describes at what point in the iteration the animation should start.
   */
  @Prop({ mutable: true }) iterationStart?: number
  /**
   * Determines how values build from iteration to iteration in this animation.
   */
  @Prop({ mutable: true }) iterationComposite?: IterationCompositeOperation
  /**
   * Start the animation when the component is mounted.
   */
  @Prop({
    attribute: 'autoplay',
    reflect: true
  }) autoPlay? = false
  /**
   * The class name to be applied when the animation starts
   */
  @Prop() fromClassName?: string
  /**
   * The class name to be applied when the animation ends
   */
  @Prop() toClassName?: string
  /**
   * Sets the current time value of the animation in milliseconds, whether running or paused.
   */
  @Prop() currentTime?: number;
  @Watch('currentTime')
  setCurrenTime(newValue: number) {
    this.manager.currentAnimation.currentTime = newValue;
  }

  /**
   * Returns the current time value of the animation in milliseconds, whether running or paused.
   */
  @Method()
  async getCurrentTime(): Promise<number> {
    return Promise.resolve(this.manager.currentAnimation.currentTime);
  }

  /**
   * Sets the scheduled time when an animation's playback should begin.
   */
  @Prop() startTime?: number;
  @Watch('startTime')
  setStartTime(newValue: number) {
    this.manager.currentAnimation.startTime = newValue;
  }
  /**
   * Returns the scheduled time when an animation's playback should begin.
   */
  @Method()
  async getStartTime(): Promise<number> {
    return Promise.resolve(this.manager.currentAnimation.startTime);
  }

  /**
   * Indicates whether the animation is currently waiting
   * for an asynchronous operation such as initiating playback
   * or pausing a running animation.
   */
  @Method()
  async getPending(): Promise<boolean> {
    return Promise.resolve(this.manager.currentAnimation.pending);
  }

  /**
   * Sets the playback rate of the animation.
   */
  @Prop() playbackRate?: number;
  @Watch('playbackRate')
  setPlaybackRate(newValue: number) {
    this.manager.currentAnimation.playbackRate = newValue;
  }

  /**
   * Returns the playback rate of the animation.
   */
  @Method()
  async getPlaybackRate(): Promise<number> {
    return Promise.resolve(this.manager.currentAnimation.playbackRate);
  }

  /**
   * Returns an enumerated value describing the playback state of an animation.
   */
  @Method()
  async getPlayState(): Promise<AnimationPlayState> {
    return Promise.resolve(this.manager.currentAnimation.playState);
  }

  /**
   * This event is sent when the animation is going to play.
   */
  @Event({
    eventName: 'start',
    bubbles: false
  }) onStart!: EventEmitter<HTMLElement>

  /**
   * This event is sent when the animation finishes playing.
   */
  @Event({
    eventName: 'finish',
    bubbles: false
  }) onFinish!: EventEmitter<HTMLElement>

  /**
   * This event is sent when the animation is cancelled.
   */
  @Event({
    eventName: 'cancel',
    bubbles: false
  }) onCancel!: EventEmitter<HTMLElement>

  /**
   * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
   */
  @Method()
  async cancel(): Promise<void> {
    this.manager.currentAnimation.cancel();
  }

  /**
   * Sets the current playback time to the end of the animation
   * corresponding to the current playback direction.
   */
  @Method()
  async finish(): Promise<void> {
    this.manager.currentAnimation.finish();
  }

  /**
   * Suspends playback of the animation.
   */
  @Method()
  async pause(): Promise<void> {
    this.manager.currentAnimation.pause();
  }

  /**
   * Starts or resumes playing of an animation.
   */
  @Method()
  async play(): Promise<void> {
    /**
     * Prevent emit start event if playState is running
     */
    if (this.manager.currentAnimation.playState === 'running') return;
    this.manager.onStartAnimation();
    return this.manager.currentAnimation.play();
  }

  /**
   * Reverses the playback direction, meaning the animation ends at its beginning.
   */
  @Method()
  async reverse(): Promise<void> {
    this.manager.currentAnimation.reverse()
  }

  /**
   * Clear the current animation
   */
  @Method()
  async clear(): Promise<void> {
    this.manager.clearAnimation();
  }

  /**
   * Destroy the current animation
   */
  @Method()
  async destroy(): Promise<void> {
    const currentAnimation = this.manager.currentAnimation;
    await this.clear();
    if (this.iterations !== Infinity) {
      currentAnimation.finish();
    }
  }

  /**
   * Initialize manager
   */
  componentWillLoad() {
    this.manager = new AnimationManager();
  }

  componentDidLoad() {
    this.manager.setState(this.element, this);
    this.manager.autoPlay();
  }

  /**
   * Clear current animation
   */
  async componentWillUpdate() {
    await this.clear();
  }

  componentDidUpdate() {
    this.manager.setState(this.element, this);
    this.manager.autoPlay();
  }

  componentDidUnload() {
    this.destroy();
  }
 
  render() {
    return <slot />
  }
}