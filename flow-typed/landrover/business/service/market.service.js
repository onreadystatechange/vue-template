declare type Propaganda = {
  /**
   * 宣传标识
   *
   * @type {number}
   */
  propagandaId: number,

  /**
   * 背景图片 url
   *
   * @type {url}
   */
  picture: url,

  /**
   * 内容描述
   *
   * @type {string}
   */
  desc: string,

  /**
   * 排序顺序
   *
   * @type {number}
   */
  index: number,

  /**
   * 标题
   *
   * @type {string}
   */
  title: string,

  /**
   * 指定宣传信息范围, 可以指定多个
   *
   * @type {string}
   */
  scope: string,

  /**
   * 宣传状态
   *
   * @type {("using" | 'unused')}
   */
  propagandaStatus: "using" | 'unused'
};

declare type Region = {

  /**
   * 省份标识
   *
   * @type {number}
   */
  provinceId: number,

  /**
   * 省份名称
   *
   * @type {string}
   */
  provinceName: string,

  /**
   * 城市标识
   *
   * @type {number}
   */
  cityId: number,

  /**
   * 城市名称
   *
   * @type {string}
   */
  cityName: string,

  /**
   * 区域标识
   *
   * @type {number}
   */
  districtId: number,

  /**
   * 区域名称
   *
   * @type {string}
   */
  districtName: string
};

declare type BusinessInformationResponse = {

  /**
   * 业务标识
   * yuntu.market.ad.se
   *
   * @type {string}
   */
  businessKey: string,

  /**
   * 业务名称
   *
   * @type {string}
   */
  businessName: string,

  /**
   * 渠道号
   *
   * @type {Array<string>}
   */
  places: Array<string>,

  /**
   * 区域信息列表
   *
   * @type {Array<Region>}
   */
  regions: Array<Region>

};

declare type Leads = {

  /**
   * 业务标识
   *
   * @type {string}
   */
  businessKey: string,

  /**
   * 业务号
   *
   * @type {string}
   */
  businessNumber: string,

  /**
   * 渠道号
   *
   * @type {string}
   */
  placeCode: string,

  /**
   * 手机号码
   *
   * @type {string}
   */
  mobile: string,

  /**
   * 名字
   *
   * @type {string}
   */
  name: string,

  /**
   * 性别
   *
   * @type {gender}
   */
  sex: gender,

  /**
   * 省份标识
   *
   * @type {number}
   */
  provinceId: number,

  /**
   * 省份名称
   *
   * @type {string}
   */
  provinceName: string,

  /**
   * 城市标识
   *
   * @type {number}
   */
  cityId: number,

  /**
   * 城市名称
   *
   * @type {string}
   */
  cityName: string,

  /**
   * 区域标识
   *
   * @type {number}
   */
  districtId: number,

  /**
   * 区域名称
   *
   * @type {string}
   */
  districtName: string,

  /**
   * 购买意图
   *
   * @type {string}
   */
  intention: string,

  /**
   * 备注信息
   *
   * @type {string}
   */
  remark: string
}
