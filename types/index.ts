import { User } from "@clerk/nextjs/server"

export type SocketUser={
    userId:string,
    socketId:string,
    profile:User
}

export type OngoingCall={
    participants:Participants;
    isRinging:boolean;
}

export type OngoingCall={
    caller:SocketUser;
    receiver:SocketUser;
}
