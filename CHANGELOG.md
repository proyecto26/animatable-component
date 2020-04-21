# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/proyecto26/animatable-component/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/proyecto26/animatable-component/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/proyecto26/animatable-component/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/proyecto26/animatable-component/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/proyecto26/animatable-component/releases/tag/v1.0.0