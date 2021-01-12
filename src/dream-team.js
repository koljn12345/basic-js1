module.exports = function createDreamTeam(members) {
  res='';
  error= false;
  if(!Array.isArray(members)) return false;
  members.map((el)=> { if(typeof el !=='string') error = true;
  else return el.split(' ').join('')[0].toUpperCase()})
  .sort().map((el_)=> {if(typeof el_ ==='string') res+=el_});
  return res;
};