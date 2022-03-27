import React from "react";
import HeroSectionImageSmall from "../../../public/icon/HeroSectionImageSmall";
import {
    HeroContent,
  HeroImageLarge,
  HeroImageMedium,
  HeroImageSmall,
  HeroSvg,
  HeroText,
  HeroTextContainer,
  HeroWrapper,
} from "./style";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
          <HeroTextContainer>
              <HeroText>Watch something incredible.</HeroText>
          </HeroTextContainer>
        <HeroImageSmall>
          <HeroSectionImageSmall />
        </HeroImageSmall>
        <HeroImageMedium>
          <HeroSvg src="/svg/HeroImageMedium.svg" alt="image" />
        </HeroImageMedium>
        <HeroImageLarge>
          <HeroSvg src="/svg/HeroImage.svg" alt="image" />
        </HeroImageLarge>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
