import { theme } from "../../../assets/styles/theme";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as S from "./LogoSection.styled";

const testData = {
  img: "./triple2x.png",
  text1: "2021년 12월 기준",
};

test("test text and image", () => {
  const { img, text1 } = testData;
  render(
    <S.LogoWrapper>
      <S.LogoImage src={img} />
      <S.LogoText theme={theme}>{text1}</S.LogoText>
    </S.LogoWrapper>
  );
  const textElement = screen.getByText(/2021년/i);
  expect(textElement).toBeInTheDocument();

  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveAttribute("src", img);
});
