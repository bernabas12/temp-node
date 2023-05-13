const {readFile,writeFile} = require('fs')
console.log('starting tasks')

readFile('./content/first.txt','utf8',(err,result) =>{
    if(err)
    {
        console.log(err)
        return
    }
    const first = result 

    readFile('./content/second.txt','utf8',(err,result)=> {
        if(err)
    {
        console.log(err)
        return
    }
    const second = result

    writeFile('./content/result-asynch.txt','here is the result',
    (err,result)=> {
        if(err)
        {
            console.log(err)
            return
        }
        console.log('done with the task')
        
    })
    }
    )
   }
   
)

console.log('starting the next task')