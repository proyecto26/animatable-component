import { h } from './index-5378d6cd.js';
export { b as ANIMATIONS, A as ANIMATION_KEY_ERROR, E as EASING, a as EASING_FUNCTIONS, K as KEYFRAMES, g as getKeyFramesByAnimation } from './index-f15f2e9e.js';

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * HOC to wrap components with Animatable component
 * @param WrappedComponent - Component to be animated with Animatable component
 */
function createAnimatableComponent(WrappedComponent) {
    return (props) => {
        const { ref, animation, keyFrames, keyFramesData, options, optionsData, animateId, delay, endDelay, duration, direction, composite, easing, fill, iterations, iterationStart, iterationComposite, autoPlay, fromClassName, toClassName, currentTime, startTime, playbackRate, onStart, onFinish, onCancel } = props, rest = __rest(props, ["ref", "animation", "keyFrames", "keyFramesData", "options", "optionsData", "animateId", "delay", "endDelay", "duration", "direction", "composite", "easing", "fill", "iterations", "iterationStart", "iterationComposite", "autoPlay", "fromClassName", "toClassName", "currentTime", "startTime", "playbackRate", "onStart", "onFinish", "onCancel"]);
        return h("animatable-component", { ref: ref, animation: animation, keyFrames: keyFrames, keyFramesData: keyFramesData, options: options, optionsData: optionsData, animateId: animateId, delay: delay, endDelay: endDelay, duration: duration, direction: direction, composite: composite, easing: easing, fill: fill, iterations: iterations, iterationStart: iterationStart, iterationComposite: iterationComposite, autoPlay: autoPlay, fromClassName: fromClassName, toClassName: toClassName, currentTime: currentTime, startTime: startTime, playbackRate: playbackRate, onStart: onStart, onFinish: onFinish, onCancel: onCancel },
            h(WrappedComponent, Object.assign({}, rest)));
    };
}
;

export { createAnimatableComponent };
