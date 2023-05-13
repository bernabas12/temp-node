const {readFileSync,writeFileSync} = require('fs')
console.log('strting')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-synch.txt',second,{flag: 'a'})
console.log('done with the task')
console.log('starting the next task')