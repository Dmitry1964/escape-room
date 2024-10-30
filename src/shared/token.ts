const TOKEN_KEY_NAME = 'escape-room-token';

type Token = string;

export const getToken = () : Token => {
  const token = localStorage.getItem(TOKEN_KEY_NAME);
  return token ?? '';
};

export const setToken = (token : Token) => localStorage.setItem(TOKEN_KEY_NAME, token);
export const dropToken = () : void => localStorage.removeItem(TOKEN_KEY_NAME);
