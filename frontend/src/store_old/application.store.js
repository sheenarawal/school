export default {
  namespaced: true,
  state: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mutations: {
    setTop(state, value){
      state.top = value;
    },
    setLeft(state, value){
      state.left = value;
    },
  },
  getters: {
    getTop(state){
      return state.top;
    },
    getLeft(state){
      return state.left;
    }
  }
}