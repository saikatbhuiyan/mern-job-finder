const reducer = (state, action) => {
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
