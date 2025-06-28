const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === 'auth/login') {
    localStorage.setItem('user', JSON.stringify(action.payload));
  }

  if (action.type === 'auth/logout') {
    localStorage.removeItem('user');
  }

  return result;
};

export default localStorageMiddleware;