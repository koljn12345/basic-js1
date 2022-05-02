const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
      let res=[];
        for(let i=0; i<arr.length; i++) {
            arr[i]== '--discard-next' ? i++ : 
                arr[i] == '--discard-prev' ? 
                    (res.length !=0 ? arr[i-2] != '--discard-next' ? res.pop() : 0:0) :
                        arr[i] == '--double-next' ? res.push(arr[i+1]) :
                            arr[i] == '--double-prev' ?  
                                (i!=0 ? arr[i-2] != '--discard-next' ? res.push(arr[i-1]) : 0:0) : 
                                res.push(arr[i])

        }
    return res.filter((el)=> el!=undefined);
}

module.exports = {
  transform
};
