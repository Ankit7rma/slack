import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <HeaderContainer>
    <HeaderLeft>
    <HeaderAvatar/>
    <AccessTimeIcon/>
    </HeaderLeft>
    <HeaderSearch>
<SearchIcon/>
    </HeaderSearch>
     <HeaderRight>

     </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer=styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: #3f0f40;
color: white;
`

const HeaderLeft=styled.div`
flex:0.3;
display:flex;
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right: 30px;
    cursor: pointer;
}
`

const HeaderAvatar=styled(Avatar)`
cursor: pointer;
:hover{
  opacity: 0.8;
}
`

const HeaderSearch = styled.div`

`
const HeaderRight = styled.div`

`