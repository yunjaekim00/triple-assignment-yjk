import logo from "../../../data/main-page-logo.json";

import * as S from "./LogoSection.styled";

const LogoSection = () => {
  const path = require.context("../../../assets/images", true);
  const imgLogo = path(`${logo.img}`);

  return (
    <S.LogoWrapper>
      <S.LogoImage src={imgLogo} />
      <S.LogoText>{logo.text1}</S.LogoText>
    </S.LogoWrapper>
  );
};

export default LogoSection;
