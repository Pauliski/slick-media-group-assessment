import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: 16.0625rem;
  position: relative;

  @media (min-width: 834px) {
    height: 34.375rem;
  }
`;
export const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 1440px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const HeroImageSmall = styled.div`
  width: 100%;
  display: block;
  height: 100%;
  @media (min-width: 600px) {
    display: none;
  }
`;
export const HeroImageMedium = styled.div`
  display: none;
  @media (min-width: 600px) and (max-width: 1439px) {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
export const HeroImageLarge = styled.div`
  display: none;
  @media (min-width: 1440px) {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
export const HeroSvg = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;
export const HeroTextContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 17.0625rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  line-height: 1.3;
  @media (min-width: 834px) {
    width: 30.625rem;
    height: 17.625rem;
    margin-top: 6.8125rem;
    align-self: flex-start;
  }
  @media (min-width: 1440px) {
    margin-left: 4.8125rem;
    justify-content: flex-start;
  }
`;
export const HeroText = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-align: center;

  @media (min-width: 834px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
