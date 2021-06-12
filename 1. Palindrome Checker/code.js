function palindrome(str) {
  str = str.trim().toLowerCase().replace(/[\W_]/g, '');
  let isPalindrome = true;
  let length = str.length;
  for (let i = 0; i < length; i++) {
    if (str[i] !== str[length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

palindrome('eye');
