export default class Basics {

  constructor() {
    this.doc = document
    this.win = window
    this.body = this.doc.body
  }
  /**
   * 获取url query.
   * @param key
   * @returns {string}  value
   */
  queryString(key) {
    const uri = decodeURIComponent(window.location.href)
    const re = new RegExp("[\&\?]" + key + "\=([^\&]*)", "ig")
    return ((uri.match(re)) ? (uri.match(re)[0].substr(key.length + 2)) : null)
  }

  /**
   * 计算时差.
   */
  getTimeDifference(starttime) {
    const t = Date.parse(new Date()) - Date.parse(starttime)
    const seconds = Math.floor((t / 1000) % 60)
    const minutes = Math.floor((t / 1000 / 60) % 60)
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  /**
   * 时间不足10返回0X格式.
   */
  makeUpZero(s) {
    return (`0${s}`).slice(-2)
  }
	
  /**
   * 解决IOS Active 无效方法.
   * @param {null} null.
   */
  bindElementActive() {
    document.body.addEventListener('touchstart',  () => {
      //...空函数即可
    })
  }

  /**
   * 绑定页面禁止滚动.
   */
  bindWinCloseScroll() {
    this.win.addEventListener("mousewheel", this.forbidWinScroll)
    this.win.addEventListener("touchmove", this.forbidWinScroll, {
      passive: false
    })
  }
  /**
   * 绑定页面滚动事件.
   */
  bindWinOpenScroll() {
    this.win.removeEventListener("mousewheel", this.forbidWinScroll)
    this.win.removeEventListener("touchmove", this.forbidWinScroll, {
      passive: false
    })
  }

  /**
   * 禁止页面滚动.
   * @param {obj} e.
   */
  forbidWinScroll(e) {
    e.preventDefault && e.preventDefault()
    e.returnValue = false
    e.stopPropagation && e.stopPropagation()
    return false
  }
}
