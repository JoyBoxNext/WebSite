import React from "react";
import styled from "styled-components";

const TestWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }

  body {
    display: grid;
    place-items: center;
  }

  label {
    cursor: pointer;
  }

  input {
    position: absolute;
    transform: scale(0);
  }

  .checkbox {
    display: block;
    width: 70px;
    height: 70px;
    border: 5px solid #e7e7e7;
    transition: all 0.35s;
  }

  input:checked ~ .checkbox {
    transform: rotate(45deg);
    width: 25px;
    border-color: #8f44fd;
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;
export { TestWrapper };

const Test = () => {
  return (
    <TestWrapper>
      <label className="p-5">
        <input type="checkbox" />
        <span class="checkbox"></span>
      </label>
    </TestWrapper>
  );
};

export default Test;
