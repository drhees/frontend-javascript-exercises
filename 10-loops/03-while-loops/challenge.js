module.exports.stream = function(conditionFn, actionFn){
        while(conditionFn()){
            actionFn();
        }
    };

module.exports.sumNumbers = function(numArray){
        var sumNum = 0;
        while(numArray.length > 0){
            sumNum += numArray.pop();
        }
        return sumNum;
    };

