import React, { ComponentType } from 'react';
import { AnimatableComponent } from '../components';

export type AnimatableProps = React.ComponentProps<typeof AnimatableComponent>;
export type AnimatableComponentType = ComponentType<AnimatableProps>;

/**
 * HOC to wrap components with Animatable component
 * @param WrappedComponent - Component to be animated with Animatable component
 */
export function createAnimatableComponent<T> (
  WrappedComponent: ComponentType
) {
  return function WrappedWithAnimatable (props: T & AnimatableProps) {
    const {
      ref,
      animation,
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
      fromClassName,
      toClassName,
      currentTime,
      startTime,
      playbackRate,
      onStart,
      onFinish,
      onCancel,
      ...rest
    } = props
    return (
      <AnimatableComponent
        ref={ref}
        animation={animation}
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
        fromClassName={fromClassName}
        toClassName={toClassName}
        currentTime={currentTime}
        startTime={startTime}
        playbackRate={playbackRate}
        onStart={onStart}
        onFinish={onFinish}
        onCancel={onCancel}
      >
        <WrappedComponent {...rest} />
      </AnimatableComponent>
    );
  };
};
