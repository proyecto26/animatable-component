import { ANIMATIONS } from './common'

const BOUNCE_IN: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'scale(0.3)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.2, opacity: 0, transform: 'scale(1.1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.4, opacity: 0, transform: 'scale(0.9)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: 1, transform: 'scale(1.03)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.8, opacity: 1, transform: 'scale(0.97)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: 1, transform: 'scale(1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const BOUNCE_IN_UP: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateY(3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: 1, transform: 'translateY(-20px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, opacity: 1, transform: 'translateY(10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, opacity: 1, transform: 'translateY(-5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: 1, transform: 'translateY(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const BOUNCE_IN_DOWN: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateY(-3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: 1, transform: 'translateY(25px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, opacity: 1, transform: 'translateY(-10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, opacity: 1, transform: 'translateY(5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: 1, transform: 'translateY(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const BOUNCE_IN_RIGHT: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateX(3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: 1, transform: 'translateX(-25px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, opacity: 1, transform: 'translateX(10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, opacity: 1, transform: 'translateX(-5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: 1, transform: 'translateX(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const BOUNCE_IN_LEFT: Keyframe[] = [
  { offset: 0, opacity: 0, transform: 'translateX(-3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: 1, transform: 'translateX(25px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, opacity: 1, transform: 'translateX(-10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, opacity: 1, transform: 'translateX(5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: 1, transform: 'translateX(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

export default {
  [ANIMATIONS.BOUNCE_IN]: BOUNCE_IN,
  [ANIMATIONS.BOUNCE_IN_UP]: BOUNCE_IN_UP,
  [ANIMATIONS.BOUNCE_IN_DOWN]: BOUNCE_IN_DOWN,
  [ANIMATIONS.BOUNCE_IN_RIGHT]: BOUNCE_IN_RIGHT,
  [ANIMATIONS.BOUNCE_IN_LEFT]: BOUNCE_IN_LEFT
}