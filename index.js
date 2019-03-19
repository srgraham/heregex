
module.exports = (str, flags)=>{
  let regex = str.raw[0].replace(/(\s|^)#.*$/gm, '').replace(/\s+/gm, '');
  return new RegExp(regex, flags);
};



