# `<animatable/>` for React

## Introduction
React specific wrapper for [animatable-component](https://github.com/proyecto26/animatable-component) component.

## Why?
*Most people who use React don’t use [Web Components](https://reactjs.org/docs/web-components.html)* and there're some limitations handling data with [Custom Components](https://custom-elements-everywhere.com/) from React.
Thus, this **React component** was created not to need to reference their **Custom Elements** using a **ref** and manually attach the events, this makes working with [AnimatableComponent](https://github.com/proyecto26/animatable-component) not cumbersome 👍🏻

## Usage

```tsx
import React, { Component } from 'react'
import {
  AnimatableComponent,
  ANIMATIONS,
  EASING
} from '@proyecto26/animatable-component-react'

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
  )
};
export default App;
```


## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
