import {io} from 'socket.io-client'

export function connect(socket) {
    if(socket.connected){
        return {socket}
    }
    else{
        socket.on("connect", ()=>{

        })
    }
}
