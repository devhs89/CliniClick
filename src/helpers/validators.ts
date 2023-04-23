// Validation Middleware

export const emailValidator = (val) => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
};

export const passwordValidator = (val) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(val);
};

export const phoneValidator = (val) => {
  return /^\+\d{1}-\d{3}-\d{3}-\d{4}$/.test(val);
};