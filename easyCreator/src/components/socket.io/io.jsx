import { useEffect } from 'react';
import socketIOClient from "socket.io-client";

function SocketIO() {
    
    useEffect(() => {
        const socket = socketIOClient('http://204.48.19.221:3500', {
            transports: ['websocket'],
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
        });

         socket.on('connection_fuck',data => {

        console.log('\nCONEXÃO AQUI MEU PARÇA!\n')
        
        })
        
        socket.on('new_message',data => {
        
            console.log('\nNEW MESSAGE\n')
            console.log(data)
        })
        
        socket.emit('select_room',{
            room_name:'nakatorto'   
        })
  
      return () => socket.disconnect(); // Desconecta quando o componente for desmontado
    }, []);
  
    return (
      <div className="App">
        {/* O conteúdo do seu componente */}
      </div>
    );
}

export default SocketIO

