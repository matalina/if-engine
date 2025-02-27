
import { defaultSettings } from './constants';
import type { Settings } from './types';

export function createSettings(settings?: Settings) {
  let value = $state(settings || defaultSettings);

  return {
    get value() {
      return value;
    },

    addAttribute(attr: string) {
      value.attributes.push(attr);
    },
    removeAttribute(attr: string) {
      const index = value.attributes.findIndex(v => v === attr);
      value.attributes.splice(index, 1)
    }
  }
}