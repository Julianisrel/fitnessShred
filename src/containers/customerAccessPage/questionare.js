import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

import { BrandLogo } from "../../components/brandLogo";
import { Marginer } from "../../components/marginer";

import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

const QuestionareContainer = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  background-color: #d9cd9f;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 7px;
  font-size: 27px;
  color: #26334c;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;

export function Questionare(props) {

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer>
      <Navbar user={props.user} />
      <StyledInnerContainer>
        <QuestionareContainer>
          <ContentContainer>
            <SloganContainer>
              <BrandLogo
                logoSize={isMobile ? 33 : 70}
                textSize={isMobile ? 28 : 35}
              />
              <Marginer direction="vertical" margin="1em" />
              <SloganContainer>
                <Slogan>💪 Welcome to FITMATE! Congrats on taking the first step </Slogan>
                <Slogan>to improving your overall health and wellness. Please tell </Slogan>
                <Slogan>us a bit about yourself in this quick 2-minute survey so we</Slogan>
                <Slogan>can match you with the right Coach.</Slogan>
              </SloganContainer>
              <Marginer direction="vertical" margin="0.8em" />
              <Button size={20} color={'#2c284e'} padding={'15px 1em'}>
                Continue
              </Button>
            </SloganContainer>
            
          </ContentContainer>
        </QuestionareContainer>
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}
