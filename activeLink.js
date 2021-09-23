import React from "react";
import { withRouter } from "next/router";
import styled from "styled-components";

const ActiveLinkWrapper = styled.div`
  button {
    border-right: 1px solid black !important;
    border: none;
    padding: 7px 20px !important;
    background-color: white;
  }
  @media screen and (max-width: 600px) {
    button {
      border: 1px solid black;
      border-radius: 5px;
      margin: 15px 8px 0px 0px;
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
