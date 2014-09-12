module.exports.newArray = function(a1, a2, a3, a4){
		return [a1, a2, a3, a4];
		}

module.exports.firstAndLast = function(arr){
				//return [arr.shift(), arr.pop()];
				return [arr[0], arr[arr.length - 1]];
				};
