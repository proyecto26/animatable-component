import { h } from './core-03a88eb7.js';
export { A as ANIMATIONS, E as EASING, a as EASING_FUNCTIONS } from './animations-079e04da.js';

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
function createAnimatableComponent(WrappedComponent) {
    return (props) => {
        const { ref, keyFrames, keyFramesData, options, optionsData, animateId, delay, endDelay, duration, direction, composite, easing, fill, iterations, iterationStart, iterationComposite, autoPlay, currentTime, startTime, playbackRate, onStart, onCancel, onFinish } = props, rest = __rest(props, ["ref", "keyFrames", "keyFramesData", "options", "optionsData", "animateId", "delay", "endDelay", "duration", "direction", "composite", "easing", "fill", "iterations", "iterationStart", "iterationComposite", "autoPlay", "currentTime", "startTime", "playbackRate", "onStart", "onCancel", "onFinish"]);
        return h("animatable-component", { ref: ref, keyFrames: keyFrames, keyFramesData: keyFramesData, options: options, optionsData: optionsData, animateId: animateId, delay: delay, endDelay: endDelay, duration: duration, direction: direction, composite: composite, easing: easing, fill: fill, iterations: iterations, iterationStart: iterationStart, iterationComposite: iterationComposite, autoPlay: autoPlay, currentTime: currentTime, startTime: startTime, playbackRate: playbackRate, onStart: onStart, onCancel: onCancel, onFinish: onFinish },
            h(WrappedComponent, Object.assign({}, rest)));
    };
}
;

export { createAnimatableComponent };
