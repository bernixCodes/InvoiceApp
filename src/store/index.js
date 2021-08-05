import { createStore } from 'vuex'

export default createStore({
  state: {
    showInvoiceModal: null
  },
  mutations: {
    toggleModal(state) {
      state.showInvoiceModal = !state.showInvoiceModal;
    }
  },
  actions: {
  },
  modules: {
  }
})
