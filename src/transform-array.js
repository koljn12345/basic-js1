module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error('hj');
    for(let i=0; i<arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                i==arr.length-1 ? arr.splice(i,1) : arr.splice(i,1,arr[i+1]);
                break; 
            case '--double-prev':
                i==0 ? arr.splice(i,1): arr.splice(i,1,arr[i-1]);
                i==0 ? i--: i;
                break;     
            default:
                break;
        }
    }
    for(let i=0; i<arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i==arr.length ? arr.splice(i,1): arr.splice(i,2);
                i-=2;
                break;
            case '--discard-prev':
                i==0 ? arr.splice(i,1) : arr.splice(i-1,2);
                i==0 ? i--: i-=2;
                break;            
        }
    }
    return arr;
};
