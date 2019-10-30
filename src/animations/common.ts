export const ANIMATIONS = {
  // ATTENTION SEEKERS
  BOUNCE : 'bounce',
  FLASH  : 'flash',
  JELLO  : 'jello',
  PULSE  : 'pulse',
  ROTATE : 'rotate',
  SHAKE  : 'shake',
  SWING  : 'swing',
  RUBBER_BAND : 'rubberBand',
  TADA   : 'tada',
  WOBBLE : 'wobble',
  HEART_BEAT  : 'heartBeat'
} as const;

export type AnimationsType = typeof ANIMATIONS[keyof typeof ANIMATIONS]