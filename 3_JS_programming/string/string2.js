//checking whether string is Palindrome or not
function isPalindrome(str) 
{
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));
