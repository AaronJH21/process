import { fork } from 'child_process'
const forked = fork('child.js')

forked.on('message',msg=>{
    if(msg=='listo'){
        forked.send('hola,')
    }  else{
        console.log(`mensaje del hijo:${msg}`)
    }
})