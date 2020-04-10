import {Platform} from 'react-native';

const constants = {
  IS_ENV_DEVELOPMENT: __DEV__,
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgent),
  API_USER_URL: 'http://10.0.2.2:3001/api/usuario',
  API_CLIENT_URL: 'http://10.0.2.2:3001/api/cliente',
};

export default constants;
