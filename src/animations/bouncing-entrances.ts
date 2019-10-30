import { ANIMATIONS } from './common'

export const BOUNCE_IN: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'scale(0.3)' },
  { offset: 0.2, opacity: 0, transform: 'scale(1.1)' },
  { offset: 0.4, opacity: 0, transform: 'scale(0.9)' },
  { offset: 0.6, opacity: 1, transform: 'scale(1.03)' },
  { offset: 0.8, opacity: 1, transform: 'scale(0.97)' },
  { offset: 1, opacity: 1, transform: 'scale(1)' }
];

export const BOUNCE_IN_UP: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateY(800px)' },
  { offset: 0.6, opacity: 1, transform: 'translateY(-25px)' },
  { offset: 0.75, opacity: 1, transform: 'translateY(10px)' },
  { offset: 0.9, opacity: 1, transform: 'translateY(-5px)' },
  { offset: 1, opacity: 1, transform: 'translateY(0px)' }
];

export const BOUNCE_IN_DOWN: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateY(-800px)' },
  { offset: 0.6, opacity: 1, transform: 'translateY(25px)' },
  { offset: 0.75, opacity: 1, transform: 'translateY(-10px)' },
  { offset: 0.9, opacity: 1, transform: 'translateY(5px)' },
  { offset: 1, opacity: 1, transform: 'translateY(0px)' }
];

export const BOUNCE_IN_RIGHT: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateX(600px)' },
  { offset: 0.6, opacity: 1, transform: 'translateX(-20px)' },
  { offset: 0.75, opacity: 1, transform: 'translateX(8px)' },
  { offset: 0.9, opacity: 1, transform: 'translateX(-4px)' },
  { offset: 1, opacity: 1, transform: 'translateX(0px)' }
];

export const BOUNCE_IN_LEFT: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateX(-600px)' },
  { offset: 0.6, opacity: 1, transform: 'translateX(20px)' },
  { offset: 0.75, opacity: 1, transform: 'translateX(-8px)' },
  { offset: 0.9, opacity: 1, transform: 'translateX(4px)' },
  { offset: 1, opacity: 1, transform: 'translateX(0px)' }
];

export default {
  [ANIMATIONS.BOUNCE_IN]: BOUNCE_IN,
  [ANIMATIONS.BOUNCE_IN_UP]: BOUNCE_IN_UP,
  [ANIMATIONS.BOUNCE_IN_DOWN]: BOUNCE_IN_DOWN,
  [ANIMATIONS.BOUNCE_IN_RIGHT]: BOUNCE_IN_RIGHT,
  [ANIMATIONS.BOUNCE_IN_LEFT]: BOUNCE_IN_LEFT
}