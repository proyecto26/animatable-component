export const ANIMATIONS_ATTENTION_SEEKERS = {
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

export const ANIMATIONS_BOUNCING_ENTRANCES = {
  BOUNCE_IN : 'bounceIn',
  BOUNCE_IN_UP : 'bounceInUp',
  BOUNCE_IN_DOWN : 'bounceInDown',
  BOUNCE_IN_RIGHT : 'bounceInRight',
  BOUNCE_IN_LEFT : 'bounceInLeft'
} as const;

export const ANIMATIONS_BOUNCING_EXITS = {
  BOUNCE_OUT : 'bounceOut',
  BOUNCE_OUT_UP : 'bounceOutUp',
  BOUNCE_OUT_DOWN : 'bounceOutDown',
  BOUNCE_OUT_RIGHT : 'bounceOutRight',
  BOUNCE_OUT_LEFT : 'bounceOutLeft'
} as const;

export const ANIMATIONS_FADING_ENTRANCES = {
  FADE_IN : 'fadeIn',
  FADE_IN_UP : 'fadeInUp',
  FADE_IN_UP_BIG : 'fadeInUpBig',
  FADE_IN_DOWN : 'fadeInDown',
  FADE_IN_DOWN_BIG : 'fadeInDownBig',
  FADE_IN_RIGHT : 'fadeInRight',
  FADE_IN_RIGHT_BIG : 'fadeInRightBig',
  FADE_IN_LEFT : 'fadeInLeft',
  FADE_IN_LEFT_BIG : 'fadeInLeftBig'
} as const;

export const ANIMATIONS_FADING_EXITS = {
  FADE_OUT : 'fadeOut',
  FADE_OUT_UP : 'fadeOutUp',
  FADE_OUT_UP_BIG : 'fadeOutUpBig',
  FADE_OUT_DOWN : 'fadeOutDown',
  FADE_OUT_DOWN_BIG : 'fadeOutDownBig',
  FADE_OUT_RIGHT : 'fadeOutRight',
  FADE_OUT_RIGHT_BIG : 'fadeOutRightBig',
  FADE_OUT_LEFT : 'fadeOutLeft',
  FADE_OUT_LEFT_BIG : 'fadeOutLeftBig'
} as const;

export const ANIMATIONS = {
  ...ANIMATIONS_ATTENTION_SEEKERS,
  ...ANIMATIONS_BOUNCING_ENTRANCES,
  ...ANIMATIONS_BOUNCING_EXITS,
  ...ANIMATIONS_FADING_ENTRANCES,
  ...ANIMATIONS_FADING_EXITS
} as const;

export type AnimationsType = typeof ANIMATIONS[keyof typeof ANIMATIONS];