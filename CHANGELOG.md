# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-03-16
### Added
- add automated release workflow with semantic versioning ([b8a6a76](https://github.com/proyecto26/animatable-component/commit/b8a6a760cb1c9c82f84787a3f483823cab0ce1d3)).

### Changed
- Update readme.md ([094f83f](https://github.com/proyecto26/animatable-component/commit/094f83f60502948a792811e36f4e7fbf18a45188)).
- Update readme.md ([8ad561a](https://github.com/proyecto26/animatable-component/commit/8ad561a983005e9b51bdad2920780e2b8cb7b818)).
- Update FUNDING.yml ([3e74dc2](https://github.com/proyecto26/animatable-component/commit/3e74dc289f88758ecb6bec94edce77952adeb76f)).
- Update readme.md ([903cc87](https://github.com/proyecto26/animatable-component/commit/903cc8709f0cfdb03788b2de731af8ba7cec26f4)).
- Update readme.md ([852fcfe](https://github.com/proyecto26/animatable-component/commit/852fcfef96cd2711903960d5069d15bb165fde5e)).
- Fix scripts to be used from HTML ([6b59be0](https://github.com/proyecto26/animatable-component/commit/6b59be046655e3117f2f817d84c43f2bbd7de3b4)).
- Update readme.md ([274340c](https://github.com/proyecto26/animatable-component/commit/274340cc43e95053984ca9bbcfa032960bb1506e)).
- Update readme.md ([c0e6bf6](https://github.com/proyecto26/animatable-component/commit/c0e6bf68dac5aefd9dbd0ee36dfe41a4a4272b12)).
- Update readme.md ([fd4d8d5](https://github.com/proyecto26/animatable-component/commit/fd4d8d52e0482eb18519ef10daa4839785fdb340)).
- Update readme.md ([5a61df9](https://github.com/proyecto26/animatable-component/commit/5a61df95e6cecc9592245f0175cf65fda1214695)).
- Update readme.md ([96f4d22](https://github.com/proyecto26/animatable-component/commit/96f4d228ffdc18e39de7fb199589a8496d95008d)).
- Update readme.md ([24937ba](https://github.com/proyecto26/animatable-component/commit/24937ba5e823f0e8ab3eb13dacc30397d8c185d2)).




## [1.1.10] - 2020-11-02
### Fixed
- Fixed import for components types.

## [1.1.9] - 2020-11-02
### Fixed
- Use `disconnectedCallback()` instead of `componentDidUnload()`.
- Update to `Stencil` v2.0.
- Fix accessibility issues from GitHub page.

## [1.1.8] - 2020-05-07
### Fixed
- Validate if the manager is initialized before to destroy the animation.
- Fixed comments of JSDoc.

## [1.1.7] - 2020-04-25
### Fixed
- Fixed `createAnimatableComponent` HOC by adding missing `animation` prop.

## [1.1.6] - 2020-04-25
### Fixed
- Fixed query selector for `animatable-cube` component, to avoid removing styles when `fromClassName` or `toClassName` props are used.
- Added **PWA** demo using [Ionic](https://www.npmjs.com/package/@ionic/core) components.

## [1.1.5] - 2020-04-23
### Fixed
- Fixed styles of the `animatable-cube` component by adding missing css variables as props.
- Adding [Credits](https://github.com/proyecto26/animatable-component#credits-) and [Enterprise](https://github.com/proyecto26/animatable-component#enterprise-) sections from **README**.
- Improved demo by waiting `animatable-component` to be loaded as a custom element.

## [1.1.4] - 2020-04-22
### Fixed
- Cancel current animation before to play another one, it's required to avoid issues when `iterations` was equal to `Infinity`.

## [1.1.3] - 2020-04-21
### Fixed
- Restore class name from `onCancel` event and remove `previousAnimation` from Animation manager.

## [1.1.2] - 2020-04-21
### Fixed
- Fixed issue from `destroy` method by using `cancel` instead of `finish`.

## [1.1.1] - 2020-04-19
### Fixed
- Fixed dependencies of the package.
- Updated **README** for React projects using wrapper component instead.

## [1.1.0] - 2020-04-17
### Added
- Added `fromClassName` and `toClassName` props to be applied when the animation starts and ends respectively.
- Added animations from [Animista](https://animista.net/).
- Added `animatable-cube` component for 3D cubes.
- Adding configuration to create a React specific wrapper for `animatable-component`.

## [1.0.2] - 2020-03-01
### Fixed
- Fix validation loading easing option ([79d9d10](https://github.com/proyecto26/animatable-component/commit/79d9d10bbfa4ccdae37f9e866043be6b9c3adb1d)).

## [1.0.1] - 2019-12-16
### Fixed
- Fixed linter and types issues ([b06a67a](https://github.com/proyecto26/animatable-component/commit/b06a67a43b03117aea9ba7946d603545b50eed65)).

## [1.0.0] - 2019-11-23
## Added
- Added default animations of `Animate.css`.
- Added props to create custom animations by using **keyFrames**.
- Added GitHub page with Google Analytics to track some events.
- Added README with instructions to integrate the Web component with any other framework (Angular, React, Vue, etc).

[Unreleased]: https://github.com/proyecto26/animatable-component/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/proyecto26/animatable-component/compare/v1.1.10...v1.2.0
[1.1.10]: https://github.com/proyecto26/animatable-component/compare/v1.1.9...v1.1.10
[1.1.9]: https://github.com/proyecto26/animatable-component/compare/v1.1.8...v1.1.9
[1.1.8]: https://github.com/proyecto26/animatable-component/compare/v1.1.7...v1.1.8
[1.1.7]: https://github.com/proyecto26/animatable-component/compare/v1.1.6...v1.1.7
[1.1.6]: https://github.com/proyecto26/animatable-component/compare/v1.1.5...v1.1.6
[1.1.5]: https://github.com/proyecto26/animatable-component/compare/v1.1.4...v1.1.5
[1.1.4]: https://github.com/proyecto26/animatable-component/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/proyecto26/animatable-component/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/proyecto26/animatable-component/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/proyecto26/animatable-component/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/proyecto26/animatable-component/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/proyecto26/animatable-component/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/proyecto26/animatable-component/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/proyecto26/animatable-component/releases/tag/v1.0.0
