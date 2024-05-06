//Checking two strings are Anagrams 
function areAnagrams(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }   
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
// Test cases
console.log(areAnagrams("listen", "silent"));  
console.log(areAnagrams("hello", "world"));  
console.log(areAnagrams("astronomer", "moonstarer")); 
