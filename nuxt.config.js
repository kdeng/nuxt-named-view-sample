export default {
  router: {
    extendRoutes(routes, resolve) {
      const indexIndex = routes.findIndex(route => route.name === 'index')
      let index = routes[indexIndex].children.findIndex(route => route.name === 'index-child-id')
      console.log(routes[indexIndex].children)
      routes[indexIndex].children[index] = {
        ...routes[indexIndex].children[index],
        components: {
          default: routes[indexIndex].children[index].component,
          left: resolve(__dirname, 'components/childLeft.vue')
        },
        chunkNames: {
          left: 'components/childLeft'
        }
      }
      // console.log('after', routes[indexIndex].children)

      // console.log(routes)
      const mainIndex = routes.findIndex(route => route.name === 'main')
      console.log('before', routes[mainIndex])
      routes[mainIndex] = {
        ...routes[mainIndex],
        components: {
          default: routes[mainIndex].component,
          top: resolve(__dirname, 'components/mainTop.vue')
        },
        chunkNames: {
          top: 'components/mainTop',
        }
      }
      console.log('after', routes[mainIndex])

      const cartIndex = routes.findIndex(route => route.name === 'cart')
      console.log('before', routes[cartIndex])
      routes[cartIndex] = {
        ...routes[cartIndex],
        components: {
          default: routes[cartIndex].component,
          footer: resolve(__dirname, 'components/topFooter.vue')
        },
        chunkNames: {
          footer: 'components/topFooter'
        }
      }
      console.log('after', routes[cartIndex])
    
    }
  }
}
