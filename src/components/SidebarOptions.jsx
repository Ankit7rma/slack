import styled from "styled-components";
import { useCollection } from 'react-firebase-hooks/firestore';

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase";

// eslint-disable-next-line react/prop-types
const SidebarOptions = ({Icon,title,addChannelOption}) => {
  const [value, loading, error] = useCollection(
    collection(db, 'rooms'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
   
  // Now you can access the data, loading, and error
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(value)
  const addChannel=async()=>{
    const channelName = prompt("Enter the Channel Name");
    const timeStamp = serverTimestamp()
    
      if(channelName){const docRef = await addDoc(collection(db, "rooms"), {
        name:channelName,
        timeStamp
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