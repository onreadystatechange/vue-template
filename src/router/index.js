import store from '../store/'
import { container, ui} from '../landrover/business/index'
export default (router) => {

  router.beforeEach(({meta, path}, from, next) => {
    const { auth = false } = meta
    const isLogin = Boolean(store.state.user.userId)
    const user = store.state.user
    const that = this
		if (auth && !isLogin && path !== '/login') {
		  return next({ path: '/login' })
		}
 
    switch (path) {
      case '/mine':

        break
      default:

        break
    }
		next()
	})


}
