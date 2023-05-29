import React from "react";
import styled from "styled-components";
import landing from "../Assets/hero-bg-shape-cropped.png";
import hero from "../Assets/hero.png";
import team from "../Assets/team.svg";
import { ImArrowUpRight } from "react-icons/im";
import video1 from "../Assets/video1.mp4";
import quote from "../Assets/quote.svg";
import icon1 from "../Assets/icon-templates.svg";
import icon2 from "../Assets/icon-workflow.svg";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Big>
              Move fast, stay aligned, <br />
              and build better - together
            </Big>
            <Inter>The #1 software development tool used by agile teams</Inter>
            <Button>Get it free</Button>
          </Left>
          <Right src={hero} />
        </Main>
        <SubHolder>
          <Sub>
            <L>
              <Lsub src={team} />
            </L>
            <Cen>
              Catch up on what you missed at Team '23! Power up <br />
              your Jira Software skills with our on-demand <br />
              sessions.
            </Cen>
            <R>
              Watch now <Up />
            </R>
          </Sub>
        </SubHolder>
        <Section>
          <SectionSub>
            <Text>All from a signle source of truth</Text>
            <NavButton>
              <NavBut>
                <But1>Plan</But1>
                <But>Track</But>
                <But>Release</But>
                <But>Report</But>
                <But>Automate</But>
              </NavBut>
            </NavButton>
            <Plan>
              <PlanSub>
                <LeftPlan>
                  <PlanText>Plan</PlanText>
                  <First>
                    Break the big ideas down into <br />
                    manageable chunks across teams <br />
                    with user stories, issues, and tasks.
                  </First>
                  <ImgHold>
                    <Img src={quote}></Img>
                    <ImgText>
                      Work becomes a lot more <br />
                      visible when it's all in one place. <br />
                      It makes collaboration a whole <br />
                      lot easier.
                    </ImgText>
                    <NameHold>
                      <Name>Jeff lai</Name>
                      <Position>INTERNAL INFRASTRUCTURE,</Position>
                      <Country>CANVA</Country>
                    </NameHold>
                  </ImgHold>
                </LeftPlan>
                <RightPlan autoPlay muted loop src={video1} />
              </PlanSub>
            </Plan>
          </SectionSub>
        </Section>
        <Section2>
          <Easier>Easier than ever</Easier>
          <LineHold>
            <LineSub>
              <LineLeft src={icon1} />
              <LineMid></LineMid>
              <LineRight src={icon2} />
            </LineSub>
          </LineHold>
          <Temp>
            <TempSub>
              <TempLeft>
                <BigTemp>Templates give you a head start</BigTemp>
                <SmallTemp>Get started with ready-made templates.</SmallTemp>
              </TempLeft>
              <TempRight>
                <BigTemp>Then customize as you grow</BigTemp>
                <SmallTemp>
                  Jira adapts to the way you work, not the other way around.
                  Start simple, customize as you go.
                </SmallTemp>
              </TempRight>
            </TempSub>
          </Temp>
        </Section2>
      </Container>
    </div>
  );
};
export default LandingPage;

const BigTemp = styled.div`
font-family: "charlie Display", -apple-system, BlinkMacSysytemFont, "Segeo UI",
    Roboto, "Noto Sans", Ubuntu, "Driod Sans", "Helvetica Neue", sans-serif;
font-weight: 800;
margin-top: -10px;
color: #253858;;
`;


const SmallTemp = styled.div`
margin-top: 10px;
color: #253858;
`;

const TempSub = styled.div`
  width: 85%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TempRight = styled.div`
  width: 40%;
  text-align: center;
`;

const TempLeft = styled.div`
width: 40%;
text-align: center;
`;

const Temp = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineRight = styled.img`
  width: 10%;
  height: 50px;
  padding-right: 3px;
`;
const LineMid = styled.div`
  width: 50%;
  height: 8px;
  position: absolute;
  margin-left: 67px;
  background: -moz-linear-gradient(
    90deg,
    #0065ff 53%,
    #79f2c0 93%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    90deg,
    color-stop(53%, 0065FF),
    color-stop(93%, 79F2C0)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    90deg,
    #0065ff 53%,
    #79f2c0 93%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    90deg,
    #0065ff 53%,
    #79f2c0 93%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(90deg, #0065ff 53%, #79f2c0 93%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
  background: linear-gradient(90deg, #0065ff 53%, #79f2c0 93%); /* W3C */
`;
const LineLeft = styled.img`
  width: 10%;
  padding-left: 3px;
  height: 50px;
`;

const LineSub = styled.div`
  width: 60%;
  height: 50px;
  background-color: #deebff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LineHold = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Easier = styled.div`
  width: 100%;
  color: #253858;
  height: 50px;
  font-family: "charlie Display", -apple-system, BlinkMacSysytemFont, "Segeo UI",
    Roboto, "Noto Sans", Ubuntu, "Driod Sans", "Helvetica Neue", sans-serif;
  display: flex;
  font-weight: 500;
  font-size: 36px;
  align-items: center;
  justify-content: center;
`;

const Section2 = styled.div`
  background-color: #deebff;
  height: 1050px;
  width: 100%;
`;

const Name = styled.div`
  text-transform: uppercase;
  margin-top: 15px;
  font-family: "charlie Display", -apple-system, BlinkMacSysytemFont, "Segeo UI",
    Roboto, "Noto Sans", Ubuntu, "Driod Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  color: #42526e;
`;

const Position = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const Country = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const NameHold = styled.div``;

const ImgText = styled.div`
  color: #253858;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
`;

const Img = styled.img`
  height: 40px;
  width: 10%;
`;

const ImgHold = styled.div`
  position: relative;
  width: 350px;
  height: 290px;
  margin-top: 30px;
  border-radius: 0px 150px 150px 0px;
  background: -moz-linear-gradient(0deg, #c5deff 25%, #d9e9ff 93%); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    0deg,
    color-stop(25%, C5DEFF),
    color-stop(93%, D9E9FF)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    0deg,
    #c5deff 25%,
    #d9e9ff 93%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    0deg,
    #c5deff 25%,
    #d9e9ff 93%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(0deg, #c5deff 25%, #d9e9ff 93%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
  background: linear-gradient(0deg, #c5deff 25%, #d9e9ff 93%); /* W3C */
`;

const PlanText = styled.div`
  font-weight: 400;
  font-size: 40px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-top: 80px;
  color: #253858;
`;

const First = styled.div`
  margin-top: 25px;
  font-weight: 500;
  color: #4272b9;
  font-size: 20px;
`;

const RightPlan = styled.video`
  width: 70%;
  height: 100%;
  background-color: #deebff;
  object-fit: contain;
`;

const LeftPlan = styled.div`
  width: 30%;
  height: 100%;
  background: #deebff;
  display: flex;
  flex-direction: column;
`;

const PlanSub = styled.div`
  height: 80%;
  width: 97%;
  background: #deebff;
  display: flex;
`;

const Plan = styled.div`
  height: 800px;
  width: 100%;
  background: #deebff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const But1 = styled.div`
  height: 45px;
  width: 80px;
  background-color: white;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const But = styled.div`
  height: 45px;
  width: 90px;
  background-color: #f4f5f7;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: #ececec;
  }
`;

const NavBut = styled.div`
  width: 40%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavButton = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 36px;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #253858;
`;

const SectionSub = styled.div`
  width: 100%;
  height: 950px;
  background-color: #deebff;
`;

const Section = styled.div`
  background-color: #deebff;
  width: 100%;
  height: 1200px;
  display: flex;
  align-items: flex-end;
`;

const Up = styled(ImArrowUpRight)`
  font-size: 9px;
  transition: all 350ms;

  :hover {
    margin-top: -8px;
    transform: translateX(5px);
    cursor: pointer;
  }
`;

const Cen = styled.div`
  width: 70%;
  height: 120px;
  color: white;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const R = styled.div`
  width: 18%;
  height: 120px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  color: #ffbdf0;
  display: flex;
  align-items: center;
`;

const Lsub = styled.img`
  width: 90%;
  height: 100px;
  object-fit: contain;
  margin-left: 15px;
`;
const L = styled.div`
  width: 18%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sub = styled.div`
  position: absolute;
  width: 50%;
  height: 120px;
  margin-top: 100px;
  background: -moz-linear-gradient(0deg, #122150 56%, #3f3293 93%); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    0deg,
    color-stop(56%, 122150),
    color-stop(93%, 3F3293)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    0deg,
    #122150 56%,
    #3f3293 93%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    0deg,
    #122150 56%,
    #3f3293 93%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(0deg, #122150 56%, #3f3293 93%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
  background: linear-gradient(0deg, #122150 56%, #3f3293 93%); /* W3C */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

const SubHolder = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: -moz-linear-gradient(
    57deg,
    #f9fcff 60%,
    #cde2fe 93%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    57deg,
    color-stop(60%, F9FCFF),
    color-stop(93%, CDE2FE)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    57deg,
    #f9fcff 60%,
    #cde2fe 93%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    57deg,
    #f9fcff 60%,
    #cde2fe 93%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(57deg, #f9fcff 60%, #cde2fe 93%); /* IE10+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
  background: linear-gradient(57deg, #f9fcff 60%, #cde2fe 93%); /* W3C */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: #146aea;
  height: 40px;
  width: 115px;
  border: none;
  border-radius: 5px;
  transition: all 350ms;
  margin-top: 35px;

  :hover {
    cursor: pointer;
    background-color: #0052cc;
  }
`;

const Inter = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #203963;
  margin-top: 20px;
`;

const Big = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: #253858;
`;

const Right = styled.img`
  width: 50%;
  height: 400px;
  margin-top: 100px;
  object-fit: cover;
  object-position: left;
`;

const Left = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

const Main = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 110px);
  background-image: url(${landing});
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  /* object-fit: cover; */
`;
