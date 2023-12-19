const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const routes = {
  users: {
    login: `${BASE_URL}/login/`,
    signup: `${BASE_URL}/signup/`,
    logout: `${BASE_URL}/logout/`,
  },
};

export default routes;
