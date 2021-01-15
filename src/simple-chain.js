const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: '',
  getLength() {
    return this.str.split('~~').slice(0,-1).length;
  },
  addLink(value) {
    this.str+='( '+value+' )~~';
    return this
  },
  removeLink(position) { 
    let length= this.getLength();
    if(position> length || position<=0 || typeof position !='number')  {
      this.str='';
      throw 'Not implemented' }
    else
    {this.str= this.str.split('~~').slice(0,-1);
    this.str.splice(position-1,1);
    this.str=this.str.join('~~')+'~~';} 
    return this;
  },
  reverseChain() {
    this.str ? this.str= this.str.split('~~').slice(0,-1).reverse().join('~~')+'~~': 0;
    return this;
  },
  finishChain() {
    res= this.str.split('~~').slice(0,-1).join('~~');
    this.str='';
    return res;
  }
};

module.exports = chainMaker;
