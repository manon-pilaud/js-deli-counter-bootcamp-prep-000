var katzDelLine = [];
function takeANumber (line, name) {
  katzDelLine.push(name)
  return (`Welcome, ${name}. You are number ${parseInt(line) + 1} in line.`)
}