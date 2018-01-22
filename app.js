function sortString(string) {
  if (typeof string !== 'string') {
    return alert('please input a string')
  }
  addToSortedList(string.split('').sort().join(''))
  return string.split('').sort().join('')
}

const sortedList = [];

function addToSortedList(string) {
  sortedList.unshift(string)
}

function displayList(array) {
  array.forEach((word) => {
    console.log(word)
  })
}


