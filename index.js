var katzDelLine = [];
function takeANumber (num, name) {
  katzDelLine.push(name)
  var line = (parseInt(num) + 1)
  return (`Welcome, ${name}. You are number ${line} in line.`)
}