import React from "react";
import styled from "styled-components";

import learnSignLogo from "../../src/assets/images/learnSignLogo.png";

const StyledAppBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px; /* Add left margin to shift the logo and text to the left */
`;

const StyledLogo = styled.img`
  width: 140px;
  margin-right: 1px;
`;

const StyledText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #334589;
  text-transform: uppercase;
  letter-spacing: .5px;
`;



function NavBar() {
  return (
    <StyledAppBar>
      <LogoContainer>
        <StyledLogo src={learnSignLogo} alt="LearnSign Logo" />
        <StyledText>Learnsign</StyledText>
      </LogoContainer>
      {/* Optionally, add a Link component */}
      {/* <StyledLink to="/">Link</StyledLink> */}
    </StyledAppBar>
  );
}

export default NavBar;
