module.exports = function repeater(str, options) {
    res='';
    if(!options.separator) options.separator='+';
    if(!options.repeatTimes) options.repeatTimes=1;
    if(!options.additionRepeatTimes && options.addition) options.additionRepeatTimes=1;
    for(let i=0; i<options.repeatTimes; i++) {
        res+=str;
        for(let j=0; j<options.additionRepeatTimes; j++) {
            res+=options.addition;
            if(j!==(options.additionRepeatTimes-1)) res+=options.additionSeparator;
        }
        if(i!==(options.repeatTimes-1)) res+=options.separator;
    }
    return res;
};
  