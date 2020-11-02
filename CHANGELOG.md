# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/proyecto26/animatable-component/compare/v1.1.10...HEAD
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
