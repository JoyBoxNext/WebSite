import React from "react";
import FooterWrapper from "./FooterWrapper";
import Container from "../Container";
import FooterData from "./FooterData";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="row">
          {FooterData.map((v, i) => {
            return (
              <div key={i} className="col-sm-6 col-md-6 col-lg-4 p-5">
                <div className="">
                  <h4 className="fw-bold mb-4">{v.title}</h4>
                  {v.subtitle.map((v, i) => {
                    return (
                      <ul key={i}>
                        <li className="my-2">
                          <Link href={v.href}>
                            <a>{v.title}</a>
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
