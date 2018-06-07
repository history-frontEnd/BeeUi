import wepy from 'wepy';
import * as request from 'utils/request';

class RequestMixin extends wepy.mixin {}
Object.assign(RequestMixin.prototype, request);
export default RequestMixin;
