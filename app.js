function sortString(string) {
  if (typeof string !== 'string') {
    return alert('please input a string')
  }
  return string.split('').sort().join('')
}



