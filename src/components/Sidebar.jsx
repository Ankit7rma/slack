import styled from "styled-components"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {
  return (
    <SidebarContainer>
    <SidebarHeader>
        <SidebarInfo>
        <h2>Ankit Sharma</h2>
        <h3><FiberManualRecordIcon/>
        Frontend </h3>
        </SidebarInfo>
        <CreateIcon/>
    </SidebarHeader>
    <SidebarOptions/>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
flex: 0.3;
background-color: #3f0f40;
height: 100vh;
color: white;
border-top: 1px solid #49274b;
padding-top: 60px;
max-width: 260px;
`

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
> .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    background-color: white;
    border-radius: 999px;
    font-size: 36px;

}
`

const SidebarInfo = styled.div`
flex: 1;
>h2{
    font-size: 15px;
    font-weight: 700;
    margin-bottom:5px;
}
>h3{
    display: flex;
    font-size: 13px;
    font-weight: 500;
    align-items: center;
}
 >h3 >  .MuiSvgIcon-root{
    color: green;
    font-size:18px;
    margin-top: 1px;
}
`