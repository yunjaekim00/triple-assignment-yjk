import styled from "styled-components";

import translateUp from "../../../utils/css/translateUp";

export const LogoWrapper = styled.div`
  width: 400px;
  height: 338px;
  text-align: center;
  animation: ${translateUp} 700ms;
`;

export const LogoImage = styled.img.attrs({
  alt: "logo image",
})`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const LogoText = styled.div`
  position: relative;
  top: -58px;
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: 15px;
`;
