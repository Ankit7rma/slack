import styled from "styled-components";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Options = [
    {
        id:1,
        Icon:InsertCommentIcon,
        title:"Threads",
    },
    {
        id:2,
        Icon:InboxIcon,
        title:"Mentions&Reactions",
    },
    {
        id:3,
        Icon:DraftsIcon,
        title:"Saved items",
    },
    {
        id:4,
        Icon:BookmarkIcon,
        title:"Channel Browser",
    },
    {
        id:5,
        Icon:PeopleAltIcon,
        title:"People & User",
    },
    {
        id:6,
        Icon:AppsIcon,
        title:"Apps",
    },
    {
        id:7,
        Icon:FileCopyIcon,
        title:"File Browser",
    },
    {
        id:8,
        Icon:ExpandLessIcon,
        title:"Show Less",
    }
    
]
const SidebarOptions = () => {
  return (
    <SidebarContainer>
       {
        <SidebarItems>
      {Options.map((option) => (
        <Item key={option.id}>
          <option.Icon /> {/* Render the icon */}
          <ItemSpan>{option.title}</ItemSpan> {/* Render the title */}
        </Item>
      ))}
    </SidebarItems>
       }
    </SidebarContainer>
  )
}

export default SidebarOptions;

const SidebarContainer = styled.div`
font-size: 14px;
`
const SidebarItems = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 2px;
margin: 2px;
font-size: 14px;
:hover{
    background-color: lightgray;
    color: black;
    border-radius: 10px;
    width: full;
}
`
const Item = styled.div`
display: flex;
font-size: 14px;
padding: 2px;
margin: 2px;

align-items: center;

`
const ItemSpan = styled.span`
margin-left: 5px;
`