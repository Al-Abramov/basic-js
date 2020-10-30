const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }else {
  return members.filter(item => typeof item === 'string').map(a => a.trim().toUpperCase().slice(0, 1)).sort().join('');
}
}