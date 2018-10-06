const login = (userData) => ({
  type: 'LOGIN',
  payload: userData,
});

const logout = () => ({
  type: 'LOGOUT',
});

export {
  login,
  logout
};
