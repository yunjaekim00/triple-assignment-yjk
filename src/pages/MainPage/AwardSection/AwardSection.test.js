import { theme } from "../../../assets/styles/theme";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as S from "./AwardSection.styled";
// import AwardSection from "./AwardSection";

const testData = {
  id: "001",
  img: "./play-store2x.png",
  text1: "2018년",
  text2: "2021년",
};

describe("if AwardSection has correct text and image", () => {
  test("test if AwardSection has correct text and image", () => {
    const { id, img, text1, text2 } = testData;
    render(
      <S.AwardWrapper>
        <S.OneAwardWrapper key={id} theme={theme}>
          <S.AwardImage src={img} />
          {text1}
          <br />
          {text2}
        </S.OneAwardWrapper>
      </S.AwardWrapper>
    );

    const textElement1 = screen.getByText(/2018년/i);
    const imgElement = screen.getByRole('img');

    expect(textElement1).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', img)
  });
});