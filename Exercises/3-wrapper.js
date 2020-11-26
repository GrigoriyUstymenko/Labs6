'use strict';


const contract = (fn, ...types) => (...args) => {
  let sameTypes = true;
  for (let i = 0; i < args.length; i++) {
    const def = types[i];
    const argument = args[i];
    sameTypes = typeof argument === def.name.toLowerCase();
    if (!sameTypes) {
      throw new TypeError('This is an error, deal with it');
    }
  }
  const last = types.length - 1;
  const res = fn(...args);
  sameTypes = typeof res === types[last].name.toLowerCase();
  if (!sameTypes) {
    throw new TypeError('This is an error, deal with it');
  }
  return res;
};

module.exports = { contract };
