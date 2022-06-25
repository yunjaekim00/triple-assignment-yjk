import requireContext from "require-context.macro";

import logo from "../../../data/main-page-logo.json";

import * as S from "./LogoSection.styled";

const LogoSection = () => {
  const path = requireContext("../../../assets/images", true);
  const imgLogo = path(`${logo.img}`);

  return (
    <S.LogoWrapper>
      <S.LogoImage src={imgLogo} />
      <S.LogoText data-testid="text">{logo.text1}</S.LogoText>
    </S.LogoWrapper>
  );
};

export default LogoSection;
