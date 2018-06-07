import wepy from 'wepy';
import wx from 'utils/wx';
import { isPord, isDebug } from 'config';

export function deepCopy(source) {
  let result = {};
  for (let key in source) {
    result[key] =
      typeof source[key] === 'object' ? deepCoyp(source[key]) : source[key];
  }
  return result;
}

export function Debug(msg) {
  if (!isDebug || isPord) {
    return;
  }
  if (typeof msg === 'string') {
    console.log(' ====Debug====: ' + msg);
  } else {
    console.log(' ====Debug====: ');
    console.log(msg);
  }
}
export function link(url) {
  wx.navigateTo({
    url: url
  });
}

export function back() {
  wepy.navigateBack({
    delta: 2
  });
}

export function toast(title, type = 'none', duration = 2000, onHide) {
  if (!title) return;
  setTimeout(() => {
    wepy.showToast({
      title: title,
      icon: type,
      mask: true,
      duration: duration
    });
  }, 300);
  if (onHide) {
    setTimeout(() => {
      onHide();
    }, duration);
  }
}

export function modal(title, content, showCancel = false) {
  return wepy
    .showModal({
      title,
      content,
      showCancel
    })
    .then(data => data.confirm);
}

export function loading(title = '加载中...', mask = true) {
  if (title) {
    return wepy.showLoading({ title, mask });
  } else {
    return wepy.hideLoading();
  }
}

export async function getSystemInfo(fields = []) {
  let systemInfo = await wepy.getSystemInfo();
  return systemInfo;
}
