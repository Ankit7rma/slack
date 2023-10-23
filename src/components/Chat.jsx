import styled from "styled-components";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import { selectRoomId } from "./features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Home = () => {
  const chatRef = useRef(null)
  // const roomId = useSelector(selectRoomId)
  // const [roomDetails] = useDocument(roomId&& db.collection("rooms").doc(roomId);
  // const [roomMessages] = useCollection(
  //   roomId && 
  //   db.collection("rooms").doc(roomId)
  //   .collection("messages")
  //   .orderBy("timestamp","asc")
  // )
  // Use the roomId from your Redux store
const roomId = useSelector(selectRoomId);

// Use the Firestore hooks to fetch room details and messages
const roomRef = roomId && doc(collection(db, 'rooms'), roomId);
const messagesQuery =
  roomId &&
  query(
    collection(doc(collection(db, 'rooms'), roomId), 'messages'),
    orderBy('timestamp', 'asc')
  );

const [roomDetails] = useDocument(roomRef);
const [roomMessages] = useCollection(messagesQuery);
useEffect(()=>{
  chatRef?.current?.scrollIntoView(
    {behavior:"smooth"}
  );

},[roomId,roomMessages])

// // Check if loading or error occurred
// if (loadingRoomDetails || loadingRoomMessages) {
//   return <p>Loading...</p>; // Replace with your loading indicator
// }

// if (errorRoomDetails || errorRoomMessages) {
//   return <p>Error loading data</p>; // Replace with your error handling
// }
  
  
  return (
    <ChatContainer>
    {roomDetails&& roomMessages&&(
      <>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomDetails?.data().name}</strong>
          </h4>
          <StarBorderIcon/>
        </HeaderLeft>
        <HeaderRight>
          <InfoIcon/>
        <p>Details
        </p>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {roomMessages?.docs.map((doc)=>{
          const {message,timestamp,user,userImage} = doc.data();
          return (
            <Message
            key={doc.id}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            />
          )
        })}
        <ChatBottom ref={chatRef}/>
      </ChatMessages>
      <ChatInput
      chatRef={chatRef}
       channelName={roomDetails?.data().name}
       channelId={roomId}
      />
      </>
    )}
    </ChatContainer>
  )
}

export default Home;

const ChatBottom = styled.div`
padding-bottom:20px;
height: 70px;
`
const ChatMessages= styled.div``



const ChatContainer = styled.div`
margin-top: 60px;
overflow-y: scroll;
flex-grow: 1;
flex: 0%.8;
width: 100%;
display: flex;

flex-direction: column;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
display:flex;
gap: 3px;
font-size: 16px;
align-items: center;
`
const HeaderRight = styled.div`
display:flex;
gap: 3px;
font-size: 16px;
align-items: center;
justify-content: center;
`