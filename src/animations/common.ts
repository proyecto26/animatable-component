export enum ANIMATIONS {
  BOUNCE = 'bounce',
  FLASH  = 'flash',
  JELLO  = 'jello',
  PULSE  = 'pulse',
  ROTATE = 'rotate',
  SHAKE  = 'shake',
  SWING  = 'swing',
  RUBBER_BAND = 'rubberBand',
  TADA   = 'tada',
  WOBBLE = 'wobble',
  HEART_BEAT  = 'heartBeat'
}

export type AnimationType = {
  options: KeyframeAnimationOptions;
  keyFrames: Keyframe[]
} 