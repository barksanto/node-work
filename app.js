const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

//3 arguments here, middle one converst the weird number unicode to readable text
readFile('./content/first.txt','utf8' ,(err, result)=>{
  if(err){
    console.log(err)
    return;
  }

  const first = result;
  readFile('./content/subfolder/second.txt', 'utf8', (err, result) =>{
  if(err){
    console.log(err)
    return;
  }
  const second = result;

  writeFile(
    './content/result-async.txt',
    `Here is the result: ${first}, ${second}`, 
    (err, result) =>{
      if(err){
        console.log(err);
        return
      }
      console.log(result)
    }
    )

  })
})


