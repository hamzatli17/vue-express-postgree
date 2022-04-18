import axios from "axios";

const state = {
  user: null,
  inscriptions: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateInscriptions: (state) => state.inscriptions,
  StateUser: (state) => state.user,
};

const actions = {
 

  async LogIn({commit}, user) {
    await axios.post("api/auth/", user);
    await commit("setUser", user.get("user_id"));
  },

  async confirmInscriptions({ commit }) {
    let inscription = await axios.get(`api/inscriptions/${id}`);
    await axios.put(`api/inscriptions/confirm/${id}`);
  },

  async GetInscriptions({ commit }) {
    let response = await axios.get("api/inscriptions/all");
    commit("setInscriptions", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, user_id) {
    state.user = username;
  },

  setInscriptions(state, inscriptions) {
    state.inscriptions = inscriptions;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
