import data from "../../config.json"
import { LinkBlockProps } from "../../types";

import '../../styles/icons.scss';
import Linkedin from "./icons/linkedin";
import Github from "./icons/github";
import Email from "./icons/email";
import Document from "./icons/document";
import Instagram from "./icons/instagram";
import Spotify from "./icons/spotify";
import Vsco from "./icons/vsco";

const LinkBlock = ({
  showLinkedin = false,
  showGithub = false,
  showEmail = false,
  showInstagram = false,
  showSpotify = false,
  showResume = false,
  showVsco = false
}: LinkBlockProps) => {
  return (
    <div className="w-fit h-fit flex flex-row items-end justify-center gap-2 desktop:gap-4">
      { showLinkedin &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      }
      { showGithub &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      }
      { showInstagram &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      }
      { showVsco &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.vsco}
          target="_blank"
          rel="noreferrer"
        >
          <Vsco />
        </a>
      }
      { showResume &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.resume}
          target="_blank"
          rel="noreferrer"
        >
          <Document />
        </a>
      }
      { showSpotify &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.spotify}
          target="_blank"
          rel="noreferrer"
        >
          <Spotify />
        </a>
      }
      { showEmail &&
        <a
          className="link-block-icon scale-[0.8] desktop:scale-100"
          href={data.links.email}
          target="_blank"
          rel="noreferrer"
        >
          <Email />
        </a>
      }
    </div>
  );
};

export default LinkBlock;