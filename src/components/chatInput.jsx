import styled from "styled-components";

const ChatInput = ({channelName,channelId}) => {
    const sendMessage = (e)=>{
        e.preventDefault();
    }
  return (
    <ChatInputContainer>
    <form>
        <input placeholder={`Message #Room`}/>
        <button hidden type="submit" onClick={sendMessage}>
            Send
        </button>
    </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div``