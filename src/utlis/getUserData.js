import { token } from "../token";

const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
};

const getUserData = (url) => {
  return fetch(`${url}?access_token=${token}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getDataUser falid ${err}`);
    });
};
export default getUserData;
