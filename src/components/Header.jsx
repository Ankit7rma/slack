import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
   const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar 
        onClick={()=> auth.signOut()}
        src={user?.photoURL}
        alt={user?.displayName}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
      <input placeholder="Search..."/>
        <SearchIcon />
      </HeaderSearch>
      <HeaderRight>
    <HelpOutlineIcon/>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #3f0f40;
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
flex:0.4;
opacity: 1;
display: flex;
width: 100%;
border-radius: 10px;
background-color: #421f44;
text-align: center;
justify-content: center;
padding: 5px 10px;
border: 1px solid gray;
>input{
  outline: 0;
  border-radius: none;
  background-color: transparent;
  min-width: 35vw;
  color: white;
}
`;
const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;
> .MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 20px;
}
`;
