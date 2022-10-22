/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
export const MIN_SEARCH_LENGTH = 3;
export const DEBOUNCE_DELAY = 1000;
export const urlRegExp = new RegExp(/^(?:(http(s)?)?(sftp)?(ftp)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);

export const regExps = {
  url: new RegExp(/^(?:(http(s)?)?(sftp)?(ftp)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
  password: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&\\[\\]])[A-Za-z\\d$@#$!%*?&\\[\\]].{8,}',
};
