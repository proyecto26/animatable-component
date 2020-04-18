import { EventEmitter, ComponentInterface } from "@stencil/core";
import { AnimationsType } from "../animations";

export interface IAnimatable {
  animation?: AnimationsType
  keyFrames?: Keyframe[]
  keyFramesData?: string
  options?: KeyframeAnimationOptions
  optionsData?: string
  animateId?: string
  delay?: number
  endDelay?: number
  duration?: number
  direction?: PlaybackDirection
  composite?: CompositeOperation
  easing?: string
  fill?: FillMode
  iterations?: number
  iterationStart?: number
  iterationComposite?: IterationCompositeOperation
  autoPlay?: boolean
  fromClassName?: string
  toClassName?: string
  currentTime?: number;
  startTime?: number;
  playbackRate?: number;
  onStart: EventEmitter<HTMLElement>
  onFinish: EventEmitter<HTMLElement>
  onCancel: EventEmitter<HTMLElement>
}

export type IAnimatableComponent = IAnimatable & ComponentInterface;