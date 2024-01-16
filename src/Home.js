import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

const Home = () => {
  const accordionItems = [
    {
      header: "Section 1",
      content: "Content for Section 1",
    },
    {
      header: "Section 2",
      content: "Content for Section 2",
    },
    {
      header: "Section 3",
      content: "Content for Section 3",
    },
  ];
  return (
    <Container>
      <Header>
        <img src="/images/site-logo.png" alt="logo" />
        <Menu>
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>
            <span>Login</span>
          </li>
        </Menu>
      </Header>
      <Navigation>
        <li>
          <img src="/images/home-icon.png" alt="home" />
          <img className="arrow" src="/images/right-arrow.png" alt="path" />
        </li>
        <li>
          Flashcard
          <img className="arrow" src="/images/right-arrow.png" alt="path" />
        </li>
        <li>
          Mathematics
          <img className="arrow" src="/images/right-arrow.png" alt="path" />
        </li>
        <li>
          Relation and Function
          <img className="arrow" src="/images/right-arrow.png" alt="path" />
        </li>
      </Navigation>
      <Main>
        <Title>Relation and Function(Mathematics)</Title>
        <Slider>
          <Option>
            <li className="active">Study</li>
            <li>Quiz</li>
            <li>Test</li>
            <li>Game</li>
            <li>others</li>
          </Option>
          <SliderImage>
            <Hint>
              <img src="/images/hint-icon.png" alt="hint" />
            </Hint>
            <Speaker>
              <img src="/images/speaker-icon.png" alt="speaker" />
            </Speaker>
            <Equation>9 + 6 + 7x - 2x - 3</Equation>
          </SliderImage>
          <ButtonContainer>
            <Reset>
              <img src="/images/reset-arrow.png" alt="reset" />
            </Reset>
            <PrevSlide>
              <img
                className="arrow"
                src="/images/left-arrow.png"
                alt="prevslide"
              />
            </PrevSlide>
            <Pages>01/10</Pages>
            <NextSlide>
              <img
                className="arrow"
                src="/images/right-arrow.png"
                alt="nextslide"
              />
            </NextSlide>
            <Expand>
              <img
                className="arrow"
                src="/images/expand-arrow.png"
                alt="expand"
              />
            </Expand>
          </ButtonContainer>
        </Slider>
        <LeftButton>
          <img src="/images/site-logo.png" alt="logo" />
        </LeftButton>
        <RightButton>
          <span>+</span>
          Create Flashcard
        </RightButton>
      </Main>
      <FAQ>
        <Accordion items={accordionItems} />
      </FAQ>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 calc(3.4vw + 5px);
  position: relative;
  overflow: hidden;
  background-color: rgba(249, 249, 249, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 191px;
    height: 59px;
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  li {
    padding-right: 40px;
    span {
      font-weight: 500;
      color: white;
      border-radius: 32px;
      padding: 13px 40px;
      background: linear-gradient(to bottom, #06286e, #164ec0);
    }
  }
`;
const Navigation = styled.div`
  margin: 20px 30px;
  display: flex;
  li {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 600;
    color : #696671;
    img {
      width: 20px;
      height: 21.25px;
      color: #696671;
    }

    .arrow {
      color: #06286E;
      width: 1.5em;
      height: 1.3em;
    }
    &:last-child {
        color: #06286E;
        .arrow {
          display: none; // Hide the right-arrow image for the last li
        }
  }
`;
const Main = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  position: absolute;
  left: 0;
  top: 8px;
  font-weight: 700;
  display: flex;
  background-image: linear-gradient(to bottom, #06286e, #164ec0);
  color: transparent;
  -webkit-background-clip: text; /* for Safari/Chrome/iOS */
  background-clip: text;
`;
const Slider = styled.div`
  margin-top: 70px;
  justify-content: center;
  width: 712px;
`;
const Option = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  li {
    color: #696671;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    position: relative; /* Add position: relative to the li element */

    &.active {
      font-weight: 700;
      color: #06286e;

      &:after {
        content: "";
        position: absolute;
        left: -7px;
        right: 0;
        bottom: -6px;
        width: 70px;
        height: 2px;
        background-color: #06286e;
      }
    }
  }
`;
const SliderImage = styled.div`
  margin-top: 30px;
  width: 712px;
  height: 393.19px;
  border-radius: 42.51px;
  position: relative;
  background: linear-gradient(
    222.94deg,
    #051a91 -4.31%,
    #061c93 14.41%,
    #2284f1 81.88%,
    #1f80eb 103.81%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hint = styled.div`
  position: absolute;
  top: 20px;
  left: 25px;
  img {
    width: 35px;
    height: 40px;
    filter: invert(100%);
  }
`;
const Speaker = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  img {
    width: 35px;
    height: 40px;
    filter: invert(100%);
  }
`;
const Equation = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0.02em;
  text-align: center;
  color: white;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Reset = styled.button`
  img {
    width: 35px;
    height: 35px;
  }
`;

const PrevSlide = styled.button`
  background: linear-gradient(180deg, #06286e 0%, #164ec0 100%);
  border-radius: 50%;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    filter: invert(100%);
    width: 33px;
  }
`;

const Pages = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #202b37;
`;
const NextSlide = styled.button`
  background: linear-gradient(180deg, #06286e 0%, #164ec0 100%);
  border-radius: 50%;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    filter: brightness(0) invert(1);
    width: 66px;
  }
`;
const Expand = styled.button`
  img {
    width: 35px;
    height: 35px;
    filter: saturate(200%) hue-rotate(220deg);
  }
`;
const LeftButton = styled.div``;
const RightButton = styled.div``;
const FAQ = styled.div``;
