import React from "react";
import { withRouter } from "next/router";
import styled from "styled-components";

const ActiveLinkWrapper = styled.div`
  button {
    border-right: 1px solid black !important;
    border: none;
    padding: 7px 20px !important;
    background-color: white;
    &:hover {
      background-color: #ffe5dc;
    }
  }
  @media screen and (max-width: 1920px) {
    button {
      padding: 7px 34px !important;
    }
  }
  @media screen and (max-width: 1900px) {
    button {
      padding: 7px 34px !important;
    }
  }
  @media screen and (max-width: 1860px) {
    button {
      padding: 7px 31px !important;
    }
  }
  @media screen and (max-width: 1800px) {
    button {
      padding: 7px 26px !important;
    }
  }

  @media screen and (max-width: 1750px) {
    button {
      padding: 7px 22px !important;
    }
  }
  @media screen and (max-width: 1710px) {
    button {
      padding: 7px 20px !important;
    }
  }
  @media screen and (max-width: 1650px) {
    button {
      padding: 7px 28px !important;
    }
  }
  @media screen and (max-width: 1590px) {
    button {
      padding: 7px 24px !important;
    }
  }
  @media screen and (max-width: 1550px) {
    button {
      padding: 7px 20px !important;
    }
  }
  @media screen and (max-width: 1500px) {
    button {
      padding: 7px 15px !important;
    }
  }
  @media screen and (max-width: 1440px) {
    button {
      padding: 7px 28px !important;
    }
  }
  @media screen and (max-width: 1400px) {
    button {
      padding: 7px 26px !important;
    }
  }
  @media screen and (max-width: 1380px) {
    button {
      padding: 7px 26px !important;
    }
  }
  @media screen and (max-width: 1330px) {
    button {
      padding: 7px 22px !important;
    }
  }
  @media screen and (max-width: 1290px) {
    button {
      padding: 7px 20px !important;
    }
  }
  @media screen and (max-width: 1260px) {
    button {
      padding: 7px 16px !important;
    }
  }
  @media screen and (max-width: 1200px) {
    button {
      padding: 7px 15px !important;
    }
  }
  @media screen and (max-width: 1180px) {
    button {
      padding: 7px 12px !important;
    }
  }
  @media screen and (max-width: 1140px) {
    button {
      padding: 7px 10px !important;
    }
  }
  @media screen and (max-width: 1120px) {
    button {
      padding: 7px 18px !important;
    }
  }
  @media screen and (max-width: 1120px) {
    button {
      padding: 7px 18px !important;
    }
  }
  @media screen and (max-width: 1090px) {
    button {
      padding: 7px 13px !important;
    }
  }
  @media screen and (max-width: 1070px) {
    button {
      padding: 7px 30px !important;
    }
  }
  @media screen and (max-width: 1025px) {
    button,
    .Categories {
      padding: 7px 55px !important;
    }
  }
  @media screen and (max-width: 1000px) {
    button,
    .Categories {
      padding: 7px 45px !important;
    }
  }
  @media screen and (max-width: 950px) {
    button,
    .Categories {
      padding: 7px 42px !important;
    }
  }
  @media screen and (max-width: 900px) {
    button,
    .Categories {
      padding: 7px 36px !important;
    }
  }
  @media screen and (max-width: 850px) {
    button,
    .Categories {
      padding: 7px 30px !important;
    }
  }
  @media screen and (max-width: 760px) {
    button {
      padding: 7px 24px !important;
    }
  }

  @media screen and (max-width: 720px) {
    button {
      padding: 7px 25px !important;
    }
  }
  @media screen and (max-width: 700px) {
    button {
      padding: 7px 20px !important;
    }
  }
  @media screen and (max-width: 670px) {
    button {
      padding: 7px 15px !important;
      font-size: 15px !important;
    }
  }
  @media screen and (max-width: 600px) {
    button {
      border: 1px solid black;
      border-radius: 5px;
      margin: 15px 8px 10px 0px;
    }
    .link_access {
      display: block !important;
    }
  }
`;
export { ActiveLinkWrapper };

const ActiveLink = ({ router, href, children, className }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <ActiveLinkWrapper>
      <button
        href={href}
        onClick={handleClick}
        style={{
          backgroundColor: isCurrentPath ? "#ffe5dc" : "",
          color: isCurrentPath ? "#000" : "#000",
        }}
        className={className}
      >
        {children}
      </button>
    </ActiveLinkWrapper>
  );
};

export default withRouter(ActiveLink);
