import styled from "styled-components";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";

// eslint-disable-next-line react/prop-types
const SidebarOptions = ({Icon,title,addChannelOption}) => {
  const addChannel=async()=>{
    const channelName = prompt("Enter the Channel Name");
    
      if(channelName){const docRef = await addDoc(collection(db, "rooms"), {
        name:channelName
      });}
    
    
  };
  const selectChannel=()=>{};
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

const SidebarOptionChannel = styled.div`

`