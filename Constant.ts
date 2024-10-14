import Config from './Config';
import env from '../../env';
import {Platform} from 'react-native';

const BASE_URL =
  Config.environment == 'dev' ? env.DEV_URL : 'https://api.collegetennis.app';
const API_URL = Config.environment == 'dev' ? '/api/V2' : '/api/V1';
const AUTH_URL = Config.environment == 'dev' ? '/api/V2/auth' : '/api/auth';
const CHAT_URL = Config.environment == 'dev' ? '/api/V2/chat' : '/api/chat';

const Constant = {
  ONESIGNAL_ID: 'e9bcb5db-878b-4f3a-81a6-0484a7b40340',
  BASE_URL: BASE_URL,
  API_URL: BASE_URL + API_URL,
  AUTH_URL: BASE_URL + AUTH_URL,
  CHAT_URL: BASE_URL + CHAT_URL,
  PUBLIC_PROFILE_URL: 'https://collegetennis.app/profile',
  TERM_BASE_URL: 'https://collegetennisapp.com/wp-json/wp/v2/pages/2246',
  PRIVACY_BASE_URL: 'https://collegetennisapp.com/wp-json/wp/v2/pages/2241',
  TERMS_AND_CONDITION: 'https://collegetennisapp.com/terms-and-conditions/',

  LOCALSTORAGE_KEYS: {
    USER: 'CTA_USER_513',
    REFRESH_TOKEN: 'API_REFRESH_TOKEN_CTA',
    TEST_USER_FLAG: 'TEST_USER_FLAG',
    COLLEGE_LIST: 'COLLEGE_LIST',
    PLAYER_LIST: 'PLAYER_LIST',
    COLLEGE_DROPDOWN_LIST: 'COLLEGE_DROPDOWN_LIST',
    SAVED_COLLEGE_LIST: 'SAVED_COLLEGE_LIST',
    SAVED_PLAYER_LIST: 'SAVED_PLAYER_LIST',
    COUNTRY_LIST: 'COUNTRY_LIST',
    STATE_LIST: 'STATE_LIST',
    MAJOR_LIST: 'MAJOR_LIST',
    CONFERENCE_LIST: 'CONFERENCE_LIST',
    COLLEGE_CONFERENCE_LIST: 'COLLEGE_CONFERENCE_LIST',
    PLAYER_TENNIS_VIDEO_LIST: 'PLAYER_TENNIS_VIDEO_LIST',
    CUSTOM_FILTER_LIST: 'CUSTOM_FILTER_LIST',
  },

  ITEM_SKUS:
    Platform.select({
      ios: ['monthly_subscription_003', 'yearly_subscription_003'],
      android: ['monthly_subscription_1', 'yearly_subscription_1'],
    }) ?? [],
};

export default Constant;
