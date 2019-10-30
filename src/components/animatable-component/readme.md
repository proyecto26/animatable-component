# my-component



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description                                                                                                                                                                                                  | Type                                                                                                                               | Default     |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `animateId`          | `animate-id`          | A DOMString with which to reference the animation.                                                                                                                                                           | `string`                                                                                                                           | `undefined` |
| `animation`          | `animation`           | Name of the animation to get the keyFrames                                                                                                                                                                   | `"bounce" \| "flash" \| "heartBeat" \| "jello" \| "pulse" \| "rotate" \| "rubberBand" \| "shake" \| "swing" \| "tada" \| "wobble"` | `undefined` |
| `autoPlay`           | `auto-play`           | Start the animation when the component is mounted.                                                                                                                                                           | `boolean`                                                                                                                          | `true`      |
| `composite`          | `composite`           | Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.                                  | `"accumulate" \| "add" \| "replace"`                                                                                               | `undefined` |
| `currentTime`        | `current-time`        | Sets the current time value of the animation in milliseconds, whether running or paused.                                                                                                                     | `number`                                                                                                                           | `undefined` |
| `delay`              | `delay`               | The number of milliseconds to delay the start of the animation. Defaults to 0.                                                                                                                               | `number`                                                                                                                           | `undefined` |
| `direction`          | `direction`           | Direction of the animation.                                                                                                                                                                                  | `"alternate" \| "alternate-reverse" \| "normal" \| "reverse"`                                                                      | `undefined` |
| `duration`           | `duration`            | The number of milliseconds each iteration of the animation takes to complete. Defaults to 0.                                                                                                                 | `number`                                                                                                                           | `undefined` |
| `easing`             | `easing`              | The rate of the animation's change over time.                                                                                                                                                                | `string`                                                                                                                           | `undefined` |
| `endDelay`           | `end-delay`           | The number of milliseconds to delay after the end of an animation.                                                                                                                                           | `number`                                                                                                                           | `undefined` |
| `fill`               | `fill`                | Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none". | `"auto" \| "backwards" \| "both" \| "forwards" \| "none"`                                                                          | `undefined` |
| `iterationComposite` | `iteration-composite` | Determines how values build from iteration to iteration in this animation.                                                                                                                                   | `"accumulate" \| "replace"`                                                                                                        | `undefined` |
| `iterationStart`     | `iteration-start`     | Describes at what point in the iteration the animation should start.                                                                                                                                         | `number`                                                                                                                           | `undefined` |
| `iterations`         | `iterations`          | The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.                                               | `number`                                                                                                                           | `undefined` |
| `keyFrames`          | --                    | Keyframes of the animation.                                                                                                                                                                                  | `Keyframe[]`                                                                                                                       | `undefined` |
| `keyFramesData`      | `key-frames-data`     | Keyframes of the animation in string format.                                                                                                                                                                 | `string`                                                                                                                           | `undefined` |
| `options`            | --                    | Default options of the animation.                                                                                                                                                                            | `KeyframeAnimationOptions`                                                                                                         | `undefined` |
| `optionsData`        | `options-data`        | Default options of the animation in string format.                                                                                                                                                           | `string`                                                                                                                           | `undefined` |
| `playbackRate`       | `playback-rate`       | Sets the playback rate of the animation.                                                                                                                                                                     | `number`                                                                                                                           | `undefined` |
| `startTime`          | `start-time`          | Sets the scheduled time when an animation's playback should begin.                                                                                                                                           | `number`                                                                                                                           | `undefined` |


## Events

| Event    | Description                                             | Type                       |
| -------- | ------------------------------------------------------- | -------------------------- |
| `cancel` | This event is sent when the animation is cancelled.     | `CustomEvent<HTMLElement>` |
| `finish` | This event is sent when the animation finishes playing. | `CustomEvent<HTMLElement>` |


## Methods

### `cancel() => Promise<void>`

Clears all `KeyframeEffects` caused by this animation and aborts its playback.

#### Returns

Type: `Promise<void>`



### `finish() => Promise<void>`

Sets the current playback time to the end of the animation
corresponding to the current playback direction.

#### Returns

Type: `Promise<void>`



### `getCurrentTime() => Promise<number>`

Returns the current time value of the animation in milliseconds, whether running or paused.

#### Returns

Type: `Promise<number>`



### `getPending() => Promise<boolean>`

Indicates whether the animation is currently waiting
for an asynchronous operation such as initiating playback
or pausing a running animation.

#### Returns

Type: `Promise<boolean>`



### `getPlayState() => Promise<AnimationPlayState>`

Returns an enumerated value describing the playback state of an animation.

#### Returns

Type: `Promise<AnimationPlayState>`



### `getPlaybackRate() => Promise<number>`

Returns the playback rate of the animation.

#### Returns

Type: `Promise<number>`



### `getStartTime() => Promise<number>`

Returns the scheduled time when an animation's playback should begin.

#### Returns

Type: `Promise<number>`



### `pause() => Promise<void>`

Suspends playback of the animation.

#### Returns

Type: `Promise<void>`



### `play() => Promise<void>`

Starts or resumes playing of an animation.

#### Returns

Type: `Promise<void>`



### `reverse() => Promise<void>`

Reverses the playback direction, meaning the animation ends at its beginning.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
