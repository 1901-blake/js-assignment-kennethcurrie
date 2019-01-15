/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let midpoint = someStr.length/2;
    let palindrome=true;
    for (let index = 0; index < midpoint; index++) {
        if(someStr.charAt(index)==someStr.charAt(someStr.length-(index+1))){
            
        }else{
            return false;
        }
    }
    return true
}

//TestCode
console.log("abcba:\t" + isPalindrome("abcba"));
console.log("abba:\t" + isPalindrome("abba"));
console.log("abcdba:\t" + isPalindrome("abcdba"));
console.log("abcddba:\t" + isPalindrome("abcddba"));