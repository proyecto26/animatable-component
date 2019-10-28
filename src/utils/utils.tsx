import { h, FunctionalComponent } from '@stencil/core';

import { AnimatableComponent } from '../components/animatable-component/animatable-component'

export function createAnimatableComponent<Props> (
  WrappedComponent: FunctionalComponent<Props>
): FunctionalComponent<AnimatableComponent | Props> {
  return (props) => (
    <animatable-component {...props as AnimatableComponent}>
      <WrappedComponent {...props as Props} />
    </animatable-component>
  )
};