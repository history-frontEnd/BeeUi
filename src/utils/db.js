import { dbPrefix as prefix } from 'config';
import wx from './wx';

const get = key => {
  return wx.getStorageSync(prefix + key);
};

const set = (key, value) => {
  wx.setStorageSync(prefix + key, value);
};

const remove = key => {
  wx.removeStorageSync(prefix + key);
};

const clear = () => {
  wx.clearStorageSync();
};

const getObj = (objKey, valueKey) => {
  let data = (get(objKey) && JSON.parse(get(objKey))) || '';
  return (valueKey === undefined && data) || (data && data[valueKey]) || '';
};

const setObj = (objKey, obj) => {
  set(objKey, JSON.stringify(obj));
};

const removeObj = (objKey, valueKey) => {
  if (valueKey) {
    let obj = getObj(objKey);
    delete obj[valueKey];
    setObj(objKey, obj);
  } else {
    wx.removeStorageSync(prefix + objKey);
  }
};

const updateObj = (objKey, key, value) => {
  let obj = getObj(objKey);
  obj[key] = value;
  setObj(objKey, obj);
};

const setUser = (userDataOrKey, value) => {
  if (value) {
    updateObj('user', userDataOrKey, value);
  } else {
    setObj('user', userDataOrKey);
  }
};

// db.getUser() 获取整个user
// db.getUser('name') 获取key
const getUser = valueKey => {
  return getObj('user', valueKey);
};

// db.removeUser() 删除user
// db.removeUser('name') 删除user一个key
const removeUser = valueKey => {
  removeObj('user', valueKey);
};

const updateUser = (key, value) => {
  updateObj('user', key, value);
};

export default {
  set,
  get,
  remove,
  clear,
  setObj,
  getObj,
  removeObj,
  setUser,
  getUser,
  removeUser,
  updateUser
};
