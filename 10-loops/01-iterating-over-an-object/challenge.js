module.exports.getKeys = function(obj){
        return Object.keys(obj);
    };

module.exports.getValues = function(obj){
        var objArray = [];
        for (i in obj){ 
            objArray.push(obj[i]);
        }
        return objArray
    };

module.exports.objectToArray = function(obj){
        var objArray = [];
        for (i in obj){
            objArray.push(i + ' is ' + obj[i]);
        }
        return objArray
    };