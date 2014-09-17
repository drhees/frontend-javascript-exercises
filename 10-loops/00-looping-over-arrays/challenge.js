module.exports.sumNumbers = function(arr){
    var sum = 0;
    
    for (var n = 0; n < arr.length; n++){
        sum += arr[n];
    }

    return sum
}

module.exports.splitAndLowerCaseString = function(splitStr){
        return splitStr.toLowerCase().split(',');
    };

module.exports.addIndex = function(arr){
        var newArr = arr.slice(0, arr.length); //shallow copy array
        
        newArr.forEach(function(val, index, arr){ //functional way
            arr[index] = index + " is " + val;
        });
        
        return newArr
    };
