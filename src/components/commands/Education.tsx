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
    desc: "CompTIA Network+ ce Certification  | 2022 ~ 2025",
  },
  {
    title: "Certified Ethical Hacker v12 (CEHv12)",
    desc: "EC-Council | 2023 ~ 2026",
  },
  {
    title: "Azure Fundamentals",
    desc: "Microsoft Certified: Azure Fundamentals | 2022",
  },
  {
    title: "Certified In Cybersecurity",
    desc: "Isc2 CC Certified | 2023 ~ 2026",
  },
];

export default Education;
