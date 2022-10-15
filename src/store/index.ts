import { createStore } from "vuex";

export default createStore({
  state: {
    user: null as any,
  },
  getters: {
    getWelcomeMessage(state) {
      return state.user.name;
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    login(context, data) {
      context.commit("setUser", data);
      localStorage.setItem("user-info", JSON.stringify(data));
    },
  },
  modules: {},
});
