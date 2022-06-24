import React from "react";
import * as S from "./StatsSection.styled";
import stats from "../../../data/main-page-stats.json";
import CountUp from "./CountUp";

const StatsSection = () => {
  return (
    <S.StatsWrapper>
      {stats.map((stat) => {
        return (
          <S.TextWrapper key={stat.id}>
            <S.TextDiv style={{ fontWeight: "bold" }}>
              <CountUp target={stat.target} />
            </S.TextDiv>
            <S.TextDiv style={{ fontWeight: "bold" }}>
              {stat.boldText}
            </S.TextDiv>
            <S.TextDiv>{stat.text}</S.TextDiv>
          </S.TextWrapper>
        );
      })}
    </S.StatsWrapper>
  );
};

export default StatsSection;
