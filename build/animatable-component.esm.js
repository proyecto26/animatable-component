import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-a3674212.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["animatable-component",[[4,"animatable-component",{"animation":[1],"keyFrames":[1040],"keyFramesData":[1,"key-frames-data"],"options":[1040],"optionsData":[1,"options-data"],"animateId":[1,"animate-id"],"delay":[2],"endDelay":[2,"end-delay"],"duration":[2],"direction":[1],"composite":[1],"easing":[1],"fill":[1],"iterations":[2],"iterationStart":[2,"iteration-start"],"iterationComposite":[1,"iteration-composite"],"autoPlay":[4,"auto-play"],"currentTime":[2,"current-time"],"startTime":[2,"start-time"],"playbackRate":[2,"playback-rate"],"getCurrentTime":[64],"getStartTime":[64],"getPending":[64],"getPlaybackRate":[64],"getPlayState":[64],"cancel":[64],"finish":[64],"pause":[64],"play":[64],"reverse":[64]}]]]], options);
});
