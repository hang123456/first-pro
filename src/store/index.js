import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        product: []
    },
    mutations: {
        addProcudt(state, delay) {
            let oldProduct = null
          for(let item of state.product){
              if(item.iid === delay.iid){
                 oldProduct = item
              }
          }
          if(oldProduct){
              oldProduct.count += 1
          }else{
              delay.count = 1
              state.product.push(delay)
          }
        }
    }
})
export default store