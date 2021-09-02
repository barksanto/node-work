const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
console.log('start')

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
      // console.log(result)
      console.log('done with this task')
    }
    )

  })
})

//if I run this with node 11-fs-async.js the application will continue and is async safe
//it's not going lineby line, start a tast, offload it, start the next one before the other is finished
console.log('starting next task')
