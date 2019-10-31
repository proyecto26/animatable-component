import ATTENTION_SEEKERS from './attention-seekers'
import BOUNCING_ENTRANCES from './bouncing-entrances'
import BOUNCING_EXITS from './bouncing-exits'
import FADING_ENTRANCES from './fading-entrances'
import FADING_EXITS from './fading-exits'
import FLIPPERS from './flippers'
import { ANIMATIONS, AnimationsType } from './common'

export const ANIMATION_KEY_ERROR = 'Animation not supported'

export { ANIMATIONS, AnimationsType }
export default {
  ...ATTENTION_SEEKERS,
  ...BOUNCING_ENTRANCES,
  ...BOUNCING_EXITS,
  ...FADING_ENTRANCES,
  ...FADING_EXITS,
  ...FLIPPERS
}