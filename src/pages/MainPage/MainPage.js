import LogoSection from "./LogoSection/LogoSection";
import AwardSection from "./AwardSection/AwardSection";
import StatsSection from "./StatsSection/StatsSection";
import * as S from "./MainPage.styled";

const MainPage = () => {
  return <S.Container>
    <LogoSection />
    <S.ContentsWrapper>
      <StatsSection />
      <AwardSection />
    </S.ContentsWrapper>
  </S.Container>;
};

export default MainPage;
