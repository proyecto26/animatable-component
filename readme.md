![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Animatable Component

Web Component built with `Stencil.js` to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) in a declarative way.

```
<animatable-component
  autoPlay
  easing='ease-in-out'
  duration={800}
  delay={300}
  keyFrames={[
    {
      opacity: '0',
      transform: 'rotate(0deg)'
    },
    {
      opacity: '1',
      transform: 'rotate(360deg)'
    }
  ]}
  onFinish={() => alert('Eureka!')}
>
  <h1>Hello World</h1>
</animatable-component>
```

To animate things you can use the `createAnimatableComponent` utility:

```
const SendMessageButton = (props) =>(
  <ion-fab-button {...props}>
    <ion-icon name='send' />
  </ion-fab-button>
)
const AnimatableSendMessageButton = createAnimatableComponent(SendMessageButton)


const keyFramesSendMessage: Keyframe[] = [
  {
    opacity: '0',
    transform: 'rotate(0deg)'
  },
  {
    opacity: '1',
    transform: 'rotate(360deg)'
  }
]

const optionsSendMessage: KeyframeAnimationOptions = {
  duration: 500,
  easing: 'ease-in-out'
}

...
  render() {
    return (
       <AnimatableSendMessageButton
        keyFrames={keyFramesSendMessage}
        options={optionsSendMessage}
        onClick={() => alert('Eureka!')}
      />
    )
  }
...
```

## Properties

| Property             | Attribute             | Description                                                                                                                                                                                                  | Type                                                          | Default     |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ----------- |
| `animateId`          | `animate-id`          | A DOMString with which to reference the animation.                                                                                                                                                           | `string`                                                      | `undefined` |
| `autoPlay`           | `auto-play`           | Start the animation when the component is mounted.                                                                                                                                                           | `boolean`                                                     | `true`      |
| `composite`          | `composite`           | Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.                                  | `"accumulate" \| "add" \| "replace"`                          | `undefined` |
| `currentTime`        | `current-time`        | Sets the current time value of the animation in milliseconds, whether running or paused.                                                                                                                     | `number`                                                      | `undefined` |
| `delay`              | `delay`               | The number of milliseconds to delay the start of the animation. Defaults to 0.                                                                                                                               | `number`                                                      | `undefined` |
| `direction`          | `direction`           | Direction of the animation.                                                                                                                                                                                  | `"alternate" \| "alternate-reverse" \| "normal" \| "reverse"` | `undefined` |
| `duration`           | `duration`            | The number of milliseconds each iteration of the animation takes to complete. Defaults to 0.                                                                                                                 | `number`                                                      | `undefined` |
| `easing`             | `easing`              | The rate of the animation's change over time.                                                                                                                                                                | `string`                                                      | `undefined` |
| `endDelay`           | `end-delay`           | The number of milliseconds to delay after the end of an animation.                                                                                                                                           | `number`                                                      | `undefined` |
| `fill`               | `fill`                | Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none". | `"auto" \| "backwards" \| "both" \| "forwards" \| "none"`     | `undefined` |
| `iterationComposite` | `iteration-composite` | Determines how values build from iteration to iteration in this animation.                                                                                                                                   | `"accumulate" \| "replace"`                                   | `undefined` |
| `iterationStart`     | `iteration-start`     | Describes at what point in the iteration the animation should start.                                                                                                                                         | `number`                                                      | `undefined` |
| `iterations`         | `iterations`          | The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.                                               | `number`                                                      | `undefined` |
| `keyFrames`          | --                    | Keyframes of the animation.                                                                                                                                                                                  | `Keyframe[]`                                                  | `undefined` |
| `options`            | --                    | Default options of the animation.                                                                                                                                                                            | `KeyframeAnimationOptions`                                    | `undefined` |
| `playbackRate`       | `playback-rate`       | Sets the playback rate of the animation.                                                                                                                                                                     | `number`                                                      | `undefined` |
| `startTime`          | `start-time`          | Sets the scheduled time when an animation's playback should begin.                                                                                                                                           | `number`                                                      | `undefined` |


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

## Using this component

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/animatable-component@0.0.1/dist/animatable-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @proyecto26/animatable-component --save`
- Put a script tag similar to this `<script src='node_modules/@proyecto26/animatable-component/dist/animatable-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @proyecto26/animatable-component --save`
- Add an import to the npm packages `import @proyecto26/animatable-component;`
- Then you can use the element anywhere in your template, JSX, html etc

## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## Security contact information 🚨
To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">