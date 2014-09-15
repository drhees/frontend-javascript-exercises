module.exports.createCourse = function(title, duration, students){
                                    return {
                                                'title': title,
                                                'duration': duration,
                                                'students': students
                                            }
                                };

module.exports.addProperty = function(obj, newProp, newVal) {
                                obj[newProp] || function(){ obj[newProp] = newVal }();
                                return obj
                            }

module.exports.formLetter = function(msgObj){
                                
                                var lineEnding = "\n\n"
                                
                                var suffix = function(tokenStr, seperator){
                                    return tokenStr + seperator
                                }
                                var prefix = function(prefixStr, tokenStr){
                                    return prefixStr + tokenStr
                                }

                            return  suffix(prefix("Hello ", msgObj.recipient), "," + lineEnding) +
                                    suffix(msgObj.msg, lineEnding) +
                                    prefix("Sincerely,\n", msgObj.sender)
                                }




module.exports.canIGet = function(item, money){
                                var items = {
                                        'MacBook Air' : 999,
                                        'MacBook Pro' : 1299,
                                        'Mac Pro' : 2499,
                                        'Apple Sticker' : 1
                                        }

                                    return (items[item] && items[item] <= money) || false
                            };