import React from "react";
import HeroSectionImage from "../../../public/icon/HeroSectionImage";
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
          {/* <HeroSectionImage /> */}
        </HeroImageMedium>
        <HeroImageLarge>
          <HeroSvg src="/svg/HeroImage.svg" alt="image" />
          {/* <HeroSectionImage /> */}
        </HeroImageLarge>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
