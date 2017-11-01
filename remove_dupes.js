function removeDupes(string) {
  string = string.replace(/[,. !&?]/g, '');
  return string
    .toLowerCase()
    .split('')
    .filter(function(item, index, theOriginalArray) {
      return theOriginalArray.indexOf(item) == index;
    })
    .sort()
    .join(',');
}
console.log(removeDupes('this is a test of the emergency broadcast system. This is only a test.'));
