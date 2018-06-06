import wepy from 'wepy'
import {
  back,
  link,
  toast,
  modal,
  loading,
  getSystemInfo,
  Debug
} from 'utils'
import db from 'utils/db'

import Bus from 'utils/bus'
import Base64 from './base64'
wepy.$bus = new Bus()
wepy.$base64 = new Base64()

Object.assign(wepy.component.prototype, {
  $back: back,
  $link: link,
  $toast: toast,
  $modal: modal,
  $loading: loading,
  $getSystemInfo: getSystemInfo,
  $d: Debug,
  $debug: Debug,
  $db: db
})
Object.assign(wepy.app.prototype, {
  $db: db,
  $d: Debug,
  $debug: Debug
})
