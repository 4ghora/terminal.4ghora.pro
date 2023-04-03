import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Com (Computer Application)",
    desc: "Jiwaji University | 2019 ~ 2022",
  },
  {
    title: "Network Plus",
    desc: "CompTIA Network+ ce Certification  | 2022 - Present",
  },
  {
    title: "Security Plus",
    desc: "CompTIA Security+ ce Certification | 2023 - Present",
  },
  {
    title: "Azure Fundamentals",
    desc: "Microsoft Certified: Azure Fundamentals | 2022 - Present",
  },
  {
    title: "Certified In Cybersecurity",
    desc: "Isc2 CIC Certified | 2023 - Present",
  },
];

export default Education;
