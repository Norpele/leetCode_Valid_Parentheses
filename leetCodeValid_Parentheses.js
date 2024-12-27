/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let brackets = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    for(let char of s){
        if(brackets.has(char)){
            stack.push(char);
        }else{
            let last = stack.pop();
            if(brackets.get(last) !== char){
                return false;
            }
        }
    }

    return stack.length === 0;
};
