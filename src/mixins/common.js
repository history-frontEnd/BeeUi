import wepy from 'wepy'
export default class CommonMixin extends wepy.mixin {
  msg (msg) {
    this.$broadcast('msg:notice', msg)
  }
  msgSuccess (msg) {
    this.$broadcast('msg:success', msg)
  }
  msgError (msg) {
    this.$broadcast('msg:error', msg)
  }
}
// export const parseRequestUrl = (url, env) => {
//   if (typeof url !== 'string') {
//     return '';
//   }
//   let urlArr = url.split('/');
//   let prefix = Number(urlArr[1]);
//   if (prefix && typeof prefix === 'number') {
//     prefix = prefix === 1 ? 'lzw' : 'gzy';
//   }
//   url.replace(/\d+\//, env === 'dev' ? (prefix + '/') : '');
//   return url;
// }
