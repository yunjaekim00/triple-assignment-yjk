import styled from "styled-components";

import translateUp from "../../../utils/css/translateUp";

export const AwardWrapper = styled.div`
  display: flex;
  animation: ${translateUp} 700ms;
  animation-delay: 200ms;
  /* border: 0.1rem solid;
  border-color: orange; */
`;

export const OneAwardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 64px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.fontSecondary};
`;

export const AwardImage = styled.img.attrs({
  alt: "awards",
})`
  width: 54px;
  height: 54px;
  margin-right: 4px;
`;
