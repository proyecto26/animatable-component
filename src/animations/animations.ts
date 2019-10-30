import ATTENTION_SEEKERS from './attention-seekers'
import BOUNCING_ENTRANCES from './bouncing-entrances'
import BOUNCING_EXITS from './bouncing-exits'
import { ANIMATIONS, AnimationsType } from './common'

export const ANIMATION_KEY_ERROR = 'Animation not supported'

export { ANIMATIONS, AnimationsType }
export default {
  ...ATTENTION_SEEKERS,
  ...BOUNCING_ENTRANCES,
  ...BOUNCING_EXITS
}