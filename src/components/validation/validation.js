export const validateLogin = (login, password, CORRECT, WRONG) => {
  const LOGIN = "Bon";
  const PASSWORD = "appetit";
  if (LOGIN === login && PASSWORD === password) {
    CORRECT(true);
  } else {
    WRONG();
  }
};
