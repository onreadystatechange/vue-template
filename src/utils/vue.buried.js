/*jslint forin: true, plusplus: true, sloppy: true, vars: true*/
//
//  vue.buried.js Vue埋点插件.
//  Version 1.0.0
//  
//  Created by pandali on 17-09-14.
//  Copyright (c) 2016年 yaomaiche. All rights reserved.
//


/* @flow */
import { container, config, ui} from '../landrover/business/index'
import UBTService from '../service/ubt.service'

export default {
  install(Vue, options) {
    /**
     * @param {string} pageId
     * @param {string} pageName
     * @param {string} eventAction: 'click' | 'pageShow' | 'pageEnd'
     * @param {string} eventLabel 事件描述.
     * @param {any} pageParameters
     */
    Vue.directive('buried', {
      // 存储回调函数.
      fn: null,
      bind (el, binding) {
        const value = binding.value
        if(value) {
          el.addEventListener('click',() => {
            container.ubtService.report(
              value.pageId,
              value.pageName,
              value.eventAction,
              value.eventLabel
            )
          })
        }  
      },
      componentUpdated(fn) {
        
      },
      unbind (el) {
        // 卸载，别说了都是泪
        this.el.removeEventListener('click',this.fn)
      }
    })
  }
}