# bee-address-picker

> 省市区组件 - 小程序组件

## Install

``` bash
$ npm install @b1/bee-address-picker -S
```


## API

### AddressPicker

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`addrCodeArr`         | 省市区code三维数组（`['province code', 'city code', 'area code']`），双向绑定       |
|`addrStr`             | 省市区字符串以逗号间隔（`'province name','city name','area name'`），双向绑定        |
|`addrUrl`             | 获取地址的url  ，父组件传递到子组件        |
|`selectDistrict`      | 打开使用组件的方法，父组件`this.$invoke('BeeAddressPicker', 'selectDistrict');`     |

地址请求返回的数据格式：
```javascript
{
  result: 'success',
  message: '成功',
  data: {
    country: '',
    province: [
      { area_code: '110000', area_name: '北京市' },
      // more
    ],
    city: [
      { area_code: '110100', area_name: '北京城区' }
      // more
    ],
    district: [
      { area_code: '110101', area_name: '东城区' },
      // more
    ]
```

## ChangeLog

#### v1.0.0（2018-6-12）

- 初始版本
