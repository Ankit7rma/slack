import styled from "styled-components"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import { useCollection } from 'react-firebase-hooks/firestore';

import { collection} from "firebase/firestore"; 
import { db } from "../firebase";



const Sidebar = () => {
    const [channels, loading, error] = useCollection(
        collection(db, 'rooms'),
        // {
        //   snapshotListenOptions: { includeMetadataChanges: true },
        // }
      );
       
      // Now you can access the data, loading, and error
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
      
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
    <SidebarOptions Icon={InsertCommentIcon} title="Threads"/>
    <SidebarOptions Icon={InboxIcon} title="Mentions&Reactions"/>
    <SidebarOptions Icon={DraftsIcon} title="Saved items"/>
    <SidebarOptions Icon={BookmarkIcon} title="Channel Browser"/>
    <SidebarOptions Icon={PeopleAltIcon} title="People & User"/>
    <SidebarOptions Icon={AppsIcon} title="Apps"/>
    <SidebarOptions Icon={FileCopyIcon} title="File Browser"/>
    <SidebarOptions Icon={ExpandLessIcon} title="Show less"/>
    <hr/>
    <SidebarOptions Icon={ExpandMoreIcon} title="Channels"/>
    <hr/>
    <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channels"/>
   {channels?.docs.map((doc)=>(
    <SidebarOptions 
    key={doc.id}
    id={doc.id}
    title={doc.data().name}/>
   )) }

    
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
>hr{
    margin-top: 10px;
    border: 1px solid #49274b;
}
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