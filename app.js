function sortString(string) {
  if (typeof string !== 'string') {
    return alert('please input a string')
  }
  addToSortedList(string.split('').sort().join(''))
  return 
}

const sortedList = [];

function addToSortedList(string) {
  sortedList.unshift(string)
}

function displayList(array) {
  array.forEach((word) => {
    return word
  })
}


