// @flow
import platform from 'platform'
import util from './util'

const system = {}
try {
  // const wxSystemInfo = wx.getSystemInfoSync()
  // if (wxSystemInfo.hasOwnProperty('SDKVersion')) {
  //   // 拥有这个字段就是 1.1.0 之后的版本
  // } else {
  //   // 没有这个字段说明是 1.1.0 之前的版本，目前全部设置为 1.0.0
  //   wxSystemInfo.SDKVersion = '1.0.0'
  //   wxSystemInfo.screenHeight = 0
  //   wxSystemInfo.screenWidth = 0
  // }

  // {
  //   // 生成 SDKVersionCode
  //   const SDKVersion = wxSystemInfo.SDKVersion
  //   const [MAJOR, MINOR, PATCH] = SDKVersion.split('.').map(Number)
  //   wxSystemInfo.SDKVersionCode = MAJOR * 10000 + MINOR * 100 + PATCH
  // }

  // {
  //   const version = wxSystemInfo.version
  //   const [MAJOR, MINOR, PATCH] = version.split('.').map(Number)
  //   wxSystemInfo.versionCode = MAJOR * 10000 + MINOR * 100 + PATCH
  // }
  // Object.assign(system, wxSystemInfo)

  console.log(platform)
  system.model = ''
  system.pixelRatio = window.devicePixelRatio
  system.language = window.navigator.language
  system.screenHeight = window.outerHeight
  system.screenWidth = window.outerWidth
  system.windowHeight = window.innerHeight
  system.windowWidth = window.innerWidth
  system.platform = window.navigator.platform
  system.system = `${platform.os.family} ${platform.os.version}`
  //system.SDKVersion = ''
  //system.SDKVersionCode = ''
  system.name = platform.name
  system.version = platform.version
} catch (e) {
  console.error(e)
}
console.info(system)

export default system
