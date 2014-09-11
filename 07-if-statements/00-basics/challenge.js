module.exports.favoriteNumber = function(favNum, guessNum){
					if (guessNum > favNum){
						return "Too high";
						}
					else if (guessNum < favNum){ 	//is an else if really needed here?
						return "Too low";
						}
					return "You got it!";		//if we haven't returned then I would just return without an else statement
					};

module.exports.checkLock = function(num1, num2, num3, num4){
					
					// I know the point of the exercise is to practice if statements
					// This just feels more concise that a bunch of conditionals
					num1 = (num1 == 3 || num1 == 5 || num1 == 7);
					num2 = (num2 == 2);
					num3 = (num3 >= 5 && num3 <= 100);
					num4 = (num4 < 9 || num4 > 20);

					//One if vs many.
					if (num1 && num2 && num3 && num4){
						return "correct"
					}
					else {
						return "incorrect";
					};
				};

module.exports.canIGet = function(item, money){
				//Same thinking as before. Avoid iffy ifs.
				return (item == "MacBook Air" && money >= 999) ||
					(item == "MacBook Pro" && money >= 1299) ||
					(item == "Mac Pro" && money >= 2499) || 
					(item == "Apple Sticker" && money >= 1);
				};
