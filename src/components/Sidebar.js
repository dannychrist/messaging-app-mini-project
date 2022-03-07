import React from 'react';
import styled from 'styled-components';

import { FiberManualRecord as FiberManualRecordIcon } from '@material-ui/icons';
import { Create as CreateIcon } from '@material-ui/icons';
import { InsertComment as InsertCommentIcon } from '@material-ui/icons';
import { Inbox as InboxIcon } from '@material-ui/icons';
import { Drafts as DraftsIcon } from '@material-ui/icons';
import { BookmarkBorder as BookmarkBorderIcon } from '@material-ui/icons';
import { PeopleAlt as PeopleAltIcon } from '@material-ui/icons';
import { Apps as AppsIcon } from '@material-ui/icons';
import { FileCopy as FileCopyIcon } from '@material-ui/icons';
import { ExpandLess as ExpandLessIcon } from '@material-ui/icons';

import SidebarOption from './SidebarOption';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Danny's Corner</h2>
          <h3>
            <FiberManualRecordIcon />
            Daniel Christ
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
      <SidebarOption Icon={DraftsIcon} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show less' />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
