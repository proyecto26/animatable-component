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
    HEART_BEAT: 'heartBeat',
};
const ANIMATIONS_BOUNCING_ENTRANCES = {
    BOUNCE_IN: 'bounceIn',
    BOUNCE_IN_UP: 'bounceInUp',
    BOUNCE_IN_DOWN: 'bounceInDown',
    BOUNCE_IN_RIGHT: 'bounceInRight',
    BOUNCE_IN_LEFT: 'bounceInLeft',
};
const ANIMATIONS_BOUNCING_EXITS = {
    BOUNCE_OUT: 'bounceOut',
    BOUNCE_OUT_UP: 'bounceOutUp',
    BOUNCE_OUT_DOWN: 'bounceOutDown',
    BOUNCE_OUT_RIGHT: 'bounceOutRight',
    BOUNCE_OUT_LEFT: 'bounceOutLeft',
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
    FADE_IN_LEFT_BIG: 'fadeInLeftBig',
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
    FADE_OUT_LEFT_BIG: 'fadeOutLeftBig',
};
const ANIMATIONS_FLIPPERS = {
    FLIP: 'flip',
    FLIP_IN_X: 'flipInX',
    FLIP_IN_Y: 'flipInY',
    FLIP_OUT_X: 'flipOutX',
    FLIP_OUT_Y: 'flipOutY',
};
const ANIMATIONS_LIGHTSPEED = {
    LIGHT_SPEED_IN: 'lightSpeedIn',
    LIGHT_SPEED_OUT: 'lightSpeedOut',
};
const ANIMATIONS_ROTATING_ENTRANCES = {
    ROTATE_IN: 'rotateIn',
    ROTATE_IN_CLOCKWISE: 'rotateInClockwise',
    ROTATE_IN_DOWN_LEFT: 'rotateInDownLeft',
    ROTATE_IN_DOWN_RIGHT: 'rotateInDownRight',
    ROTATE_IN_UP_LEFT: 'rotateInUpLeft',
    ROTATE_IN_UP_RIGHT: 'rotateInUpRight',
};
const ANIMATIONS_ROTATING_EXITS = {
    ROTATE_OUT: 'rotateOut',
    ROTATE_OUT_CLOCKWISE: 'rotateOutClockwise',
    ROTATE_OUT_DOWN_LEFT: 'rotateOutDownLeft',
    ROTATE_OUT_DOWN_RIGHT: 'rotateOutDownRight',
    ROTATE_OUT_UP_LEFT: 'rotateOutUpLeft',
    ROTATE_OUT_UP_RIGHT: 'rotateOutUpRight',
};
const ANIMATIONS_SLIDING_ENTRANCES = {
    SLIDE_IN_UP: 'slideInUp',
    SLIDE_IN_DOWN: 'slideInDown',
    SLIDE_IN_LEFT: 'slideInLeft',
    SLIDE_IN_RIGHT: 'slideInRight',
};
const ANIMATIONS_SLIDING_EXITS = {
    SLIDE_OUT_UP: 'slideOutUp',
    SLIDE_OUT_DOWN: 'slideOutDown',
    SLIDE_OUT_LEFT: 'slideOutLeft',
    SLIDE_OUT_RIGHT: 'slideOutRight',
};
const ANIMATIONS_ZOOM_ENTRANCES = {
    ZOOM_IN: 'zoomIn',
    ZOOM_IN_UP: 'zoomInUp',
    ZOOM_IN_DOWN: 'zoomInDown',
    ZOOM_IN_LEFT: 'zoomInLeft',
    ZOOM_IN_RIGHT: 'zoomInRight',
};
const ANIMATIONS_ZOOM_EXITS = {
    ZOOM_OUT: 'zoomOut',
    ZOOM_OUT_UP: 'zoomOutUp',
    ZOOM_OUT_DOWN: 'zoomOutDown',
    ZOOM_OUT_LEFT: 'zoomOutLeft',
    ZOOM_OUT_RIGHT: 'zoomOutRight',
};
const ANIMATIONS_SPECIALS = {
    HINGE: 'hinge',
    JACK_IN_THE_BOX: 'jackInTheBox',
    ROLL_IN: 'rollIn',
    ROLL_OUT: 'rollOut',
};
const ANIMATIONS = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ANIMATIONS_ATTENTION_SEEKERS), ANIMATIONS_BOUNCING_ENTRANCES), ANIMATIONS_BOUNCING_EXITS), ANIMATIONS_FADING_ENTRANCES), ANIMATIONS_FADING_EXITS), ANIMATIONS_FLIPPERS), ANIMATIONS_LIGHTSPEED), ANIMATIONS_ROTATING_ENTRANCES), ANIMATIONS_ROTATING_EXITS), ANIMATIONS_SLIDING_ENTRANCES), ANIMATIONS_SLIDING_EXITS), ANIMATIONS_ZOOM_ENTRANCES), ANIMATIONS_ZOOM_EXITS), ANIMATIONS_SPECIALS);

const ANIMATIONS_SCALE_UP = {
    SCALE_UP_CENTER: 'scale-up-center',
    SCALE_UP_TOP: 'scale-up-top',
    SCALE_UP_TR: 'scale-up-tr',
    SCALE_UP_RIGHT: 'scale-up-right',
    SCALE_UP_BR: 'scale-up-br',
    SCALE_UP_BOTTOM: 'scale-up-bottom',
    SCALE_UP_BL: 'scale-up-bl',
    SCALE_UP_LEFT: 'scale-up-left',
    SCALE_UP_TL: 'scale-up-tl',
    SCALE_UP_HOR_CENTER: 'scale-up-hor-center',
    SCALE_UP_HOR_LEFT: 'scale-up-hor-left',
    SCALE_UP_HOR_RIGHT: 'scale-up-hor-right',
    SCALE_UP_VER_CENTER: 'scale-up-ver-center',
    SCALE_UP_VER_TOP: 'scale-up-ver-top',
    SCALE_UP_VER_BOTTOM: 'scale-up-ver-bottom',
};
const ANIMATIONS_SCALE_DOWN = {
    SCALE_DOWN_CENTER: 'scale-down-center',
    SCALE_DOWN_TOP: 'scale-down-top',
    SCALE_DOWN_TR: 'scale-down-tr',
    SCALE_DOWN_RIGHT: 'scale-down-right',
    SCALE_DOWN_BR: 'scale-down-br',
    SCALE_DOWN_BOTTOM: 'scale-down-bottom',
    SCALE_DOWN_BL: 'scale-down-bl',
    SCALE_DOWN_LEFT: 'scale-down-left',
    SCALE_DOWN_TL: 'scale-down-tl',
    SCALE_DOWN_HOR_CENTER: 'scale-down-hor-center',
    SCALE_DOWN_HOR_LEFT: 'scale-down-hor-left',
    SCALE_DOWN_HOR_RIGHT: 'scale-down-hor-right',
    SCALE_DOWN_VER_CENTER: 'scale-down-ver-center',
    SCALE_DOWN_VER_TOP: 'scale-down-ver-top',
    SCALE_DOWN_VER_BOTTOM: 'scale-down-ver-bottom',
};
const ANIMATIONS_ROTATE = {
    ROTATE_CENTER: 'rotate-center',
    ROTATE_TOP: 'rotate-top',
    ROTATE_TR: 'rotate-tr',
    ROTATE_RIGHT: 'rotate-right',
    ROTATE_BR: 'rotate-br',
    ROTATE_BOTTOM: 'rotate-bottom',
    ROTATE_BL: 'rotate-bl',
    ROTATE_LEFT: 'rotate-left',
    ROTATE_TL: 'rotate-tl',
    ROTATE_HOR_CENTER: 'rotate-hor-center',
    ROTATE_HOR_TOP: 'rotate-hor-top',
    ROTATE_HOR_BOTTOM: 'rotate-hor-bottom',
    ROTATE_VERT_CENTER: 'rotate-vert-center',
    ROTATE_VERT_LEFT: 'rotate-vert-left',
    ROTATE_VERT_RIGHT: 'rotate-vert-right',
    ROTATE_DIAGONAL_1: 'rotate-diagonal-1',
    ROTATE_DIAGONAL_2: 'rotate-diagonal-2',
    ROTATE_DIAGONAL_TR: 'rotate-diagonal-tr',
    ROTATE_DIAGONAL_BR: 'rotate-diagonal-br',
    ROTATE_DIAGONAL_BL: 'rotate-diagonal-bl',
    ROTATE_DIAGONAL_TL: 'rotate-diagonal-tl',
};
const ANIMATIONS_ROTATE_SCALE = {
    ROTATE_SCALE_UP: 'rotate-scale-up',
    ROTATE_SCALE_DOWN: 'rotate-scale-down',
    ROTATE_SCALE_UP_HOR: 'rotate-scale-up-hor',
    ROTATE_SCALE_DOWN_HOR: 'rotate-scale-down-hor',
    ROTATE_SCALE_UP_VER: 'rotate-scale-up-ver',
    ROTATE_SCALE_DOWN_VER: 'rotate-scale-down-ver',
    ROTATE_SCALE_UP_DIAG_1: 'rotate-scale-up-diag-1',
    ROTATE_SCALE_DOWN_DIAG_1: 'rotate-scale-down-diag-1',
    ROTATE_SCALE_UP_DIAG_2: 'rotate-scale-up-diag-2',
    ROTATE_SCALE_DOWN_DIAG_2: 'rotate-scale-down-diag-2',
};
const ANIMATIONS_ROTATE_90 = {
    ROTATE_90_CW: 'rotate-90-cw',
    ROTATE_90_CCW: 'rotate-90-ccw',
    ROTATE_90_TOP_CW: 'rotate-90-top-cw',
    ROTATE_90_TOP_CCW: 'rotate-90-top-ccw',
    ROTATE_90_TR_CW: 'rotate-90-tr-cw',
    ROTATE_90_TR_CCW: 'rotate-90-tr-ccw',
    ROTATE_90_RIGHT_CW: 'rotate-90-right-cw',
    ROTATE_90_RIGHT_CCW: 'rotate-90-right-ccw',
    ROTATE_90_BR_CW: 'rotate-90-br-cw',
    ROTATE_90_BR_CCW: 'rotate-90-br-ccw',
    ROTATE_90_BOTTOM_CW: 'rotate-90-bottom-cw',
    ROTATE_90_BOTTOM_CCW: 'rotate-90-bottom-ccw',
    ROTATE_90_BL_CW: 'rotate-90-bl-cw',
    ROTATE_90_BL_CCW: 'rotate-90-bl-ccw',
    ROTATE_90_LEFT_CW: 'rotate-90-left-cw',
    ROTATE_90_LEFT_CCW: 'rotate-90-left-ccw',
    ROTATE_90_TL_CW: 'rotate-90-tl-cw',
    ROTATE_90_TL_CCW: 'rotate-90-tl-ccw',
    ROTATE_90_HORIZONTAL_FWD: 'rotate-90-horizontal-fwd',
    ROTATE_90_HORIZONTAL_BCK: 'rotate-90-horizontal-bck',
    ROTATE_90_VERTICAL_FWD: 'rotate-90-vertical-fwd',
    ROTATE_90_VERTICAL_BCK: 'rotate-90-vertical-bck',
};
const ANIMATIONS_FLIP = {
    FLIP_HORIZONTAL_BOTTOM: 'flip-horizontal-bottom',
    FLIP_HORIZONTAL_TOP: 'flip-horizontal-top',
    FLIP_HORIZONTAL_BCK: 'flip-horizontal-bck',
    FLIP_HORIZONTAL_FWD: 'flip-horizontal-fwd',
    FLIP_VERTICAL_RIGHT: 'flip-vertical-right',
    FLIP_VERTICAL_LEFT: 'flip-vertical-left',
    FLIP_VERTICAL_BCK: 'flip-vertical-bck',
    FLIP_VERTICAL_FWD: 'flip-vertical-fwd',
    FLIP_DIAGONAL_1_TR: 'flip-diagonal-1-tr',
    FLIP_DIAGONAL_1_BL: 'flip-diagonal-1-bl',
    FLIP_DIAGONAL_1_BCK: 'flip-diagonal-1-bck',
    FLIP_DIAGONAL_1_FWD: 'flip-diagonal-1-fwd',
    FLIP_DIAGONAL_2_BR: 'flip-diagonal-2-br',
    FLIP_DIAGONAL_2_TL: 'flip-diagonal-2-tl',
    FLIP_DIAGONAL_2_BCK: 'flip-diagonal-2-bck',
    FLIP_DIAGONAL_2_FWD: 'flip-diagonal-2-fwd',
};
const ANIMATIONS_FLIP_2 = {
    FLIP_2_HOR_TOP_1: 'flip-2-hor-top-1',
    FLIP_2_HOR_TOP_2: 'flip-2-hor-top-2',
    FLIP_2_HOR_TOP_BCK: 'flip-2-hor-top-bck',
    FLIP_2_HOR_TOP_FWD: 'flip-2-hor-top-fwd',
    FLIP_2_VER_RIGHT_1: 'flip-2-ver-right-1',
    FLIP_2_VER_RIGHT_2: 'flip-2-ver-right-2',
    FLIP_2_VER_RIGHT_BCK: 'flip-2-ver-right-bck',
    FLIP_2_VER_RIGHT_FWD: 'flip-2-ver-right-fwd',
    FLIP_2_HOR_BOTTOM_1: 'flip-2-hor-bottom-1',
    FLIP_2_HOR_BOTTOM_2: 'flip-2-hor-bottom-2',
    FLIP_2_HOR_BOTTOM_BCK: 'flip-2-hor-bottom-bck',
    FLIP_2_HOR_BOTTOM_FWD: 'flip-2-hor-bottom-fwd',
    FLIP_2_VER_LEFT_1: 'flip-2-ver-left-1',
    FLIP_2_VER_LEFT_2: 'flip-2-ver-left-2',
    FLIP_2_VER_LEFT_BCK: 'flip-2-ver-left-bck',
    FLIP_2_VER_LEFT_FWD: 'flip-2-ver-left-fwd',
};
const ANIMATIONS_FLIP_SCALE = {
    FLIP_SCALE_UP_HOR: 'flip-scale-up-hor',
    FLIP_SCALE_DOWN_HOR: 'flip-scale-down-hor',
    FLIP_SCALE_UP_VER: 'flip-scale-up-ver',
    FLIP_SCALE_DOWN_VER: 'flip-scale-down-ver',
    FLIP_SCALE_UP_DIAG_1: 'flip-scale-up-diag-1',
    FLIP_SCALE_DOWN_DIAG_1: 'flip-scale-down-diag-1',
    FLIP_SCALE_UP_DIAG_2: 'flip-scale-up-diag-2',
    FLIP_SCALE_DOWN_DIAG_2: 'flip-scale-down-diag-2',
};
const ANIMATIONS_FLIP_SCALE_2 = {
    FLIP_SCALE_2_HOR_TOP: 'flip-scale-2-hor-top',
    FLIP_SCALE_2_VER_RIGHT: 'flip-scale-2-ver-right',
    FLIP_SCALE_2_HOR_BOTTOM: 'flip-scale-2-hor-bottom',
    FLIP_SCALE_2_VER_LEFT: 'flip-scale-2-ver-left',
};
const ANIMATIONS_SWING = {
    SWING_TOP_FWD: 'swing-top-fwd',
    SWING_TOP_BCK: 'swing-top-bck',
    SWING_TOP_RIGHT_FWD: 'swing-top-right-fwd',
    SWING_TOP_RIGHT_BCK: 'swing-top-right-bck',
    SWING_RIGHT_FWD: 'swing-right-fwd',
    SWING_RIGHT_BCK: 'swing-right-bck',
    SWING_BOTTOM_RIGHT_FWD: 'swing-bottom-right-fwd',
    SWING_BOTTOM_RIGHT_BCK: 'swing-bottom-right-bck',
    SWING_BOTTOM_FWD: 'swing-bottom-fwd',
    SWING_BOTTOM_BCK: 'swing-bottom-bck',
    SWING_BOTTOM_LEFT_FWD: 'swing-bottom-left-fwd',
    SWING_BOTTOM_LEFT_BCK: 'swing-bottom-left-bck',
    SWING_LEFT_FWD: 'swing-left-fwd',
    SWING_LEFT_BCK: 'swing-left-bck',
    SWING_TOP_LEFT_FWD: 'swing-top-left-fwd',
    SWING_TOP_LEFT_BCK: 'swing-top-left-bck',
};
const ANIMATIONS_SLIDE = {
    SLIDE_TOP: 'slide-top',
    SLIDE_TR: 'slide-tr',
    SLIDE_RIGHT: 'slide-right',
    SLIDE_BR: 'slide-br',
    SLIDE_BOTTOM: 'slide-bottom',
    SLIDE_BL: 'slide-bl',
    SLIDE_LEFT: 'slide-left',
    SLIDE_TL: 'slide-tl',
};
const ANIMATIONS_SLIDE_BCK = {
    SLIDE_BCK_CENTER: 'slide-bck-center',
    SLIDE_BCK_TOP: 'slide-bck-top',
    SLIDE_BCK_TR: 'slide-bck-tr',
    SLIDE_BCK_RIGHT: 'slide-bck-right',
    SLIDE_BCK_BR: 'slide-bck-br',
    SLIDE_BCK_BOTTOM: 'slide-bck-bottom',
    SLIDE_BCK_BL: 'slide-bck-bl',
    SLIDE_BCK_LEFT: 'slide-bck-left',
    SLIDE_BCK_TL: 'slide-bck-tl',
};
const ANIMATIONS_SLIDE_FWD = {
    SLIDE_FWD_CENTER: 'slide-fwd-center',
    SLIDE_FWD_TOP: 'slide-fwd-top',
    SLIDE_FWD_TR: 'slide-fwd-tr',
    SLIDE_FWD_RIGHT: 'slide-fwd-right',
    SLIDE_FWD_BR: 'slide-fwd-br',
    SLIDE_FWD_BOTTOM: 'slide-fwd-bottom',
    SLIDE_FWD_BL: 'slide-fwd-bl',
    SLIDE_FWD_LEFT: 'slide-fwd-left',
    SLIDE_FWD_TL: 'slide-fwd-tl',
};
const ANIMATIONS_SLIDE_ROTATE = {
    SLIDE_ROTATE_HOR_TOP: 'slide-rotate-hor-top',
    SLIDE_ROTATE_HOR_T_BCK: 'slide-rotate-hor-t-bck',
    SLIDE_ROTATE_HOR_T_FWD: 'slide-rotate-hor-t-fwd',
    SLIDE_ROTATE_VER_RIGHT: 'slide-rotate-ver-right',
    SLIDE_ROTATE_VER_R_BCK: 'slide-rotate-ver-r-bck',
    SLIDE_ROTATE_VER_R_FWD: 'slide-rotate-ver-r-fwd',
    SLIDE_ROTATE_HOR_BOTTOM: 'slide-rotate-hor-bottom',
    SLIDE_ROTATE_HOR_B_BCK: 'slide-rotate-hor-b-bck',
    SLIDE_ROTATE_HOR_B_FWD: 'slide-rotate-hor-b-fwd',
    SLIDE_ROTATE_VER_LEFT: 'slide-rotate-ver-left',
    SLIDE_ROTATE_VER_L_BCK: 'slide-rotate-ver-l-bck',
    SLIDE_ROTATE_VER_L_FWD: 'slide-rotate-ver-l-fwd',
};
const ANIMATIONS_SHADOW_DROP = {
    SHADOW_DROP_CENTER: 'shadow-drop-center',
    SHADOW_DROP_TOP: 'shadow-drop-top',
    SHADOW_DROP_RIGHT: 'shadow-drop-right',
    SHADOW_DROP_BOTTOM: 'shadow-drop-bottom',
    SHADOW_DROP_LEFT: 'shadow-drop-left',
    SHADOW_DROP_LR: 'shadow-drop-lr',
    SHADOW_DROP_TB: 'shadow-drop-tb',
    SHADOW_DROP_TR: 'shadow-drop-tr',
    SHADOW_DROP_BR: 'shadow-drop-br',
    SHADOW_DROP_BL: 'shadow-drop-bl',
    SHADOW_DROP_TL: 'shadow-drop-tl',
};
const ANIMATIONS_SHADOW_DROP_2 = {
    SHADOW_DROP_2_CENTER: 'shadow-drop-2-center',
    SHADOW_DROP_2_TOP: 'shadow-drop-2-top',
    SHADOW_DROP_2_RIGHT: 'shadow-drop-2-right',
    SHADOW_DROP_2_BOTTOM: 'shadow-drop-2-bottom',
    SHADOW_DROP_2_LEFT: 'shadow-drop-2-left',
    SHADOW_DROP_2_LR: 'shadow-drop-2-lr',
    SHADOW_DROP_2_TB: 'shadow-drop-2-tb',
    SHADOW_DROP_2_TR: 'shadow-drop-2-tr',
    SHADOW_DROP_2_BR: 'shadow-drop-2-br',
    SHADOW_DROP_2_BL: 'shadow-drop-2-bl',
    SHADOW_DROP_2_TL: 'shadow-drop-2-tl',
};
const ANIMATIONS_SHADOW_POP = {
    SHADOW_POP_TR: 'shadow-pop-tr',
    SHADOW_POP_BR: 'shadow-pop-br',
    SHADOW_POP_BL: 'shadow-pop-bl',
    SHADOW_POP_TL: 'shadow-pop-tl',
};
const ANIMATIONS_SHADOW_INSET = {
    SHADOW_INSET_CENTER: 'shadow-inset-center',
    SHADOW_INSET_TOP: 'shadow-inset-top',
    SHADOW_INSET_RIGHT: 'shadow-inset-right',
    SHADOW_INSET_BOTTOM: 'shadow-inset-bottom',
    SHADOW_INSET_LEFT: 'shadow-inset-left',
    SHADOW_INSET_LR: 'shadow-inset-lr',
    SHADOW_INSET_TB: 'shadow-inset-tb',
    SHADOW_INSET_TR: 'shadow-inset-tr',
    SHADOW_INSET_BR: 'shadow-inset-br',
    SHADOW_INSET_BL: 'shadow-inset-bl',
    SHADOW_INSET_TL: 'shadow-inset-tl',
};
const ANIMATIONS_SCALE_IN = {
    SCALE_IN_CENTER: 'scale-in-center',
    SCALE_IN_TOP: 'scale-in-top',
    SCALE_IN_TR: 'scale-in-tr',
    SCALE_IN_RIGHT: 'scale-in-right',
    SCALE_IN_BR: 'scale-in-br',
    SCALE_IN_BOTTOM: 'scale-in-bottom',
    SCALE_IN_BL: 'scale-in-bl',
    SCALE_IN_LEFT: 'scale-in-left',
    SCALE_IN_TL: 'scale-in-tl',
    SCALE_IN_HOR_CENTER: 'scale-in-hor-center',
    SCALE_IN_HOR_LEFT: 'scale-in-hor-left',
    SCALE_IN_HOR_RIGHT: 'scale-in-hor-right',
    SCALE_IN_VER_CENTER: 'scale-in-ver-center',
    SCALE_IN_VER_TOP: 'scale-in-ver-top',
    SCALE_IN_VER_BOTTOM: 'scale-in-ver-bottom',
};
const ANIMATIONS_ROTATE_IN = {
    ROTATE_IN_CENTER: 'rotate-in-center',
    ROTATE_IN_TOP: 'rotate-in-top',
    ROTATE_IN_TR: 'rotate-in-tr',
    ROTATE_IN_RIGHT: 'rotate-in-right',
    ROTATE_IN_BR: 'rotate-in-br',
    ROTATE_IN_BOTTOM: 'rotate-in-bottom',
    ROTATE_IN_BL: 'rotate-in-bl',
    ROTATE_IN_LEFT: 'rotate-in-left',
    ROTATE_IN_TL: 'rotate-in-tl',
    ROTATE_IN_HOR: 'rotate-in-hor',
    ROTATE_IN_VER: 'rotate-in-ver',
    ROTATE_IN_DIAG_1: 'rotate-in-diag-1',
    ROTATE_IN_DIAG_2: 'rotate-in-diag-2',
};
const ANIMATIONS_ROTATE_IN_2 = {
    ROTATE_IN_2_CW: 'rotate-in-2-cw',
    ROTATE_IN_2_CCW: 'rotate-in-2-ccw',
    ROTATE_IN_2_FWD_CW: 'rotate-in-2-fwd-cw',
    ROTATE_IN_2_FWD_CCW: 'rotate-in-2-fwd-ccw',
    ROTATE_IN_2_BCK_CW: 'rotate-in-2-bck-cw',
    ROTATE_IN_2_BCK_CCW: 'rotate-in-2-bck-ccw',
    ROTATE_IN_2_TR_CW: 'rotate-in-2-tr-cw',
    ROTATE_IN_2_TR_CCW: 'rotate-in-2-tr-ccw',
    ROTATE_IN_2_BR_CW: 'rotate-in-2-br-cw',
    ROTATE_IN_2_BR_CCW: 'rotate-in-2-br-ccw',
    ROTATE_IN_2_BL_CW: 'rotate-in-2-bl-cw',
    ROTATE_IN_2_BL_CCW: 'rotate-in-2-bl-ccw',
    ROTATE_IN_2_TL_CW: 'rotate-in-2-tl-cw',
    ROTATE_IN_2_TL_CCW: 'rotate-in-2-tl-ccw',
};
const ANIMATIONS_SWIRL_IN = {
    SWIRL_IN_FWD: 'swirl-in-fwd',
    SWIRL_IN_BCK: 'swirl-in-bck',
    SWIRL_IN_TOP_FWD: 'swirl-in-top-fwd',
    SWIRL_IN_TOP_BCK: 'swirl-in-top-bck',
    SWIRL_IN_TR_FWD: 'swirl-in-tr-fwd',
    SWIRL_IN_TR_BCK: 'swirl-in-tr-bck',
    SWIRL_IN_RIGHT_FWD: 'swirl-in-right-fwd',
    SWIRL_IN_RIGHT_BCK: 'swirl-in-right-bck',
    SWIRL_IN_BR_FWD: 'swirl-in-br-fwd',
    SWIRL_IN_BR_BCK: 'swirl-in-br-bck',
    SWIRL_IN_BOTTOM_FWD: 'swirl-in-bottom-fwd',
    SWIRL_IN_BOTTOM_BCK: 'swirl-in-bottom-bck',
    SWIRL_IN_BL_FWD: 'swirl-in-bl-fwd',
    SWIRL_IN_BL_BCK: 'swirl-in-bl-bck',
    SWIRL_IN_LEFT_FWD: 'swirl-in-left-fwd',
    SWIRL_IN_LEFT_BCK: 'swirl-in-left-bck',
    SWIRL_IN_TL_FWD: 'swirl-in-tl-fwd',
    SWIRL_IN_TL_BCK: 'swirl-in-tl-bck',
};
const ANIMATIONS_FLIP_IN = {
    FLIP_IN_HOR_BOTTOM: 'flip-in-hor-bottom',
    FLIP_IN_HOR_TOP: 'flip-in-hor-top',
    FLIP_IN_VER_RIGHT: 'flip-in-ver-right',
    FLIP_IN_VER_LEFT: 'flip-in-ver-left',
    FLIP_IN_DIAG_1_TR: 'flip-in-diag-1-tr',
    FLIP_IN_DIAG_1_BL: 'flip-in-diag-1-bl',
    FLIP_IN_DIAG_2_TL: 'flip-in-diag-2-tl',
    FLIP_IN_DIAG_2_BR: 'flip-in-diag-2-br',
};
const ANIMATIONS_SLIT_IN = {
    SLIT_IN_VERTICAL: 'slit-in-vertical',
    SLIT_IN_HORIZONTAL: 'slit-in-horizontal',
    SLIT_IN_DIAGONAL_1: 'slit-in-diagonal-1',
    SLIT_IN_DIAGONAL_2: 'slit-in-diagonal-2',
};
const ANIMATIONS_SLIDE_IN = {
    SLIDE_IN_TOP: 'slide-in-top',
    SLIDE_IN_TR: 'slide-in-tr',
    SLIDE_IN_RIGHT: 'slide-in-right',
    SLIDE_IN_BR: 'slide-in-br',
    SLIDE_IN_BOTTOM: 'slide-in-bottom',
    SLIDE_IN_BL: 'slide-in-bl',
    SLIDE_IN_LEFT: 'slide-in-left',
    SLIDE_IN_TL: 'slide-in-tl',
};
const ANIMATIONS_SLIDE_IN_FWD = {
    SLIDE_IN_FWD_CENTER: 'slide-in-fwd-center',
    SLIDE_IN_FWD_TOP: 'slide-in-fwd-top',
    SLIDE_IN_FWD_TR: 'slide-in-fwd-tr',
    SLIDE_IN_FWD_RIGHT: 'slide-in-fwd-right',
    SLIDE_IN_FWD_BR: 'slide-in-fwd-br',
    SLIDE_IN_FWD_BOTTOM: 'slide-in-fwd-bottom',
    SLIDE_IN_FWD_BL: 'slide-in-fwd-bl',
    SLIDE_IN_FWD_LEFT: 'slide-in-fwd-left',
    SLIDE_IN_FWD_TL: 'slide-in-fwd-tl',
};
const ANIMATIONS_SLIDE_IN_BCK = {
    SLIDE_IN_BCK_CENTER: 'slide-in-bck-center',
    SLIDE_IN_BCK_TOP: 'slide-in-bck-top',
    SLIDE_IN_BCK_TR: 'slide-in-bck-tr',
    SLIDE_IN_BCK_RIGHT: 'slide-in-bck-right',
    SLIDE_IN_BCK_BR: 'slide-in-bck-br',
    SLIDE_IN_BCK_BOTTOM: 'slide-in-bck-bottom',
    SLIDE_IN_BCK_BL: 'slide-in-bck-bl',
    SLIDE_IN_BCK_LEFT: 'slide-in-bck-left',
    SLIDE_IN_BCK_TL: 'slide-in-bck-tl',
};
const ANIMATIONS_SLIDE_IN_BLURRED = {
    SLIDE_IN_BLURRED_TOP: 'slide-in-blurred-top',
    SLIDE_IN_BLURRED_TR: 'slide-in-blurred-tr',
    SLIDE_IN_BLURRED_RIGHT: 'slide-in-blurred-right',
    SLIDE_IN_BLURRED_BR: 'slide-in-blurred-br',
    SLIDE_IN_BLURRED_BOTTOM: 'slide-in-blurred-bottom',
    SLIDE_IN_BLURRED_BL: 'slide-in-blurred-bl',
    SLIDE_IN_BLURRED_LEFT: 'slide-in-blurred-left',
    SLIDE_IN_BLURRED_TL: 'slide-in-blurred-tl',
};
const ANIMATIONS_SLIDE_IN_ELLIPTIC = {
    SLIDE_IN_ELLIPTIC_TOP_FWD: 'slide-in-elliptic-top-fwd',
    SLIDE_IN_ELLIPTIC_TOP_BCK: 'slide-in-elliptic-top-bck',
    SLIDE_IN_ELLIPTIC_RIGHT_FWD: 'slide-in-elliptic-right-fwd',
    SLIDE_IN_ELLIPTIC_RIGHT_BCK: 'slide-in-elliptic-right-bck',
    SLIDE_IN_ELLIPTIC_BOTTOM_FWD: 'slide-in-elliptic-bottom-fwd',
    SLIDE_IN_ELLIPTIC_BOTTOM_BCK: 'slide-in-elliptic-bottom-bck',
    SLIDE_IN_ELLIPTIC_LEFT_FWD: 'slide-in-elliptic-left-fwd',
    SLIDE_IN_ELLIPTIC_LEFT_BCK: 'slide-in-elliptic-left-bck',
};
const ANIMATIONS_BOUNCE_IN = {
    BOUNCE_IN_TOP: 'bounce-in-top',
    BOUNCE_IN_RIGHT: 'bounce-in-right',
    BOUNCE_IN_BOTTOM: 'bounce-in-bottom',
    BOUNCE_IN_LEFT: 'bounce-in-left',
    BOUNCE_IN_FWD: 'bounce-in-fwd',
    BOUNCE_IN_BCK: 'bounce-in-bck',
};
const ANIMATIONS_ROLL_IN = {
    ROLL_IN_LEFT: 'roll-in-left',
    ROLL_IN_TOP: 'roll-in-top',
    ROLL_IN_RIGHT: 'roll-in-right',
    ROLL_IN_BOTTOM: 'roll-in-bottom',
};
const ANIMATIONS_ROLL_IN_BLURRED = {
    ROLL_IN_BLURRED_LEFT: 'roll-in-blurred-left',
    ROLL_IN_BLURRED_TOP: 'roll-in-blurred-top',
    ROLL_IN_BLURRED_RIGHT: 'roll-in-blurred-right',
    ROLL_IN_BLURRED_BOTTOM: 'roll-in-blurred-bottom',
};
const ANIMATIONS_TILT_IN = {
    TILT_IN_TOP_1: 'tilt-in-top-1',
    TILT_IN_TOP_2: 'tilt-in-top-2',
    TILT_IN_TR: 'tilt-in-tr',
    TILT_IN_RIGHT_1: 'tilt-in-right-1',
    TILT_IN_RIGHT_2: 'tilt-in-right-2',
    TILT_IN_BR: 'tilt-in-br',
    TILT_IN_BOTTOM_1: 'tilt-in-bottom-1',
    TILT_IN_BOTTOM_2: 'tilt-in-bottom-2',
    TILT_IN_BL: 'tilt-in-bl',
    TILT_IN_LEFT_1: 'tilt-in-left-1',
    TILT_IN_LEFT_2: 'tilt-in-left-2',
    TILT_IN_TL: 'tilt-in-tl',
};
const ANIMATIONS_TILT_IN_FWD = {
    TILT_IN_FWD_TR: 'tilt-in-fwd-tr',
    TILT_IN_FWD_BR: 'tilt-in-fwd-br',
    TILT_IN_FWD_BL: 'tilt-in-fwd-bl',
    TILT_IN_FWD_TL: 'tilt-in-fwd-tl',
};
const ANIMATIONS_SWING_IN = {
    SWING_IN_TOP_FWD: 'swing-in-top-fwd',
    SWING_IN_TOP_BCK: 'swing-in-top-bck',
    SWING_IN_RIGHT_FWD: 'swing-in-right-fwd',
    SWING_IN_RIGHT_BCK: 'swing-in-right-bck',
    SWING_IN_BOTTOM_FWD: 'swing-in-bottom-fwd',
    SWING_IN_BOTTOM_BCK: 'swing-in-bottom-bck',
    SWING_IN_LEFT_FWD: 'swing-in-left-fwd',
    SWING_IN_LEFT_BCK: 'swing-in-left-bck',
};
const ANIMATIONS_FADE_IN = {
    FADE_IN_FWD: 'fade-in-fwd',
    FADE_IN_BCK: 'fade-in-bck',
    FADE_IN_TOP: 'fade-in-top',
    FADE_IN_TR: 'fade-in-tr',
    FADE_IN_RIGHT: 'fade-in-right',
    FADE_IN_BR: 'fade-in-br',
    FADE_IN_BOTTOM: 'fade-in-bottom',
    FADE_IN_BL: 'fade-in-bl',
    FADE_IN_LEFT: 'fade-in-left',
    FADE_IN_TL: 'fade-in-tl',
};
const ANIMATIONS_PUFF_IN = {
    PUFF_IN_CENTER: 'puff-in-center',
    PUFF_IN_TOP: 'puff-in-top',
    PUFF_IN_TR: 'puff-in-tr',
    PUFF_IN_RIGHT: 'puff-in-right',
    PUFF_IN_BR: 'puff-in-br',
    PUFF_IN_BOTTOM: 'puff-in-bottom',
    PUFF_IN_BL: 'puff-in-bl',
    PUFF_IN_LEFT: 'puff-in-left',
    PUFF_IN_TL: 'puff-in-tl',
    PUFF_IN_HOR: 'puff-in-hor',
    PUFF_IN_VER: 'puff-in-ver'
};
const ANIMATIONS_FLICKER_IN = {
    FLICKER_IN_1: 'flicker-in-1',
    FLICKER_IN_2: 'flicker-in-2'
};
const ANIMATIONS_TRACKING_IN = {
    TRACKING_IN_EXPAND: 'tracking-in-expand',
    TRACKING_IN_EXPAND_FWD: 'tracking-in-expand-fwd',
    TRACKING_IN_EXPAND_FWD_TOP: 'tracking-in-expand-fwd-top',
    TRACKING_IN_EXPAND_FWD_BOTTOM: 'tracking-in-expand-fwd-bottom',
    TRACKING_IN_CONTRACT: 'tracking-in-contract',
    TRACKING_IN_CONTRACT_BCK: 'tracking-in-contract-bck',
    TRACKING_IN_CONTRACT_BCK_TOP: 'tracking-in-contract-bck-top',
    TRACKING_IN_CONTRACT_BCK_BOTTOM: 'tracking-in-contract-bck-bottom'
};
const ANIMATIONS_FOCUS_IN = {
    TEXT_FOCUS_IN: 'text-focus-in',
    FOCUS_IN_EXPAND: 'focus-in-expand',
    FOCUS_IN_EXPAND_FWD: 'focus-in-expand-fwd',
    FOCUS_IN_CONTRACT: 'focus-in-contract',
    FOCUS_IN_CONTRACT_BCK: 'focus-in-contract-bck'
};
const ANIMATIONS_TEXT_SHADOW_DROP = {
    TEXT_SHADOW_DROP_CENTER: 'text-shadow-drop-center',
    TEXT_SHADOW_DROP_TOP: 'text-shadow-drop-top',
    TEXT_SHADOW_DROP_TR: 'text-shadow-drop-tr',
    TEXT_SHADOW_DROP_RIGHT: 'text-shadow-drop-right',
    TEXT_SHADOW_DROP_BR: 'text-shadow-drop-br',
    TEXT_SHADOW_DROP_BOTTOM: 'text-shadow-drop-bottom',
    TEXT_SHADOW_DROP_BL: 'text-shadow-drop-bl',
    TEXT_SHADOW_DROP_LEFT: 'text-shadow-drop-left',
    TEXT_SHADOW_DROP_TL: 'text-shadow-drop-tl'
};
const ANIMATIONS_TEXT_SHADOW_POP = {
    TEXT_SHADOW_POP_TOP: 'text-shadow-pop-top',
    TEXT_SHADOW_POP_TR: 'text-shadow-pop-tr',
    TEXT_SHADOW_POP_RIGHT: 'text-shadow-pop-right',
    TEXT_SHADOW_POP_BR: 'text-shadow-pop-br',
    TEXT_SHADOW_POP_BOTTOM: 'text-shadow-pop-bottom',
    TEXT_SHADOW_POP_BL: 'text-shadow-pop-bl',
    TEXT_SHADOW_POP_LEFT: 'text-shadow-pop-left',
    TEXT_SHADOW_POP_TL: 'text-shadow-pop-tl'
};
const ANIMATIONS_TEXT_POP_UP = {
    TEXT_POP_UP_TOP: 'text-pop-up-top',
    TEXT_POP_UP_TR: 'text-pop-up-tr',
    TEXT_POP_UP_RIGHT: 'text-pop-up-right',
    TEXT_POP_UP_BR: 'text-pop-up-br',
    TEXT_POP_UP_BOTTOM: 'text-pop-up-bottom',
    TEXT_POP_UP_BL: 'text-pop-up-bl',
    TEXT_POP_UP_LEFT: 'text-pop-up-left',
    TEXT_POP_UP_TL: 'text-pop-up-tl'
};
const ANIMATIONS_VIBRATE = {
    VIBRATE_1: 'vibrate-1',
    VIBRATE_2: 'vibrate-2',
};
const ANIMATIONS_SHAKE = {
    SHAKE_HORIZONTAL: 'shake-horizontal',
    SHAKE_VERTICAL: 'shake-vertical',
    SHAKE_LR: 'shake-lr',
    SHAKE_TOP: 'shake-top',
    SHAKE_TR: 'shake-tr',
    SHAKE_RIGHT: 'shake-right',
    SHAKE_BR: 'shake-br',
    SHAKE_BOTTOM: 'shake-bottom',
    SHAKE_BL: 'shake-bl',
    SHAKE_LEFT: 'shake-left',
    SHAKE_TL: 'shake-tl',
};
const ANIMATIONS_JELLO = {
    JELLO_HORIZONTAL: 'jello-horizontal',
    JELLO_VERTICAL: 'jello-vertical',
    JELLO_DIAGONAL_1: 'jello-diagonal-1',
    JELLO_DIAGONAL_2: 'jello-diagonal-2',
};
const ANIMATIONS_WOBBLE = {
    WOBBLE_HOR_BOTTOM: 'wobble-hor-bottom',
    WOBBLE_HOR_TOP: 'wobble-hor-top',
    WOBBLE_VER_LEFT: 'wobble-ver-left',
    WOBBLE_VER_RIGHT: 'wobble-ver-right',
};
const ANIMATIONS_BOUNCE = {
    BOUNCE_TOP: 'bounce-top',
    BOUNCE_BOTTOM: 'bounce-bottom',
    BOUNCE_LEFT: 'bounce-left',
    BOUNCE_RIGHT: 'bounce-right',
};
const ANIMATIONS_PULSATE = {
    PULSATE_BCK: 'pulsate-bck',
    PULSATE_FWD: 'pulsate-fwd',
    PING: 'ping',
};
const ANIMATIONS_KEN_BURNS = {
    KEN_BURNS_TOP: 'ken-burns-top',
    KEN_BURNS_TOP_RIGHT: 'ken-burns-top-right',
    KEN_BURNS_RIGHT: 'ken-burns-right',
    KEN_BURNS_BOTTOM_RIGHT: 'ken-burns-bottom-right',
    KEN_BURNS_BOTTOM: 'ken-burns-bottom',
    KEN_BURNS_BOTTOM_LEFT: 'ken-burns-bottom-left',
    KEN_BURNS_LEFT: 'ken-burns-left',
    KEN_BURNS_TOP_LEFT: 'ken-burns-top-left',
};
const ANIMATIONS_BG_PAN = {
    BG_PAN_LEFT: 'bg-pan-left',
    BG_PAN_RIGHT: 'bg-pan-right',
    BG_PAN_TOP: 'bg-pan-top',
    BG_PAN_BOTTOM: 'bg-pan-bottom',
    BG_PAN_TR: 'bg-pan-tr',
    BG_PAN_BR: 'bg-pan-br',
    BG_PAN_BL: 'bg-pan-bl',
    BG_PAN_TL: 'bg-pan-tl',
};
const ANIMATIONS$1 = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ANIMATIONS_SCALE_UP), ANIMATIONS_SCALE_DOWN), ANIMATIONS_ROTATE), ANIMATIONS_ROTATE_SCALE), ANIMATIONS_ROTATE_90), ANIMATIONS_FLIP), ANIMATIONS_FLIP_2), ANIMATIONS_FLIP_SCALE), ANIMATIONS_FLIP_SCALE_2), ANIMATIONS_SWING), ANIMATIONS_SLIDE), ANIMATIONS_SLIDE_BCK), ANIMATIONS_SLIDE_FWD), ANIMATIONS_SLIDE_ROTATE), ANIMATIONS_SHADOW_DROP), ANIMATIONS_SHADOW_DROP_2), ANIMATIONS_SHADOW_POP), ANIMATIONS_SHADOW_INSET), ANIMATIONS_SCALE_IN), ANIMATIONS_ROTATE_IN), ANIMATIONS_ROTATE_IN_2), ANIMATIONS_SWIRL_IN), ANIMATIONS_FLIP_IN), ANIMATIONS_SLIT_IN), ANIMATIONS_SLIDE_IN), ANIMATIONS_SLIDE_IN_FWD), ANIMATIONS_SLIDE_IN_BCK), ANIMATIONS_SLIDE_IN_BLURRED), ANIMATIONS_SLIDE_IN_ELLIPTIC), ANIMATIONS_BOUNCE_IN), ANIMATIONS_ROLL_IN), ANIMATIONS_ROLL_IN_BLURRED), ANIMATIONS_TILT_IN), ANIMATIONS_TILT_IN_FWD), ANIMATIONS_SWING_IN), ANIMATIONS_FADE_IN), ANIMATIONS_PUFF_IN), ANIMATIONS_FLICKER_IN), ANIMATIONS_TRACKING_IN), ANIMATIONS_FOCUS_IN), ANIMATIONS_TEXT_SHADOW_DROP), ANIMATIONS_TEXT_SHADOW_POP), ANIMATIONS_TEXT_POP_UP), ANIMATIONS_VIBRATE), ANIMATIONS_SHAKE), ANIMATIONS_JELLO), ANIMATIONS_WOBBLE), ANIMATIONS_BOUNCE), ANIMATIONS_PULSATE), ANIMATIONS_KEN_BURNS), ANIMATIONS_BG_PAN);

/**
 * Animate.css Animations
 */
const ANIMATIONS$2 = Object.assign(Object.assign({ 
    /**
     * DEFAULT ANIMATION
     */
    NONE: 'none' }, ANIMATIONS), ANIMATIONS$1);

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

const BOUNCE_DEFAULT$1 = {
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
};
const BOUNCE_IN = [
    Object.assign({ offset: 0, opacity: 0, transform: 'scale(0.3)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.2, opacity: 0, transform: 'scale(1.1)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.4, opacity: 0, transform: 'scale(0.9)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.6, opacity: 1, transform: 'scale(1.03)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.8, opacity: 1, transform: 'scale(0.97)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 1, opacity: 1, transform: 'scale(1)' }, BOUNCE_DEFAULT$1)
];
const BOUNCE_IN_UP = [
    Object.assign({ offset: 0, opacity: 0, transform: 'translateY(3000px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.6, opacity: 1, transform: 'translateY(-20px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.75, opacity: 1, transform: 'translateY(10px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.9, opacity: 1, transform: 'translateY(-5px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 1, opacity: 1, transform: 'translateY(0px)' }, BOUNCE_DEFAULT$1)
];
const BOUNCE_IN_DOWN = [
    Object.assign({ offset: 0, opacity: 0, transform: 'translateY(-3000px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.6, opacity: 1, transform: 'translateY(25px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.75, opacity: 1, transform: 'translateY(-10px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.9, opacity: 1, transform: 'translateY(5px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 1, opacity: 1, transform: 'translateY(0px)' }, BOUNCE_DEFAULT$1)
];
const BOUNCE_IN_RIGHT = [
    Object.assign({ offset: 0, opacity: 0, transform: 'translateX(3000px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.6, opacity: 1, transform: 'translateX(-25px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.75, opacity: 1, transform: 'translateX(10px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.9, opacity: 1, transform: 'translateX(-5px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 1, opacity: 1, transform: 'translateX(0px)' }, BOUNCE_DEFAULT$1)
];
const BOUNCE_IN_LEFT = [
    Object.assign({ offset: 0, opacity: 0, transform: 'translateX(-3000px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.6, opacity: 1, transform: 'translateX(25px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.75, opacity: 1, transform: 'translateX(-10px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 0.9, opacity: 1, transform: 'translateX(5px)' }, BOUNCE_DEFAULT$1),
    Object.assign({ offset: 1, opacity: 1, transform: 'translateX(0px)' }, BOUNCE_DEFAULT$1)
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
    { offset: 1, opacity: 0, transform: 'translateY(-100vh)' }
];
const BOUNCE_OUT_DOWN = [
    { offset: 0, opacity: 1, transform: 'translateY(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateY(10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateY(-20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateY(-20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateY(-20px)' },
    { offset: 1, opacity: 0, transform: 'translateY(100vh)' }
];
const BOUNCE_OUT_RIGHT = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateX(10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateX(-20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateX(-20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateX(-20px)' },
    { offset: 1, opacity: 0, transform: 'translateX(100vw)' }
];
const BOUNCE_OUT_LEFT = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 0.2, opacity: 1, transform: 'translateX(-10px)' },
    { offset: 0.4, opacity: 1, transform: 'translateX(20px)' },
    { offset: 0.45, opacity: 1, transform: 'translateX(20px)' },
    { offset: 0.55, opacity: 1, transform: 'translateX(20px)' },
    { offset: 1, opacity: 0, transform: 'translateX(-100vw)' }
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
    { offset: 0, opacity: 0, transform: 'translateY(100vh)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
];
const FADE_IN_DOWN = [
    { offset: 0, opacity: 0, transform: 'translateY(-100%)' },
    { offset: 1, opacity: 1, transform: 'translateY(0)' }
];
const FADE_IN_DOWN_BIG = [
    { offset: 0, opacity: 0, transform: 'translateY(-100vh)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
];
const FADE_IN_RIGHT = [
    { offset: 0, opacity: 0, transform: 'translateX(100%)' },
    { offset: 1, opacity: 1, transform: 'translateX(0)' }
];
const FADE_IN_RIGHT_BIG = [
    { offset: 0, opacity: 0, transform: 'translateX(100vw)' },
    { offset: 1, opacity: 1, transform: 'translateX(0px)' }
];
const FADE_IN_LEFT = [
    { offset: 0, opacity: 0, transform: 'translateX(-100%)' },
    { offset: 1, opacity: 1, transform: 'translateX(0)' }
];
const FADE_IN_LEFT_BIG = [
    { offset: 0, opacity: 0, transform: 'translateX(-100vw)' },
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
    { offset: 1, opacity: 0, transform: 'translateY(-100vh)' }
];
const FADE_OUT_DOWN = [
    { offset: 0, opacity: 1, transform: 'translateY(0)' },
    { offset: 1, opacity: 0, transform: 'translateY(100%)' }
];
const FADE_OUT_DOWN_BIG = [
    { offset: 0, opacity: 1, transform: 'translateY(0px)' },
    { offset: 1, opacity: 0, transform: 'translateY(100vh)' }
];
const FADE_OUT_RIGHT = [
    { offset: 0, opacity: 1, transform: 'translateX(0)' },
    { offset: 1, opacity: 0, transform: 'translateX(100%)' }
];
const FADE_OUT_RIGHT_BIG = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 1, opacity: 0, transform: 'translateX(100vw)' }
];
const FADE_OUT_LEFT = [
    { offset: 0, opacity: 1, transform: 'translateX(0)' },
    { offset: 1, opacity: 0, transform: 'translateX(-100%)' }
];
const FADE_OUT_LEFT_BIG = [
    { offset: 0, opacity: 1, transform: 'translateX(0px)' },
    { offset: 1, opacity: 0, transform: 'translateX(-100vw)' }
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

const ZOOM_IN = [
    { offset: 0, opacity: 0, transform: 'scale(1)' },
    { offset: 0.5, opacity: 0, transform: 'scale(0.3)' },
    { offset: 1, opacity: 1, transform: 'scale(1)' }
];
const ZOOM_IN_UP = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateY(-100vh)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateY(60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_IN_DOWN = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateY(100vh)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateY(-60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_IN_LEFT = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateX(-100vw)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
    { offset: 0.6, opacity: 1, transform: 'scale(0.475) translateX(10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' }
];
const ZOOM_IN_RIGHT = [
    { offset: 0, opacity: 0, transform: 'scale(0.1) translateX(100vw)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' },
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
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateY(-100vh)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', transformOrigin: 'center bottom' }
];
const ZOOM_OUT_DOWN = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateY(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateY(-60px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', transformOrigin: 'center' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateY(100vh)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', transformOrigin: 'center bottom' }
];
const ZOOM_OUT_LEFT = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateX(10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateX(-100vw)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }
];
const ZOOM_OUT_RIGHT = [
    { offset: 0, opacity: 1, transform: 'scale(1) translateX(0px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 0.4, opacity: 1, transform: 'scale(0.475) translateX(-10px)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)' },
    { offset: 1, opacity: 0, transform: 'scale(0.1) translateX(100vw)', easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }
];
const ZOOM_EXITS = {
    [ANIMATIONS.ZOOM_OUT]: ZOOM_OUT,
    [ANIMATIONS.ZOOM_OUT_UP]: ZOOM_OUT_UP,
    [ANIMATIONS.ZOOM_OUT_DOWN]: ZOOM_OUT_DOWN,
    [ANIMATIONS.ZOOM_OUT_LEFT]: ZOOM_OUT_LEFT,
    [ANIMATIONS.ZOOM_OUT_RIGHT]: ZOOM_OUT_RIGHT
};

const ANIMATE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ATTENTION_SEEKERS), BOUNCING_ENTRANCES), BOUNCING_EXITS), FADING_ENTRANCES), FADING_EXITS), FLIPPERS), LIGHTSPEED), ROTATING_ENTRANCES), ROTATING_EXITS), SLIDING_ENTRANCES), SLIDING_EXITS), SPECIALS), ZOOM_ENTRANCES), ZOOM_EXITS);

const SCALE_UP_DEFAULT = {
    easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const SCALE_UP_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)' })
];
const SCALE_UP_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 0%' })
];
const SCALE_UP_TR = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 0%' })
];
const SCALE_UP_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 50%' })
];
const SCALE_UP_BR = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 100%' })
];
const SCALE_UP_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 100%' })
];
const SCALE_UP_BL = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 100%' })
];
const SCALE_UP_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 50%' })
];
const SCALE_UP_TL = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 0%' })
];
const SCALE_UP_HOR_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scaleX(0.4)' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scaleX(1)' })
];
const SCALE_UP_HOR_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scaleX(0.4)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scaleX(1)', transformOrigin: '0% 0%' })
];
const SCALE_UP_HOR_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scaleX(0.4)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scaleX(1)', transformOrigin: '100% 100%' })
];
const SCALE_UP_VER_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scaleY(0.4)' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scaleY(1)' })
];
const SCALE_UP_VER_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scaleY(0.4)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scaleY(1)', transformOrigin: '100% 0%' })
];
const SCALE_UP_VER_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_UP_DEFAULT), { transform: 'scaleY(0.4)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_UP_DEFAULT), { transform: 'scaleY(1)', transformOrigin: '0% 100%' })
];
const SCALE_UP = {
    [ANIMATIONS$1.SCALE_UP_CENTER]: SCALE_UP_CENTER,
    [ANIMATIONS$1.SCALE_UP_TOP]: SCALE_UP_TOP,
    [ANIMATIONS$1.SCALE_UP_TR]: SCALE_UP_TR,
    [ANIMATIONS$1.SCALE_UP_RIGHT]: SCALE_UP_RIGHT,
    [ANIMATIONS$1.SCALE_UP_BR]: SCALE_UP_BR,
    [ANIMATIONS$1.SCALE_UP_BOTTOM]: SCALE_UP_BOTTOM,
    [ANIMATIONS$1.SCALE_UP_BL]: SCALE_UP_BL,
    [ANIMATIONS$1.SCALE_UP_LEFT]: SCALE_UP_LEFT,
    [ANIMATIONS$1.SCALE_UP_TL]: SCALE_UP_TL,
    [ANIMATIONS$1.SCALE_UP_HOR_CENTER]: SCALE_UP_HOR_CENTER,
    [ANIMATIONS$1.SCALE_UP_HOR_LEFT]: SCALE_UP_HOR_LEFT,
    [ANIMATIONS$1.SCALE_UP_HOR_RIGHT]: SCALE_UP_HOR_RIGHT,
    [ANIMATIONS$1.SCALE_UP_VER_CENTER]: SCALE_UP_VER_CENTER,
    [ANIMATIONS$1.SCALE_UP_VER_TOP]: SCALE_UP_VER_TOP,
    [ANIMATIONS$1.SCALE_UP_VER_BOTTOM]: SCALE_UP_VER_BOTTOM
};

const SCALE_DOWN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const SCALE_DOWN_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)' })
];
const SCALE_DOWN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '50% 0%' })
];
const SCALE_DOWN_TR = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '100% 0%' })
];
const SCALE_DOWN_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '100% 50%' })
];
const SCALE_DOWN_BR = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '100% 100%' })
];
const SCALE_DOWN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '50% 100%' })
];
const SCALE_DOWN_BL = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '0% 100%' })
];
const SCALE_DOWN_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '0% 50%' })
];
const SCALE_DOWN_TL = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scale(0.5)', transformOrigin: '0% 0%' })
];
const SCALE_DOWN_HOR_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scaleX(1)' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scaleX(0.3)' })
];
const SCALE_DOWN_HOR_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scaleX(1)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scaleX(0.3)', transformOrigin: '0% 0%' })
];
const SCALE_DOWN_HOR_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scaleX(1)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scaleX(0.3)', transformOrigin: '100% 100%' })
];
const SCALE_DOWN_VER_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scaleY(1)' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scaleY(0.3)' })
];
const SCALE_DOWN_VER_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scaleY(1)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scaleY(0.3)', transformOrigin: '100% 0%' })
];
const SCALE_DOWN_VER_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_DOWN_DEFAULT), { transform: 'scaleY(1)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_DOWN_DEFAULT), { transform: 'scaleY(0.3)', transformOrigin: '0% 100%' })
];
const SCALE_DOWN = {
    [ANIMATIONS$1.SCALE_DOWN_CENTER]: SCALE_DOWN_CENTER,
    [ANIMATIONS$1.SCALE_DOWN_TOP]: SCALE_DOWN_TOP,
    [ANIMATIONS$1.SCALE_DOWN_TR]: SCALE_DOWN_TR,
    [ANIMATIONS$1.SCALE_DOWN_RIGHT]: SCALE_DOWN_RIGHT,
    [ANIMATIONS$1.SCALE_DOWN_BR]: SCALE_DOWN_BR,
    [ANIMATIONS$1.SCALE_DOWN_BOTTOM]: SCALE_DOWN_BOTTOM,
    [ANIMATIONS$1.SCALE_DOWN_BL]: SCALE_DOWN_BL,
    [ANIMATIONS$1.SCALE_DOWN_LEFT]: SCALE_DOWN_LEFT,
    [ANIMATIONS$1.SCALE_DOWN_TL]: SCALE_DOWN_TL,
    [ANIMATIONS$1.SCALE_DOWN_HOR_CENTER]: SCALE_DOWN_HOR_CENTER,
    [ANIMATIONS$1.SCALE_DOWN_HOR_LEFT]: SCALE_DOWN_HOR_LEFT,
    [ANIMATIONS$1.SCALE_DOWN_HOR_RIGHT]: SCALE_DOWN_HOR_RIGHT,
    [ANIMATIONS$1.SCALE_DOWN_VER_CENTER]: SCALE_DOWN_VER_CENTER,
    [ANIMATIONS$1.SCALE_DOWN_VER_TOP]: SCALE_DOWN_VER_TOP,
    [ANIMATIONS$1.SCALE_DOWN_VER_BOTTOM]: SCALE_DOWN_VER_BOTTOM
};

const ROTATE_DEFAULT = {
    easing: 'ease-in-out',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const ROTATE_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { transform: 'rotate(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { transform: 'rotate(360deg)' })
];
const ROTATE_TOP = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'top' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'top' })
];
const ROTATE_TR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'top right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'top right' })
];
const ROTATE_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'right' })
];
const ROTATE_BR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'bottom right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'bottom right' })
];
const ROTATE_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'bottom' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'bottom' })
];
const ROTATE_BL = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'bottom left' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'bottom left' })
];
const ROTATE_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'left' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'left' })
];
const ROTATE_TL = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(0)', transformOrigin: 'top left' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotate(360deg)', transformOrigin: 'top left' })
];
const ROTATE_HOR_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotateX(-360deg)' })
];
const ROTATE_HOR_TOP = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateX(0)', transformOrigin: 'top' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateX(-360deg)', transformOrigin: 'top' })
];
const ROTATE_HOR_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateX(0)', transformOrigin: 'bottom' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateX(360deg)', transformOrigin: 'bottom' })
];
const ROTATE_VERT_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)', transform: 'rotateY(360deg)' })
];
const ROTATE_VERT_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateY(0)', transformOrigin: 'left' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateY(360deg)', transformOrigin: 'left' })
];
const ROTATE_VERT_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateY(0)', transformOrigin: 'right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', transform: 'rotateY(-360deg)', transformOrigin: 'right' })
];
const ROTATE_DIAGONAL_1 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, -180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, -360deg)' })
];
const ROTATE_DIAGONAL_2 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 360deg)' })
];
const ROTATE_DIAGONAL_TR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, 0deg)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, -180deg)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, -360deg)', transformOrigin: '100% 0%' })
];
const ROTATE_DIAGONAL_BR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 0deg)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, -180deg)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, -360deg)', transformOrigin: '100% 100%' })
];
const ROTATE_DIAGONAL_BL = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, 0deg)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, 180deg)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(1, 1, 0, 360deg)', transformOrigin: '0% 100%' })
];
const ROTATE_DIAGONAL_TL = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 0deg)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 180deg)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_DEFAULT), { easing: 'linear', transform: 'rotate3d(-1, 1, 0, 360deg)', transformOrigin: '0% 0%' })
];
const ROTATE$1 = {
    [ANIMATIONS$1.ROTATE_CENTER]: ROTATE_CENTER,
    [ANIMATIONS$1.ROTATE_TOP]: ROTATE_TOP,
    [ANIMATIONS$1.ROTATE_TR]: ROTATE_TR,
    [ANIMATIONS$1.ROTATE_RIGHT]: ROTATE_RIGHT,
    [ANIMATIONS$1.ROTATE_BR]: ROTATE_BR,
    [ANIMATIONS$1.ROTATE_BOTTOM]: ROTATE_BOTTOM,
    [ANIMATIONS$1.ROTATE_BL]: ROTATE_BL,
    [ANIMATIONS$1.ROTATE_LEFT]: ROTATE_LEFT,
    [ANIMATIONS$1.ROTATE_TL]: ROTATE_TL,
    [ANIMATIONS$1.ROTATE_HOR_CENTER]: ROTATE_HOR_CENTER,
    [ANIMATIONS$1.ROTATE_HOR_TOP]: ROTATE_HOR_TOP,
    [ANIMATIONS$1.ROTATE_HOR_BOTTOM]: ROTATE_HOR_BOTTOM,
    [ANIMATIONS$1.ROTATE_VERT_CENTER]: ROTATE_VERT_CENTER,
    [ANIMATIONS$1.ROTATE_VERT_LEFT]: ROTATE_VERT_LEFT,
    [ANIMATIONS$1.ROTATE_VERT_RIGHT]: ROTATE_VERT_RIGHT,
    [ANIMATIONS$1.ROTATE_DIAGONAL_1]: ROTATE_DIAGONAL_1,
    [ANIMATIONS$1.ROTATE_DIAGONAL_2]: ROTATE_DIAGONAL_2,
    [ANIMATIONS$1.ROTATE_DIAGONAL_TR]: ROTATE_DIAGONAL_TR,
    [ANIMATIONS$1.ROTATE_DIAGONAL_BR]: ROTATE_DIAGONAL_BR,
    [ANIMATIONS$1.ROTATE_DIAGONAL_BL]: ROTATE_DIAGONAL_BL,
    [ANIMATIONS$1.ROTATE_DIAGONAL_TL]: ROTATE_DIAGONAL_TL
};

const ROTATE_SCALE_DEFAULT = {
    easing: 'linear',
    fillMode: 'both'
};
const ROTATE_SCALE_UP = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateZ(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(2) rotateZ(180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateZ(360deg)' })
];
const ROTATE_SCALE_DOWN = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateZ(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(0.5) rotateZ(180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateZ(360deg)' })
];
const ROTATE_SCALE_UP_HOR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateX(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(2) rotateX(-180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateX(-360deg)' })
];
const ROTATE_SCALE_DOWN_HOR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateX(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(0.5) rotateX(-180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateX(-360deg)' })
];
const ROTATE_SCALE_UP_VER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(2) rotateY(180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateY(360deg)' })
];
const ROTATE_SCALE_DOWN_VER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(0.5) rotateY(180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotateY(360deg)' })
];
const ROTATE_SCALE_UP_DIAG_1 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(2) rotate3d(1, 1, 0, -180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, -360deg)' })
];
const ROTATE_SCALE_DOWN_DIAG_1 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(0.5) rotate3d(1, 1, 0, -180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, -360deg)' })
];
const ROTATE_SCALE_UP_DIAG_2 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(2) rotate3d(-1, 1, 0, 180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 360deg)' })
];
const ROTATE_SCALE_DOWN_DIAG_2 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(0.5) rotate3d(-1, 1, 0, 180deg)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 360deg)' })
];
const ROTATE_SCALE = {
    [ANIMATIONS$1.ROTATE_SCALE_UP]: ROTATE_SCALE_UP,
    [ANIMATIONS$1.ROTATE_SCALE_DOWN]: ROTATE_SCALE_DOWN,
    [ANIMATIONS$1.ROTATE_SCALE_UP_HOR]: ROTATE_SCALE_UP_HOR,
    [ANIMATIONS$1.ROTATE_SCALE_DOWN_HOR]: ROTATE_SCALE_DOWN_HOR,
    [ANIMATIONS$1.ROTATE_SCALE_UP_VER]: ROTATE_SCALE_UP_VER,
    [ANIMATIONS$1.ROTATE_SCALE_DOWN_VER]: ROTATE_SCALE_DOWN_VER,
    [ANIMATIONS$1.ROTATE_SCALE_UP_DIAG_1]: ROTATE_SCALE_UP_DIAG_1,
    [ANIMATIONS$1.ROTATE_SCALE_DOWN_DIAG_1]: ROTATE_SCALE_DOWN_DIAG_1,
    [ANIMATIONS$1.ROTATE_SCALE_UP_DIAG_2]: ROTATE_SCALE_UP_DIAG_2,
    [ANIMATIONS$1.ROTATE_SCALE_DOWN_DIAG_2]: ROTATE_SCALE_DOWN_DIAG_2
};

const ROTATE_90_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const ROTATE_90_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)' })
];
const ROTATE_90_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)' })
];
const ROTATE_90_TOP_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: 'top' })
];
const ROTATE_90_TOP_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: 'top' })
];
const ROTATE_90_TR_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: 'top right' })
];
const ROTATE_90_TR_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: 'top right' })
];
const ROTATE_90_RIGHT_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: 'right' })
];
const ROTATE_90_RIGHT_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'right' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: 'right' })
];
const ROTATE_90_BR_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: '100% 100%' })
];
const ROTATE_90_BR_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: '100% 100%' })
];
const ROTATE_90_BOTTOM_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'bottom' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: 'bottom' })
];
const ROTATE_90_BOTTOM_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'bottom' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: 'bottom' })
];
const ROTATE_90_BL_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: '0% 100%' })
];
const ROTATE_90_BL_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: '0% 100%' })
];
const ROTATE_90_LEFT_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'left' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: 'left' })
];
const ROTATE_90_LEFT_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'left' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: 'left' })
];
const ROTATE_90_TL_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(90deg)', transformOrigin: '0% 0%' })
];
const ROTATE_90_TL_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotate(-90deg)', transformOrigin: '0% 0%' })
];
const ROTATE_90_HORIZONTAL_FWD = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotateX(90deg)' })
];
const ROTATE_90_HORIZONTAL_BCK = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotateX(-90deg)' })
];
const ROTATE_90_VERTICAL_FWD = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotateY(90deg)' })
];
const ROTATE_90_VERTICAL_BCK = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_90_DEFAULT), { transform: 'rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_90_DEFAULT), { transform: 'rotateY(-90deg)' })
];
const ROTATE_90 = {
    [ANIMATIONS$1.ROTATE_90_CW]: ROTATE_90_CW,
    [ANIMATIONS$1.ROTATE_90_CCW]: ROTATE_90_CCW,
    [ANIMATIONS$1.ROTATE_90_TOP_CW]: ROTATE_90_TOP_CW,
    [ANIMATIONS$1.ROTATE_90_TOP_CCW]: ROTATE_90_TOP_CCW,
    [ANIMATIONS$1.ROTATE_90_TR_CW]: ROTATE_90_TR_CW,
    [ANIMATIONS$1.ROTATE_90_TR_CCW]: ROTATE_90_TR_CCW,
    [ANIMATIONS$1.ROTATE_90_RIGHT_CW]: ROTATE_90_RIGHT_CW,
    [ANIMATIONS$1.ROTATE_90_RIGHT_CCW]: ROTATE_90_RIGHT_CCW,
    [ANIMATIONS$1.ROTATE_90_BR_CW]: ROTATE_90_BR_CW,
    [ANIMATIONS$1.ROTATE_90_BR_CCW]: ROTATE_90_BR_CCW,
    [ANIMATIONS$1.ROTATE_90_BOTTOM_CW]: ROTATE_90_BOTTOM_CW,
    [ANIMATIONS$1.ROTATE_90_BOTTOM_CCW]: ROTATE_90_BOTTOM_CCW,
    [ANIMATIONS$1.ROTATE_90_BL_CW]: ROTATE_90_BL_CW,
    [ANIMATIONS$1.ROTATE_90_BL_CCW]: ROTATE_90_BL_CCW,
    [ANIMATIONS$1.ROTATE_90_LEFT_CW]: ROTATE_90_LEFT_CW,
    [ANIMATIONS$1.ROTATE_90_LEFT_CCW]: ROTATE_90_LEFT_CCW,
    [ANIMATIONS$1.ROTATE_90_TL_CW]: ROTATE_90_TL_CW,
    [ANIMATIONS$1.ROTATE_90_TL_CCW]: ROTATE_90_TL_CCW,
    [ANIMATIONS$1.ROTATE_90_HORIZONTAL_FWD]: ROTATE_90_HORIZONTAL_FWD,
    [ANIMATIONS$1.ROTATE_90_HORIZONTAL_BCK]: ROTATE_90_HORIZONTAL_BCK,
    [ANIMATIONS$1.ROTATE_90_VERTICAL_FWD]: ROTATE_90_VERTICAL_FWD,
    [ANIMATIONS$1.ROTATE_90_VERTICAL_BCK]: ROTATE_90_VERTICAL_BCK
};

const FLIP_DEFAULT = {
    easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    fillMode: 'both'
};
const FLIP_HORIZONTAL_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotateX(-180deg)' })
];
const FLIP_HORIZONTAL_TOP = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotateX(180deg)' })
];
const FLIP_HORIZONTAL_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(-260px) rotateX(180deg)' })
];
const FLIP_HORIZONTAL_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(160px) rotateX(-180deg)' })
];
const FLIP_VERTICAL_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotateY(180deg)' })
];
const FLIP_VERTICAL_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotateY(-180deg)' })
];
const FLIP_VERTICAL_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(-260px) rotateY(-180deg)' })
];
const FLIP_VERTICAL_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(160px) rotateY(180deg)' })
];
const FLIP_DIAGONAL_1_TR = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotate3d(1, 1, 0, 180deg)' })
];
const FLIP_DIAGONAL_1_BL = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotate3d(1, 1, 0, -180deg)' })
];
const FLIP_DIAGONAL_1_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(-260px) rotate3d(1, 1, 0, -180deg)' })
];
const FLIP_DIAGONAL_1_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(160px) rotate3d(1, 1, 0, 180deg)' })
];
const FLIP_DIAGONAL_2_BR = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 180deg)' })
];
const FLIP_DIAGONAL_2_TL = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'rotate3d(-1, 1, 0, -180deg)' })
];
const FLIP_DIAGONAL_2_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(-260px) rotate3d(-1, 1, 0, -180deg)' })
];
const FLIP_DIAGONAL_2_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_DEFAULT), { transform: 'translateZ(0) rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_DEFAULT), { transform: 'translateZ(160px) rotate3d(-1, 1, 0, 180deg)' })
];
const FLIP$1 = {
    [ANIMATIONS$1.FLIP_HORIZONTAL_BOTTOM]: FLIP_HORIZONTAL_BOTTOM,
    [ANIMATIONS$1.FLIP_HORIZONTAL_TOP]: FLIP_HORIZONTAL_TOP,
    [ANIMATIONS$1.FLIP_HORIZONTAL_BCK]: FLIP_HORIZONTAL_BCK,
    [ANIMATIONS$1.FLIP_HORIZONTAL_FWD]: FLIP_HORIZONTAL_FWD,
    [ANIMATIONS$1.FLIP_VERTICAL_RIGHT]: FLIP_VERTICAL_RIGHT,
    [ANIMATIONS$1.FLIP_VERTICAL_LEFT]: FLIP_VERTICAL_LEFT,
    [ANIMATIONS$1.FLIP_VERTICAL_BCK]: FLIP_VERTICAL_BCK,
    [ANIMATIONS$1.FLIP_VERTICAL_FWD]: FLIP_VERTICAL_FWD,
    [ANIMATIONS$1.FLIP_DIAGONAL_1_TR]: FLIP_DIAGONAL_1_TR,
    [ANIMATIONS$1.FLIP_DIAGONAL_1_BL]: FLIP_DIAGONAL_1_BL,
    [ANIMATIONS$1.FLIP_DIAGONAL_1_BCK]: FLIP_DIAGONAL_1_BCK,
    [ANIMATIONS$1.FLIP_DIAGONAL_1_FWD]: FLIP_DIAGONAL_1_FWD,
    [ANIMATIONS$1.FLIP_DIAGONAL_2_BR]: FLIP_DIAGONAL_2_BR,
    [ANIMATIONS$1.FLIP_DIAGONAL_2_TL]: FLIP_DIAGONAL_2_TL,
    [ANIMATIONS$1.FLIP_DIAGONAL_2_BCK]: FLIP_DIAGONAL_2_BCK,
    [ANIMATIONS$1.FLIP_DIAGONAL_2_FWD]: FLIP_DIAGONAL_2_FWD
};

const FLIP_2_DEFAULT = {
    easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    fillMode: 'both'
};
const FLIP_2_HOR_TOP_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) rotateX(0)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(-100%) rotateX(-180deg)', transformOrigin: '50% 100%' })
];
const FLIP_2_HOR_TOP_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) rotateX(0)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(-100%) rotateX(180deg)', transformOrigin: '50% 100%' })
];
const FLIP_2_HOR_TOP_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(-100%) translateZ(-260px) rotateX(180deg)', transformOrigin: '50% 100%' })
];
const FLIP_2_HOR_TOP_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(-100%) translateZ(160px) rotateX(-180deg)', transformOrigin: '50% 100%' })
];
const FLIP_2_VER_RIGHT_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) rotateY(0)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(100%) rotateY(-180deg)', transformOrigin: '0% 50%' })
];
const FLIP_2_VER_RIGHT_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) rotateY(0)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(100%) rotateY(180deg)', transformOrigin: '0% 50%' })
];
const FLIP_2_VER_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(100%) translateZ(-260px) rotateY(180deg)', transformOrigin: '0% 50%' })
];
const FLIP_2_VER_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(100%) translateZ(160px) rotateY(-180deg)', transformOrigin: '0% 50%' })
];
const FLIP_2_HOR_BOTTOM_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) rotateX(0)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(100%) rotateX(180deg)', transformOrigin: '50% 0%' })
];
const FLIP_2_HOR_BOTTOM_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) rotateX(0)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(100%) rotateX(-180deg)', transformOrigin: '50% 0%' })
];
const FLIP_2_HOR_BOTTOM_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(100%) translateZ(-260px) rotateX(-180deg)', transformOrigin: '50% 0%' })
];
const FLIP_2_HOR_BOTTOM_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateY(100%) translateZ(160px) rotateX(180deg)', transformOrigin: '50% 0%' })
];
const FLIP_2_VER_LEFT_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) rotateY(0)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(-100%) rotateY(180deg)', transformOrigin: '100% 0%' })
];
const FLIP_2_VER_LEFT_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) rotateY(0)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(-100%) rotateY(-180deg)', transformOrigin: '100% 0%' })
];
const FLIP_2_VER_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(-100%) translateZ(-260px) rotateY(-180deg)', transformOrigin: '100% 0%' })
];
const FLIP_2_VER_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_2_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_2_DEFAULT), { transform: 'translateX(-100%) translateZ(160px) rotateY(180deg)', transformOrigin: '100% 0%' })
];
const FLIP_2 = {
    [ANIMATIONS$1.FLIP_2_HOR_TOP_1]: FLIP_2_HOR_TOP_1,
    [ANIMATIONS$1.FLIP_2_HOR_TOP_2]: FLIP_2_HOR_TOP_2,
    [ANIMATIONS$1.FLIP_2_HOR_TOP_BCK]: FLIP_2_HOR_TOP_BCK,
    [ANIMATIONS$1.FLIP_2_HOR_TOP_FWD]: FLIP_2_HOR_TOP_FWD,
    [ANIMATIONS$1.FLIP_2_VER_RIGHT_1]: FLIP_2_VER_RIGHT_1,
    [ANIMATIONS$1.FLIP_2_VER_RIGHT_2]: FLIP_2_VER_RIGHT_2,
    [ANIMATIONS$1.FLIP_2_VER_RIGHT_BCK]: FLIP_2_VER_RIGHT_BCK,
    [ANIMATIONS$1.FLIP_2_VER_RIGHT_FWD]: FLIP_2_VER_RIGHT_FWD,
    [ANIMATIONS$1.FLIP_2_HOR_BOTTOM_1]: FLIP_2_HOR_BOTTOM_1,
    [ANIMATIONS$1.FLIP_2_HOR_BOTTOM_2]: FLIP_2_HOR_BOTTOM_2,
    [ANIMATIONS$1.FLIP_2_HOR_BOTTOM_BCK]: FLIP_2_HOR_BOTTOM_BCK,
    [ANIMATIONS$1.FLIP_2_HOR_BOTTOM_FWD]: FLIP_2_HOR_BOTTOM_FWD,
    [ANIMATIONS$1.FLIP_2_VER_LEFT_1]: FLIP_2_VER_LEFT_1,
    [ANIMATIONS$1.FLIP_2_VER_LEFT_2]: FLIP_2_VER_LEFT_2,
    [ANIMATIONS$1.FLIP_2_VER_LEFT_BCK]: FLIP_2_VER_LEFT_BCK,
    [ANIMATIONS$1.FLIP_2_VER_LEFT_FWD]: FLIP_2_VER_LEFT_FWD
};

const FLIP_SCALE_DEFAULT = {
    easing: 'linear',
    fillMode: 'both'
};
const FLIP_SCALE_UP_HOR = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateX(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(2.5) rotateX(-90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateX(-180deg)' })
];
const FLIP_SCALE_DOWN_HOR = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateX(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(0.4) rotateX(90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateX(180deg)' })
];
const FLIP_SCALE_UP_VER = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(2.5) rotateY(90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateY(180deg)' })
];
const FLIP_SCALE_DOWN_VER = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(0.4) rotateY(-90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotateY(-180deg)' })
];
const FLIP_SCALE_UP_DIAG_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(2.5) rotate3d(1, 1, 0, 90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, 180deg)' })
];
const FLIP_SCALE_DOWN_DIAG_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(0.4) rotate3d(1, 1, 0, -90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(1, 1, 0, -180deg)' })
];
const FLIP_SCALE_UP_DIAG_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(2.5) rotate3d(-1, 1, 0, 90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 180deg)' })
];
const FLIP_SCALE_DOWN_DIAG_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_DEFAULT), { transform: 'scale(0.4) rotate3d(-1, 1, 0, -90deg)' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_DEFAULT), { transform: 'scale(1) rotate3d(-1, 1, 0, -180deg)' })
];
const FLIP_SCALE = {
    [ANIMATIONS$1.FLIP_SCALE_UP_HOR]: FLIP_SCALE_UP_HOR,
    [ANIMATIONS$1.FLIP_SCALE_DOWN_HOR]: FLIP_SCALE_DOWN_HOR,
    [ANIMATIONS$1.FLIP_SCALE_UP_VER]: FLIP_SCALE_UP_VER,
    [ANIMATIONS$1.FLIP_SCALE_DOWN_VER]: FLIP_SCALE_DOWN_VER,
    [ANIMATIONS$1.FLIP_SCALE_UP_DIAG_1]: FLIP_SCALE_UP_DIAG_1,
    [ANIMATIONS$1.FLIP_SCALE_DOWN_DIAG_1]: FLIP_SCALE_DOWN_DIAG_1,
    [ANIMATIONS$1.FLIP_SCALE_UP_DIAG_2]: FLIP_SCALE_UP_DIAG_2,
    [ANIMATIONS$1.FLIP_SCALE_DOWN_DIAG_2]: FLIP_SCALE_DOWN_DIAG_2
};

const FLIP_SCALE_2_DEFAULT = {
    easing: 'linear',
    fillMode: 'both'
};
const FLIP_SCALE_2_HOR_TOP = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateY(0) rotateX(0) scale(1)', transformOrigin: '50% 0%' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateY(-50%) rotateX(-90deg) scale(2)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateY(-100%) rotateX(-180deg) scale(1)', transformOrigin: '50% 100%' })
];
const FLIP_SCALE_2_VER_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateX(0) rotateY(0) scale(1)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateX(50%) rotateY(-90deg) scale(2)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateX(100%) rotateY(-180deg) scale(1)', transformOrigin: '0% 50%' })
];
const FLIP_SCALE_2_HOR_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateY(0) rotateX(0) scale(1)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateY(50%) rotateX(90deg) scale(2)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateY(100%) rotateX(180deg) scale(1)', transformOrigin: '50% 0%' })
];
const FLIP_SCALE_2_VER_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateX(0) rotateY(0) scale(1)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 0.5 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateX(-50%) rotateY(90deg) scale(2)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_SCALE_2_DEFAULT), { transform: 'translateX(-100%) rotateY(180deg) scale(1)', transformOrigin: '100% 50%' })
];
const FLIP_SCALE_2 = {
    [ANIMATIONS$1.FLIP_SCALE_2_HOR_TOP]: FLIP_SCALE_2_HOR_TOP,
    [ANIMATIONS$1.FLIP_SCALE_2_VER_RIGHT]: FLIP_SCALE_2_VER_RIGHT,
    [ANIMATIONS$1.FLIP_SCALE_2_HOR_BOTTOM]: FLIP_SCALE_2_HOR_BOTTOM,
    [ANIMATIONS$1.FLIP_SCALE_2_VER_LEFT]: FLIP_SCALE_2_VER_LEFT
};

const SWING_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SWING_TOP_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateX(0)', transformOrigin: 'top' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateX(180deg)', transformOrigin: 'top' })
];
const SWING_TOP_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateX(0)', transformOrigin: 'top' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateX(-180deg)', transformOrigin: 'top' })
];
const SWING_TOP_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, 180deg)', transformOrigin: '100% 0%' })
];
const SWING_TOP_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', transformOrigin: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, -180deg)', transformOrigin: '100% 0%' })
];
const SWING_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'right' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateY(180deg)', transformOrigin: 'right' })
];
const SWING_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'right' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateY(-180deg)', transformOrigin: 'right' })
];
const SWING_BOTTOM_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 180deg)', transformOrigin: '100% 100%' })
];
const SWING_BOTTOM_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, -180deg)', transformOrigin: '100% 100%' })
];
const SWING_BOTTOM_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateX(0)', transformOrigin: 'bottom' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateX(-180deg)', transformOrigin: 'bottom' })
];
const SWING_BOTTOM_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateX(0)', transformOrigin: 'bottom' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateX(180deg)', transformOrigin: 'bottom' })
];
const SWING_BOTTOM_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, -180deg)', transformOrigin: '0% 100%' })
];
const SWING_BOTTOM_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(1, 1, 0, 180deg)', transformOrigin: '0% 100%' })
];
const SWING_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'left bottom' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateY(-180deg)', transformOrigin: 'left bottom' })
];
const SWING_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'left bottom' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotateY(180deg)', transformOrigin: 'left bottom' })
];
const SWING_TOP_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, -180deg)', transformOrigin: '0% 0%' })
];
const SWING_TOP_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, SWING_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 180deg)', transformOrigin: '0% 0%' })
];
const SWING$1 = {
    [ANIMATIONS$1.SWING_TOP_FWD]: SWING_TOP_FWD,
    [ANIMATIONS$1.SWING_TOP_BCK]: SWING_TOP_BCK,
    [ANIMATIONS$1.SWING_TOP_RIGHT_FWD]: SWING_TOP_RIGHT_FWD,
    [ANIMATIONS$1.SWING_TOP_RIGHT_BCK]: SWING_TOP_RIGHT_BCK,
    [ANIMATIONS$1.SWING_RIGHT_FWD]: SWING_RIGHT_FWD,
    [ANIMATIONS$1.SWING_RIGHT_BCK]: SWING_RIGHT_BCK,
    [ANIMATIONS$1.SWING_BOTTOM_RIGHT_FWD]: SWING_BOTTOM_RIGHT_FWD,
    [ANIMATIONS$1.SWING_BOTTOM_RIGHT_BCK]: SWING_BOTTOM_RIGHT_BCK,
    [ANIMATIONS$1.SWING_BOTTOM_FWD]: SWING_BOTTOM_FWD,
    [ANIMATIONS$1.SWING_BOTTOM_BCK]: SWING_BOTTOM_BCK,
    [ANIMATIONS$1.SWING_BOTTOM_LEFT_FWD]: SWING_BOTTOM_LEFT_FWD,
    [ANIMATIONS$1.SWING_BOTTOM_LEFT_BCK]: SWING_BOTTOM_LEFT_BCK,
    [ANIMATIONS$1.SWING_LEFT_FWD]: SWING_LEFT_FWD,
    [ANIMATIONS$1.SWING_LEFT_BCK]: SWING_LEFT_BCK,
    [ANIMATIONS$1.SWING_TOP_LEFT_FWD]: SWING_TOP_LEFT_FWD,
    [ANIMATIONS$1.SWING_TOP_LEFT_BCK]: SWING_TOP_LEFT_BCK
};

const SLIDE_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SLIDE_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateY(-100px)' })
];
const SLIDE_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateY(-100px) translateX(100px)' })
];
const SLIDE_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateX(100px)' })
];
const SLIDE_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateY(100px) translateX(100px)' })
];
const SLIDE_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateY(100px)' })
];
const SLIDE_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateY(100px) translateX(-100px)' })
];
const SLIDE_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateX(-100px)' })
];
const SLIDE_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_DEFAULT), { transform: 'translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_DEFAULT), { transform: 'translateY(-100px) translateX(-100px)' })
];
const SLIDE = {
    [ANIMATIONS$1.SLIDE_TOP]: SLIDE_TOP,
    [ANIMATIONS$1.SLIDE_TR]: SLIDE_TR,
    [ANIMATIONS$1.SLIDE_RIGHT]: SLIDE_RIGHT,
    [ANIMATIONS$1.SLIDE_BR]: SLIDE_BR,
    [ANIMATIONS$1.SLIDE_BOTTOM]: SLIDE_BOTTOM,
    [ANIMATIONS$1.SLIDE_BL]: SLIDE_BL,
    [ANIMATIONS$1.SLIDE_LEFT]: SLIDE_LEFT,
    [ANIMATIONS$1.SLIDE_TL]: SLIDE_TL
};

const SLIDE_BCK_DEFAULT = {
    easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    fillMode: 'both'
};
const SLIDE_BCK_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px)' })
];
const SLIDE_BCK_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateY(-200px)' })
];
const SLIDE_BCK_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateY(-200px) translateX(200px)' })
];
const SLIDE_BCK_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateX(200px)' })
];
const SLIDE_BCK_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateY(200px) translateX(200px)' })
];
const SLIDE_BCK_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateY(200px)' })
];
const SLIDE_BCK_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateY(200px) translateX(-200px)' })
];
const SLIDE_BCK_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateX(-200px)' })
];
const SLIDE_BCK_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_BCK_DEFAULT), { transform: 'translateZ(-400px) translateY(-200px) translateX(-200px)' })
];
const SLIDE_BCK = {
    [ANIMATIONS$1.SLIDE_BCK_CENTER]: SLIDE_BCK_CENTER,
    [ANIMATIONS$1.SLIDE_BCK_TOP]: SLIDE_BCK_TOP,
    [ANIMATIONS$1.SLIDE_BCK_TR]: SLIDE_BCK_TR,
    [ANIMATIONS$1.SLIDE_BCK_RIGHT]: SLIDE_BCK_RIGHT,
    [ANIMATIONS$1.SLIDE_BCK_BR]: SLIDE_BCK_BR,
    [ANIMATIONS$1.SLIDE_BCK_BOTTOM]: SLIDE_BCK_BOTTOM,
    [ANIMATIONS$1.SLIDE_BCK_BL]: SLIDE_BCK_BL,
    [ANIMATIONS$1.SLIDE_BCK_LEFT]: SLIDE_BCK_LEFT,
    [ANIMATIONS$1.SLIDE_BCK_TL]: SLIDE_BCK_TL
};

const SLIDE_FWD_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SLIDE_FWD_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px)' })
];
const SLIDE_FWD_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateY(-100px)' })
];
const SLIDE_FWD_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateY(-100px) translateX(100px)' })
];
const SLIDE_FWD_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateX(100px)' })
];
const SLIDE_FWD_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateY(100px) translateX(100px)' })
];
const SLIDE_FWD_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateY(100px)' })
];
const SLIDE_FWD_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateY(100px) translateX(-100px)' })
];
const SLIDE_FWD_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateX(-100px)' })
];
const SLIDE_FWD_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_FWD_DEFAULT), { transform: 'translateZ(160px) translateY(-100px) translateX(-100px)' })
];
const SLIDE_FWD = {
    [ANIMATIONS$1.SLIDE_FWD_CENTER]: SLIDE_FWD_CENTER,
    [ANIMATIONS$1.SLIDE_FWD_TOP]: SLIDE_FWD_TOP,
    [ANIMATIONS$1.SLIDE_FWD_TR]: SLIDE_FWD_TR,
    [ANIMATIONS$1.SLIDE_FWD_RIGHT]: SLIDE_FWD_RIGHT,
    [ANIMATIONS$1.SLIDE_FWD_BR]: SLIDE_FWD_BR,
    [ANIMATIONS$1.SLIDE_FWD_BOTTOM]: SLIDE_FWD_BOTTOM,
    [ANIMATIONS$1.SLIDE_FWD_BL]: SLIDE_FWD_BL,
    [ANIMATIONS$1.SLIDE_FWD_LEFT]: SLIDE_FWD_LEFT,
    [ANIMATIONS$1.SLIDE_FWD_TL]: SLIDE_FWD_TL
};

const SLIDE_ROTATE_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SLIDE_ROTATE_HOR_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(0) rotateX(0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(-150px) rotateX(-90deg)' })
];
const SLIDE_ROTATE_HOR_T_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0deg)', transformOrigin: 'top center' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(-150px) translateZ(-230px) rotateX(-90deg)', transformOrigin: 'top center' })
];
const SLIDE_ROTATE_HOR_T_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0deg)', transformOrigin: 'bottom center' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(-150px) translateZ(130px) rotateX(-90deg)', transformOrigin: 'bottom center' })
];
const SLIDE_ROTATE_VER_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(0) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(150px) rotateY(-90deg)' })
];
const SLIDE_ROTATE_VER_R_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: 'center right' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(150px) translateZ(-230px) rotateY(-90deg)', transformOrigin: 'center right' })
];
const SLIDE_ROTATE_VER_R_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: 'center left' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(150px) translateZ(130px) rotateY(-90deg)', transformOrigin: 'center left' })
];
const SLIDE_ROTATE_HOR_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(0) rotateX(0deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(150px) rotateX(90deg)' })
];
const SLIDE_ROTATE_HOR_B_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0deg)', transformOrigin: 'bottom center' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(150px) translateZ(-230px) rotateX(90deg)', transformOrigin: 'bottom center' })
];
const SLIDE_ROTATE_HOR_B_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(0) translateZ(0) rotateX(0deg)', transformOrigin: 'top center' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateY(150px) translateZ(130px) rotateX(90deg)', transformOrigin: 'top center' })
];
const SLIDE_ROTATE_VER_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(0) rotateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(-150px) rotateY(90deg)' })
];
const SLIDE_ROTATE_VER_L_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: 'center left' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(-150px) translateZ(-230px) rotateY(90deg)', transformOrigin: 'center left' })
];
const SLIDE_ROTATE_VER_L_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(0) translateZ(0) rotateY(0)', transformOrigin: 'center right' }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_ROTATE_DEFAULT), { transform: 'translateX(-150px) translateZ(130px) rotateY(90deg)', transformOrigin: 'center right' })
];
const SLIDE_ROTATE = {
    [ANIMATIONS$1.SLIDE_ROTATE_HOR_TOP]: SLIDE_ROTATE_HOR_TOP,
    [ANIMATIONS$1.SLIDE_ROTATE_HOR_T_BCK]: SLIDE_ROTATE_HOR_T_BCK,
    [ANIMATIONS$1.SLIDE_ROTATE_HOR_T_FWD]: SLIDE_ROTATE_HOR_T_FWD,
    [ANIMATIONS$1.SLIDE_ROTATE_VER_RIGHT]: SLIDE_ROTATE_VER_RIGHT,
    [ANIMATIONS$1.SLIDE_ROTATE_VER_R_BCK]: SLIDE_ROTATE_VER_R_BCK,
    [ANIMATIONS$1.SLIDE_ROTATE_VER_R_FWD]: SLIDE_ROTATE_VER_R_FWD,
    [ANIMATIONS$1.SLIDE_ROTATE_HOR_BOTTOM]: SLIDE_ROTATE_HOR_BOTTOM,
    [ANIMATIONS$1.SLIDE_ROTATE_HOR_B_BCK]: SLIDE_ROTATE_HOR_B_BCK,
    [ANIMATIONS$1.SLIDE_ROTATE_HOR_B_FWD]: SLIDE_ROTATE_HOR_B_FWD,
    [ANIMATIONS$1.SLIDE_ROTATE_VER_LEFT]: SLIDE_ROTATE_VER_LEFT,
    [ANIMATIONS$1.SLIDE_ROTATE_VER_L_BCK]: SLIDE_ROTATE_VER_L_BCK,
    [ANIMATIONS$1.SLIDE_ROTATE_VER_L_FWD]: SLIDE_ROTATE_VER_L_FWD
};

const SHADOW_DROP_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SHADOW_DROP_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '12px 0 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_LR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_TB = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_TR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '12px -12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_BR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '12px 12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_BL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '-12px 12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP_TL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_DEFAULT), { boxShadow: '-12px -12px 20px -12px rgba(0, 0, 0, 0.35)' })
];
const SHADOW_DROP = {
    [ANIMATIONS$1.SHADOW_DROP_CENTER]: SHADOW_DROP_CENTER,
    [ANIMATIONS$1.SHADOW_DROP_TOP]: SHADOW_DROP_TOP,
    [ANIMATIONS$1.SHADOW_DROP_RIGHT]: SHADOW_DROP_RIGHT,
    [ANIMATIONS$1.SHADOW_DROP_BOTTOM]: SHADOW_DROP_BOTTOM,
    [ANIMATIONS$1.SHADOW_DROP_LEFT]: SHADOW_DROP_LEFT,
    [ANIMATIONS$1.SHADOW_DROP_LR]: SHADOW_DROP_LR,
    [ANIMATIONS$1.SHADOW_DROP_TB]: SHADOW_DROP_TB,
    [ANIMATIONS$1.SHADOW_DROP_TR]: SHADOW_DROP_TR,
    [ANIMATIONS$1.SHADOW_DROP_BR]: SHADOW_DROP_BR,
    [ANIMATIONS$1.SHADOW_DROP_BL]: SHADOW_DROP_BL,
    [ANIMATIONS$1.SHADOW_DROP_TL]: SHADOW_DROP_TL
};

const SHADOW_DROP_2_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SHADOW_DROP_2_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px)' })
];
const SHADOW_DROP_2_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateY(12px)' })
];
const SHADOW_DROP_2_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '12px 0 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateX(-12px)' })
];
const SHADOW_DROP_2_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateY(-12px)' })
];
const SHADOW_DROP_2_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateX(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateX(12px)' })
];
const SHADOW_DROP_2_LR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px)' })
];
const SHADOW_DROP_2_TB = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px)' })
];
const SHADOW_DROP_2_TR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '12px -12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateX(-12px) translateY(12px)' })
];
const SHADOW_DROP_2_BR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '12px 12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateX(-12px) translateY(-12px)' })
];
const SHADOW_DROP_2_BL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '-12px 12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateX(12px) translateY(-12px)' })
];
const SHADOW_DROP_2_TL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', transform: 'translateZ(0) translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_DROP_2_DEFAULT), { boxShadow: '-12px -12px 20px -12px rgba(0, 0, 0, 0.35)', transform: 'translateZ(50px) translateX(12px) translateY(12px)' })
];
const SHADOW_DROP_2 = {
    [ANIMATIONS$1.SHADOW_DROP_2_CENTER]: SHADOW_DROP_2_CENTER,
    [ANIMATIONS$1.SHADOW_DROP_2_TOP]: SHADOW_DROP_2_TOP,
    [ANIMATIONS$1.SHADOW_DROP_2_RIGHT]: SHADOW_DROP_2_RIGHT,
    [ANIMATIONS$1.SHADOW_DROP_2_BOTTOM]: SHADOW_DROP_2_BOTTOM,
    [ANIMATIONS$1.SHADOW_DROP_2_LEFT]: SHADOW_DROP_2_LEFT,
    [ANIMATIONS$1.SHADOW_DROP_2_LR]: SHADOW_DROP_2_LR,
    [ANIMATIONS$1.SHADOW_DROP_2_TB]: SHADOW_DROP_2_TB,
    [ANIMATIONS$1.SHADOW_DROP_2_TR]: SHADOW_DROP_2_TR,
    [ANIMATIONS$1.SHADOW_DROP_2_BR]: SHADOW_DROP_2_BR,
    [ANIMATIONS$1.SHADOW_DROP_2_BL]: SHADOW_DROP_2_BL,
    [ANIMATIONS$1.SHADOW_DROP_2_TL]: SHADOW_DROP_2_TL
};

const SHADOW_POP_DEFAULT = {
    easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    fillMode: 'both'
};
const SHADOW_POP_TR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_POP_DEFAULT), { boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e', transform: 'translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_POP_DEFAULT), { boxShadow: '1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e', transform: 'translateX(-8px) translateY(8px)' })
];
const SHADOW_POP_BR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_POP_DEFAULT), { boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e', transform: 'translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_POP_DEFAULT), { boxShadow: '1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e', transform: 'translateX(-8px) translateY(-8px)' })
];
const SHADOW_POP_BL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_POP_DEFAULT), { boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e', transform: 'translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_POP_DEFAULT), { boxShadow: '-1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e', transform: 'translateX(8px) translateY(-8px)' })
];
const SHADOW_POP_TL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_POP_DEFAULT), { boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e', transform: 'translateX(0) translateY(0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_POP_DEFAULT), { boxShadow: '-1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e', transform: 'translateX(8px) translateY(8px)' })
];
const SHADOW_POP = {
    [ANIMATIONS$1.SHADOW_POP_TR]: SHADOW_POP_TR,
    [ANIMATIONS$1.SHADOW_POP_BR]: SHADOW_POP_BR,
    [ANIMATIONS$1.SHADOW_POP_BL]: SHADOW_POP_BL,
    [ANIMATIONS$1.SHADOW_POP_TL]: SHADOW_POP_TL
};

const SHADOW_INSET_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SHADOW_INSET_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 14px 0px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset -6px 0 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 -6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 6px 0 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_LR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0), inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset -6px 0 14px -6px rgba(0, 0, 0, 0.5), inset 6px 0 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_TB = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0), inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 -6px 14px -6px rgba(0, 0, 0, 0.5), inset 0 6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_TR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset -6px 6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_BR = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset -6px -6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_BL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 6px -6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET_TL = [
    Object.assign(Object.assign({ offset: 0 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, SHADOW_INSET_DEFAULT), { boxShadow: 'inset 6px 6px 14px -6px rgba(0, 0, 0, 0.5)' })
];
const SHADOW_INSET = {
    [ANIMATIONS$1.SHADOW_INSET_CENTER]: SHADOW_INSET_CENTER,
    [ANIMATIONS$1.SHADOW_INSET_TOP]: SHADOW_INSET_TOP,
    [ANIMATIONS$1.SHADOW_INSET_RIGHT]: SHADOW_INSET_RIGHT,
    [ANIMATIONS$1.SHADOW_INSET_BOTTOM]: SHADOW_INSET_BOTTOM,
    [ANIMATIONS$1.SHADOW_INSET_LEFT]: SHADOW_INSET_LEFT,
    [ANIMATIONS$1.SHADOW_INSET_LR]: SHADOW_INSET_LR,
    [ANIMATIONS$1.SHADOW_INSET_TB]: SHADOW_INSET_TB,
    [ANIMATIONS$1.SHADOW_INSET_TR]: SHADOW_INSET_TR,
    [ANIMATIONS$1.SHADOW_INSET_BR]: SHADOW_INSET_BR,
    [ANIMATIONS$1.SHADOW_INSET_BL]: SHADOW_INSET_BL,
    [ANIMATIONS$1.SHADOW_INSET_TL]: SHADOW_INSET_TL
};

const SCALE_IN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const SCALE_IN_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: 'center center', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: 'center center', opacity: 1 })
];
const SCALE_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '50% 0%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 0%', opacity: 1 })
];
const SCALE_IN_TR = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '100% 0%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 0%', opacity: 1 })
];
const SCALE_IN_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '100% 50%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 50%', opacity: 1 })
];
const SCALE_IN_BR = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '100% 100%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 100%', opacity: 1 })
];
const SCALE_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '50% 100%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 100%', opacity: 1 })
];
const SCALE_IN_BL = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '0% 100%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 100%', opacity: 1 })
];
const SCALE_IN_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '0% 50%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 50%', opacity: 1 })
];
const SCALE_IN_TL = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scale(0)', transformOrigin: '0% 0%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 0%', opacity: 1 })
];
const SCALE_IN_HOR_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scaleX(0)', transformOrigin: 'center center', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scaleX(1)', transformOrigin: 'center center', opacity: 1 })
];
const SCALE_IN_HOR_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scaleX(0)', transformOrigin: '0% 0%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 })
];
const SCALE_IN_HOR_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scaleX(0)', transformOrigin: '100% 100%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scaleX(1)', transformOrigin: '100% 100%', opacity: 1 })
];
const SCALE_IN_VER_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scaleY(0)', transformOrigin: 'center center', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scaleY(1)', transformOrigin: 'center center', opacity: 1 })
];
const SCALE_IN_VER_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scaleY(0)', transformOrigin: '100% 0%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scaleY(1)', transformOrigin: '100% 0%', opacity: 1 })
];
const SCALE_IN_VER_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SCALE_IN_DEFAULT), { transform: 'scaleY(0)', transformOrigin: '0% 100%', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SCALE_IN_DEFAULT), { transform: 'scaleY(1)', transformOrigin: '0% 100%', opacity: 1 })
];
const SCALE_IN = {
    [ANIMATIONS$1.SCALE_IN_CENTER]: SCALE_IN_CENTER,
    [ANIMATIONS$1.SCALE_IN_TOP]: SCALE_IN_TOP,
    [ANIMATIONS$1.SCALE_IN_TR]: SCALE_IN_TR,
    [ANIMATIONS$1.SCALE_IN_RIGHT]: SCALE_IN_RIGHT,
    [ANIMATIONS$1.SCALE_IN_BR]: SCALE_IN_BR,
    [ANIMATIONS$1.SCALE_IN_BOTTOM]: SCALE_IN_BOTTOM,
    [ANIMATIONS$1.SCALE_IN_BL]: SCALE_IN_BL,
    [ANIMATIONS$1.SCALE_IN_LEFT]: SCALE_IN_LEFT,
    [ANIMATIONS$1.SCALE_IN_TL]: SCALE_IN_TL,
    [ANIMATIONS$1.SCALE_IN_HOR_CENTER]: SCALE_IN_HOR_CENTER,
    [ANIMATIONS$1.SCALE_IN_HOR_LEFT]: SCALE_IN_HOR_LEFT,
    [ANIMATIONS$1.SCALE_IN_HOR_RIGHT]: SCALE_IN_HOR_RIGHT,
    [ANIMATIONS$1.SCALE_IN_VER_CENTER]: SCALE_IN_VER_CENTER,
    [ANIMATIONS$1.SCALE_IN_VER_TOP]: SCALE_IN_VER_TOP,
    [ANIMATIONS$1.SCALE_IN_VER_BOTTOM]: SCALE_IN_VER_BOTTOM
};

const ROTATE_IN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const ROTATE_IN_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', opacity: 1 })
];
const ROTATE_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'top', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top', opacity: 1 })
];
const ROTATE_IN_TR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'top right', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top right', opacity: 1 })
];
const ROTATE_IN_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'right', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'right', opacity: 1 })
];
const ROTATE_IN_BR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'bottom right', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'bottom right', opacity: 1 })
];
const ROTATE_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'bottom', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'bottom', opacity: 1 })
];
const ROTATE_IN_BL = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'bottom left', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'bottom left', opacity: 1 })
];
const ROTATE_IN_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'left', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'left', opacity: 1 })
];
const ROTATE_IN_TL = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', transformOrigin: 'top left', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', transformOrigin: 'top left', opacity: 1 })
];
const ROTATE_IN_HOR = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(360deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', opacity: 1 })
];
const ROTATE_IN_VER = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate(-360deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate(0)', opacity: 1 })
];
const ROTATE_IN_DIAG_1 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, -360deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', opacity: 1 })
];
const ROTATE_IN_DIAG_2 = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_DEFAULT), { transform: 'rotate3d(-1, 1, 0, -360deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 0deg)', opacity: 1 })
];
const ROTATE_IN$1 = {
    [ANIMATIONS$1.ROTATE_IN_CENTER]: ROTATE_IN_CENTER,
    [ANIMATIONS$1.ROTATE_IN_TOP]: ROTATE_IN_TOP,
    [ANIMATIONS$1.ROTATE_IN_TR]: ROTATE_IN_TR,
    [ANIMATIONS$1.ROTATE_IN_RIGHT]: ROTATE_IN_RIGHT,
    [ANIMATIONS$1.ROTATE_IN_BR]: ROTATE_IN_BR,
    [ANIMATIONS$1.ROTATE_IN_BOTTOM]: ROTATE_IN_BOTTOM,
    [ANIMATIONS$1.ROTATE_IN_BL]: ROTATE_IN_BL,
    [ANIMATIONS$1.ROTATE_IN_LEFT]: ROTATE_IN_LEFT,
    [ANIMATIONS$1.ROTATE_IN_TL]: ROTATE_IN_TL,
    [ANIMATIONS$1.ROTATE_IN_HOR]: ROTATE_IN_HOR,
    [ANIMATIONS$1.ROTATE_IN_VER]: ROTATE_IN_VER,
    [ANIMATIONS$1.ROTATE_IN_DIAG_1]: ROTATE_IN_DIAG_1,
    [ANIMATIONS$1.ROTATE_IN_DIAG_2]: ROTATE_IN_DIAG_2
};

const ROTATE_IN_2_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const ROTATE_IN_2_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(-45deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', opacity: 1 })
];
const ROTATE_IN_2_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(45deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', opacity: 1 })
];
const ROTATE_IN_2_FWD_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(-200px) rotate(-45deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(0) rotate(0)', opacity: 1 })
];
const ROTATE_IN_2_FWD_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(-200px) rotate(45deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(0) rotate(0)', opacity: 1 })
];
const ROTATE_IN_2_BCK_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(200px) rotate(-45deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(0) rotate(0)', opacity: 1 })
];
const ROTATE_IN_2_BCK_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(200px) rotate(45deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'translateZ(0) rotate(0)', opacity: 1 })
];
const ROTATE_IN_2_TR_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(-45deg)', transformOrigin: '100% 0%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '100% 0%', opacity: 1 })
];
const ROTATE_IN_2_TR_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(45deg)', transformOrigin: '100% 0%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '100% 0%', opacity: 1 })
];
const ROTATE_IN_2_BR_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(-45deg)', transformOrigin: '100% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '100% 100%', opacity: 1 })
];
const ROTATE_IN_2_BR_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(45deg)', transformOrigin: '100% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '100% 100%', opacity: 1 })
];
const ROTATE_IN_2_BL_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(-45deg)', transformOrigin: '0 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0 100%', opacity: 1 })
];
const ROTATE_IN_2_BL_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(45deg)', transformOrigin: '0 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0 100%', opacity: 1 })
];
const ROTATE_IN_2_TL_CW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(-45deg)', transformOrigin: '0 0', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0 0', opacity: 1 })
];
const ROTATE_IN_2_TL_CCW = [
    Object.assign(Object.assign({ offset: 0 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROTATE_IN_2_DEFAULT), { transform: 'rotate(0)', transformOrigin: '0 0', opacity: 1 })
];
const ROTATE_IN_2 = {
    [ANIMATIONS$1.ROTATE_IN_2_CW]: ROTATE_IN_2_CW,
    [ANIMATIONS$1.ROTATE_IN_2_CCW]: ROTATE_IN_2_CCW,
    [ANIMATIONS$1.ROTATE_IN_2_FWD_CW]: ROTATE_IN_2_FWD_CW,
    [ANIMATIONS$1.ROTATE_IN_2_FWD_CCW]: ROTATE_IN_2_FWD_CCW,
    [ANIMATIONS$1.ROTATE_IN_2_BCK_CW]: ROTATE_IN_2_BCK_CW,
    [ANIMATIONS$1.ROTATE_IN_2_BCK_CCW]: ROTATE_IN_2_BCK_CCW,
    [ANIMATIONS$1.ROTATE_IN_2_TR_CW]: ROTATE_IN_2_TR_CW,
    [ANIMATIONS$1.ROTATE_IN_2_TR_CCW]: ROTATE_IN_2_TR_CCW,
    [ANIMATIONS$1.ROTATE_IN_2_BR_CW]: ROTATE_IN_2_BR_CW,
    [ANIMATIONS$1.ROTATE_IN_2_BR_CCW]: ROTATE_IN_2_BR_CCW,
    [ANIMATIONS$1.ROTATE_IN_2_BL_CW]: ROTATE_IN_2_BL_CW,
    [ANIMATIONS$1.ROTATE_IN_2_BL_CCW]: ROTATE_IN_2_BL_CCW,
    [ANIMATIONS$1.ROTATE_IN_2_TL_CW]: ROTATE_IN_2_TL_CW,
    [ANIMATIONS$1.ROTATE_IN_2_TL_CCW]: ROTATE_IN_2_TL_CCW
};

const SWIRL_IN_DEFAULT = {
    easing: 'ease-out',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const SWIRL_IN_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', opacity: 1 })
];
const SWIRL_IN_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', opacity: 1 })
];
const SWIRL_IN_TOP_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '50% 0', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '50% 0', opacity: 1 })
];
const SWIRL_IN_TOP_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '50% 0', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '50% 0', opacity: 1 })
];
const SWIRL_IN_TR_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '100% 0%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '100% 0%', opacity: 1 })
];
const SWIRL_IN_TR_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '100% 0%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '100% 0%', opacity: 1 })
];
const SWIRL_IN_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '100% 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '100% 50%', opacity: 1 })
];
const SWIRL_IN_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '100% 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '100% 50%', opacity: 1 })
];
const SWIRL_IN_BR_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '100% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '100% 100%', opacity: 1 })
];
const SWIRL_IN_BR_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '100% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '100% 100%', opacity: 1 })
];
const SWIRL_IN_BOTTOM_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '50% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '50% 100%', opacity: 1 })
];
const SWIRL_IN_BOTTOM_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '50% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '50% 100%', opacity: 1 })
];
const SWIRL_IN_BL_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '0% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '0% 100%', opacity: 1 })
];
const SWIRL_IN_BL_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '0% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '0% 100%', opacity: 1 })
];
const SWIRL_IN_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '0 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '0 50%', opacity: 1 })
];
const SWIRL_IN_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '0 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '0 50%', opacity: 1 })
];
const SWIRL_IN_TL_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(-540deg) scale(0)', transformOrigin: '0 0', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '0 0', opacity: 1 })
];
const SWIRL_IN_TL_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWIRL_IN_DEFAULT), { transform: 'rotate(540deg) scale(5)', transformOrigin: '0 0', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWIRL_IN_DEFAULT), { transform: 'rotate(0) scale(1)', transformOrigin: '0 0', opacity: 1 })
];
const SWIRL_IN = {
    [ANIMATIONS$1.SWIRL_IN_FWD]: SWIRL_IN_FWD,
    [ANIMATIONS$1.SWIRL_IN_BCK]: SWIRL_IN_BCK,
    [ANIMATIONS$1.SWIRL_IN_TOP_FWD]: SWIRL_IN_TOP_FWD,
    [ANIMATIONS$1.SWIRL_IN_TOP_BCK]: SWIRL_IN_TOP_BCK,
    [ANIMATIONS$1.SWIRL_IN_TR_FWD]: SWIRL_IN_TR_FWD,
    [ANIMATIONS$1.SWIRL_IN_TR_BCK]: SWIRL_IN_TR_BCK,
    [ANIMATIONS$1.SWIRL_IN_RIGHT_FWD]: SWIRL_IN_RIGHT_FWD,
    [ANIMATIONS$1.SWIRL_IN_RIGHT_BCK]: SWIRL_IN_RIGHT_BCK,
    [ANIMATIONS$1.SWIRL_IN_BR_FWD]: SWIRL_IN_BR_FWD,
    [ANIMATIONS$1.SWIRL_IN_BR_BCK]: SWIRL_IN_BR_BCK,
    [ANIMATIONS$1.SWIRL_IN_BOTTOM_FWD]: SWIRL_IN_BOTTOM_FWD,
    [ANIMATIONS$1.SWIRL_IN_BOTTOM_BCK]: SWIRL_IN_BOTTOM_BCK,
    [ANIMATIONS$1.SWIRL_IN_BL_FWD]: SWIRL_IN_BL_FWD,
    [ANIMATIONS$1.SWIRL_IN_BL_BCK]: SWIRL_IN_BL_BCK,
    [ANIMATIONS$1.SWIRL_IN_LEFT_FWD]: SWIRL_IN_LEFT_FWD,
    [ANIMATIONS$1.SWIRL_IN_LEFT_BCK]: SWIRL_IN_LEFT_BCK,
    [ANIMATIONS$1.SWIRL_IN_TL_FWD]: SWIRL_IN_TL_FWD,
    [ANIMATIONS$1.SWIRL_IN_TL_BCK]: SWIRL_IN_TL_BCK
};

const FLIP_IN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const FLIP_IN_HOR_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotateX(80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotateX(0)', opacity: 1 })
];
const FLIP_IN_HOR_TOP = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotateX(-80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotateX(0)', opacity: 1 })
];
const FLIP_IN_VER_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotateY(-80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotateY(0)', opacity: 1 })
];
const FLIP_IN_VER_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotateY(80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotateY(0)', opacity: 1 })
];
const FLIP_IN_DIAG_1_TR = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, -80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', opacity: 1 })
];
const FLIP_IN_DIAG_1_BL = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, 80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', opacity: 1 })
];
const FLIP_IN_DIAG_2_TL = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(-1, 1, 0, 80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', opacity: 1 })
];
const FLIP_IN_DIAG_2_BR = [
    Object.assign(Object.assign({ offset: 0 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(-1, 1, 0, -80deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FLIP_IN_DEFAULT), { transform: 'rotate3d(1, 1, 0, 0deg)', opacity: 1 })
];
const FLIP_IN = {
    [ANIMATIONS$1.FLIP_IN_HOR_BOTTOM]: FLIP_IN_HOR_BOTTOM,
    [ANIMATIONS$1.FLIP_IN_HOR_TOP]: FLIP_IN_HOR_TOP,
    [ANIMATIONS$1.FLIP_IN_VER_RIGHT]: FLIP_IN_VER_RIGHT,
    [ANIMATIONS$1.FLIP_IN_VER_LEFT]: FLIP_IN_VER_LEFT,
    [ANIMATIONS$1.FLIP_IN_DIAG_1_TR]: FLIP_IN_DIAG_1_TR,
    [ANIMATIONS$1.FLIP_IN_DIAG_1_BL]: FLIP_IN_DIAG_1_BL,
    [ANIMATIONS$1.FLIP_IN_DIAG_2_TL]: FLIP_IN_DIAG_2_TL,
    [ANIMATIONS$1.FLIP_IN_DIAG_2_BR]: FLIP_IN_DIAG_2_BR
};

const SLIT_IN_DEFAULT = {
    easing: 'ease-out',
    fillMode: 'both',
    transformOrigin: 'center center'
};
const SLIT_IN_VERTICAL = [
    Object.assign(Object.assign({ offset: 0 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-800px) rotateY(90deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.54 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-160px) rotateY(87deg)', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SLIT_IN_DEFAULT), { transform: 'translateZ(0) rotateY(0)', opacity: 1 })
];
const SLIT_IN_HORIZONTAL = [
    Object.assign(Object.assign({ offset: 0 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-800px) rotateX(90deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.54 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-160px) rotateX(87deg)', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SLIT_IN_DEFAULT), { transform: 'translateZ(0) rotateX(0)', opacity: 1 })
];
const SLIT_IN_DIAGONAL_1 = [
    Object.assign(Object.assign({ offset: 0 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-800px) rotate3d(1, 1, 0, 90deg)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.54 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-160px) rotate3d(1, 1, 0, 87deg)', easing: 'ease-in-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SLIT_IN_DEFAULT), { transform: 'translateZ(0) rotate3d(1, 1, 0, 0)', easing: 'ease-out', opacity: 1 })
];
const SLIT_IN_DIAGONAL_2 = [
    Object.assign(Object.assign({ offset: 0 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-800px) rotate3d(-1, 1, 0, -90deg)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.54 }, SLIT_IN_DEFAULT), { transform: 'translateZ(-160px) rotate3d(-1, 1, 0, -87deg)', easing: 'ease-in-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, SLIT_IN_DEFAULT), { transform: 'translateZ(0) rotate3d(-1, 1, 0, 0)', easing: 'ease-out', opacity: 1 })
];
const SLIT_IN = {
    [ANIMATIONS$1.SLIT_IN_VERTICAL]: SLIT_IN_VERTICAL,
    [ANIMATIONS$1.SLIT_IN_HORIZONTAL]: SLIT_IN_HORIZONTAL,
    [ANIMATIONS$1.SLIT_IN_DIAGONAL_1]: SLIT_IN_DIAGONAL_1,
    [ANIMATIONS$1.SLIT_IN_DIAGONAL_2]: SLIT_IN_DIAGONAL_2
};

const SLIDE_IN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
};
const SLIDE_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateY(-100vh)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateY(0)', opacity: 1 })
];
const SLIDE_IN_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateY(-100vh) translateX(100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_RIGHT$1 = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateX(100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateX(0)', opacity: 1 })
];
const SLIDE_IN_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateY(100vh) translateX(100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateY(100vh)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateY(0)', opacity: 1 })
];
const SLIDE_IN_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateY(100vh) translateX(-100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_LEFT$1 = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateX(-100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateX(0)', opacity: 1 })
];
const SLIDE_IN_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_DEFAULT), { transform: 'translateY(-100vh) translateX(-100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_DEFAULT), { transform: 'translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN = {
    [ANIMATIONS$1.SLIDE_IN_TOP]: SLIDE_IN_TOP,
    [ANIMATIONS$1.SLIDE_IN_TR]: SLIDE_IN_TR,
    [ANIMATIONS$1.SLIDE_IN_RIGHT]: SLIDE_IN_RIGHT$1,
    [ANIMATIONS$1.SLIDE_IN_BR]: SLIDE_IN_BR,
    [ANIMATIONS$1.SLIDE_IN_BOTTOM]: SLIDE_IN_BOTTOM,
    [ANIMATIONS$1.SLIDE_IN_BL]: SLIDE_IN_BL,
    [ANIMATIONS$1.SLIDE_IN_LEFT]: SLIDE_IN_LEFT$1,
    [ANIMATIONS$1.SLIDE_IN_TL]: SLIDE_IN_TL
};

const SLIDE_IN_FWD_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
};
const SLIDE_IN_FWD_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0)', opacity: 1 })
];
const SLIDE_IN_FWD_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateY(-100vh)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const SLIDE_IN_FWD_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateY(-100vh) translateX(100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_FWD_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateX(100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_FWD_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateY(100vh) translateX(100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_FWD_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateY(100vh)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const SLIDE_IN_FWD_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateY(100vh) translateX(-100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_FWD_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateX(-100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_FWD_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(-1400px) translateY(-100vh) translateX(-100vw)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_FWD_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_FWD = {
    [ANIMATIONS$1.SLIDE_IN_FWD_CENTER]: SLIDE_IN_FWD_CENTER,
    [ANIMATIONS$1.SLIDE_IN_FWD_TOP]: SLIDE_IN_FWD_TOP,
    [ANIMATIONS$1.SLIDE_IN_FWD_TR]: SLIDE_IN_FWD_TR,
    [ANIMATIONS$1.SLIDE_IN_FWD_RIGHT]: SLIDE_IN_FWD_RIGHT,
    [ANIMATIONS$1.SLIDE_IN_FWD_BR]: SLIDE_IN_FWD_BR,
    [ANIMATIONS$1.SLIDE_IN_FWD_BOTTOM]: SLIDE_IN_FWD_BOTTOM,
    [ANIMATIONS$1.SLIDE_IN_FWD_BL]: SLIDE_IN_FWD_BL,
    [ANIMATIONS$1.SLIDE_IN_FWD_LEFT]: SLIDE_IN_FWD_LEFT,
    [ANIMATIONS$1.SLIDE_IN_FWD_TL]: SLIDE_IN_FWD_TL
};

const SLIDE_IN_BCK_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
};
const SLIDE_IN_BCK_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(600px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0)', opacity: 1 })
];
const SLIDE_IN_BCK_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateY(-300px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const SLIDE_IN_BCK_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateY(-300px) translateX(400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BCK_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateX(400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BCK_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateY(300px) translateX(400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BCK_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateY(300px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const SLIDE_IN_BCK_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateY(300px) translateX(-400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BCK_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateX(-400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BCK_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(700px) translateY(-300px) translateX(-400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BCK_DEFAULT), { transform: 'translateZ(0) translateY(0) translateX(0)', opacity: 1 })
];
const SLIDE_IN_BCK = {
    [ANIMATIONS$1.SLIDE_IN_BCK_CENTER]: SLIDE_IN_BCK_CENTER,
    [ANIMATIONS$1.SLIDE_IN_BCK_TOP]: SLIDE_IN_BCK_TOP,
    [ANIMATIONS$1.SLIDE_IN_BCK_TR]: SLIDE_IN_BCK_TR,
    [ANIMATIONS$1.SLIDE_IN_BCK_RIGHT]: SLIDE_IN_BCK_RIGHT,
    [ANIMATIONS$1.SLIDE_IN_BCK_BR]: SLIDE_IN_BCK_BR,
    [ANIMATIONS$1.SLIDE_IN_BCK_BOTTOM]: SLIDE_IN_BCK_BOTTOM,
    [ANIMATIONS$1.SLIDE_IN_BCK_BL]: SLIDE_IN_BCK_BL,
    [ANIMATIONS$1.SLIDE_IN_BCK_LEFT]: SLIDE_IN_BCK_LEFT,
    [ANIMATIONS$1.SLIDE_IN_BCK_TL]: SLIDE_IN_BCK_TL
};

const SLIDE_IN_BLURRED_DEFAULT = {
    easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    fillMode: 'both',
};
const SLIDE_IN_BLURRED_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateY(-100vh) scaleY(2.5) scaleX(0.2)', transformOrigin: '50% 0%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateY(0) scaleY(1) scaleX(1)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_TR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(100vw, -100vh) skew(-80deg, -10deg)', transformOrigin: '0% 0%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(0, 0) skew(0deg, 0deg)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateX(100vw) scaleX(2.5) scaleY(0.2)', transformOrigin: '0% 50%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateX(0) scaleY(1) scaleX(1)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_BR = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(100vw, 100vh) skew(80deg, 10deg)', transformOrigin: '0% 100%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(0, 0) skew(0deg, 0deg)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateY(100vh) scaleY(2.5) scaleX(0.2)', transformOrigin: '50% 100%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateY(0) scaleY(1) scaleX(1)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_BL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(-100vw, 100vh) skew(-80deg, -10deg)', transformOrigin: '100% 100%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(0, 0) skew(0deg, 0deg)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateX(-100vw) scaleX(2.5) scaleY(0.2)', transformOrigin: '100% 50%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translateX(0) scaleY(1) scaleX(1)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED_TL = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(-100vw, -100vh) skew(80deg, 10deg)', transformOrigin: '100% 0%', filter: 'blur(40px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_BLURRED_DEFAULT), { transform: 'translate(0, 0) skew(0deg, 0deg)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: 1 })
];
const SLIDE_IN_BLURRED = {
    [ANIMATIONS$1.SLIDE_IN_BLURRED_TOP]: SLIDE_IN_BLURRED_TOP,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_TR]: SLIDE_IN_BLURRED_TR,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_RIGHT]: SLIDE_IN_BLURRED_RIGHT,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_BR]: SLIDE_IN_BLURRED_BR,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_BOTTOM]: SLIDE_IN_BLURRED_BOTTOM,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_BL]: SLIDE_IN_BLURRED_BL,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_LEFT]: SLIDE_IN_BLURRED_LEFT,
    [ANIMATIONS$1.SLIDE_IN_BLURRED_TL]: SLIDE_IN_BLURRED_TL
};

const SLIDE_IN_ELLIPTIC_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
};
const SLIDE_IN_ELLIPTIC_TOP_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(-600px) rotateX(-30deg) scale(0)', transformOrigin: '50% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(0) rotateX(0) scale(1)', transformOrigin: '50% 100vh', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_TOP_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(-600px) rotateX(30deg) scale(6.5)', transformOrigin: '50% 200%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(0) rotateX(0) scale(1)', transformOrigin: '50% -500px', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(800px) rotateY(-30deg) scale(0)', transformOrigin: '100% 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(0) rotateY(0) scale(1)', transformOrigin: '-100vw 50%', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(800px) rotateY(30deg) scale(6.5)', transformOrigin: '-100% 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(0) rotateY(0) scale(1)', transformOrigin: '600px 50%', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_BOTTOM_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(600px) rotateX(30deg) scale(0)', transformOrigin: '50% 100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(0) rotateX(0) scale(1)', transformOrigin: '50% -100vh', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_BOTTOM_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(600px) rotateX(-30deg) scale(6.5)', transformOrigin: '50% -100%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateY(0) rotateX(0) scale(1)', transformOrigin: '50% 500px', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(-800px) rotateY(30deg) scale(0)', transformOrigin: '-100% 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(0) rotateY(0) scale(1)', transformOrigin: '100vw 50%', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(-800px) rotateY(-30deg) scale(6.5)', transformOrigin: '200% 50%', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SLIDE_IN_ELLIPTIC_DEFAULT), { transform: 'translateX(0) rotateY(0) scale(1)', transformOrigin: '-600px 50%', opacity: 1 })
];
const SLIDE_IN_ELLIPTIC = {
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_TOP_FWD]: SLIDE_IN_ELLIPTIC_TOP_FWD,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_TOP_BCK]: SLIDE_IN_ELLIPTIC_TOP_BCK,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_RIGHT_FWD]: SLIDE_IN_ELLIPTIC_RIGHT_FWD,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_RIGHT_BCK]: SLIDE_IN_ELLIPTIC_RIGHT_BCK,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_BOTTOM_FWD]: SLIDE_IN_ELLIPTIC_BOTTOM_FWD,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_BOTTOM_BCK]: SLIDE_IN_ELLIPTIC_BOTTOM_BCK,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_LEFT_FWD]: SLIDE_IN_ELLIPTIC_LEFT_FWD,
    [ANIMATIONS$1.SLIDE_IN_ELLIPTIC_LEFT_BCK]: SLIDE_IN_ELLIPTIC_LEFT_BCK
};

const BOUNCE_IN_DEFAULT = {
    fillMode: 'both'
};
const BOUNCE_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(-500px)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.38 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(-65px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.72 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.81 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(-28px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.9 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.95 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(-8px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_IN_RIGHT$1 = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(600px)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.38 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(68px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.72 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.81 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(32px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.9 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.95 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(8px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(500px)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.38 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(65px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.72 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.81 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(28px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.9 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.95 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(8px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_IN_DEFAULT), { transform: 'translateY(0)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_IN_LEFT$1 = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(-600px)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.38 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(-68px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.72 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.81 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(-28px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.9 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.95 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(-8px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_IN_DEFAULT), { transform: 'translateX(0)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_IN_FWD = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_IN_DEFAULT), { transform: 'scale(0)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.38 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_IN_DEFAULT), { transform: 'scale(0.7)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.72 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.81 }, BOUNCE_IN_DEFAULT), { transform: 'scale(0.84)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.89 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.95 }, BOUNCE_IN_DEFAULT), { transform: 'scale(0.95)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_IN_BCK = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_IN_DEFAULT), { transform: 'scale(7)', easing: 'ease-in', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.38 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1.5)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.72 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.81 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1.24)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.89 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.95 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1.04)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_IN_DEFAULT), { transform: 'scale(1)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_IN$1 = {
    [ANIMATIONS$1.BOUNCE_IN_TOP]: BOUNCE_IN_TOP,
    [ANIMATIONS$1.BOUNCE_IN_RIGHT]: BOUNCE_IN_RIGHT$1,
    [ANIMATIONS$1.BOUNCE_IN_BOTTOM]: BOUNCE_IN_BOTTOM,
    [ANIMATIONS$1.BOUNCE_IN_LEFT]: BOUNCE_IN_LEFT$1,
    [ANIMATIONS$1.BOUNCE_IN_FWD]: BOUNCE_IN_FWD,
    [ANIMATIONS$1.BOUNCE_IN_BCK]: BOUNCE_IN_BCK
};

const ROLL_IN_DEFAULT = {
    easing: 'ease-out',
    fillMode: 'both'
};
const ROLL_IN_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_DEFAULT), { transform: 'translateX(-800px) rotate(-540deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_DEFAULT), { transform: 'translateX(0) rotate(0deg)', opacity: 1 })
];
const ROLL_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_DEFAULT), { transform: 'translateY(-800px) rotate(-540deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_DEFAULT), { transform: 'translateY(0) rotate(0deg)', opacity: 1 })
];
const ROLL_IN_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_DEFAULT), { transform: 'translateX(800px) rotate(540deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_DEFAULT), { transform: 'translateX(0) rotate(0deg)', opacity: 1 })
];
const ROLL_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_DEFAULT), { transform: 'translateY(800px) rotate(540deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_DEFAULT), { transform: 'translateY(0) rotate(0deg)', opacity: 1 })
];
const ROLL_IN$1 = {
    [ANIMATIONS$1.ROLL_IN_LEFT]: ROLL_IN_LEFT,
    [ANIMATIONS$1.ROLL_IN_TOP]: ROLL_IN_TOP,
    [ANIMATIONS$1.ROLL_IN_RIGHT]: ROLL_IN_RIGHT,
    [ANIMATIONS$1.ROLL_IN_BOTTOM]: ROLL_IN_BOTTOM
};

const ROLL_IN_BLURRED_DEFAULT = {
    easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    fillMode: 'both'
};
const ROLL_IN_BLURRED_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateX(-100vw) rotate(-540deg)', filter: 'blur(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateX(0) rotate(0deg)', filter: 'blur(0)', opacity: 1 })
];
const ROLL_IN_BLURRED_TOP = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateY(-100vh) rotate(-720deg)', filter: 'blur(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateY(0) rotate(0deg)', filter: 'blur(0)', opacity: 1 })
];
const ROLL_IN_BLURRED_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateX(100vw) rotate(720deg)', filter: 'blur(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateX(0) rotate(0deg)', filter: 'blur(0)', opacity: 1 })
];
const ROLL_IN_BLURRED_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateY(800px) rotate(720deg)', filter: 'blur(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, ROLL_IN_BLURRED_DEFAULT), { transform: 'translateY(0) rotate(0deg)', filter: 'blur(0)', opacity: 1 })
];
const ROLL_IN_BLURRED = {
    [ANIMATIONS$1.ROLL_IN_BLURRED_LEFT]: ROLL_IN_BLURRED_LEFT,
    [ANIMATIONS$1.ROLL_IN_BLURRED_TOP]: ROLL_IN_BLURRED_TOP,
    [ANIMATIONS$1.ROLL_IN_BLURRED_RIGHT]: ROLL_IN_BLURRED_RIGHT,
    [ANIMATIONS$1.ROLL_IN_BLURRED_BOTTOM]: ROLL_IN_BLURRED_BOTTOM
};

const TILT_IN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const TILT_IN_TOP_1 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(30deg) translateY(-300px) skewY(-30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0deg) translateY(0) skewY(0deg)', opacity: 1 })
];
const TILT_IN_TOP_2 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(-30deg) translateY(-300px) skewY(30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0deg) translateY(0) skewY(0deg)', opacity: 1 })
];
const TILT_IN_TR = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(-35deg) rotateX(20deg) translate(250px, -250px) skew(-12deg, -15deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_RIGHT_1 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateX(-30deg) translateX(300px) skewX(30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateX(0deg) translateX(0) skewX(0deg)', opacity: 1 })
];
const TILT_IN_RIGHT_2 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateX(30deg) translateX(300px) skewX(-30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateX(0deg) translateX(0) skewX(0deg)', opacity: 1 })
];
const TILT_IN_BR = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(-35deg) rotateX(-20deg) translate(250px, 250px) skew(12deg, 15deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_BOTTOM_1 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(30deg) translateY(300px) skewY(-30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0deg) translateY(0) skewY(0deg)', opacity: 1 })
];
const TILT_IN_BOTTOM_2 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(-30deg) translateY(300px) skewY(30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0deg) translateY(0) skewY(0deg)', opacity: 1 })
];
const TILT_IN_BL = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(35deg) rotateX(-20deg) translate(-250px, 250px) skew(-12deg, -15deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_LEFT_1 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateX(-30deg) translateX(-300px) skewX(-30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateX(0deg) translateX(0) skewX(0deg)', opacity: 1 })
];
const TILT_IN_LEFT_2 = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateX(30deg) translateX(-300px) skewX(30deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateX(0deg) translateX(0) skewX(0deg)', opacity: 1 })
];
const TILT_IN_TL = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_DEFAULT), { transform: 'rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN = {
    [ANIMATIONS$1.TILT_IN_TOP_1]: TILT_IN_TOP_1,
    [ANIMATIONS$1.TILT_IN_TOP_2]: TILT_IN_TOP_2,
    [ANIMATIONS$1.TILT_IN_TR]: TILT_IN_TR,
    [ANIMATIONS$1.TILT_IN_RIGHT_1]: TILT_IN_RIGHT_1,
    [ANIMATIONS$1.TILT_IN_RIGHT_2]: TILT_IN_RIGHT_2,
    [ANIMATIONS$1.TILT_IN_BR]: TILT_IN_BR,
    [ANIMATIONS$1.TILT_IN_BOTTOM_1]: TILT_IN_BOTTOM_1,
    [ANIMATIONS$1.TILT_IN_BOTTOM_2]: TILT_IN_BOTTOM_2,
    [ANIMATIONS$1.TILT_IN_BL]: TILT_IN_BL,
    [ANIMATIONS$1.TILT_IN_LEFT_1]: TILT_IN_LEFT_1,
    [ANIMATIONS$1.TILT_IN_LEFT_2]: TILT_IN_LEFT_2,
    [ANIMATIONS$1.TILT_IN_TL]: TILT_IN_TL
};

const TILT_IN_FWD_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const TILT_IN_FWD_TR = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_FWD_BR = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(20deg) rotateX(-35deg) translate(300px, 300px) skew(35deg, -10deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_FWD_BL = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_FWD_TL = [
    Object.assign(Object.assign({ offset: 0 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, TILT_IN_FWD_DEFAULT), { transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: 1 })
];
const TILT_IN_FWD = {
    [ANIMATIONS$1.TILT_IN_FWD_TR]: TILT_IN_FWD_TR,
    [ANIMATIONS$1.TILT_IN_FWD_BR]: TILT_IN_FWD_BR,
    [ANIMATIONS$1.TILT_IN_FWD_BL]: TILT_IN_FWD_BL,
    [ANIMATIONS$1.TILT_IN_FWD_TL]: TILT_IN_FWD_TL
};

const SWING_IN_DEFAULT = {
    easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    fillMode: 'both'
};
const SWING_IN_TOP_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateX(-100deg)', transformOrigin: 'top', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateX(0deg)', transformOrigin: 'top', opacity: 1 })
];
const SWING_IN_TOP_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateX(70deg)', transformOrigin: 'top', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateX(0deg)', transformOrigin: 'top', opacity: 1 })
];
const SWING_IN_RIGHT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateY(-100deg)', transformOrigin: 'right', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'right', opacity: 1 })
];
const SWING_IN_RIGHT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateY(70deg)', transformOrigin: 'right', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'right', opacity: 1 })
];
const SWING_IN_BOTTOM_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateX(100deg)', transformOrigin: 'bottom', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateX(0)', transformOrigin: 'bottom', opacity: 1 })
];
const SWING_IN_BOTTOM_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateX(-70deg)', transformOrigin: 'bottom', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateX(0)', transformOrigin: 'bottom', opacity: 1 })
];
const SWING_IN_LEFT_FWD = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateY(100deg)', transformOrigin: 'left', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'left', opacity: 1 })
];
const SWING_IN_LEFT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, SWING_IN_DEFAULT), { transform: 'rotateY(-70deg)', transformOrigin: 'left', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, SWING_IN_DEFAULT), { transform: 'rotateY(0)', transformOrigin: 'left', opacity: 1 })
];
const SWING_IN = {
    [ANIMATIONS$1.SWING_IN_TOP_FWD]: SWING_IN_TOP_FWD,
    [ANIMATIONS$1.SWING_IN_TOP_BCK]: SWING_IN_TOP_BCK,
    [ANIMATIONS$1.SWING_IN_RIGHT_FWD]: SWING_IN_RIGHT_FWD,
    [ANIMATIONS$1.SWING_IN_RIGHT_BCK]: SWING_IN_RIGHT_BCK,
    [ANIMATIONS$1.SWING_IN_BOTTOM_FWD]: SWING_IN_BOTTOM_FWD,
    [ANIMATIONS$1.SWING_IN_BOTTOM_BCK]: SWING_IN_BOTTOM_BCK,
    [ANIMATIONS$1.SWING_IN_LEFT_FWD]: SWING_IN_LEFT_FWD,
    [ANIMATIONS$1.SWING_IN_LEFT_BCK]: SWING_IN_LEFT_BCK
};

const FADE_IN_DEFAULT = {
    easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    fillMode: 'both'
};
const FADE_IN_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateZ(-80px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateZ(0)', opacity: 1 })
];
const FADE_IN_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateZ(80px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateZ(0)', opacity: 1 })
];
const FADE_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateY(-50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateY(0)', opacity: 1 })
];
const FADE_IN_TR = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateX(50px) translateY(-50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateX(0) translateY(0)', opacity: 1 })
];
const FADE_IN_RIGHT$1 = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateX(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateX(0)', opacity: 1 })
];
const FADE_IN_BR = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateX(50px) translateY(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateX(0) translateY(0)', opacity: 1 })
];
const FADE_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateY(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateY(0)', opacity: 1 })
];
const FADE_IN_BL = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateX(-50px) translateY(50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateX(0) translateY(0)', opacity: 1 })
];
const FADE_IN_LEFT$1 = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateX(-50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateX(0)', opacity: 1 })
];
const FADE_IN_TL = [
    Object.assign(Object.assign({ offset: 0 }, FADE_IN_DEFAULT), { transform: 'translateX(-50px) translateY(-50px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FADE_IN_DEFAULT), { transform: 'translateX(0) translateY(0)', opacity: 1 })
];
const FADE_IN$1 = {
    [ANIMATIONS$1.FADE_IN_FWD]: FADE_IN_FWD,
    [ANIMATIONS$1.FADE_IN_BCK]: FADE_IN_BCK,
    [ANIMATIONS$1.FADE_IN_TOP]: FADE_IN_TOP,
    [ANIMATIONS$1.FADE_IN_TR]: FADE_IN_TR,
    [ANIMATIONS$1.FADE_IN_RIGHT]: FADE_IN_RIGHT$1,
    [ANIMATIONS$1.FADE_IN_BR]: FADE_IN_BR,
    [ANIMATIONS$1.FADE_IN_BOTTOM]: FADE_IN_BOTTOM,
    [ANIMATIONS$1.FADE_IN_BL]: FADE_IN_BL,
    [ANIMATIONS$1.FADE_IN_LEFT]: FADE_IN_LEFT$1,
    [ANIMATIONS$1.FADE_IN_TL]: FADE_IN_TL
};

const PUFF_IN_DEFAULT = {
    easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    fillMode: 'both'
};
const PUFF_IN_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '50% 0%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 0%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_TR = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '100% 0%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 0%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '100% 50%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 50%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_BR = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '100% 100%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '100% 100%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '50% 100%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '50% 100%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_BL = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '0% 100%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 100%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '0% 50%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 50%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_TL = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scale(2)', transformOrigin: '0% 0%', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scale(1)', transformOrigin: '0% 0%', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_HOR = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scaleX(2)', transformOrigin: 'center center', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scaleX(1)', transformOrigin: 'center center', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN_VER = [
    Object.assign(Object.assign({ offset: 0 }, PUFF_IN_DEFAULT), { transform: 'scaleY(2)', transformOrigin: 'center center', filter: 'blur(4px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PUFF_IN_DEFAULT), { transform: 'scaleY(1)', transformOrigin: 'center center', filter: 'blur(0)', opacity: 1 })
];
const PUFF_IN = {
    [ANIMATIONS$1.PUFF_IN_CENTER]: PUFF_IN_CENTER,
    [ANIMATIONS$1.PUFF_IN_TOP]: PUFF_IN_TOP,
    [ANIMATIONS$1.PUFF_IN_TR]: PUFF_IN_TR,
    [ANIMATIONS$1.PUFF_IN_RIGHT]: PUFF_IN_RIGHT,
    [ANIMATIONS$1.PUFF_IN_BR]: PUFF_IN_BR,
    [ANIMATIONS$1.PUFF_IN_BOTTOM]: PUFF_IN_BOTTOM,
    [ANIMATIONS$1.PUFF_IN_BL]: PUFF_IN_BL,
    [ANIMATIONS$1.PUFF_IN_LEFT]: PUFF_IN_LEFT,
    [ANIMATIONS$1.PUFF_IN_TL]: PUFF_IN_TL,
    [ANIMATIONS$1.PUFF_IN_HOR]: PUFF_IN_HOR,
    [ANIMATIONS$1.PUFF_IN_VER]: PUFF_IN_VER
};

const FLICKER_IN_DEFAULT = {
    easing: 'linear',
    fillMode: 'both'
};
const FLICKER_IN_1 = [
    Object.assign(Object.assign({ offset: 0 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.1 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.101 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.102 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.2 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.201 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.206 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.3 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.301 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.305 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.306 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.45 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.451 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.50 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.55 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.551 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.57 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.571 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.6 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.601 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.65 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.651 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.75 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.751 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.77 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.771 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.85 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.851 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.86 }, FLICKER_IN_DEFAULT), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.861 }, FLICKER_IN_DEFAULT), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, FLICKER_IN_DEFAULT), { opacity: 1 })
];
const FLICKER_IN_2 = [
    Object.assign(Object.assign({ offset: 0 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'initial' }),
    Object.assign(Object.assign({ offset: 0.1 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.101 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.102 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.2 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.201 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.25)' }),
    Object.assign(Object.assign({ offset: 0.206 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.3 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.301 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)' }),
    Object.assign(Object.assign({ offset: 0.305 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)' }),
    Object.assign(Object.assign({ offset: 0.306 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.45 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.451 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)' }),
    Object.assign(Object.assign({ offset: 0.50 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)' }),
    Object.assign(Object.assign({ offset: 0.55 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)' }),
    Object.assign(Object.assign({ offset: 0.551 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.57 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.571 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3)' }),
    Object.assign(Object.assign({ offset: 0.6 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3)' }),
    Object.assign(Object.assign({ offset: 0.601 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.65 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.651 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)' }),
    Object.assign(Object.assign({ offset: 0.75 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)' }),
    Object.assign(Object.assign({ offset: 0.751 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.77 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.771 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)' }),
    Object.assign(Object.assign({ offset: 0.85 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)' }),
    Object.assign(Object.assign({ offset: 0.851 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.86 }, FLICKER_IN_DEFAULT), { opacity: 0, boxShadow: 'none' }),
    Object.assign(Object.assign({ offset: 0.861 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)' }),
    Object.assign(Object.assign({ offset: 1 }, FLICKER_IN_DEFAULT), { opacity: 1, boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)' })
];
const FLICKER_IN = {
    [ANIMATIONS$1.FLICKER_IN_1]: FLICKER_IN_1,
    [ANIMATIONS$1.FLICKER_IN_2]: FLICKER_IN_2
};

const TRACKING_IN_DEFAULT = {
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    fillMode: 'both'
};
const TRACKING_IN_EXPAND = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '-0.5em', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 1 })
];
const TRACKING_IN_EXPAND_FWD = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '-0.5em', transform: 'translateZ(-700px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0)', opacity: 1 })
];
const TRACKING_IN_EXPAND_FWD_TOP = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '-0.5em', transform: 'translateZ(-700px) translateY(-500px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const TRACKING_IN_EXPAND_FWD_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '-0.5em', transform: 'translateZ(-700px) translateY(500px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const TRACKING_IN_CONTRACT = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '1em', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 1 })
];
const TRACKING_IN_CONTRACT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '1em', transform: 'translateZ(400px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0)', opacity: 1 })
];
const TRACKING_IN_CONTRACT_BCK_TOP = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '1em', transform: 'translateZ(400px) translateY(-300px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const TRACKING_IN_CONTRACT_BCK_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, TRACKING_IN_DEFAULT), { letterSpacing: '1em', transform: 'translateZ(400px) translateY(300px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 0.4 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', opacity: 0.6 }),
    Object.assign(Object.assign({ offset: 1 }, TRACKING_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0) translateY(0)', opacity: 1 })
];
const TRACKING_IN = {
    [ANIMATIONS$1.TRACKING_IN_EXPAND]: TRACKING_IN_EXPAND,
    [ANIMATIONS$1.TRACKING_IN_EXPAND_FWD]: TRACKING_IN_EXPAND_FWD,
    [ANIMATIONS$1.TRACKING_IN_EXPAND_FWD_TOP]: TRACKING_IN_EXPAND_FWD_TOP,
    [ANIMATIONS$1.TRACKING_IN_EXPAND_FWD_BOTTOM]: TRACKING_IN_EXPAND_FWD_BOTTOM,
    [ANIMATIONS$1.TRACKING_IN_CONTRACT]: TRACKING_IN_CONTRACT,
    [ANIMATIONS$1.TRACKING_IN_CONTRACT_BCK]: TRACKING_IN_CONTRACT_BCK,
    [ANIMATIONS$1.TRACKING_IN_CONTRACT_BCK_TOP]: TRACKING_IN_CONTRACT_BCK_TOP,
    [ANIMATIONS$1.TRACKING_IN_CONTRACT_BCK_BOTTOM]: TRACKING_IN_CONTRACT_BCK_BOTTOM
};

const FOCUS_IN_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const TEXT_FOCUS_IN = [
    { offset: 0, easing: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)', filter: 'blur(12px)', opacity: 0 },
    { offset: 1, easing: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)', filter: 'blur(0px)', opacity: 1 }
];
const FOCUS_IN_EXPAND = [
    Object.assign(Object.assign({ offset: 0 }, FOCUS_IN_DEFAULT), { letterSpacing: '-0.5em', filter: 'blur(12px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FOCUS_IN_DEFAULT), { letterSpacing: 'normal', filter: 'blur(0px)', opacity: 1 })
];
const FOCUS_IN_EXPAND_FWD = [
    Object.assign(Object.assign({ offset: 0 }, FOCUS_IN_DEFAULT), { letterSpacing: '-0.5em', transform: 'translateZ(-800px)', filter: 'blur(12px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FOCUS_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(0)', filter: 'blur(0px)', opacity: 1 })
];
const FOCUS_IN_CONTRACT = [
    Object.assign(Object.assign({ offset: 0 }, FOCUS_IN_DEFAULT), { letterSpacing: '1em', filter: 'blur(12px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FOCUS_IN_DEFAULT), { letterSpacing: 'normal', filter: 'blur(0px)', opacity: 1 })
];
const FOCUS_IN_CONTRACT_BCK = [
    Object.assign(Object.assign({ offset: 0 }, FOCUS_IN_DEFAULT), { letterSpacing: '1em', transform: 'translateZ(300px)', filter: 'blur(12px)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, FOCUS_IN_DEFAULT), { letterSpacing: 'normal', transform: 'translateZ(12px)', filter: 'blur(0px)', opacity: 1 })
];
const FOCUS_IN = {
    [ANIMATIONS$1.TEXT_FOCUS_IN]: TEXT_FOCUS_IN,
    [ANIMATIONS$1.FOCUS_IN_EXPAND]: FOCUS_IN_EXPAND,
    [ANIMATIONS$1.FOCUS_IN_EXPAND_FWD]: FOCUS_IN_EXPAND_FWD,
    [ANIMATIONS$1.FOCUS_IN_CONTRACT]: FOCUS_IN_CONTRACT,
    [ANIMATIONS$1.FOCUS_IN_CONTRACT_BCK]: FOCUS_IN_CONTRACT_BCK
};

const TEXT_SHADOW_DROP_DEFAULT = {
    fillMode: 'both'
};
const TEXT_SHADOW_DROP_CENTER = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_TOP = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 -6px 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_TR = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '6px -6px 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '6px 0 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_BR = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '6px 6px 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 6px 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_BL = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '-6px 6px 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '-6px 0 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP_TL = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '0 0 0 rgba(0, 0, 0, 0)' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_DROP_DEFAULT), { textShadow: '-6px -6px 18px rgba(0, 0, 0, 0.35)' })
];
const TEXT_SHADOW_DROP = {
    [ANIMATIONS$1.TEXT_SHADOW_DROP_CENTER]: TEXT_SHADOW_DROP_CENTER,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_TOP]: TEXT_SHADOW_DROP_TOP,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_TR]: TEXT_SHADOW_DROP_TR,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_RIGHT]: TEXT_SHADOW_DROP_RIGHT,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_BR]: TEXT_SHADOW_DROP_BR,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_BOTTOM]: TEXT_SHADOW_DROP_BOTTOM,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_BL]: TEXT_SHADOW_DROP_BL,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_LEFT]: TEXT_SHADOW_DROP_LEFT,
    [ANIMATIONS$1.TEXT_SHADOW_DROP_TL]: TEXT_SHADOW_DROP_TL
};

const TEXT_SHADOW_POP_DEFAULT = {
    fillMode: 'both'
};
const TEXT_SHADOW_POP_TOP = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateY(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateY(8px)', textShadow: '0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555, 0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555' })
];
const TEXT_SHADOW_POP_TR = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(0) translateY(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(-8px) translateY(8px)', textShadow: '1px -1px #555555, 2px -2px #555555, 3px -3px #555555, 4px -4px #555555, 5px -5px #555555, 6px -6px #555555, 7px -7px #555555, 8px -8px #555555' })
];
const TEXT_SHADOW_POP_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(-8px)', textShadow: '1px 0 #555555, 2px 0 #555555, 3px 0 #555555, 4px 0 #555555, 5px 0 #555555, 6px 0 #555555, 7px 0 #555555, 8px 0 #555555' })
];
const TEXT_SHADOW_POP_BR = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(0) translateY(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(-8px) translateY(-8px)', textShadow: '1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555' })
];
const TEXT_SHADOW_POP_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateY(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateY(-8px)', textShadow: '0 1px #555555, 0 2px #555555, 0 3px #555555, 0 4px #555555, 0 5px #555555, 0 6px #555555, 0 7px #555555, 0 8px #555555' })
];
const TEXT_SHADOW_POP_BL = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(0) translateY(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(8px) translateY(-8px)', textShadow: '-1px 1px #555555, -2px 2px #555555, -3px 3px #555555, -4px 4px #555555, -5px 5px #555555, -6px 6px #555555, -7px 7px #555555, -8px 8px #555555' })
];
const TEXT_SHADOW_POP_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(8px)', textShadow: '-1px 0 #555555, -2px 0 #555555, -3px 0 #555555, -4px 0 #555555, -5px 0 #555555, -6px 0 #555555, -7px 0 #555555, -8px 0 #555555' })
];
const TEXT_SHADOW_POP_TL = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(0) translateY(0)', textShadow: '0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_SHADOW_POP_DEFAULT), { transform: 'translateX(8px) translateY(8px)', textShadow: '-1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555' })
];
const TEXT_SHADOW_POP = {
    [ANIMATIONS$1.TEXT_SHADOW_POP_TOP]: TEXT_SHADOW_POP_TOP,
    [ANIMATIONS$1.TEXT_SHADOW_POP_TR]: TEXT_SHADOW_POP_TR,
    [ANIMATIONS$1.TEXT_SHADOW_POP_RIGHT]: TEXT_SHADOW_POP_RIGHT,
    [ANIMATIONS$1.TEXT_SHADOW_POP_BR]: TEXT_SHADOW_POP_BR,
    [ANIMATIONS$1.TEXT_SHADOW_POP_BOTTOM]: TEXT_SHADOW_POP_BOTTOM,
    [ANIMATIONS$1.TEXT_SHADOW_POP_BL]: TEXT_SHADOW_POP_BL,
    [ANIMATIONS$1.TEXT_SHADOW_POP_LEFT]: TEXT_SHADOW_POP_LEFT,
    [ANIMATIONS$1.TEXT_SHADOW_POP_TL]: TEXT_SHADOW_POP_TL
};

const TEXT_POP_UP_DEFAULT = {
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both'
};
const TEXT_POP_UP_TOP = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(-50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_TR = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(0) translateX(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(-50px) translateX(50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateX(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateX(50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_BR = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(0) translateX(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(50px) translateX(50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_BL = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(0) translateX(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(50px) translateX(-50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateX(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateX(-50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP_TL = [
    Object.assign(Object.assign({ offset: 0 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(0) translateX(0)', transformOrigin: '50% 50%', textShadow: 'none' }),
    Object.assign(Object.assign({ offset: 1 }, TEXT_POP_UP_DEFAULT), { transform: 'translateY(-50px) translateX(-50px)', transformOrigin: '50% 50%', textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)' })
];
const TEXT_POP_UP = {
    [ANIMATIONS$1.TEXT_POP_UP_TOP]: TEXT_POP_UP_TOP,
    [ANIMATIONS$1.TEXT_POP_UP_TR]: TEXT_POP_UP_TR,
    [ANIMATIONS$1.TEXT_POP_UP_RIGHT]: TEXT_POP_UP_RIGHT,
    [ANIMATIONS$1.TEXT_POP_UP_BR]: TEXT_POP_UP_BR,
    [ANIMATIONS$1.TEXT_POP_UP_BOTTOM]: TEXT_POP_UP_BOTTOM,
    [ANIMATIONS$1.TEXT_POP_UP_BL]: TEXT_POP_UP_BL,
    [ANIMATIONS$1.TEXT_POP_UP_LEFT]: TEXT_POP_UP_LEFT,
    [ANIMATIONS$1.TEXT_POP_UP_TL]: TEXT_POP_UP_TL
};

const VIBRATE_DEFAULT = {
    easing: 'linear',
    fillMode: 'both'
};
const VIBRATE_1 = [
    Object.assign(Object.assign({ offset: 0 }, VIBRATE_DEFAULT), { transform: 'translate(0)' }),
    Object.assign(Object.assign({ offset: 0.2 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, 2px)' }),
    Object.assign(Object.assign({ offset: 0.4 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, -2px)' }),
    Object.assign(Object.assign({ offset: 0.6 }, VIBRATE_DEFAULT), { transform: 'translate(2px, 2px)' }),
    Object.assign(Object.assign({ offset: 0.8 }, VIBRATE_DEFAULT), { transform: 'translate(2px, -2px)' }),
    Object.assign(Object.assign({ offset: 1 }, VIBRATE_DEFAULT), { transform: 'translate(0)' })
];
const VIBRATE_2 = [
    Object.assign(Object.assign({ offset: 0 }, VIBRATE_DEFAULT), { transform: 'translate(0)' }),
    Object.assign(Object.assign({ offset: 0.1 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, -2px)' }),
    Object.assign(Object.assign({ offset: 0.2 }, VIBRATE_DEFAULT), { transform: 'translate(2px, -2px)' }),
    Object.assign(Object.assign({ offset: 0.3 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, 2px)' }),
    Object.assign(Object.assign({ offset: 0.4 }, VIBRATE_DEFAULT), { transform: 'translate(2px, 2px)' }),
    Object.assign(Object.assign({ offset: 0.5 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, -2px)' }),
    Object.assign(Object.assign({ offset: 0.6 }, VIBRATE_DEFAULT), { transform: 'translate(2px, -2px)' }),
    Object.assign(Object.assign({ offset: 0.7 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, 2px)' }),
    Object.assign(Object.assign({ offset: 0.8 }, VIBRATE_DEFAULT), { transform: 'translate(-2px, -2px)' }),
    Object.assign(Object.assign({ offset: 0.9 }, VIBRATE_DEFAULT), { transform: 'translate(2px, -2px)' }),
    Object.assign(Object.assign({ offset: 1 }, VIBRATE_DEFAULT), { transform: 'translate(0)' })
];
const VIBRATE = {
    [ANIMATIONS$1.VIBRATE_1]: VIBRATE_1,
    [ANIMATIONS$1.VIBRATE_2]: VIBRATE_2
};

const SHAKE_DEFAULT = {
    easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    fillMode: 'both'
};
const SHAKE_HORIZONTAL = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'translateX(0)' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'translateX(-10px)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'translateX(10px)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'translateX(-10px)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'translateX(10px)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'translateX(-10px)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'translateX(10px)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'translateX(-10px)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'translateX(8px)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'translateX(-8px)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'translateX(0)' })
];
const SHAKE_VERTICAL = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'translateY(0)' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'translateY(-8px)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'translateY(8px)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'translateY(-8px)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'translateY(8px)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'translateY(-8px)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'translateY(8px)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'translateY(-8px)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'translateY(6.4px)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'translateY(-6.4px)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'translateY(0)' })
];
const SHAKE_LR = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(8deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-10deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(10deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-10deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(10deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-10deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(10deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-8deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(8deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '50% 50%' })
];
const SHAKE_TOP = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '50% 0' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '50% 0' })
];
const SHAKE_TR = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '100% 0' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '100% 0' })
];
const SHAKE_RIGHT$1 = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '100% 50%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '100% 50%' })
];
const SHAKE_BR = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '100% 100%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '100% 100%' })
];
const SHAKE_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '50% 100%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '50% 100%' })
];
const SHAKE_BL = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '0% 100%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '0% 100%' })
];
const SHAKE_LEFT$1 = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '0% 50%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '0% 50%' })
];
const SHAKE_TL = [
    Object.assign(Object.assign({ offset: 0 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '0% 0%' }),
    Object.assign(Object.assign({ offset: 0.1 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 0.2 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, SHAKE_DEFAULT), { transform: 'rotate(-4deg)' }),
    Object.assign(Object.assign({ offset: 0.7 }, SHAKE_DEFAULT), { transform: 'rotate(4deg)' }),
    Object.assign(Object.assign({ offset: 0.8 }, SHAKE_DEFAULT), { transform: 'rotate(-2deg)' }),
    Object.assign(Object.assign({ offset: 0.9 }, SHAKE_DEFAULT), { transform: 'rotate(2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, SHAKE_DEFAULT), { transform: 'rotate(0deg)', transformOrigin: '0% 0%' })
];
const SHAKE$1 = {
    [ANIMATIONS$1.SHAKE_HORIZONTAL]: SHAKE_HORIZONTAL,
    [ANIMATIONS$1.SHAKE_VERTICAL]: SHAKE_VERTICAL,
    [ANIMATIONS$1.SHAKE_LR]: SHAKE_LR,
    [ANIMATIONS$1.SHAKE_TOP]: SHAKE_TOP,
    [ANIMATIONS$1.SHAKE_TR]: SHAKE_TR,
    [ANIMATIONS$1.SHAKE_RIGHT]: SHAKE_RIGHT$1,
    [ANIMATIONS$1.SHAKE_BR]: SHAKE_BR,
    [ANIMATIONS$1.SHAKE_BOTTOM]: SHAKE_BOTTOM,
    [ANIMATIONS$1.SHAKE_BL]: SHAKE_BL,
    [ANIMATIONS$1.SHAKE_LEFT]: SHAKE_LEFT$1,
    [ANIMATIONS$1.SHAKE_TL]: SHAKE_TL
};

const JELLO_DEFAULT$1 = {
    fillMode: 'both'
};
const JELLO_HORIZONTAL = [
    Object.assign(Object.assign({ offset: 0 }, JELLO_DEFAULT$1), { transform: 'scale3d(1, 1, 1)' }),
    Object.assign(Object.assign({ offset: 0.3 }, JELLO_DEFAULT$1), { transform: 'scale3d(1.25, 0.75, 1)' }),
    Object.assign(Object.assign({ offset: 0.4 }, JELLO_DEFAULT$1), { transform: 'scale3d(0.75, 1.25, 1)' }),
    Object.assign(Object.assign({ offset: 0.5 }, JELLO_DEFAULT$1), { transform: 'scale3d(1.15, 0.85, 1)' }),
    Object.assign(Object.assign({ offset: 0.65 }, JELLO_DEFAULT$1), { transform: 'scale3d(0.95, 1.05, 1)' }),
    Object.assign(Object.assign({ offset: 0.75 }, JELLO_DEFAULT$1), { transform: 'scale3d(1.05, 0.95, 1)' }),
    Object.assign(Object.assign({ offset: 1 }, JELLO_DEFAULT$1), { transform: 'scale3d(1, 1, 1)' })
];
const JELLO_VERTICAL = [
    Object.assign(Object.assign({ offset: 0 }, JELLO_DEFAULT$1), { transform: 'scale3d(1, 1, 1)' }),
    Object.assign(Object.assign({ offset: 0.3 }, JELLO_DEFAULT$1), { transform: 'scale3d(0.75, 1.25, 1)' }),
    Object.assign(Object.assign({ offset: 0.4 }, JELLO_DEFAULT$1), { transform: 'scale3d(1.25, 0.75, 1)' }),
    Object.assign(Object.assign({ offset: 0.5 }, JELLO_DEFAULT$1), { transform: 'scale3d(0.85, 1.15, 1)' }),
    Object.assign(Object.assign({ offset: 0.65 }, JELLO_DEFAULT$1), { transform: 'scale3d(1.05, 0.95, 1)' }),
    Object.assign(Object.assign({ offset: 0.75 }, JELLO_DEFAULT$1), { transform: 'scale3d(0.95, 1.05, 1)' }),
    Object.assign(Object.assign({ offset: 1 }, JELLO_DEFAULT$1), { transform: 'scale3d(1, 1, 1)' })
];
const JELLO_DIAGONAL_1 = [
    Object.assign(Object.assign({ offset: 0 }, JELLO_DEFAULT$1), { transform: 'skew(0deg, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, JELLO_DEFAULT$1), { transform: ' skew(25deg, 25deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, JELLO_DEFAULT$1), { transform: 'skew(-15deg, -15deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, JELLO_DEFAULT$1), { transform: 'skew(15deg, 15deg)' }),
    Object.assign(Object.assign({ offset: 0.65 }, JELLO_DEFAULT$1), { transform: 'skew(-5deg, -5deg)' }),
    Object.assign(Object.assign({ offset: 0.75 }, JELLO_DEFAULT$1), { transform: 'skew(5deg, 5deg)' }),
    Object.assign(Object.assign({ offset: 1 }, JELLO_DEFAULT$1), { transform: 'skew(0deg, 0deg)' })
];
const JELLO_DIAGONAL_2 = [
    Object.assign(Object.assign({ offset: 0 }, JELLO_DEFAULT$1), { transform: 'skew(0deg, 0deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, JELLO_DEFAULT$1), { transform: 'skew(-25deg, -25deg)' }),
    Object.assign(Object.assign({ offset: 0.4 }, JELLO_DEFAULT$1), { transform: 'skew(15deg, 15deg)' }),
    Object.assign(Object.assign({ offset: 0.5 }, JELLO_DEFAULT$1), { transform: 'skew(-15deg, -15deg)' }),
    Object.assign(Object.assign({ offset: 0.65 }, JELLO_DEFAULT$1), { transform: 'skew(5deg, 5deg)' }),
    Object.assign(Object.assign({ offset: 0.75 }, JELLO_DEFAULT$1), { transform: 'skew(-5deg, -5deg)' }),
    Object.assign(Object.assign({ offset: 1 }, JELLO_DEFAULT$1), { transform: 'skew(0deg, 0deg)' })
];
const JELLO$1 = {
    [ANIMATIONS$1.JELLO_HORIZONTAL]: JELLO_HORIZONTAL,
    [ANIMATIONS$1.JELLO_VERTICAL]: JELLO_VERTICAL,
    [ANIMATIONS$1.JELLO_DIAGONAL_1]: JELLO_DIAGONAL_1,
    [ANIMATIONS$1.JELLO_DIAGONAL_2]: JELLO_DIAGONAL_2
};

const WOBBLE_DEFAULT = {
    fillMode: 'both'
};
const WOBBLE_HOR_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, WOBBLE_DEFAULT), { transform: 'translateX(0)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 0.15 }, WOBBLE_DEFAULT), { transform: 'translateX(-30px) rotate(-6deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, WOBBLE_DEFAULT), { transform: 'translateX(15px) rotate(6deg)' }),
    Object.assign(Object.assign({ offset: 0.45 }, WOBBLE_DEFAULT), { transform: 'translateX(-15px) rotate(-3.6deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, WOBBLE_DEFAULT), { transform: 'translateX(9px) rotate(2.4deg)' }),
    Object.assign(Object.assign({ offset: 0.75 }, WOBBLE_DEFAULT), { transform: 'translateX(-6px) rotate(-1.2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, WOBBLE_DEFAULT), { transform: 'translateX(0)', transformOrigin: '50% 50%' })
];
const WOBBLE_HOR_TOP = [
    Object.assign(Object.assign({ offset: 0 }, WOBBLE_DEFAULT), { transform: 'translateX(0)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 0.15 }, WOBBLE_DEFAULT), { transform: 'translateX(-30px) rotate(6deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, WOBBLE_DEFAULT), { transform: 'translateX(15px) rotate(-6deg)' }),
    Object.assign(Object.assign({ offset: 0.45 }, WOBBLE_DEFAULT), { transform: 'translateX(-15px) rotate(3.6deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, WOBBLE_DEFAULT), { transform: 'translateX(9px) rotate(-2.4deg)' }),
    Object.assign(Object.assign({ offset: 0.75 }, WOBBLE_DEFAULT), { transform: 'translateX(-6px) rotate(1.2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, WOBBLE_DEFAULT), { transform: 'translateX(0)', transformOrigin: '50% 50%' })
];
const WOBBLE_VER_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, WOBBLE_DEFAULT), { transform: 'translateY(0) rotate(0)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 0.15 }, WOBBLE_DEFAULT), { transform: 'translateY(-30px) rotate(-6deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, WOBBLE_DEFAULT), { transform: 'translateY(15px) rotate(6deg)' }),
    Object.assign(Object.assign({ offset: 0.45 }, WOBBLE_DEFAULT), { transform: 'translateY(-15px) rotate(-3.6deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, WOBBLE_DEFAULT), { transform: 'translateY(9px) rotate(2.4deg)' }),
    Object.assign(Object.assign({ offset: 0.75 }, WOBBLE_DEFAULT), { transform: 'translateY(-6px) rotate(-1.2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, WOBBLE_DEFAULT), { transform: 'translateY(0) rotate(0)', transformOrigin: '50% 50%' })
];
const WOBBLE_VER_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, WOBBLE_DEFAULT), { transform: 'translateY(0) rotate(0)', transformOrigin: '50% 50%' }),
    Object.assign(Object.assign({ offset: 0.15 }, WOBBLE_DEFAULT), { transform: 'translateY(-30px) rotate(6deg)' }),
    Object.assign(Object.assign({ offset: 0.3 }, WOBBLE_DEFAULT), { transform: 'translateY(15px) rotate(-6deg)' }),
    Object.assign(Object.assign({ offset: 0.45 }, WOBBLE_DEFAULT), { transform: 'translateY(-15px) rotate(3.6deg)' }),
    Object.assign(Object.assign({ offset: 0.6 }, WOBBLE_DEFAULT), { transform: 'translateY(9px) rotate(-2.4deg)' }),
    Object.assign(Object.assign({ offset: 0.75 }, WOBBLE_DEFAULT), { transform: 'translateY(-6px) rotate(1.2deg)' }),
    Object.assign(Object.assign({ offset: 1 }, WOBBLE_DEFAULT), { transform: 'translateY(0) rotate(0)', transformOrigin: '50% 50%' })
];
const WOBBLE$1 = {
    [ANIMATIONS$1.WOBBLE_HOR_BOTTOM]: WOBBLE_HOR_BOTTOM,
    [ANIMATIONS$1.WOBBLE_HOR_TOP]: WOBBLE_HOR_TOP,
    [ANIMATIONS$1.WOBBLE_VER_LEFT]: WOBBLE_VER_LEFT,
    [ANIMATIONS$1.WOBBLE_VER_RIGHT]: WOBBLE_VER_RIGHT
};

const BOUNCE_DEFAULT$2 = {
    fillMode: 'both'
};
const BOUNCE_TOP = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_DEFAULT$2), { transform: 'translateY(-45px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.24 }, BOUNCE_DEFAULT$2), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.25 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.4 }, BOUNCE_DEFAULT$2), { transform: 'translateY(-24px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.65 }, BOUNCE_DEFAULT$2), { transform: 'translateY(-12px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.75 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.82 }, BOUNCE_DEFAULT$2), { transform: 'translateY(-6px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.87 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.93 }, BOUNCE_DEFAULT$2), { transform: 'translateY(-4px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_DEFAULT$2), { transform: 'translateY(45px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.24 }, BOUNCE_DEFAULT$2), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.25 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.4 }, BOUNCE_DEFAULT$2), { transform: 'translateY(24px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.65 }, BOUNCE_DEFAULT$2), { transform: 'translateY(12px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.75 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.82 }, BOUNCE_DEFAULT$2), { transform: 'translateY(6px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.87 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.93 }, BOUNCE_DEFAULT$2), { transform: 'translateY(4px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_DEFAULT$2), { transform: 'translateY(0px)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_DEFAULT$2), { transform: 'translateX(-48px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.24 }, BOUNCE_DEFAULT$2), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.25 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.4 }, BOUNCE_DEFAULT$2), { transform: 'translateX(-26px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.65 }, BOUNCE_DEFAULT$2), { transform: 'translateX(-13px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.75 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.82 }, BOUNCE_DEFAULT$2), { transform: 'translateX(-6.5px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.87 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.93 }, BOUNCE_DEFAULT$2), { transform: 'translateX(-4px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.98 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, BOUNCE_DEFAULT$2), { transform: 'translateX(48px)', easing: 'ease-in', opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.24 }, BOUNCE_DEFAULT$2), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 0.25 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.4 }, BOUNCE_DEFAULT$2), { transform: 'translateX(26px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.55 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.65 }, BOUNCE_DEFAULT$2), { transform: 'translateX(13px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.75 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.82 }, BOUNCE_DEFAULT$2), { transform: 'translateX(6.5px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.87 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 0.93 }, BOUNCE_DEFAULT$2), { transform: 'translateX(4px)', easing: 'ease-in' }),
    Object.assign(Object.assign({ offset: 0.98 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out' }),
    Object.assign(Object.assign({ offset: 1 }, BOUNCE_DEFAULT$2), { transform: 'translateX(0px)', easing: 'ease-out', opacity: 1 })
];
const BOUNCE$1 = {
    [ANIMATIONS$1.BOUNCE_TOP]: BOUNCE_TOP,
    [ANIMATIONS$1.BOUNCE_BOTTOM]: BOUNCE_BOTTOM,
    [ANIMATIONS$1.BOUNCE_LEFT]: BOUNCE_LEFT,
    [ANIMATIONS$1.BOUNCE_RIGHT]: BOUNCE_RIGHT
};

const PULSATE_DEFAULT = {
    easing: 'ease-in-out',
    fillMode: 'both'
};
const PULSATE_BCK = [
    Object.assign(Object.assign({ offset: 0 }, PULSATE_DEFAULT), { transform: 'scale(1)' }),
    Object.assign(Object.assign({ offset: 0.5 }, PULSATE_DEFAULT), { transform: 'scale(0.9)' }),
    Object.assign(Object.assign({ offset: 1 }, PULSATE_DEFAULT), { transform: 'scale(1)' })
];
const PULSATE_FWD = [
    Object.assign(Object.assign({ offset: 0 }, PULSATE_DEFAULT), { transform: 'scale(1)' }),
    Object.assign(Object.assign({ offset: 0.5 }, PULSATE_DEFAULT), { transform: 'scale(1.1)' }),
    Object.assign(Object.assign({ offset: 1 }, PULSATE_DEFAULT), { transform: 'scale(1)' })
];
const PING = [
    Object.assign(Object.assign({ offset: 0 }, PULSATE_DEFAULT), { transform: 'scale(0.2)', opacity: 0.8 }),
    Object.assign(Object.assign({ offset: 0.8 }, PULSATE_DEFAULT), { transform: 'scale(1.2)', opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, PULSATE_DEFAULT), { transform: 'scale(2.2)', opacity: 0 })
];
const PULSATE = {
    [ANIMATIONS$1.PULSATE_BCK]: PULSATE_BCK,
    [ANIMATIONS$1.PULSATE_FWD]: PULSATE_FWD,
    [ANIMATIONS$1.PING]: PING
};

const KEN_BURNS_DEFAULT = {
    easing: 'ease-out',
    fillMode: 'both'
};
const KEN_BURNS_TOP = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translateY(0)', transformOrigin: '50% 16%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translateY(-15px)', transformOrigin: 'top' })
];
const KEN_BURNS_TOP_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translate(0, 0)', transformOrigin: '84% 16%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translate(20px, -15px)', transformOrigin: 'right top' })
];
const KEN_BURNS_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translate(0, 0)', transformOrigin: '84% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translateX(20px)', transformOrigin: 'right' })
];
const KEN_BURNS_BOTTOM_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translate(0, 0)', transformOrigin: '84% 84%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translate(20px, 15px)', transformOrigin: 'right bottom' })
];
const KEN_BURNS_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translateY(0)', transformOrigin: '50% 84%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translateY(15px)', transformOrigin: 'bottom' })
];
const KEN_BURNS_BOTTOM_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translate(0, 0)', transformOrigin: '16% 84%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translate(-20px, 15px)', transformOrigin: 'left bottom' })
];
const KEN_BURNS_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translate(0, 0)', transformOrigin: '16% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translateX(-20px)', transformOrigin: 'left' })
];
const KEN_BURNS_TOP_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, KEN_BURNS_DEFAULT), { transform: 'scale(1) translate(0, 0)', transformOrigin: '16% 16%' }),
    Object.assign(Object.assign({ offset: 1 }, KEN_BURNS_DEFAULT), { transform: 'scale(1.25) translate(-20px, -15px)', transformOrigin: 'left top' })
];
const KEN_BURNS = {
    [ANIMATIONS$1.KEN_BURNS_TOP]: KEN_BURNS_TOP,
    [ANIMATIONS$1.KEN_BURNS_TOP_RIGHT]: KEN_BURNS_TOP_RIGHT,
    [ANIMATIONS$1.KEN_BURNS_RIGHT]: KEN_BURNS_RIGHT,
    [ANIMATIONS$1.KEN_BURNS_BOTTOM_RIGHT]: KEN_BURNS_BOTTOM_RIGHT,
    [ANIMATIONS$1.KEN_BURNS_BOTTOM]: KEN_BURNS_BOTTOM,
    [ANIMATIONS$1.KEN_BURNS_BOTTOM_LEFT]: KEN_BURNS_BOTTOM_LEFT,
    [ANIMATIONS$1.KEN_BURNS_LEFT]: KEN_BURNS_LEFT,
    [ANIMATIONS$1.KEN_BURNS_TOP_LEFT]: KEN_BURNS_TOP_LEFT
};

const BG_PAN_DEFAULT = {
    fillMode: 'both'
};
const BG_PAN_LEFT = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '100% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '0% 50%' })
];
const BG_PAN_RIGHT = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '0% 50%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '100% 50%' })
];
const BG_PAN_TOP = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '50% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '50% 0%' })
];
const BG_PAN_BOTTOM = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '50% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '50% 100%' })
];
const BG_PAN_TR = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '0% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '100% 0%' })
];
const BG_PAN_BR = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '0% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '100% 100%' })
];
const BG_PAN_BL = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '100% 0%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '0% 100%' })
];
const BG_PAN_TL = [
    Object.assign(Object.assign({ offset: 0 }, BG_PAN_DEFAULT), { backgroundPosition: '100% 100%' }),
    Object.assign(Object.assign({ offset: 1 }, BG_PAN_DEFAULT), { backgroundPosition: '0% 0%' })
];
const BG_PAN = {
    [ANIMATIONS$1.BG_PAN_LEFT]: BG_PAN_LEFT,
    [ANIMATIONS$1.BG_PAN_RIGHT]: BG_PAN_RIGHT,
    [ANIMATIONS$1.BG_PAN_TOP]: BG_PAN_TOP,
    [ANIMATIONS$1.BG_PAN_BOTTOM]: BG_PAN_BOTTOM,
    [ANIMATIONS$1.BG_PAN_TR]: BG_PAN_TR,
    [ANIMATIONS$1.BG_PAN_BR]: BG_PAN_BR,
    [ANIMATIONS$1.BG_PAN_BL]: BG_PAN_BL,
    [ANIMATIONS$1.BG_PAN_TL]: BG_PAN_TL
};

const ANIMISTA = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, SCALE_UP), SCALE_DOWN), ROTATE$1), ROTATE_SCALE), ROTATE_90), FLIP$1), FLIP_2), FLIP_SCALE), FLIP_SCALE_2), SWING$1), SLIDE), SLIDE_BCK), SLIDE_FWD), SLIDE_ROTATE), SHADOW_DROP), SHADOW_DROP_2), SHADOW_POP), SHADOW_INSET), SCALE_IN), ROTATE_IN$1), ROTATE_IN_2), SWIRL_IN), FLIP_IN), SLIT_IN), SLIDE_IN), SLIDE_IN_FWD), SLIDE_IN_BCK), SLIDE_IN_BLURRED), SLIDE_IN_ELLIPTIC), BOUNCE_IN$1), ROLL_IN$1), ROLL_IN_BLURRED), TILT_IN), TILT_IN_FWD), SWING_IN), FADE_IN$1), PUFF_IN), FLICKER_IN), TRACKING_IN), FOCUS_IN), TEXT_SHADOW_DROP), TEXT_SHADOW_POP), TEXT_POP_UP), VIBRATE), SHAKE$1), JELLO$1), WOBBLE$1), BOUNCE$1), PULSATE), KEN_BURNS), BG_PAN);

const ANIMATION_KEY_ERROR = 'Animation not supported';
const KEYFRAMES = Object.assign(Object.assign({ [ANIMATIONS$2.NONE]: [] }, ANIMATE), ANIMISTA);
/**
 * Get the keyframes of the animation
 * @param animation - Name of the animation.
 */
function getKeyFramesByAnimation(animation) {
    const keyFrames = KEYFRAMES[animation];
    if (keyFrames !== undefined) {
        return keyFrames;
    }
    else {
        throw new Error(ANIMATION_KEY_ERROR);
    }
}

export { ANIMATION_KEY_ERROR as A, EASING as E, KEYFRAMES as K, EASING_FUNCTIONS as a, ANIMATIONS$2 as b, getKeyFramesByAnimation as g };
