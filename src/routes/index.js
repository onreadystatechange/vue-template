import Home from '@/pages/Home'

export default  [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title:'首页'
    },
    component: Home
  }
]

