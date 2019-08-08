function isAlphaNumeric(value) {
  const constraint = /^[A-Za-z0-9- ]+$/;
  return constraint.test(value);
}

export { isAlphaNumeric };
