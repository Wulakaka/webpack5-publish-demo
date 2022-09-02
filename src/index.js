// import './style.css'
import './button.scss'

// 静态加载可以 tree shaking
// import print from "./print";
// print()

// 放在方法里依然会加载
// const loadComponent = () => import(/* webpackChunkName: "print" */ './print').then((module) => {
//   module.default()
// })
//
// if (process.env.NODE_ENV === 'development') {
//   loadComponent()
// }

// 此种方式可以排除print包
if (process.env.NODE_ENV === 'development') {
  import(/* webpackChunkName: "print" */ './print').then((module) => {
    module.default()
  })
}
