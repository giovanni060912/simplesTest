import styled from "styled-components";
import CopyrightIcon from "@material-ui/icons/Copyright";
import EmailIcon from "@material-ui/icons/Email";
import { Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #00000070;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;

  a {
    margin-right: 10px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
      font-size: 12px;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <div
        style={{ display: "flex", justifyContent: "flex-start", width: "45%" }}
      >
        <Button
        href="https://www.linkedin.com/in/giovanni-santos-26b645195/"
          style={{ display: "flex",  marginLeft: "20px" }}
        >
          <LinkedInIcon />
          LinkedIn
        </Button>
      </div>
      <a>
        <CopyrightIcon />
      </a>
      <span>Giovanni Santos</span>
    </FooterWrapper>
  );
}
