import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _708facd7 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _03b372e3 = () => interopDefault(import('../components/topFooter.vue' /* webpackChunkName: "components/topFooter" */))
const _6fab42f0 = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _6b7085a2 = () => interopDefault(import('../components/mainTop.vue' /* webpackChunkName: "components/mainTop" */))
const _6731f72b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0e9ad5fe = () => interopDefault(import('../pages/index/section.vue' /* webpackChunkName: "pages/index/section" */))
const _7a39eaa6 = () => interopDefault(import('../pages/index/child/_id/index.vue' /* webpackChunkName: "pages/index/child/_id/index" */))
const _7d640d56 = () => interopDefault(import('../components/childLeft.vue' /* webpackChunkName: "components/childLeft" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cart",
      components: {
        default: _708facd7,
        footer: _03b372e3
      },
      name: "cart"
    }, {
      path: "/main",
      components: {
        default: _708facd7,
        footer: _03b372e3
        default: _6fab42f0,
        top: _6b7085a2
      },
      name: "main"
    }, {
      path: "/",
      component: _6731f72b,
      name: "index",
      children: [{
        path: "section",
        component: _0e9ad5fe,
        name: "index-section"
      }, {
        path: "child/:id?",
        components: {
          default: _7a39eaa6,
          left: _7d640d56
        },
        name: "index-child-id"
      }]
    }],

    fallback: false
  })
}
