var katzDelLine = [];
function takeANumber (name, line) {
  katzDelLine.push(name)
  return (`Welcome, ${name}. You are number ${parseInt(line) + 1} in line.`)
}