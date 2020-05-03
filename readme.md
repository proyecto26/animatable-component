![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg)](https://github.com/proyecto26/animatable-component/graphs/commit-activity)
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/@proyecto26/animatable-component.svg
[npm-url]:https://npmjs.org/package/@proyecto26/animatable-component
[downloads-image]:http://img.shields.io/npm/dm/@proyecto26/animatable-component.svg
[total-downloads-image]:http://img.shields.io/npm/dt/@proyecto26/animatable-component.svg?label=total%20downloads
[twitter-image]:https://img.shields.io/twitter/follow/jdnichollsc.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/jdnichollsc

# `<animatable/>` 

Web Component built with [Stencil.js](https://github.com/ionic-team/stencil) to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) in a declarative way.
You can animate any HTML element easily:
```html
<animatable-component
  autoplay
  easing="ease-in-out"
  duration="800"
  delay="300"
  animation="tada"
>
  <h1>Hello World</h1>
</animatable-component>
```
With the largest list of [Keyframes](https://developer.mozilla.org/docs/Web/API/Web_Animations_API/Keyframe_Formats)/[Easing Functions](https://developer.mozilla.org/docs/Web/API/EffectTiming/easing) that can also be used with other animation tools or Platforms! 🧚

## Demo 🎮

Do you want to see this web component in action? Visit https://codepen.io/jdnichollsc/full/rNNYBbe yay! 🎉

- Playground: https://codepen.io/jdnichollsc/pen/MWwpGNW
- Sequence: https://codepen.io/jdnichollsc/full/OJVWyQm
- Events: https://codepen.io/jdnichollsc/full/wvagEYQ
- Paths: https://codepen.io/jdnichollsc/full/MWwmBzr
- Confetti: https://codepen.io/jdnichollsc/full/RwWVoJN
- 3D Clock: https://codepen.io/jdnichollsc/full/WNvXaYM
- Cube Component: https://codepen.io/jdnichollsc/full/mdervLB
- Multiple Cubes: https://codepen.io/jdnichollsc/full/XWmaYgM
- The illusion of life (Appeal): https://codepen.io/jdnichollsc/full/GRprmVv
- Solar System: https://codepen.io/jdnichollsc/full/yLYogYz
- WorkShop: https://slides.com/juandavidnicholls/waapi-webcomponents
- Meet `<animatable />`, a tiny Web Component: https://dev.to/jdnichollsc/meet-animatable-a-tiny-web-component-to-use-web-animations-api-as-a-component-1glh

![Animatable](https://github.com/proyecto26/animatable-component/blob/master/img/demo-pwa.png?raw=true)
> Includes a PWA demo for debugging animations! ▶

## Usage 🎉

- [animatable-component](./src/components/animatable-component/readme.md)
```html
<animatable-component autoplay iterations="3" animation="heartBeat" easing="ease-in" duration="1000">
  <h1>Proof that Tony Stark has a heart ✵</h1>
</animatable-component>
```
- [animatable-cube](./src/components/animatable-cube/readme.md)
```html
<animatable-cube
  autoplay
  fill="forwards"
  composite="add"
  duration="2600"
  easing="linear"
  iterations="Infinity"
  fromClassName="playing"
  toClassName="finished"
  animation="rotate-90-vertical-bck"
>
  <div slot="front-face">Front</div>
  <div slot="back-face">Back</div>
  <div slot="right-face">Right</div>
  <div slot="left-face">Left</div>
  <div slot="top-face">Top</div>
  <div slot="bottom-face">Bottom</div>
</animatable-cube>
```
### With other animation libraries:
```js
import {
  ANIMATIONS,
  EASING_FUNCTIONS,
  EASING,
  KEYFRAMES
} from '@proyecto26/animatable-component';

const bounceKeyFrames = KEYFRAMES[ANIMATIONS.BOUNCE];
const easingOutCubic = EASING_FUNCTIONS[EASING.EASE_OUT_CUBIC];

// Use here any other animation tool :)
```

## Getting Started 📖

### Packages

| Project | Package | Version | Links |
| ------- | ------- | ------- |:-----:|
| **Core** | [`@proyecto26/animatable-component`](https://www.npmjs.com/package/@proyecto26/animatable-component) | [![version](https://img.shields.io/npm/v/@proyecto26/animatable-component/latest.svg)](https://www.npmjs.com/package/@proyecto26/animatable-component) | [`README.md`](./README.md)
| **React** | [`@proyecto26/animatable-component-react`](https://www.npmjs.com/package/@proyecto26/animatable-component-react) | [![version](https://img.shields.io/npm/v/@proyecto26/animatable-component-react/latest.svg)](https://www.npmjs.com/package/@proyecto26/animatable-component-react) | [`README.md`](react/README.md)

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/animatable-component@1.1.7/dist/animatable-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @proyecto26/animatable-component --save`
- Put a script tag similar to this `<script src='node_modules/@proyecto26/animatable-component/dist/animatable-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @proyecto26/animatable-component --save`
- Add an import to the npm packages `import @proyecto26/animatable-component;`
- Then you can use the element anywhere in your template, JSX, html etc

## Framework integrations 👨‍💻

### Angular
Using `animatable-component` component within an Angular project:

#### Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of Web Components in the HTML files. Here is an example of adding it to `AppModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses **Animatable**.

#### Calling defineCustomElements

**Animatable** component includes a function used to load itself in the application window object. That function is called `defineCustomElements()` and needs to be executed once during the bootstrapping of your application. One convenient place to add it is in the `main.ts` file as follows:

```tsx
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as defineAnimatable } from '@proyecto26/animatable-component/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineAnimatable(window);
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/angular.md)

### React

- Specific Wrapper

When using a wrapper component, It's not necessary to access the reference directly to attach events, etc. More details [here](./react/README.md).
```tsx
import React from 'react';
import {
  AnimatableComponent,
  ANIMATIONS,
  EASING
} from '@proyecto26/animatable-component-react';

const App = () => {
  return (
    <AnimatableComponent
      autoPlay
      delay={300}
      duration={800}
      composite='add'
      direction='alternate'
      iterations={Infinity}
      animation={ANIMATIONS.TADA}
      easing={EASING.EASE_IN_OUT_BACK}
      onStart={() => console.log('Starting animation')}
      onFinish={() => console.log('Finished animation')}
      onCancel={() => console.log('Cancelled animation')}
    >
      <div>
        <p>HELLO WORLD</p>
      </div>
    </AnimatableComponent>
  );
};
export default App;
```

- Web Component

Other option is using the web component directly: 
```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements as defineAnimatable } from '@proyecto26/animatable-component/loader'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

defineAnimatable(window);
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/react.md)

### Vue

In order to use the `animatable-component` Web Component inside of a Vue application, it should be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file as follows:

```tsx
import Vue from 'vue';
import { defineCustomElements as defineAnimatable } from '@proyecto26/animatable-component/loader'

import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/animatable-\w*/];

// Bind the custom element to the window object
defineAnimatable(window);

new Vue({
  render: h => h(App)
}).$mount('#app');
```

[_from stencil documentation_](https://github.com/ionic-team/stencil-site/blob/master/src/docs/framework-integration/vue.md)

### Stencil

To animate [Functional Components](https://stenciljs.com/docs/functional-components) you can use the `createAnimatableComponent` utility, e.g:
- `utils.tsx`
```tsx
import {
  createAnimatableComponent
} from '@proyecto26/animatable-component';

const SendMessageButton = (props) => (
  <ion-fab-button {...props}>
    <ion-icon name='send' />
  </ion-fab-button>
);
export const AnimatableSendMessageButton = createAnimatableComponent(SendMessageButton);
export const keyFramesSendMessage: Keyframe[] = [
  {
    opacity: '0',
    transform: 'rotate(0deg)'
  },
  {
    opacity: '1',
    transform: 'rotate(360deg)'
  }
];
export const optionsSendMessage: KeyframeAnimationOptions = {
  duration: 500,
  easing: 'ease-in-out'
};
```
- `my-component.tsx`
```tsx
import { Component, Host, h } from '@stencil/core';
import { AnimatableSendMessageButton, keyFramesSendMessage, optionsSendMessage } from './utils'

@Component({
  tag: 'my-component',
  shadow: false
})
export class MyComponent {
  render() {
    return (
       <AnimatableSendMessageButton
        autoPlay
        keyFrames={keyFramesSendMessage}
        options={optionsSendMessage}
        onFinish={() => alert('Eureka!')}
      />
    )
  }
}
```


## Credits 👍
* [Animate.css](https://daneden.github.io/animate.css)
* [Animista](https://animista.net)

## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## Enterprise 💼

Available as part of the Tidelift Subscription.

The maintainers of `<animatable/>` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-proyecto26-animatable-component?utm_source=npm-proyecto26-animatable-component&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Security contact information 🚨
To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
