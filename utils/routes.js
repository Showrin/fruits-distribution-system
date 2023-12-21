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
  fields: {
    list: `${BASE_URL}/field/fieldlist/`,
    book: `${BASE_URL}/field/book/`,
  },
  checkDisease: {
    predict: `${BASE_URL}/prediction/`,
  },
};

export default routes;
