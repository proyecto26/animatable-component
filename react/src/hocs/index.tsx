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
    return (
      <AnimatableComponent
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
      </AnimatableComponent>
    );
  };
};
