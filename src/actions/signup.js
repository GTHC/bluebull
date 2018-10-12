const updateSUDataRedux = data => ({
  type: 'UPDATE_SU_DATA',
  payload: data,
});

const resetSUDataRedux = () => ({
  type: 'RESET_SU_DATA',
});

export {
  updateSUDataRedux,
  resetSUDataRedux
};
