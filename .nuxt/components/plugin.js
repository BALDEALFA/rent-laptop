import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
