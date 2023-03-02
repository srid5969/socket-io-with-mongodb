// import { register } from "../service/user";
import { Server, Socket } from "socket.io";

export async function registerHandlers(io: Server, socket: Socket) {
  console.log(`New connection  ${socket.id}`);
  console.log(socket.rooms);

  socket.on("register", async (data: any) => {
    // const Data = await register(data);
    // socket.emit("register", Data);
  });
}
export async function demo(io: Server, socket: Socket){
  console.log('a user connected');

  socket.emit("demo",{message:"Hello World"})
  socket.on('demo',(data)=>{
    console.log(data);
    
  })
}