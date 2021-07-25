const isDomainValid = (domain) => {
  // this is a bit not DRY
  if (!domain || domain.length < 3 || domain.indexOf('.') < 1) {
    return false;
  }
  return true;
};

export default isDomainValid;
