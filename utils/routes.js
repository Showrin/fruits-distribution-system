const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const routes = {
  users: {
    login: `${BASE_URL}/login/`,
    signup: `${BASE_URL}/signup/`,
    logout: `${BASE_URL}/logout/`,
  },
  fruits: {
    list: `${BASE_URL}/fooditems/`,
    book: `${BASE_URL}/fruitbook/`,
  },
};

export default routes;
