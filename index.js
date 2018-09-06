var katzDelLine = [];
function takeANumber (line, name) {
  katzDelLine.push(name)
  line +=1
  return (`Welcome, ${name}. You are number ${line} in line.`)
}