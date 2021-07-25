const isFullNameValid = (name) => {
  //    I checked and there is possibility of having a name of one letter :)
  if (!name || name.length < 3 || name.indexOf(' ') < 1) {
    return false;
  }
  return true;
};

export default isFullNameValid;
