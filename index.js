function takeANumber(Line,Person){
  if(Line.length>0);
    Line.push(Person)

    return `Welcome, ${Person}. You are number ${Line.length} in line.`
  }
function nowServing(Line){
  if(Line.length>0){
   Line.unshift()
 return `Currently serving ${Line}`
 }
  else if(Line.length===0){
    return `There is nobody waiting to be served!`
  }
}

function currentLine(Line){
  if (Line.length===0){
     return `The line is currently empty.`
 }
  for (let i=0;i<Line.length;i++){
   Line.push(`${i+1}.${Line[i]},`)
}
return `The line is currently: ${Line}`
}
