import { Component, h, State } from '@stencil/core';
import {
  EASING,
  ANIMATIONS,
  AnimationsType,
  EasingType
} from '@proyecto26/animatable-component';

const animations = Object.keys(ANIMATIONS);
const easingFunctions = Object.keys(EASING);
const directions: Array<PlaybackDirection> = [
  'alternate',
  'alternate-reverse',
  'normal',
  'reverse'
];
const compositeOperations: Array<CompositeOperation> = [
  'accumulate',
  'add',
  'replace'
];
const fillModes: Array<FillMode> = [
  'auto',
  'backwards',
  'both',
  'forwards',
  'none'
];

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  private animatableEl?: HTMLAnimatableComponentElement;

  @State() animation: AnimationsType = ANIMATIONS.BOUNCE
  @State() easing: EasingType = EASING.LINEAR
  @State() delay: number = 0
  @State() duration: number = 1000
  @State() direction: PlaybackDirection = 'normal'
  @State() composite: CompositeOperation = 'replace'
  @State() fillMode: FillMode = 'both'
  @State() iterations: number = 1
  @State() fromClassName: string = 'img running'
  @State() toClassName: string = 'img finished'

  render() {

    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>{'<animatable/>'}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Playground</ion-card-subtitle>
            <ion-card-title>Demo</ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            <animatable-component
              ref={el => this.animatableEl = el}
              autoPlay
              animation={this.animation}
              easing={this.easing}
              delay={this.delay}
              duration={this.duration}
              direction={this.direction}
              composite={this.composite}
              fill={this.fillMode}
              iterations={this.iterations}
              fromClassName={this.fromClassName}
              toClassName={this.toClassName}
            >
              <div class='img'></div>
            </animatable-component>
            <ion-buttons class="ion-justify-content-center ion-padding">
              <ion-fab-button
                color='medium'
                class="ion-padding ion-text-center"
                onClick={() => this.animatableEl.reverse()}
              >
                <ion-icon name="shuffle-outline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button
                color='dark'
                onClick={() => this.animatableEl.play()}
              >
                <ion-icon name="play-outline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button
                color='medium'
                class="ion-padding ion-text-center"
                onClick={() => this.animatableEl.pause()}
              >
                <ion-icon name="pause-outline"></ion-icon>
              </ion-fab-button>
            </ion-buttons>
          </ion-card-content>
        </ion-card>
        <ion-item>
          <ion-label>Animation</ion-label>
          <ion-select
            value={this.animation}
            okText='Okay'
            cancelText='Cancel'
            onIonChange={(e) => this.animation = e.detail.value}
          >
            {
              animations.map((animation) => (
                <ion-select-option value={ANIMATIONS[animation]}>
                  {animation}
                </ion-select-option>
              ))
            }
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Easing Function</ion-label>
          <ion-select
            value={this.easing}
            okText='Okay'
            cancelText='Cancel'
            onIonChange={(e) => this.easing = e.detail.value}
          >
            {
              easingFunctions.map((easing) => (
                <ion-select-option value={EASING[easing]}>
                  {easing}
                </ion-select-option>
              ))
            }
          </ion-select>
        </ion-item>
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label>Delay</ion-label>
                <ion-input
                  type="number"
                  value={this.delay}
                  onIonBlur={(e) => this.delay = Number(e.target['value'])}
                ></ion-input>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item>
                <ion-label>Duration</ion-label>
                <ion-input
                  type="number"
                  value={this.duration}
                  onIonBlur={(e) => this.duration = Number(e.target['value'])}
                ></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-item>
          <ion-label>Direction</ion-label>
          <ion-select
            value={this.direction}
            okText='Okay'
            cancelText='Cancel'
            onIonChange={(e) => this.direction = e.detail.value}
          >
            {
              directions.map((dir) => (
                <ion-select-option value={dir}>{dir}</ion-select-option>
              ))
            }
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Composite</ion-label>
          <ion-select
            value={this.composite}
            okText='Okay'
            cancelText='Cancel'
            onIonChange={(e) => this.composite = e.detail.value}
          >
            {
              compositeOperations.map((composite) => (
                <ion-select-option value={composite}>{composite}</ion-select-option>
              ))
            }
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>FillMode</ion-label>
          <ion-select
            value={this.fillMode}
            okText='Okay'
            cancelText='Cancel'
            onIonChange={(e) => this.fillMode = e.detail.value}
          >
            {
              fillModes.map((fillMode) => (
                <ion-select-option value={fillMode}>{fillMode}</ion-select-option>
              ))
            }
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Iterations</ion-label>
          <ion-range
            min={1}
            max={5}
            step={1}
            snaps={true}
            value={this.iterations}
            onIonChange={(e) => this.iterations = Number(e.detail.value)}
          ></ion-range>
        </ion-item>
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label position="floating">From class name</ion-label>
                <ion-input
                  clear-input
                  value={this.fromClassName}
                  onIonBlur={(e) => this.fromClassName = e.target['value']}
                ></ion-input>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item>
                <ion-label position="floating">To class name</ion-label>
                <ion-input
                  clear-input
                  value={this.toClassName}
                  onIonBlur={(e) => this.toClassName = e.target['value']}
                ></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
