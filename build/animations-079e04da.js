const EASING = {
    LINEAR: 'linear',
    EASE: 'ease',
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
    EASE_IN_CUBIC: 'ease-in-cubic',
    EASE_OUT_CUBIC: 'ease-out-cubic',
    EASE_IN_OUT_CUBIC: 'ease-in-out-cubic',
    EASE_IN_CIRC: 'ease-in-circ',
    EASE_OUT_CIRC: 'ease-out-circ',
    EASE_IN_OUT_CIRC: 'ease-in-out-circ',
    EASE_IN_EXPO: 'ease-in-expo',
    EASE_OUT_EXPO: 'ease-out-expo',
    EASE_IN_OUT_EXPO: 'ease-in-out-expo',
    EASE_IN_QUAD: 'ease-in-quad',
    EASE_OUT_QUAD: 'ease-out-quad',
    EASE_IN_OUT_QUAD: 'ease-in-out-quad',
    EASE_IN_QUART: 'ease-in-quart',
    EASE_OUT_QUART: 'ease-out-quart',
    EASE_IN_OUT_QUART: 'ease-in-out-quart',
    EASE_IN_QUINT: 'ease-in-quint',
    EASE_OUT_QUINT: 'ease-out-quint',
    EASE_IN_OUT_QUINT: 'ease-in-out-quint',
    EASE_IN_SINE: 'ease-in-sine',
    EASE_OUT_SINE: 'ease-out-sine',
    EASE_IN_OUT_SINE: 'ease-in-out-sine',
    EASE_IN_BACK: 'ease-in-back',
    EASE_OUT_BACK: 'ease-out-back',
    EASE_IN_OUT_BACK: 'ease-in-out-back'
};
const EASING_FUNCTIONS = {
    [EASING.LINEAR]: 'linear',
    [EASING.EASE]: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    [EASING.EASE_IN]: 'cubic-bezier(0.42, 0, 1, 1)',
    [EASING.EASE_OUT]: 'cubic-bezier(0, 0, 0.58, 1)',
    [EASING.EASE_IN_OUT]: 'cubic-bezier(0.42, 0, 0.58, 1)',
    [EASING.EASE_IN_CUBIC]: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    [EASING.EASE_OUT_CUBIC]: 'cubic-bezier(0.215, 0.61, 0.355, 1.0)',
    [EASING.EASE_IN_OUT_CUBIC]: 'cubic-bezier(0.645, 0.045, 0.355, 1.0)',
    [EASING.EASE_IN_CIRC]: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    [EASING.EASE_OUT_CIRC]: 'cubic-bezier(0.075, 0.82, 0.165, 1.0)',
    [EASING.EASE_IN_OUT_CIRC]: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    [EASING.EASE_IN_EXPO]: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    [EASING.EASE_OUT_EXPO]: 'cubic-bezier(0.19, 1.0, 0.22, 1.0)',
    [EASING.EASE_IN_OUT_EXPO]: 'cubic-bezier(1.0, 0.0, 0.0, 1.0)',
    [EASING.EASE_IN_QUAD]: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    [EASING.EASE_OUT_QUAD]: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    [EASING.EASE_IN_OUT_QUAD]: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    [EASING.EASE_IN_QUART]: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    [EASING.EASE_OUT_QUART]: 'cubic-bezier(0.165, 0.84, 0.44, 1.0)',
    [EASING.EASE_IN_OUT_QUART]: 'cubic-bezier(0.77, 0.0, 0.175, 1.0)',
    [EASING.EASE_IN_QUINT]: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    [EASING.EASE_OUT_QUINT]: 'cubic-bezier(0.23, 1.0, 0.32, 1.0)',
    [EASING.EASE_IN_OUT_QUINT]: 'cubic-bezier(0.86, 0.0, 0.07, 1.0)',
    [EASING.EASE_IN_SINE]: 'cubic-bezier(0.47, 0.0, 0.745, 0.715)',
    [EASING.EASE_OUT_SINE]: 'cubic-bezier(0.39, 0.575, 0.565, 1.0)',
    [EASING.EASE_IN_OUT_SINE]: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    [EASING.EASE_IN_BACK]: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    [EASING.EASE_OUT_BACK]: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    [EASING.EASE_IN_OUT_BACK]: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

const ANIMATIONS_ATTENTION_SEEKERS = {
    BOUNCE: 'bounce',
    FLASH: 'flash',
    JELLO: 'jello',
    PULSE: 'pulse',
    ROTATE: 'rotate',
    SHAKE: 'shake',
    SWING: 'swing',
    RUBBER_BAND: 'rubberBand',
    TADA: 'tada',
    WOBBLE: 'wobble',
    HEART_BEAT: 'heartBeat'
};
const ANIMATIONS_BOUNCING_ENTRANCES = {
    BOUNCE_IN: 'bounceIn',
    BOUNCE_IN_UP: 'bounceInUp',
    BOUNCE_IN_DOWN: 'bounceInDown',
    BOUNCE_IN_RIGHT: 'bounceInRight',
    BOUNCE_IN_LEFT: 'bounceInLeft'
};
const ANIMATIONS_BOUNCING_EXITS = {
    BOUNCE_OUT: 'bounceOut',
    BOUNCE_OUT_UP: 'bounceOutUp',
    BOUNCE_OUT_DOWN: 'bounceOutDown',
    BOUNCE_OUT_RIGHT: 'bounceOutRight',
    BOUNCE_OUT_LEFT: 'bounceOutLeft'
};
const ANIMATIONS_FADING_ENTRANCES = {
    FADE_IN: 'fadeIn',
    FADE_IN_UP: 'fadeInUp',
    FADE_IN_UP_BIG: 'fadeInUpBig',
    FADE_IN_DOWN: 'fadeInDown',
    FADE_IN_DOWN_BIG: 'fadeInDownBig',
    FADE_IN_RIGHT: 'fadeInRight',
    FADE_IN_RIGHT_BIG: 'fadeInRightBig',
    FADE_IN_LEFT: 'fadeInLeft',
    FADE_IN_LEFT_BIG: 'fadeInLeftBig'
};
const ANIMATIONS_FADING_EXITS = {
    FADE_OUT: 'fadeOut',
    FADE_OUT_UP: 'fadeOutUp',
    FADE_OUT_UP_BIG: 'fadeOutUpBig',
    FADE_OUT_DOWN: 'fadeOutDown',
    FADE_OUT_DOWN_BIG: 'fadeOutDownBig',
    FADE_OUT_RIGHT: 'fadeOutRight',
    FADE_OUT_RIGHT_BIG: 'fadeOutRightBig',
    FADE_OUT_LEFT: 'fadeOutLeft',
    FADE_OUT_LEFT_BIG: 'fadeOutLeftBig'
};
const ANIMATIONS_FLIPPERS = {
    FLIP: 'flip',
    FLIP_IN_X: 'flipInX',
    FLIP_IN_Y: 'flipInY',
    FLIP_OUT_X: 'flipOutX',
    FLIP_OUT_Y: 'flipOutY'
};
const ANIMATIONS_LIGHTSPEED = {
    LIGHT_SPEED_IN: 'lightSpeedIn',
    LIGHT_SPEED_OUT: 'lightSpeedOut'
};
const ANIMATIONS_ROTATING_ENTRANCES = {
    ROTATE_IN: 'rotateIn',
    ROTATE_IN_CLOCKWISE: 'rotateInClockwise',
    ROTATE_IN_DOWN_LEFT: 'rotateInDownLeft',
    ROTATE_IN_DOWN_RIGHT: 'rotateInDownRight',
    ROTATE_IN_UP_LEFT: 'rotateInUpLeft',
    ROTATE_IN_UP_RIGHT: 'rotateInUpRight'
};
const ANIMATIONS_ROTATING_EXITS = {
    ROTATE_OUT: 'rotateOut',
    ROTATE_OUT_CLOCKWISE: 'rotateOutClockwise',
    ROTATE_OUT_DOWN_LEFT: 'rotateOutDownLeft',
    ROTATE_OUT_DOWN_RIGHT: 'rotateOutDownRight',
    ROTATE_OUT_UP_LEFT: 'rotateOutUpLeft',
    ROTATE_OUT_UP_RIGHT: 'rotateOutUpRight'
};
const ANIMATIONS_SLIDING_ENTRANCES = {
    SLIDE_IN_UP: 'slideInUp',
    SLIDE_IN_DOWN: 'slideInDown',
    SLIDE_IN_LEFT: 'slideInLeft',
    SLIDE_IN_RIGHT: 'slideInRight'
};
const ANIMATIONS_SLIDING_EXITS = {
    SLIDE_OUT_UP: 'slideOutUp',
    SLIDE_OUT_DOWN: 'slideOutDown',
    SLIDE_OUT_LEFT: 'slideOutLeft',
    SLIDE_OUT_RIGHT: 'slideOutRight'
};
const ANIMATIONS_ZOOM_ENTRANCES = {
    ZOOM_IN: 'zoomIn',
    ZOOM_IN_UP: 'zoomInUp',
    ZOOM_IN_DOWN: 'zoomInDown',
    ZOOM_IN_LEFT: 'zoomInLeft',
    ZOOM_IN_RIGHT: 'zoomInRight'
};
const ANIMATIONS_ZOOM_EXITS = {
    ZOOM_OUT: 'zoomOut',
    ZOOM_OUT_UP: 'zoomOutUp',
    ZOOM_OUT_DOWN: 'zoomOutDown',
    ZOOM_OUT_LEFT: 'zoomOutLeft',
    ZOOM_OUT_RIGHT: 'zoomOutRight'
};
const ANIMATIONS_SPECIALS = {
    HINGE: 'hinge',
    JACK_IN_THE_BOX: 'jackInTheBox',
    ROLL_IN: 'rollIn',
    ROLL_OUT: 'rollOut'
};
const ANIMATIONS = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ANIMATIONS_ATTENTION_SEEKERS), ANIMATIONS_BOUNCING_ENTRANCES), ANIMATIONS_BOUNCING_EXITS), ANIMATIONS_FADING_ENTRANCES), ANIMATIONS_FADING_EXITS), ANIMATIONS_FLIPPERS), ANIMATIONS_LIGHTSPEED), ANIMATIONS_ROTATING_ENTRANCES), ANIMATIONS_ROTATING_EXITS), ANIMATIONS_SLIDING_ENTRANCES), ANIMATIONS_SLIDING_EXITS), ANIMATIONS_ZOOM_ENTRANCES), ANIMATIONS_ZOOM_EXITS), ANIMATIONS_SPECIALS);

const BOUNCE_DEFAULT = {
    transform: 'translate(0)',
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
};
const BOUNCE = [
    Object.assign({ offset: 0 }, BOUNCE_DEFAULT),
    Object.assign({ offset: 0.2 }, BOUNCE_DEFAULT),
    { offset: 0.4, transform: 'translateY(-30px)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
    { offset: 0.43, transform: 'translateY(-30px)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
    Object.assign({ offset: 0.53 }, BOUNCE_DEFAULT),
    { offset: 0.7, transform: 'translateY(-15px)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' },
    Object.assign({ offset: 0.8 }, BOUNCE_DEFAULT),
    { offset: 0.9, transform: 'translateY(-4px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    Object.assign({ offset: 1 }, BOUNCE_DEFAULT)
];
const FLASH = [
    { offset: 0, opacity: 1 },
    { offset: 0.25, opacity: 0 },
    { offset: 0.5, opacity: 1 },
    { offset: 0.75, opacity: 0 },
    { offset: 1, opacity: 1 }
];
const JELLO_DEFAULT = {
    transform: 'skewX(0deg) skewY(0deg)',
    transformOrigin: 'center'
};
const JELLO = [
    Object.assign({ offset: 0 }, JELLO_DEFAULT),
    Object.assign({ offset: 0.111 }, JELLO_DEFAULT),
    Object.assign(Object.assign({ offset: 0.222 }, JELLO_DEFAULT), { transform: 'skewX(-12.5deg) skewY(-12.5deg)' }),
    Object.assign(Object.assign({ offset: 0.333 }, JELLO_DEFAULT), { transform: 'skewX(6.25deg) skewY(6.25deg)' }),
    Object.assign(Object.assign({ offset: 0.444 }, JELLO_DEFAULT), { transform: 'skewX(-3.125deg) skewY(-3.125deg)' }),
    Object.assign(Object.assign({ offset: 0.555 }, JELLO_DEFAULT), { transform: 'skewX(1.5625deg) skewY(1.5625deg)' }),
    Object.assign(Object.assign({ offset: 0.666 }, JELLO_DEFAULT), { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' }),
    Object.assign(Object.assign({ offset: 0.777 }, JELLO_DEFAULT), { transform: 'skewX(0.390625deg) skewY(0.390625deg)' }),
    Object.assign(Object.assign({ offset: 0.888 }, JELLO_DEFAULT), { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' }),
    Object.assign({ offset: 1 }, JELLO_DEFAULT)
];
const PULSE = [
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.05)' },
    { offset: 1, transform: 'scale(1)' }
];
const ROTATE = [
    { offset: 0, transform: 'rotate(0deg)' },
    { offset: 0.25, transform: 'rotate(90deg)' },
    { offset: 0.5, transform: 'rotate(180deg)' },
    { offset: 0.75, transform: 'rotate(270deg)' },
    { offset: 1, transform: 'rotate(360deg)' }
];
const SHAKE_LEFT = { transform: 'translateX(-10px)' };
const SHAKE_RIGHT = { transform: 'translateX(10px)' };
const SHAKE = [
    { offset: 0, transform: 'translateX(0px)' },
    Object.assign({ offset: 0.1 }, SHAKE_LEFT),
    Object.assign({ offset: 0.2 }, SHAKE_RIGHT),
    Object.assign({ offset: 0.3 }, SHAKE_LEFT),
    Object.assign({ offset: 0.4 }, SHAKE_RIGHT),
    Object.assign({ offset: 0.5 }, SHAKE_LEFT),
    Object.assign({ offset: 0.6 }, SHAKE_RIGHT),
    Object.assign({ offset: 0.7 }, SHAKE_LEFT),
    Object.assign({ offset: 0.8 }, SHAKE_RIGHT),
    Object.assign({ offset: 0.9 }, SHAKE_LEFT),
    { offset: 1, transform: 'translateX(0px)' }
];
const SWING = [
    { offset: 0, transform: 'rotate(0deg)', transformOrigin: 'top center' },
    { offset: 0.2, transform: 'rotate(15deg)', transformOrigin: 'top center' },
    { offset: 0.4, transform: 'rotate(-10deg)', transformOrigin: 'top center' },
    { offset: 0.6, transform: 'rotate(5deg)', transformOrigin: 'top center' },
    { offset: 0.8, transform: 'rotate(-5deg)', transformOrigin: 'top center' },
    { offset: 1, transform: 'rotate(0deg)', transformOrigin: 'top center' }
];
const RUBBER_BAND = [
    { offset: 0, transform: 'scale(1, 1)' },
    { offset: 0.3, transform: 'scale(1.25, 0.75)' },
    { offset: 0.4, transform: 'scale(0.75, 1.25)' },
    { offset: 0.5, transform: 'scale(1.15, 0.85)' },
    { offset: 0.65, transform: 'scale(0.95, 1.05)' },
    { offset: 0.75, transform: 'scale(1.05, 0.95)' },
    { offset: 1, transform: 'scale(1, 1)' }
];
const TADA = [
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
const WOBBLE = [
    { offset: 0, transform: 'translate(0) rotate(0deg)' },
    { offset: 0.15, transform: 'translateX(-25%) rotate(-5deg)' },
    { offset: 0.3, transform: 'translateX(20%) rotate(3deg)' },
    { offset: 0.45, transform: 'translateX(-15%) rotate(-3deg)' },
    { offset: 0.6, transform: 'translateX(10%) rotate(2deg)' },
    { offset: 0.75, transform: 'translateX(-5%) rotate(-1deg)' },
    { offset: 1, transform: 'translate(0) rotate(0deg)' }
];
const HEART_BEAT_DEFAULT = { transform: 'scale(1)', easing: 'ease-in-out' };
const HEART_BEAT = [
    Object.assign({ offset: 0 }, HEART_BEAT_DEFAULT),
    Object.assign(Object.assign({ offset: 0.14 }, HEART_BEAT_DEFAULT), { transform: 'scale(1.3)' }),
    Object.assign({ offset: 0.28 }, HEART_BEAT_DEFAULT),
    Object.assign(Object.assign({ offset: 0.42 }, HEART_BEAT_DEFAULT), { transform: 'scale(1.3)' }),
    Object.assign({ offset: 0.70 }, HEART_BEAT_DEFAULT),
    Object.assign({ offset: 1 }, HEART_BEAT_DEFAULT),
];
const ATTENTION_SEEKERS = {
    [ANIMATIONS.BOUNCE]: BOUNCE,
    [ANIMATIONS.FLASH]: FLASH,
    [ANIMATIONS.JELLO]: JELLO,
    [ANIMATIONS.PULSE]: PULSE,
    [ANIMATIONS.ROTATE]: ROTATE,
    [ANIMATIONS.SHAKE]: SHAKE,
    [ANIMATIONS.SWING]: SWING,
    [ANIMATIONS.RUBBER_BAND]: RUBBER_BAND,
    [ANIMATIONS.TADA]: TADA,
    [ANIMATIONS.WOBBLE]: WOBBLE,
    [ANIMATIONS.HEART_BEAT]: HEART_BEAT
};

const BOUNCE_IN = [
    { offset: 0, opacity: 0, transform: 'scale(0.3)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.2, opacity: 0, transform: 'scale(1.1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.4, opacity: 0, transform: 'scale(0.9)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.6, opacity: 1, transform: 'scale(1.03)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.8, opacity: 1, transform: 'scale(0.97)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];
const BOUNCE_IN_UP = [
    { offset: 0, opacity: 0, transform: 'translateY(3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.6, opacity: 1, transform: 'translateY(-20px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.75, opacity: 1, transform: 'translateY(10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.9, opacity: 1, transform: 'translateY(-5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];
const BOUNCE_IN_DOWN = [
    { offset: 0, opacity: 0, transform: 'translateY(-3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.6, opacity: 1, transform: 'translateY(25px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.75, opacity: 1, transform: 'translateY(-10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.9, opacity: 1, transform: 'translateY(5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];
const BOUNCE_IN_RIGHT = [
    { offset: 0, opacity: 0, transform: 'translateX(3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.6, opacity: 1, transform: 'translateX(-25px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.75, opacity: 1, transform: 'translateX(10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.9, opacity: 1, transform: 'translateX(-5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 1, opacity: 1, transform: 'translateX(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];
const BOUNCE_IN_LEFT = [
    { offset: 0, opacity: 0, transform: 'translateX(-3000px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.6, opacity: 1, transform: 'translateX(25px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.75, opacity: 1, transform: 'translateX(-10px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 0.9, opacity: 1, transform: 'translateX(5px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    { offset: 1, opacity: 1, transform: 'translateX(0px)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];
const BOUNCING_ENTRANCES = {
    [ANIMATIONS.BOUNCE_IN]: BOUNCE_IN,
    [ANIMATIONS.BOUNCE_IN_UP]: BOUNCE_IN_UP,
    [ANIMATIONS.BOUNCE_IN_DOWN]: BOUNCE_IN_DOWN,
    [ANIMATIONS.BOUNCE_IN_RIGHT]: BOUNCE_IN_RIGHT,
    [ANIMATIONS.BOUNCE_IN_LEFT]: BOUNCE_IN_LEFT
};

const BOUNCE_OUT = [
    { offset: 0, opacity: 1, transform: 'scale(1)' },
    { offset: 0.2, opacity: 1, transform: 'scale(0.9)' },
    { offset: 0.5, opacity: 1, transform: 'scale(1.11)' },
    { offset: 0.55, opacity: 1, transform: 'scale(1.11)' },
    { offset: 1, opacity: 0, transform: 'scale(1)' }
];
const BOUNCE_OUT_UP = [
    { offset: 0, opacity: 1, transform: 'translateY(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateY(-10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateY(20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateY(20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateY(20px)' },
    { offset: 1, opacity: 0, transform: 'translateY(-2000px)' }
];
const BOUNCE_OUT_DOWN = [
    { offset: 0, opacity: 1, transform: 'translateY(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateY(10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateY(-20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateY(-20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateY(-20px)' },
    { offset: 1, opacity: 0, transform: 'translateY(2000px)' }
];
const BOUNCE_OUT_RIGHT = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateX(10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateX(-20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateX(-20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateX(-20px)' },
    { offset: 1, opacity: 0, transform: 'translateX(2000px)' }
];
const BOUNCE_OUT_LEFT = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateX(-10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateX(20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateX(20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateX(20px)' },
    { offset: 1, opacity: 0, transform: 'translateX(-2000px)' }
];
const BOUNCING_EXITS = {
    [ANIMATIONS.BOUNCE_OUT]: BOUNCE_OUT,
    [ANIMATIONS.BOUNCE_OUT_UP]: BOUNCE_OUT_UP,
    [ANIMATIONS.BOUNCE_OUT_DOWN]: BOUNCE_OUT_DOWN,
    [ANIMATIONS.BOUNCE_OUT_RIGHT]: BOUNCE_OUT_RIGHT,
    [ANIMATIONS.BOUNCE_OUT_LEFT]: BOUNCE_OUT_LEFT
};

const FADE_IN = [
    { offset: 0, opacity: 0 },
    { offset: 1, opacity: 1 },
];
const FADE_IN_UP = [
    { offset: 0, opacity: 0, transform: 'translateY(100%)' },
    { offset: 1, opacity: 1, transform: 'translateY(0)' }
];
const FADE_IN_UP_BIG = [
    { offset: 0, opacity: 0, transform: 'translateY(2000px)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
];
const FADE_IN_DOWN = [
    { offset: 0, opacity: 0, transform: 'translateY(-100%)' },
    { offset: 1, opacity: 1, transform: 'translateY(0)' }
];
const FADE_IN_DOWN_BIG = [
    { offset: 0, opacity: 0, transform: 'translateY(-2000px)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
];
const FADE_IN_RIGHT = [
    { offset: 0, opacity: 0, transform: 'translateX(100%)' },
    { offset: 1, opacity: 1, transform: 'translateX(0)' }
];
const FADE_IN_RIGHT_BIG = [
    { offset: 0, opacity: 0, transform: 'translateX(2000px)' },
    { offset: 1, opacity: 1, transform: 'translateX(0px)' }
];
const FADE_IN_LEFT = [
    { offset: 0, opacity: 0, transform: 'translateX(-100%)' },
    { offset: 1, opacity: 1, transform: 'translateX(0)' }
];
const FADE_IN_LEFT_BIG = [
    { offset: 0, opacity: 0, transform: 'translateX(-2000px)' },
    { offset: 1, opacity: 1, transform: 'translateX(0px)' }
];
const FADING_ENTRANCES = {
    [ANIMATIONS.FADE_IN]: FADE_IN,
    [ANIMATIONS.FADE_IN_UP]: FADE_IN_UP,
    [ANIMATIONS.FADE_IN_UP_BIG]: FADE_IN_UP_BIG,
    [ANIMATIONS.FADE_IN_DOWN]: FADE_IN_DOWN,
    [ANIMATIONS.FADE_IN_DOWN_BIG]: FADE_IN_DOWN_BIG,
    [ANIMATIONS.FADE_IN_RIGHT]: FADE_IN_RIGHT,
    [ANIMATIONS.FADE_IN_RIGHT_BIG]: FADE_IN_RIGHT_BIG,
    [ANIMATIONS.FADE_IN_LEFT]: FADE_IN_LEFT,
    [ANIMATIONS.FADE_IN_LEFT_BIG]: FADE_IN_LEFT_BIG
};

const FADE_OUT = [
    { offset: 0, opacity: 1 },
    { offset: 1, opacity: 0 },
];
const FADE_OUT_UP = [
    { offset: 0, opacity: 1, transform: 'translateY(0)' },
    { offset: 1, opacity: 0, transform: 'translateY(-100%)' }
];
const FADE_OUT_UP_BIG = [
    { offset: 0, opacity: 1, transform: 'translateY(0px)' },
    { offset: 1, opacity: 0, transform: 'translateY(-2000px)' }
];
const FADE_OUT_DOWN = [
    { offset: 0, opacity: 1, transform: 'translateY(0)' },
    { offset: 1, opacity: 0, transform: 'translateY(100%)' }
];
const FADE_OUT_DOWN_BIG = [
    { offset: 0, opacity: 1, transform: 'translateY(0px)' },
    { offset: 1, opacity: 0, transform: 'translateY(2000px)' }
];
const FADE_OUT_RIGHT = [
    { offset: 0, opacity: 1, transform: 'translateX(0)' },
    { offset: 1, opacity: 0, transform: 'translateX(100%)' }
];
const FADE_OUT_RIGHT_BIG = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 1, opacity: 0, transform: 'translateX(2000px)' }
];
const FADE_OUT_LEFT = [
    { offset: 0, opacity: 1, transform: 'translateX(0)' },
    { offset: 1, opacity: 0, transform: 'translateX(-100%)' }
];
const FADE_OUT_LEFT_BIG = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 1, opacity: 0, transform: 'translateX(-2000px)' }
];
const FADING_EXITS = {
    [ANIMATIONS.FADE_OUT]: FADE_OUT,
    [ANIMATIONS.FADE_OUT_UP]: FADE_OUT_UP,
    [ANIMATIONS.FADE_OUT_UP_BIG]: FADE_OUT_UP_BIG,
    [ANIMATIONS.FADE_OUT_DOWN]: FADE_OUT_DOWN,
    [ANIMATIONS.FADE_OUT_DOWN_BIG]: FADE_OUT_DOWN_BIG,
    [ANIMATIONS.FADE_OUT_RIGHT]: FADE_OUT_RIGHT,
    [ANIMATIONS.FADE_OUT_RIGHT_BIG]: FADE_OUT_RIGHT_BIG,
    [ANIMATIONS.FADE_OUT_LEFT]: FADE_OUT_LEFT,
    [ANIMATIONS.FADE_OUT_LEFT_BIG]: FADE_OUT_LEFT_BIG
};

const FLIP = [
    { offset: 0, backfaceVisibility: 'visible', easing: 'ease-out', transform: 'perspective(400px) scale(1) translateZ(0) rotateY(-360deg)' },
    { offset: 0.4, backfaceVisibility: 'visible', easing: 'ease-out', transform: 'perspective(400px) scale(1) translateZ(150px) rotateY(-190deg)' },
    { offset: 0.5, backfaceVisibility: 'visible', easing: 'ease-in', transform: 'perspective(400px) scale(1) translateZ(150px) rotateY(-170deg)' },
    { offset: 0.8, backfaceVisibility: 'visible', easing: 'ease-in', transform: 'perspective(400px) scale(0.95) translateZ(0) rotateY(0deg)' },
    { offset: 1, backfaceVisibility: 'visible', easing: 'ease-in', transform: 'perspective(400px) scale(1) translateZ(0) rotateY(0deg)' }
];
const FLIP_IN_X = [
    { offset: 0, backfaceVisibility: 'visible', opacity: 0, easing: 'ease-in', transform: 'perspective(400px) rotateX(90deg)' },
    { offset: 0.4, backfaceVisibility: 'visible', opacity: 0.5, easing: 'ease-in', transform: 'perspective(400px) rotateX(-20deg)' },
    { offset: 0.6, backfaceVisibility: 'visible', opacity: 1, easing: 'ease-in', transform: 'perspective(400px) rotateX(10deg)' },
    { offset: 0.8, backfaceVisibility: 'visible', opacity: 1, easing: 'ease-in', transform: 'perspective(400px) rotateX(-5deg)' },
    { offset: 1, backfaceVisibility: 'visible', opacity: 1, easing: 'ease-in', transform: 'perspective(400px) rotateX(0deg)' }
];
const FLIP_IN_Y = [
    { offset: 0, backfaceVisibility: 'visible', opacity: 0, easing: 'ease-in', transform: 'perspective(400px) rotateY(90deg)' },
    { offset: 0.4, backfaceVisibility: 'visible', opacity: 0.5, easing: 'ease-in', transform: 'perspective(400px) rotateY(-20deg)' },
    { offset: 0.6, backfaceVisibility: 'visible', opacity: 1, easing: 'ease-in', transform: 'perspective(400px) rotateY(10deg)' },
    { offset: 0.8, backfaceVisibility: 'visible', opacity: 1, easing: 'ease-in', transform: 'perspective(400px) rotateY(-5deg)' },
    { offset: 1, backfaceVisibility: 'visible', opacity: 1, easing: 'ease-in', transform: 'perspective(400px) rotateY(0deg)' }
];
const FLIP_OUT_X = [
    { offset: 0, backfaceVisibility: 'visible', opacity: 1, transform: 'perspective(400px) rotateX(0deg)' },
    { offset: 0.3, backfaceVisibility: 'visible', opacity: 1, transform: 'perspective(400px) rotateX(-15deg)' },
    { offset: 1, backfaceVisibility: 'visible', opacity: 0, transform: 'perspective(400px) rotateX(90deg)' }
];
const FLIP_OUT_Y = [
    { offset: 0, backfaceVisibility: 'visible', opacity: 1, transform: 'perspective(400px) rotateY(0deg)' },
    { offset: 0.3, backfaceVisibility: 'visible', opacity: 1, transform: 'perspective(400px) rotateY(-15deg)' },
    { offset: 1, backfaceVisibility: 'visible', opacity: 0, transform: 'perspective(400px) rotateY(90deg)' }
];
const FLIPPERS = {
    [ANIMATIONS.FLIP]: FLIP,
    [ANIMATIONS.FLIP_IN_X]: FLIP_IN_X,
    [ANIMATIONS.FLIP_IN_Y]: FLIP_IN_Y,
    [ANIMATIONS.FLIP_OUT_X]: FLIP_OUT_X,
    [ANIMATIONS.FLIP_OUT_Y]: FLIP_OUT_Y
};

const LIGHT_SPEED_IN = [
    { offset: 0, easing: 'ease-out', opacity: 0, transform: 'translateX(200px) skewX(-30deg)' },
    { offset: 0.6, easing: 'ease-out', opacity: 1, transform: 'translateX(0px) skewX(20deg)' },
    { offset: 0.8, easing: 'ease-out', opacity: 1, transform: 'translateX(0px) skewX(-5deg)' },
    { offset: 1, easing: 'ease-out', opacity: 1, transform: 'translateX(0px) skewX(0deg)' }
];
const LIGHT_SPEED_OUT = [
    { offset: 0, easing: 'ease-in', opacity: 1, transform: 'translateX(0px) skewX(0deg)' },
    { offset: 1, easing: 'ease-in', opacity: 0, transform: 'translateX(200px) skewX(30deg)' }
];
const LIGHTSPEED = {
    [ANIMATIONS.LIGHT_SPEED_IN]: LIGHT_SPEED_IN,
    [ANIMATIONS.LIGHT_SPEED_OUT]: LIGHT_SPEED_OUT
};

const ROTATE_IN = [
    { offset: 0, opacity: 0, transform: 'rotateZ(180deg)', transformOrigin: 'center' },
    { offset: 1, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'center' }
];
const ROTATE_IN_CLOCKWISE = [
    { offset: 0, opacity: 0, transform: 'rotateZ(-180deg)', transformOrigin: 'center' },
    { offset: 1, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'center' }
];
const ROTATE_IN_DOWN_LEFT = [
    { offset: 0, opacity: 0, transform: 'rotateZ(-45deg)', transformOrigin: 'left bottom' },
    { offset: 1, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'left bottom' }
];
const ROTATE_IN_DOWN_RIGHT = [
    { offset: 0, opacity: 0, transform: 'rotateZ(45deg)', transformOrigin: 'right bottom' },
    { offset: 1, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'right bottom' }
];
const ROTATE_IN_UP_LEFT = [
    { offset: 0, opacity: 0, transform: 'rotateZ(45deg)', transformOrigin: 'left bottom' },
    { offset: 1, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'left bottom' }
];
const ROTATE_IN_UP_RIGHT = [
    { offset: 0, opacity: 0, transform: 'rotateZ(-45deg)', transformOrigin: 'right bottom' },
    { offset: 1, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'right bottom' }
];
const ROTATING_ENTRANCES = {
    [ANIMATIONS.ROTATE_IN]: ROTATE_IN,
    [ANIMATIONS.ROTATE_IN_CLOCKWISE]: ROTATE_IN_CLOCKWISE,
    [ANIMATIONS.ROTATE_IN_DOWN_LEFT]: ROTATE_IN_DOWN_LEFT,
    [ANIMATIONS.ROTATE_IN_DOWN_RIGHT]: ROTATE_IN_DOWN_RIGHT,
    [ANIMATIONS.ROTATE_IN_UP_LEFT]: ROTATE_IN_UP_LEFT,
    [ANIMATIONS.ROTATE_IN_UP_RIGHT]: ROTATE_IN_UP_RIGHT
};

const ROTATE_OUT = [
    { offset: 0, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'center' },
    { offset: 1, opacity: 0, transform: 'rotateZ(180deg)', transformOrigin: 'center' }
];
const ROTATE_OUT_CLOCKWISE = [
    { offset: 0, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'center' },
    { offset: 1, opacity: 0, transform: 'rotateZ(-180deg)', transformOrigin: 'center' }
];
const ROTATE_OUT_DOWN_LEFT = [
    { offset: 0, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'left bottom' },
    { offset: 1, opacity: 0, transform: 'rotateZ(45deg)', transformOrigin: 'left bottom' }
];
const ROTATE_OUT_DOWN_RIGHT = [
    { offset: 0, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'right bottom' },
    { offset: 1, opacity: 0, transform: 'rotateZ(-45deg)', transformOrigin: 'right bottom' }
];
const ROTATE_OUT_UP_LEFT = [
    { offset: 0, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'left bottom' },
    { offset: 1, opacity: 0, transform: 'rotateZ(-45deg)', transformOrigin: 'left bottom' }
];
const ROTATE_OUT_UP_RIGHT = [
    { offset: 0, opacity: 1, transform: 'rotateZ(0deg)', transformOrigin: 'right bottom' },
    { offset: 1, opacity: 0, transform: 'rotateZ(45deg)', transformOrigin: 'right bottom' }
];
const ROTATING_EXITS = {
    [ANIMATIONS.ROTATE_OUT]: ROTATE_OUT,
    [ANIMATIONS.ROTATE_OUT_CLOCKWISE]: ROTATE_OUT_CLOCKWISE,
    [ANIMATIONS.ROTATE_OUT_DOWN_LEFT]: ROTATE_OUT_DOWN_LEFT,
    [ANIMATIONS.ROTATE_OUT_DOWN_RIGHT]: ROTATE_OUT_DOWN_RIGHT,
    [ANIMATIONS.ROTATE_OUT_UP_LEFT]: ROTATE_OUT_UP_LEFT,
    [ANIMATIONS.ROTATE_OUT_UP_RIGHT]: ROTATE_OUT_UP_RIGHT
};

const SLIDE_IN_UP = [
    { offset: 0, transform: 'translateY(100%)', visibility: 'hidden' },
    { offset: 1, transform: 'translateY(0)', visibility: 'visible' }
];
const SLIDE_IN_DOWN = [
    { offset: 0, transform: 'translateY(-100%)', visibility: 'hidden' },
    { offset: 1, transform: 'translateY(0)', visibility: 'visible' }
];
const SLIDE_IN_LEFT = [
    { offset: 0, transform: 'translateX(-100%)', visibility: 'hidden' },
    { offset: 1, transform: 'translateX(0)', visibility: 'visible' }
];
const SLIDE_IN_RIGHT = [
    { offset: 0, transform: 'translateX(100%)', visibility: 'hidden' },
    { offset: 1, transform: 'translateX(0)', visibility: 'visible' }
];
const SLIDING_ENTRANCES = {
    [ANIMATIONS.SLIDE_IN_UP]: SLIDE_IN_UP,
    [ANIMATIONS.SLIDE_IN_DOWN]: SLIDE_IN_DOWN,
    [ANIMATIONS.SLIDE_IN_LEFT]: SLIDE_IN_LEFT,
    [ANIMATIONS.SLIDE_IN_RIGHT]: SLIDE_IN_RIGHT
};

const SLIDE_OUT_UP = [
    { offset: 0, transform: 'translateY(0)', visibility: 'visible' },
    { offset: 1, transform: 'translateY(-100%)', visibility: 'hidden' }
];
const SLIDE_OUT_DOWN = [
    { offset: 0, transform: 'translateY(0)', visibility: 'visible' },
    { offset: 1, transform: 'translateY(100%)', visibility: 'hidden' }
];
const SLIDE_OUT_LEFT = [
    { offset: 0, transform: 'translateX(0)', visibility: 'visible' },
    { offset: 1, transform: 'translateX(-100%)', visibility: 'hidden' }
];
const SLIDE_OUT_RIGHT = [
    { offset: 0, transform: 'translateX(0)', visibility: 'visible' },
    { offset: 1, transform: 'translateX(100%)', visibility: 'hidden' }
];
const SLIDING_EXITS = {
    [ANIMATIONS.SLIDE_OUT_UP]: SLIDE_OUT_UP,
    [ANIMATIONS.SLIDE_OUT_DOWN]: SLIDE_OUT_DOWN,
    [ANIMATIONS.SLIDE_OUT_LEFT]: SLIDE_OUT_LEFT,
    [ANIMATIONS.SLIDE_OUT_RIGHT]: SLIDE_OUT_RIGHT
};

const ZOOM_IN = [
    { offset: 0, opacity: 0, transform: 'scale(1)' },
    { offset: 0.5, opacity: 0, transform: 'scale(0.3)' },
    { offset: 1, opacity: 1, transform: 'scale(1)' }
];
const ZOOM_IN_UP = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateY(-1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateY(60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_IN_DOWN = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateY(1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateY(-60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_IN_LEFT = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateX(-1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateX(10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_IN_RIGHT = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateX(1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateX(-10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_ENTRANCES = {
    [ANIMATIONS.ZOOM_IN]: ZOOM_IN,
    [ANIMATIONS.ZOOM_IN_UP]: ZOOM_IN_UP,
    [ANIMATIONS.ZOOM_IN_DOWN]: ZOOM_IN_DOWN,
    [ANIMATIONS.ZOOM_IN_LEFT]: ZOOM_IN_LEFT,
    [ANIMATIONS.ZOOM_IN_RIGHT]: ZOOM_IN_RIGHT
};

const ZOOM_OUT = [
    { offset: 0, opacity: 1, transform: 'scale(1)' },
    { offset: 0.5, opacity: 0, transform: 'scale(0.3)' },
    { offset: 1, opacity: 0, transform: 'scale(0)' }
];
const ZOOM_OUT_UP = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateY(60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateY(-1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', transformOrigin: 'center bottom' }
];
const ZOOM_OUT_DOWN = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateY(-60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateY(1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', transformOrigin: 'center bottom' }
];
const ZOOM_OUT_LEFT = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateX(10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateX(-1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }
];
const ZOOM_OUT_RIGHT = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateX(-10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateX(1000px)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }
];
const ZOOM_EXITS = {
    [ANIMATIONS.ZOOM_OUT]: ZOOM_OUT,
    [ANIMATIONS.ZOOM_OUT_UP]: ZOOM_OUT_UP,
    [ANIMATIONS.ZOOM_OUT_DOWN]: ZOOM_OUT_DOWN,
    [ANIMATIONS.ZOOM_OUT_LEFT]: ZOOM_OUT_LEFT,
    [ANIMATIONS.ZOOM_OUT_RIGHT]: ZOOM_OUT_RIGHT
};

const HINGE_DEFAULT = {
    opacity: 1,
    transformOrigin: 'top left',
    easing: 'ease-in-out'
};
const HINGE = [
    Object.assign({ offset: 0, transform: 'rotate(0)' }, HINGE_DEFAULT),
    Object.assign({ offset: 0.2, transform: 'rotateZ(80deg)' }, HINGE_DEFAULT),
    Object.assign({ offset: 0.4, transform: 'rotateZ(60deg)' }, HINGE_DEFAULT),
    Object.assign({ offset: 0.6, transform: 'rotateZ(80deg)' }, HINGE_DEFAULT),
    Object.assign({ offset: 0.8, transform: 'rotateZ(60deg)' }, HINGE_DEFAULT),
    Object.assign(Object.assign({ offset: 1 }, HINGE_DEFAULT), { opacity: 0, transform: 'translateY(700px)' })
];
const JACK_IN_THE_BOX = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom' },
    { offset: 0.5, opacity: 0.3, transform: 'rotate(-10deg)', transformOrigin: '50% 50% 0' },
    { offset: 0.7, opacity: 0.6, transform: 'rotate(3deg)', transformOrigin: '50% 50% 0' },
    { offset: 1, opacity: 1, transform: 'scale(1)', transformOrigin: '50% 50% 0' }
];
const ROLL_IN = [
    { offset: 0, opacity: 0, transform: 'translateX(-100%) rotateZ(-120deg)' },
    { offset: 1, opacity: 1, transform: 'translateX(0%)' }
];
const ROLL_OUT = [
    { offset: 0, opacity: 1, transform: 'translateX(0%)' },
    { offset: 1, opacity: 0, transform: 'translateX(100%) rotateZ(120deg)' }
];
const SPECIALS = {
    [ANIMATIONS.HINGE]: HINGE,
    [ANIMATIONS.JACK_IN_THE_BOX]: JACK_IN_THE_BOX,
    [ANIMATIONS.ROLL_IN]: ROLL_IN,
    [ANIMATIONS.ROLL_OUT]: ROLL_OUT
};

const ANIMATION_KEY_ERROR = 'Animation not supported';
const Animations = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ATTENTION_SEEKERS), BOUNCING_ENTRANCES), BOUNCING_EXITS), FADING_ENTRANCES), FADING_EXITS), FLIPPERS), LIGHTSPEED), ROTATING_ENTRANCES), ROTATING_EXITS), SLIDING_ENTRANCES), SLIDING_EXITS), ZOOM_ENTRANCES), ZOOM_EXITS), SPECIALS);

export { ANIMATIONS as A, EASING as E, EASING_FUNCTIONS as a, Animations as b, ANIMATION_KEY_ERROR as c };
