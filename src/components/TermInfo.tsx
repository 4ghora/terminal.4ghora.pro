import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.4ghora.pro</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
