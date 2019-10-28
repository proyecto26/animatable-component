import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
  Method,
  Watch
} from '@stencil/core';

@Component({
  tag: 'animatable-component'
})
export class AnimatableComponent {
  private animation: Animation

  @Element() el: HTMLElement
  /**
   * Keyframes of the animation.
   */
  @Prop({
    mutable: true,
    reflect: true,
    attribute: 'keyFrames'
  }) keyFrames: Keyframe[]

  /**
   * Get keyFrames of the animation from string data.
   * @param text - The string with the keyFrames of the animation.
   */
  @Watch('keyFramesData')
  keyFramesDidChangeHandler(text: string) {
    if (text) this.keyFrames = JSON.parse(text);
  }

  /**
   * Default options of the animation.
   */
  @Prop({
    mutable: true,
    reflect: true,
    attribute: 'options'
  }) options: KeyframeAnimationOptions

  /**
   * Get options of the animation from string data.
   * @param text - The string with the options of the animation.
   */
  @Watch('optionsData')
  optionsDidChangeHandler(text: string) {
    if (text) this.options = JSON.parse(text);
  }
  /**
   * A DOMString with which to reference the animation.
   */
  @Prop() animateId: string
  /**
   * The number of milliseconds to delay the start of the animation.
   * Defaults to 0.
   */
  @Prop() delay?: number
  /**
   * The number of milliseconds to delay after the end of an animation.
   */
  @Prop() endDelay?: number
  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   * Defaults to 0.
   */
  @Prop() duration?: number
  /**
   * Direction of the animation.
   */
  @Prop() direction: PlaybackDirection
  /**
   * Determines how values are combined between this animation and other,
   * separate animations that do not specify their own specific composite operation.
   * Defaults to `replace`.
   */
  @Prop() composite?: CompositeOperation
  /**
   * The rate of the animation's change over time.
   */
  @Prop() easing?: string
  /**
   * Dictates whether the animation's effects should be reflected
   * by the element(s) prior to playing ("backwards"), retained after the animation
   * has completed playing ("forwards"), or both. Defaults to "none".
   */
  @Prop() fill?: FillMode
  /**
   * The number of times the animation should repeat.
   * Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
   */
  @Prop() iterations?: number
  /**
   * Describes at what point in the iteration the animation should start.
   */
  @Prop() iterationStart?: number
  /**
   * Determines how values build from iteration to iteration in this animation.
   */
  @Prop() iterationComposite?: IterationCompositeOperation
  /**
   * Start the animation when the component is mounted.
   */
  @Prop() autoPlay = true

  /**
   * Sets the current time value of the animation in milliseconds, whether running or paused.
   */
  @Prop() currentTime?: number;
  @Watch('currentTime')
  setCurrenTime(newValue: number) {
    if (this.animation) this.animation.currentTime = newValue
  }
  /**
   * Returns the current time value of the animation in milliseconds, whether running or paused.
   */
  @Method()
  async getCurrentTime(): Promise<number> {
    return this.animation.currentTime;
  }

  /**
   * Sets the scheduled time when an animation's playback should begin.
   */
  @Prop() startTime?: number;
  @Watch('startTime')
  setStartTime(newValue: number) {
    if (this.animation) this.animation.startTime = newValue
  }
  /**
   * Returns the scheduled time when an animation's playback should begin.
   */
  @Method()
  async getStartTime(): Promise<number> {
    return this.animation.startTime;
  }

  /**
   * Indicates whether the animation is currently waiting
   * for an asynchronous operation such as initiating playback
   * or pausing a running animation.
   */
  @Method()
  async getPending(): Promise<boolean> {
    return this.animation.pending;
  }

  /**
   * Sets the playback rate of the animation.
   */
  @Prop() playbackRate?: number;
  @Watch('playbackRate')
  setPlaybackRate(newValue: number) {
    if (this.animation) this.animation.playbackRate = newValue
  }
  /**
   * Returns the playback rate of the animation.
   */
  @Method()
  async getPlaybackRate(): Promise<number> {
    return this.animation.playbackRate;
  }

  /**
   * Returns an enumerated value describing the playback state of an animation.
   */
  @Method()
  async getPlayState(): Promise<AnimationPlayState> {
    return this.animation.playState;
  }

  /**
   * This event is sent when the animation finishes playing.
   */
  @Event({
    eventName: 'finish'
  }) onfinish: EventEmitter<HTMLElement>
  /**
   * This event is sent when the animation is cancelled.
   */
  @Event({
    eventName: 'cancel'
  }) oncancel: EventEmitter<HTMLElement>

  /**
   * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
   */
  @Method()
  async cancel(): Promise<void> {
    return this.animation.cancel()
  }

  /**
   * Sets the current playback time to the end of the animation
   * corresponding to the current playback direction.
   */
  @Method()
  async finish(): Promise<void> {
    return this.animation.finish()
  }

  /**
   * Suspends playback of the animation.
   */
  @Method()
  async pause(): Promise<void> {
    return this.animation.pause()
  }

  /**
   * Starts or resumes playing of an animation.
   */
  @Method()
  async play(): Promise<void> {
    return this.animation.play()
  }

  /**
   * Reverses the playback direction, meaning the animation ends at its beginning.
   */
  @Method()
  async reverse(): Promise<void> {
    return this.animation.reverse()
  }

  getAnimationOptions(): KeyframeAnimationOptions {
    const animationOptions = this.options || {}
    if(this.delay) animationOptions.delay = this.delay
    if(this.duration) animationOptions.duration = this.duration
    if(this.direction) animationOptions.direction = this.direction
    if(this.composite) animationOptions.composite = this.composite
    if(this.easing) animationOptions.easing = this.easing;
    if(this.endDelay) animationOptions.endDelay = this.endDelay;
    if(this.fill) animationOptions.fill = this.fill;
    if(this.animateId) animationOptions.id = this.animateId;
    if(this.iterations) animationOptions.iterations = this.iterations;
    if(this.iterationStart) animationOptions.iterationStart = this.iterationStart;
    if(this.iterationComposite) animationOptions.iterationComposite = this.iterationComposite;

    return animationOptions
  }

  createAnimation() {
    const element = this.el;
    const options = this.getAnimationOptions();
    const animation = element.animate(this.keyFrames, options);
    animation.onfinish = () => this.onfinish.emit(element);
    animation.oncancel = () => this.oncancel.emit(element);
    if (this.currentTime) animation.currentTime = this.currentTime;
    if (this.startTime) animation.startTime = this.startTime;
    
    this.animation = animation;
  }

  componentWillLoad() {
    this.createAnimation()
    if (this.autoPlay) this.animation.play()
  }

  componentDidUpdate() {
    this.createAnimation()
    if (this.autoPlay) this.animation.play()
  }

  render() {
    return <slot />
  }
}