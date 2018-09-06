var katzDelLine = [];
i = 1
function takeANumber (num, name) {
var line = parseInt(num) + i
  katzDelLine.push(name)
  return (`Welcome, ${name}. You are number ${line} in line.`)
}