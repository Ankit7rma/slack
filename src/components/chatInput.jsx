import { useRef, useState } from "react";
import styled from "styled-components";

const ChatInput = ({channelName,channelId}) => {
  const [input,setInput] = useState("")  
  const sendMessage = (e)=>{
        e.preventDefault();

        if(!channelId){
          return false
        }
        setInput("");
    }
    console.log(input)
  return (
    <ChatInputContainer>
    <form>
        <input value={input}  
        onChange={(e)=>setInput(e.target.value)}
        placeholder={`Message #Room`}/>
        <button hidden type="submit" onClick={sendMessage}>
            Send
        </button>
    </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;
margin-left: 10px;
>form{
  position: relative;
  display: flex;
  justify-content: center;
}
>form>input{
  position: fixed;
  bottom: 30px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 3px;
  outline: none;
  padding: 10px;
  font-size: 20px;
}

`