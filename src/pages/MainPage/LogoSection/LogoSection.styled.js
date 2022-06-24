import styled from "styled-components";

import logo from "../../../assets/images/triple2x.png";
import translateUp from "../../../utils/css/translateUp";

export const LogoWrapper = styled.div`
  width: 400px;
  height: 338px;
  text-align: center;
  animation: ${translateUp} 700ms;
`;

export const LogoImage = styled.img.attrs({
  src: `${logo}`,
  alt: "logo image",
})`
  width: 100%;
  object-fit: cover;
`;

export const LogoText = styled.p`
  position: relative;
  top: -58px;
  font-size: 15px;
`;
