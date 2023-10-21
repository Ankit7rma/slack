import styled from "styled-components";

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "./features/appSlice";

// eslint-disable-next-line react/prop-types
const SidebarOptions = ({Icon,title,addChannelOption, id}) => {
  const dispatch = useDispatch()
 
  const addChannel=async()=>{
    const channelName = prompt("Enter the Channel Name");
    const timeStamp = serverTimestamp()
    
      // eslint-disable-next-line no-unused-vars
      if(channelName){const docRef = await addDoc(collection(db, "rooms"), {
        name:channelName,
        timeStamp
      });}
    
    
  };
  const selectChannel=()=>{
    if(id){
      dispatch(enterRoom({
        roomId:id
      }))
    }
  };
  return (
    <SidebarOptionContainer  onClick={addChannelOption ? addChannel : selectChannel }>
    {Icon && <Icon />}
    {Icon?(
      <h3>{title}</h3>
    ):(
      <SidebarOptionChannel>
       <span>#</span>{title}
      </SidebarOptionChannel>
    )}
  </SidebarOptionContainer>
  );
};

export default SidebarOptions;

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 14px;
align-items: center;
margin: 2px;
padding: 2px;
cursor: pointer;

:hover{
  opacity: 0.9;
  background-color: #340e36;
}
`

const SidebarOptionChannel = styled.h3`
padding: 10px 0;
font-weight: 400;
>span{
  margin-right:5px ;
  margin-left:5px ;
}

`