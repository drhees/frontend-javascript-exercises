module.exports.addItem = function(item, itemList){
				if(itemList.indexOf(item) < 0){
					itemList.push(item)
				}
				return itemList
			};

module.exports.reverseSortedList = function(itemList){
					itemList.sort();
					itemList.reverse();
					return itemList
					};
