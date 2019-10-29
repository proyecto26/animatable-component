import { h, FunctionalComponent, ComponentInterface } from '@stencil/core';
import { JSXBase, HTMLStencilElement } from '@stencil/core/internal';
import { JSX } from '../components'

export function createAnimatableComponent<Props> (
  WrappedComponent: FunctionalComponent
) {
  type ComponentProps = Props
    & ComponentInterface
    & JSX.AnimatableComponent
    & JSXBase.HTMLAttributes<HTMLAnimatableComponentElement>
    & JSXBase.HTMLAttributes<HTMLElement>
    & JSXBase.HTMLAttributes<HTMLStencilElement>;

  return (props: ComponentProps): FunctionalComponent<ComponentProps> => {
    const {
      ref,
      keyFrames,
      keyFramesData,
      options,
      optionsData,
      animateId,
      delay,
      endDelay,
      duration,
      direction,
      composite,
      easing,
      fill,
      iterations,
      iterationStart,
      iterationComposite,
      autoPlay,
      currentTime,
      startTime,
      playbackRate,
      onFinish,
      onCancel,
      ...rest
    } = props
    return <animatable-component
      ref={ref}
      keyFrames={keyFrames}
      keyFramesData={keyFramesData}
      options={options}
      optionsData={optionsData}
      animateId={animateId}
      delay={delay}
      endDelay={endDelay}
      duration={duration}
      direction={direction}
      composite={composite}
      easing={easing}
      fill={fill}
      iterations={iterations}
      iterationStart={iterationStart}
      iterationComposite={iterationComposite}
      autoPlay={autoPlay}
      currentTime={currentTime}
      startTime={startTime}
      playbackRate={playbackRate}
      onFinish={onFinish}
      onCancel={onCancel}

    >
      <WrappedComponent {...rest} />
    </animatable-component>
  }
};