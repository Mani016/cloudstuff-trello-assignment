/* eslint-disable no-new-wrappers */
export const toCamelCase = (string = '') => {
  return (string || '')
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
};
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  new String(value).trim().length === 0 ||
  Object.keys(value) === 0;
export const firstLetterCapital = (str) => {
  if (isEmpty(str)) {
    return '';
  }
  return str
    .split(' ')
    .map((arr) => arr.charAt(0).toUpperCase() + arr.slice(1))
    .join(' ');
};
export const setItemToSessionStore = (key, payload, store = sessionStorage) =>
  store.setItem(key, JSON.stringify(payload));
export const getItemFromSessionStore = (
  key,
  defaultValue,
  store = sessionStorage
) => JSON.parse(store.getItem(key)) || defaultValue;
export default function isImage(file) {
  const fileName = file.name || file.path;
  const suffix = fileName.substr(fileName.indexOf('.') + 1).toLowerCase();
  if (
    suffix === 'jpg' ||
    suffix === 'jpeg' ||
    suffix === 'bmp' ||
    suffix === 'png'
  ) {
    return true;
  }
  return false;
}
