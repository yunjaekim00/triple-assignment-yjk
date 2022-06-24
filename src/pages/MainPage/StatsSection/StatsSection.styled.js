import styled from "styled-components";
import translateUp from "../../../utils/css/translateUp";

export const StatsWrapper = styled.div`
  margin-bottom: 20px;
  animation: ${translateUp} 700ms;
  animation-delay: 100ms;
  /* border: 0.1rem solid;
  border-color: green; */
`;

export const TextWrapper = styled.div`
  display: flex;
  padding: 5px;
`;

export const TextDiv = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;
