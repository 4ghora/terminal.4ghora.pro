import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the Work”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "4ghora's Blog",
    desc: "My personal blog where I can write down my thoughts, experiences, Writeups and Notes .",
    url: "https://blog.4ghora.pro",
  },
  {
    id: 2,
    title: "HackTheBox",
    desc: "Top 500 Global Hacker. Solved Multiple Machines, Challenges and Exploitable Labs.",
    url: "https://app.hackthebox.com/profile/228431",
  },
  {
    id: 3,
    title: "TryHackMe",
    desc: "Top 1 % and Solved 100+ Labs, Challenges and Vulnerable Network.",
    url: "https://tryhackme.com/p/GoodGuyMickey",
  },
  {
    id: 4,
    title: "Jabber",
    desc: "Javascript TextToSpeech based Web Browser Extention, Currently In Research Phase.",
    url: "",
  },
];

export default Projects;
