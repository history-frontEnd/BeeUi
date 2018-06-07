import wepy from 'wepy';

export async function downloadFile(url) {
  let resp = await wepy.downloadFile({ url });
  let { statusCode, errMsg, tempFilePath } = resp;
  if (statusCode === 200) {
    return tempFilePath;
  } else {
    wepy.showToast({ title: errMsg });
  }
  return null;
}

export async function saveToAlbum(url) {
  let resp;
  let tempFilePath = await downloadFile(url);
  if (tempFilePath) {
    resp = await wepy.saveImageToPhotosAlbum({ filePath: tempFilePath });
  }
  let { errMsg } = resp;
  if (errMsg === 'saveImageToPhotosAlbum:ok') {
    wepy.showToast({ title: '图片保存成功!' });
  } else {
    wepy.showToast({ title: '图片保存失败!' });
  }
  return 1;
}
