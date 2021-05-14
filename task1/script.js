function deepCopying(obj) {
  const clone = {};
  for(const i in obj) {
    if (obj[i] instanceof Object) {
      clone[i] = deepCopying(obj[i]);
      continue;
    }
    clone[i] = obj[i];
  }
  return clone;
}