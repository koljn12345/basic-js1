module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error();
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
};
