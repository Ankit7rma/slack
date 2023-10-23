import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({chatRef, channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth)
  const timestamp = serverTimestamp();
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("button clicked");

    if (channelId) {
      //   db.collection("rooms").doc(channelId).collection("messages").add({
      //     message:input, 
      //     timestamp,
      //     user:"Ankit",
      //     userImage:"abcurl.com"
      //   })
      // }else{
      //   return false
      // }

      const messagesRef = collection(db, "rooms", channelId, "messages");

      const newMessage = {
        message: input,
        timestamp: serverTimestamp(),
        user:user?.displayName,
        userImage:user?.photoURL,
      };

      addDoc(messagesRef, newMessage)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      return false;
    }
    chatRef?.current?.scrollIntoView(
      {behavior:"smooth"}
    ); 
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${channelName}`}
        />
        <button hidden type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  margin-left: 10px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
    padding: 10px;
    font-size: 20px;
  }
`;
