import wepy from 'wepy';
import {
  back,
  link,
  toast,
  modal,
  loading,
  getSystemInfo,
  Debug
} from 'utils';
import db from 'utils/db';
import Bus from 'utils/bus';
wepy.$bus = new Bus();

Object.assign(wepy.component.prototype, {
  $back: back,
  $link: link,
  $toast: toast,
  $modal: modal,
  $loading: loading,
  $d: Debug,
  $debug: Debug,
  $db: db
});
Object.assign(wepy.app.prototype, {
  $db: db,
  $d: Debug,
  $debug: Debug
});
