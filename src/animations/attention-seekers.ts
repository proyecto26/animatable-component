import { ANIMATIONS } from './common'

export const BOUNCE: Keyframe[] = [
  { offset: 0, transform: 'translateY(0px)' },
  { offset: 0.2, transform: 'translateY(0px)' },
  { offset: 0.4, transform: 'translateY(-30px)' },
  { offset: 0.43, transform: 'translateY(-30px)' },
  { offset: 0.53, transform: 'translateY(0px)' },
  { offset: 0.7, transform: 'translateY(-15px)' },
  { offset: 0.8, transform: 'translateY(0px)' },
  { offset: 0.9, transform: 'translateY(-4px)' },
  { offset: 1, transform: 'translateY(0px)' }
];

export const FLASH: Keyframe[] = [
  { offset: 0, opacity: 1 },
  { offset: 0.25, opacity: 0 },
  { offset: 0.5, opacity: 1 },
  { offset: 0.75, opacity: 0 },
  { offset: 1, opacity: 1 }
];

export const JELLO: Keyframe[] = [
  { offset: 0, transform: 'skewX(0deg) skewY(0deg)' },
  { offset: 0.111, transform: 'skewX(0deg) skewY(0deg)' },
  { offset: 0.222, transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
  { offset: 0.333, transform: 'skewX(6.25deg) skewY(6.25deg)' },
  { offset: 0.444, transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
  { offset: 0.555, transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
  { offset: 0.666, transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
  { offset: 0.777, transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
  { offset: 0.888, transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
  { offset: 1, transform: 'skewX(0deg) skewY(0deg)' }
];

export const PULSE: Keyframe[] = [
  { offset: 0, transform: 'scale(1)' },
  { offset: 0.5, transform: 'scale(1.05)' },
  { offset: 1, transform: 'scale(1)' }
];

export const ROTATE: Keyframe[] = [
  { offset: 0, transform: 'rotate(0deg)' },
  { offset: 0.25, transform: 'rotate(90deg)' },
  { offset: 0.5, transform: 'rotate(180deg)' },
  { offset: 0.75, transform: 'rotate(270deg)' },
  { offset: 1, transform: 'rotate(360deg)' }
];

export const SHAKE: Keyframe[] = [
  { offset: 0, transform: 'translateX(0px)' },
  { offset: 0.1, transform: 'translateX(-10px)' },
  { offset: 0.2, transform: 'translateX(10px)' },
  { offset: 0.3, transform: 'translateX(-10px)' },
  { offset: 0.4, transform: 'translateX(10px)' },
  { offset: 0.5, transform: 'translateX(-10px)' },
  { offset: 0.6, transform: 'translateX(10px)' },
  { offset: 0.7, transform: 'translateX(-10px)' },
  { offset: 0.8, transform: 'translateX(10px)' },
  { offset: 0.9, transform: 'translateX(-10px)' },
  { offset: 1, transform: 'translateX(0px)' }
];

export const SWING: Keyframe[] = [
  { offset: 0, transform: 'rotate(0deg)' },
  { offset: 0.2, transform: 'rotate(15deg)' },
  { offset: 0.4, transform: 'rotate(-10deg)' },
  { offset: 0.6, transform: 'rotate(5deg)' },
  { offset: 0.8, transform: 'rotate(-5deg)' },
  { offset: 1, transform: 'rotate(0deg)' }
];

export const RUBBER_BAND: Keyframe[] = [
  { offset: 0, transform: 'scale(1, 1)' },
  { offset: 0.3, transform: 'scale(1.25, 0.75)' },
  { offset: 0.4, transform: 'scale(0.75, 1.25)' },
  { offset: 0.5, transform: 'scale(1.15, 0.85)' },
  { offset: 0.65, transform: 'scale(0.95, 1.05)' },
  { offset: 0.75, transform: 'scale(1.05, 0.95)' },
  { offset: 1, transform: 'scale(1, 1)' }
];

export const TADA: Keyframe[] = [
  { offset: 0, transform: 'scale(1) rotate(0deg)' },
  { offset: 0.1, transform: 'scale(0.9) rotate(-3deg)' },
  { offset: 0.2, transform: 'scale(0.9) rotate(-3deg)' },
  { offset: 0.3, transform: 'scale(1.1) rotate(-3deg)' },
  { offset: 0.4, transform: 'scale(1.1) rotate(3deg)' },
  { offset: 0.5, transform: 'scale(1.1) rotate(-3deg)' },
  { offset: 0.6, transform: 'scale(1.1) rotate(3deg)' },
  { offset: 0.7, transform: 'scale(1.1) rotate(-3deg)' },
  { offset: 0.8, transform: 'scale(1.1) rotate(3deg)' },
  { offset: 0.9, transform: 'scale(1.1) rotate(3deg)' },
  { offset: 1, transform: 'scale(1) rotate(0deg)' }
];

export const WOBBLE: Keyframe[] = [
  { offset: 0, transform: 'translateX(0px) rotate(0deg)' },
  { offset: 0.15, transform: 'translateX(-25px) rotate(-5deg)' },
  { offset: 0.3, transform: 'translateX(20px) rotate(3deg)' },
  { offset: 0.45, transform: 'translateX(-15px) rotate(-3deg)' },
  { offset: 0.6, transform: 'translateX(10px) rotate(2deg)' },
  { offset: 0.75, transform: 'translateX(-5px) rotate(-1deg)' },
  { offset: 1, transform: 'translateX(0px) rotate(0deg)' }
];

export const HEART_BEAT: Keyframe[] = [
  { offset: 0, transform: 'scale(1)' },
  { offset: 0.14, transform: 'scale(1.3)' },
  { offset: 0.28, transform: 'scale(1)' },
  { offset: 0.42, transform: 'scale(1.3)' },
  { offset: 0.70, transform: 'scale(1)' },
  { offset: 1, transform: 'scale(1)' },
];

export default {
  [ANIMATIONS.BOUNCE]: BOUNCE,
  [ANIMATIONS.FLASH]:  FLASH,
  [ANIMATIONS.JELLO]:  JELLO,
  [ANIMATIONS.PULSE]:  PULSE,
  [ANIMATIONS.ROTATE]: ROTATE,
  [ANIMATIONS.SHAKE]:  SHAKE,
  [ANIMATIONS.SWING]:  SWING,
  [ANIMATIONS.RUBBER_BAND]: RUBBER_BAND,
  [ANIMATIONS.TADA]:   TADA,
  [ANIMATIONS.WOBBLE]: WOBBLE,
  [ANIMATIONS.HEART_BEAT]: HEART_BEAT
}