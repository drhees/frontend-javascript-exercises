module.exports.copy = function(obj){
        var target = new Object;
        for (val in obj){
            target[val] = obj[val];
        }
        return target
    };

module.exports.extend = function(dest, src){
        for (val in src){
            dest[val] = src[val];
        }
        return dest
    };

module.exports.hasElems = function(obj, arr){
        var objKeys = Object.keys(obj);
        
        for (n in arr){
            if (objKeys.indexOf(arr[n]) < 0){
                return false
            }
        }
        return true
    };