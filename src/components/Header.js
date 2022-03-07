import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO Add onClick
        />
        <AccessTime />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch></HeaderSearch>

      {/* Header Right */}
      <HeaderRight></HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;

const HeaderSearch = styled.div``;

const HeaderRight = styled.div``;
