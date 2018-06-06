import { dbPrefix as prefix } from 'config'
import wx from './wx';

export const Get = (key) => {
  return wx.getStorageSync(prefix + key)
}

export const Set = (key, value) => {
  wx.setStorageSync(prefix + key, value)
}

export const Remove = (key) => {
  wx.removeStorageSync(prefix + key)
}

export const Clear = () => {
  wx.clearStorageSync()
}

export const GetObj = (objKey, valueKey) => {
  let data = Get(objKey) && JSON.parse(Get(objKey)) || ''
  return (valueKey === undefined && data) || (data && data[valueKey]) || ''
}

// export const GetObj = (objKey, valueKey) => {
//   let data;
//   try {
//     data = JSON.parse(Get(objKey))
//   } catch (error) {
//     data = {};
//   }
//   return (valueKey === undefined && data) || data[valueKey]
// }

export const SetObj = (objKey, obj) => {
  Set(objKey, JSON.stringify(obj))
}

export const RemoveObj = (objKey, valueKey) => {
  if (valueKey) {
    let obj = GetObj(objKey)
    delete obj[valueKey]
    SetObj(objKey, obj)
  } else {
    wx.removeStorageSync(prefix + objKey)
  }
}

export const UpdateObj = (objKey, key, value) => {
  let obj = GetObj(objKey)
  obj[key] = value
  SetObj(objKey, obj)
}

// db.SetUser({name: 'aaa'}) 设置整个user
// db.SetUser('age', 12) 设置key
export const SetUser = (userDataOrKey, value) => {
  if (value) {
    UpdateObj('user', userDataOrKey, value)
  } else {
    SetObj('user', userDataOrKey)
  }
}

// db.GetUser() 获取整个user
// db.GetUser('name') 获取key
export const GetUser = (valueKey) => {
  return GetObj('user', valueKey)
}

// db.RemoveUser() 删除user
// db.RemoveUser('name') 删除user一个key
export const RemoveUser = (valueKey) => {
  RemoveObj('user', valueKey)
}

export const UpdateUser = (key, value) => {
  UpdateObj('user', key, value)
}

export default {
  Set,
  Get,
  Remove,
  Clear,
  SetObj,
  GetObj,
  RemoveObj,
  SetUser,
  GetUser,
  RemoveUser
}
