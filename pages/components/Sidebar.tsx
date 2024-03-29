import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'

const StyleContainer = styled.div`
    height: 100vh;
    min-width: 300px;
    max-width: 350px;
    overflow-y: scroll;
    border-right: 1px solid whitesmoke;
`;
const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
`
const StyleSearch = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 2px;
`;
const StyleUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const StyleSearchInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
`
const StyleSidebarButton = styled(Button)`
    width: 100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
`
const Sidebar = () => {
  return (
    <StyleContainer>
      <StyleHeader>
        <Tooltip title="USER EMAIL" placement="right">
          <StyleUserAvatar />
        </Tooltip>
        <div>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVerticalIcon/>
            </IconButton>
            <IconButton>
                <LogoutIcon/>
            </IconButton>
        </div>
      </StyleHeader>
      <StyleSearch>
        <SearchIcon/>
        <StyleSearchInput placeholder="Search your conversations"/>
      </StyleSearch>
      <StyleSidebarButton>
        Start a new conversation
      </StyleSidebarButton>

      {/* List of conversations */}
    </StyleContainer>
  );
};

export default Sidebar;
