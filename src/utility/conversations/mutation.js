export default {
  sendChat(state, chat) {
    state.history.push({ user: chat });
    state.history.push({ system: "aaa" });
  },
};
