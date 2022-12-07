import AsyncStorage from "@react-native-async-storage/async-storage";
import { isTablet } from 'react-native-device-info';
import { Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;


export const isTab = isTablet ? true : false
export const isIpad = Platform.isPad ? true : false

  
  export function normalizeFont(size, uncontrolled = false) {
    const fontSize = (SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size;
    if (uncontrolled) {
      return fontSize;
    } else {
      return fontSize > 20 ? 20 : fontSize;
    }
  }
  
  export function normalizeX(size) {
    return Math.round((SCREEN_WIDTH / BASE_UNIT_WIDTH) * size);
  }
  
  export function normalizeY(size) {
    return Math.round((SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size);
  }