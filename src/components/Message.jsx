import styled from "styled-components";

const Message = ({message,timestamp,user,userImage}) => {
  return (
    <MessageContainer>
        <img src={userImage} alt="UserImage"/>
     </MessageContainer>
  )
}

export default Message;


const MessageContainer = styled.div``