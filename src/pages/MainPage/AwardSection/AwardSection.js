import awards from "../../../data/main-page-award.json";

import * as S from "./AwardSection.styled";

const AwardSection = () => {
  return (
    <S.AwardWrapper>
      {awards.map((award) => {
        const path = require.context("../../../assets/images", true);
        const imgLogo = path(`${award.img}`);
        return (
          <S.OneAwardWrapper key={award.id}>
            <S.AwardImage src={imgLogo} />
            {award.text1}
            <br /> {award.text2}
          </S.OneAwardWrapper>
        );
      })}
    </S.AwardWrapper>
  );
};

export default AwardSection;
