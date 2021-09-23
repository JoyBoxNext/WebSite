import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #2525eb !important;
  h4,
  ul,
  li,
  a {
    text-align: center;
    color: white !important;
  }
  @media screen and (max-width: 1980px) {
    margin: 0px 260px 0 260px;
  }
  @media screen and (max-width: 1650px) {
    margin: 0px 170px 0 170px;
  }
  @media screen and (max-width: 900px) {
    margin: 35 100px;
  }
  @media screen and (max-width: 1440px) {
    margin: 21px 50px 0;
  }
  @media screen and (max-width: 830px) {
    margin: 20px 20px 0;
  }
  @media screen and (max-width: 400px) {
    margin: 0;
  }
`;

export default FooterWrapper;
