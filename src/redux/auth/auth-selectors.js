const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsLogging = state => state.auth.isLogging;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsLogging,
};
export default authSelectors;
