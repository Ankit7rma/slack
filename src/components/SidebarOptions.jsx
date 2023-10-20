import styled from "styled-components";
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

const Options = [
  {
    id: 1,
    Icon: InsertCommentIcon,
    title: "Threads",
  },
  {
    id: 2,
    Icon: InboxIcon,
    title: "Mentions&Reactions",
  },
  {
    id: 3,
    Icon: DraftsIcon,
    title: "Saved items",
  },
  {
    id: 4,
    Icon: BookmarkIcon,
    title: "Channel Browser",
  },
  {
    id: 5,
    Icon: PeopleAltIcon,
    title: "People & User",
  },
  {
    id: 6,
    Icon: AppsIcon,
    title: "Apps",
  },
  {
    id: 7,
    Icon: FileCopyIcon,
    title: "File Browser",
  },
  {
    id: 8,
    Icon: ExpandLessIcon,
    title: "Show Less",
  },
];

const BottomOptions = [
    {
      id: 9,
      Icon: ExpandMoreIcon,
      title: "Channels",
    },
    
  ];
  const AddOptions = [
    {
      id: 10,
      Icon: AddIcon,
      title: "Add Channels",
    },
    
  ];
// eslint-disable-next-line react/prop-types
const SidebarOptions = ({top,addChannel}) => {
  return (
    <SidebarContainer>
    <SidebarItems>
      {top
        ? Options.map((option) => (
            <Item key={option.id}>
              {option.Icon && <option.Icon />}
              <ItemSpan>{option.title}</ItemSpan>
            </Item>
          ))
        : BottomOptions.map((option) => (
            <Item key={option.id}>
              {option.Icon && <option.Icon />}
              <ItemSpan>{option.title}</ItemSpan>
            </Item>
          ))}
          {addChannel?( AddOptions.map((option) => (
            <Item key={option.id}>
              {option.Icon && <option.Icon />}
              <ItemSpan>{option.title}</ItemSpan>
            </Item>
          ))):null}
    </SidebarItems>
  </SidebarContainer>
  );
};

export default SidebarOptions;

const SidebarContainer = styled.div`
  font-size: 12px;
`;
const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2px;
  margin: 1px;
  font-size: 12px;
  :hover {
    background-color: #340e36;
    border-radius: 10px;
    width: full;
  }
`;
const Item = styled.div`
  display: flex;
  font-size: 14px;
  padding: 2px;
  margin: 2px;

  align-items: center;
`;
const ItemSpan = styled.span`
  margin-left: 5px;
`;
