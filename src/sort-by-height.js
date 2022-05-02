const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  for(let i=0; i<arr.length-1;i++) {
    for(let j=0; j<arr.length-i-1; j++) {
      if(arr[j]!=-1 && arr[j]>arr[j+1]) {
        if(arr[j+1]!=-1) {
          let temp= arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp
        }
        else{
          let endJ= arr.length-i-1
          let count =1 
          while(arr[j+count]==-1 && j+count<endJ) {
            count++;
          }
          if(arr[j+count] && arr[j+count]!=-1 && arr[j]>arr[j+count]) {
            let temp= arr[j]
            arr[j]=arr[j+count]
            arr[j+count]=temp
          }
        }
      }
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
