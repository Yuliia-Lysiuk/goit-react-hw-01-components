import {Status, Name} from "./FriendItem.styled"

export function FriendItem({ avatar, name, isOnline }) {
    return (<>
        <Status isOnline={isOnline}></Status>
  <img  src={avatar} alt="User avatar" width="60" />
  <Name >{name}</Name></>
   )  
}
