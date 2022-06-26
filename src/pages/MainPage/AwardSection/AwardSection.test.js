import { theme } from "../../../assets/styles/theme";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as S from "./AwardSection.styled";

const testData = {
  id: "001",
  img: "./play-store2x.png",
  text1: "2018년",
  text2: "올해의 앱 최우수상",
};

test("test if AwardSection has correct text color and image", () => {
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
  const textElement2 = screen.getByText(/최우수상/i);
  const imgElement = screen.getByRole("img");

  expect(textElement1).toBeInTheDocument();
  expect(textElement1).toHaveStyle({
    color: "rgba(58, 58, 58, 0.8)",
  });
  expect(textElement2).toBeInTheDocument();
  expect(imgElement).toHaveAttribute("src", img);
});
