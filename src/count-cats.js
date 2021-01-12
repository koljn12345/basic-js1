module.exports = function countCats(matrix) {
  let count=0;
  matrix.map((el,i)=>{
    el.map((el_,i_)=>{
      if(el_==='^^') count++;
    })
  })
  return count;
};
