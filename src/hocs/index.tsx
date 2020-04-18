import { h, FunctionalComponent, ComponentInterface } from '@stencil/core';
import { JSXBase, HTMLStencilElement } from '@stencil/core/internal';
import { JSX } from '../components';

/**
 * HOC to wrap components with Animatable component
 * @param WrappedComponent - Component to be animated with Animatable component
 */
export function createAnimatableComponent<Props> (
  WrappedComponent: FunctionalComponent
) {
  type ComponentProps = Props
    & ComponentInterface
    & JSX.AnimatableComponent
    & JSXBase.HTMLAttributes<HTMLElement>
    & JSXBase.HTMLAttributes<HTMLStencilElement>
    & JSXBase.HTMLAttributes<HTMLAnimatableComponentElement>;

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
      onStart,
      onCancel,
      onFinish,
      fromClassName,
      toClassName,
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
      onStart={onStart}
      onCancel={onCancel}
      onFinish={onFinish}
      fromClassName={fromClassName}
      toClassName={toClassName}
    >
      <WrappedComponent {...rest} />
    </animatable-component>
  };
};