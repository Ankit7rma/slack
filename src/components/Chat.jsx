import styled from "styled-components";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import { selectRoomId } from "./features/appSlice";
import ChatInput from "./ChatInput";

const Home = () => {
  const roomId = useSelector(selectRoomId)
  return (
    <ChatContainer>
    <>
    <Header>
      <HeaderLeft>
        <h4>
          <strong>#Room-Name</strong>
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
      {/* chat messages */}
    </ChatMessages>
    <ChatInput
     channelName
      channelId={roomId}
    />
    </>
    </ChatContainer>
  )
}

export default Home;

const ChatMessages= styled.div``



const ChatContainer = styled.div`
margin-top: 60px;
overflow-y: scroll;
flex-grow: 1;
/* flex: 0.7; */
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