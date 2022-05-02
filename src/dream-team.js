const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  res='';
  error= false;
  if(!Array.isArray(members)) return false;
  members.map((el)=> { if(typeof el !=='string') error = true;
  else return el.split(' ').join('')[0].toUpperCase()})
  .sort().map((el_)=> {if(typeof el_ ==='string') res+=el_});
  return res;
}


module.exports = {
  createDreamTeam
};
