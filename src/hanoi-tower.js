module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    throw 'Not implemented';
    turns = Math.pow(2,disksNumber);
    seconds = (turns/turnsSpeed)*3600;
    return {
        turns : turns,
        seconds : seconds
    }
}