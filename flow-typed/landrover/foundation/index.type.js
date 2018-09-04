declare type url = string;

declare interface StorageVirtualClass {
  setItem(key: string, value: string | number | {[string]: any}): Promise<void>,
  setItemSync(key: string, value: string | number | {[string]: any}): boolean,

  getItem(key: string): Promise<any>,
  getItemSync(key: string): ?any,

  removeItem(key: string): Promise<void>,
  removeItemSync(key: string): boolean,

  clear(): Promise<void>,
  clearSync(): boolean,
}

declare type ResponseEntity = {
  statusCode: number,
  data: any,
  header: ,
  errMsg: string
};

declare interface RequestVirtualClass {
  request(url: string, method: RequestMethod, data: {[string]: any}, header: {[string]: string},): Promise<ResponseEntity>
};

declare type System = {
  /**
   * 手机型号
   * iPhone 5
   *
   * @type {string}
   */
  model: string,

  /**
   * 设备屏幕的宽高
   *
   * @type {number}
   */
  screenWidth: number,
  screenHeight: number,

  /**
   * 设备当前窗口的可用宽高
   *
   * @type {number}
   */
  windowWidth: number,
  windowHeight: number,

  /**
   * 运行环境语言
   * 'zh_CN'
   *
   * @type {string}
   */
  language: string,

  /**
   * 操作系统版本
   * 'iOS 10.0.1'
   *
   * @type {string}
   */
  system: string,

  /**
   * 平台
   * devtools|
   *
   * @type {string}
   */
  platform: string,

  /**
   *
   * 2
   *
   * @type {number}
   */
  pixelRatio?: number,

  /**
   * 微信客户端版本号
   * "6.5.6"
   *
   * @type {string}
   */
  version?: string,
  versionCode?: number,

  /**
   * 微信小程序运行时库版本号
   *
   * @type {string}
   */
  SDKVersion?: string,
  SDKVersionCode?: number
}
