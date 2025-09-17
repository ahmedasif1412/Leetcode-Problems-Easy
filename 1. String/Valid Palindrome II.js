function validPalindrome2(s) {
  let left = 0;
  let right = s.length - 1;

  // isPalindrome(str, l, r) will take values of the parameter from the ln.20 and based on the removal of left or right it will return the value to ln.20.
  function isPalindrome(str, l, r) {
    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1) //this isPalindrome(s, left + 1, right) and this isPalindrome(s, left, right - 1) will accept the result from the function isPalindrome(str, l, r) and if either of the value is true the final return value will be true since there is || (OR logical opearator b/w them and this is what we want because if the removal of either left or right makes the palindrome valid then it is a valid palindrome.)
      );
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome2("baaa"));
console.log(validPalindrome2("aaddbaa"));
console.log(validPalindrome2("aapkbaa"));
