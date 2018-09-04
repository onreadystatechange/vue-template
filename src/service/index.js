// @flow
import Service from '../landrover/business/service/base.service'

export default class MALLService extends Service {

  constructor() {
    // 初始化行为
    super()
    this.baseUrl = this.getBaseUrl()
  }

  setup() {
    return super.setup()
    // 启动行为
  }

  _getBaseUrl() {
    const url = {
      dev: '',
      gqc: '',
      prd: ''
    }    
    return url
  }
  // 业务接口务按照下列方法来书写
  //
  // /**
  //  * 实例接口
  //
  //  * @param {string} exampleParam1
  //  * @param {number} exampleParam2
  //  * @returns {Promise<exampleResponse>}
  //  * @memberof Service
  //  */
  // exampleRequest(exampleParam1: string, exampleParam2: number): Promise<exampleResponse> {
  //   return this.request(
  //     'cgi/examplePath',
  //     'GET',
  //     {
  //       exampleParam1,
  //       exampleParam2
  //     }
  //   )
  // }
  
  /**
   * 获取banenr列表.
   * @memberof banner
   */
  getBannerListRequest(){
    return this.request(
      'banner',
      'GET',
      {}
    )
  }
  
}
