var line = [];
function takeANumber(line, name){
  line.push(name);
  
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line){
  let i = 0
  while (line > i ){
  i +=1
  return (`Currently serving ${line}.`)
  }
  else if (line === 0); {
    return "The line is currently empty."

  }
}