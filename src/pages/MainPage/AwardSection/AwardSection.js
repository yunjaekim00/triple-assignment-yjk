import awards from "../../../data/main-page-award.json";

// import award1 from "../../../assets/images/play-store2x.png";
// import award2 from "../../../assets/images/badge-apple4x.png";
import * as S from "./AwardSection.styled";

const AwardSection = () => {
  return (
    <S.AwardWrapper>
      {awards.map((award) => {
        return (
          <S.OneAwardWrapper key={award.id}>
            {/* <S.AwardImage src={require(award.img)} /> */}
            {award.text1}
            <br /> {award.text2}
          </S.OneAwardWrapper>
        );
      })}
    </S.AwardWrapper>
  );
};

export default AwardSection;
