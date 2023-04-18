import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
        __ __             __                         
       / // /   ____ _   / /_   ____    _____  ____ _
      / // /_  / __  /  / __ \\ / __ \\  / ___/ / __  /
     /__  __/ / /_/ /  / / / // /_/ / / /    / /_/ / 
       /_/    \\__, /  /_/ /_/ \\____/ /_/     \\__,_/  
             /____/                                     
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`          
       ____          __                  
      / / /  ___ _  / /  ___   ____ ___ _
     /_  _/ / _  / / _ \\/ _ \\ / __// _  /
       /_/   \\__,/ /_//_/\\___//_/   \\\__,_/ 
             /___/                           
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          Check Out My Blog Website, It Mainly Contains Writeups, <br></br>
          Walkthroughs And Notes On Various Topics On <br></br>
          Information Technology And Security <br></br> Here {" "}
          <Link href="https://blog.4ghora.pro">
            4ghora Blog
          </Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator>----</Seperator>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       .......
                       ':;,:::;',.
                      .lc.;:;;:;.c;
                      dd....';...,o
                      xd'..'..,.',o
                     .xx,  '.:.  lo,
                    .':'          dx:.
                   :d;             ;xo'
                 .':l.   ...''..    .xx;.
                ,o,..  ,,',,,,','.   '.,c:.
              'ckko.  ,,;;ldxkdl'..   .dkkl.
             ;dkkx'   ''':OXWWKO;...   ldkko'
            ,xkkx.   ..,;,;;l:;,;'.'.   :dkko.
            :xkd:.   '.;'dkodcckc'.'    .:ox,
             cdkkl'...'.,;;','.;'...  .:',;:
              ;dookl,.'..'',;,,,'.,. .;,,,;
               .lxkx:.;  .,;;,:,.. . ;,.;,
                 .ld; ,. . ',,, .. ..;,'
                   ;. ,. .       . .':'
                  ..  .            .'
                    . .            .
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
