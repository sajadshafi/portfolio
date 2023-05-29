// Validation schemas for the login page

export const email = {
  required: 'Email field is required',
  pattern: {
    value:
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email is not valid!',
  },
};

export const name = {
  required: 'Name is required',
};

export const subject = {
  required: 'Subject is required',
  minLength: {
    value: 10,
    message: 'Name cannot be less than 10 characters',
  },
};

export const message = {
  required: 'Message is required',
  minLength: {
    value: 20,
    message: 'Name cannot be less than 20 characters',
  },
};

export default { email, name, subject, message };
