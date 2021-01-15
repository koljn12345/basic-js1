module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    turns = Math.pow(2,disksNumber)-1;
    seconds = Math.floor(turns*1/(turnsSpeed/3600));
    return {
        turns : turns, 
        seconds : seconds
    }
}
