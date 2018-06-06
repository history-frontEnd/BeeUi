export const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const domains = {
  dev: 'https://xcx.dev.saas.biosan.cn', // 测试api接口
  // prod: 'https://xcx.dev.saas.biosan.cn' // api接口
  prod: 'https://api-saas.biosan.cn'
}
const dbPrefixes = {
  dev: 'biosan.sass.dev.',
  prod: 'biosan.sass.prod.'
}
export const isPord = (env === 'prod')
export const isDev = (env === 'dev')
export const isMock = false
export const isDebug = true
export const domain = domains[env]
export const dbPrefix = dbPrefixes[env]
export const appTitle = '贝安康'
export const appId = 'wxbe6204c55ac2e915'
