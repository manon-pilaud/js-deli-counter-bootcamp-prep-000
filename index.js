var line = [];
function takeANumber(line, name){
  line.push(name);
  
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

	function nowServing(line) {
  while (true) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${line.shift()}.`);
}
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  list_line = []
  for (var i=0; i<line_length ;i+=1){
    list_line.push(i+1'.')
  }
  
  
}

