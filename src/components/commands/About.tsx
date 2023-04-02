import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aditya Yadav</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a White Hat Hacker</HighlightAlt> based in Delhi,
        India.
      </p>
      <p>
        I am passionate about reading (Some Times Writing) codes and <br />
        breaking networks/web applications to solve real-life challenges in hope to prevent uncomfotable scenerios.
      </p>
    </AboutWrapper>
  );
};

export default About;
