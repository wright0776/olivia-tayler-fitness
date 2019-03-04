
export const login = (credentials) => {
  return dispatch => {
    axios.post('/auth/login', credentials)
      .then(response => {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authenticate(user));
      })
      .catch((erry) => {
        console.error(erry);
        dispatch(authError("login", err.response.status));
      })
  }
}

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
      type: LOGOUT
  }
}
