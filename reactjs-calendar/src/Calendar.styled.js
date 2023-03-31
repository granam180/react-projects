import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid;
  height: 99vh;
`;

export const StyledEvent = styled.span`
  background: ${({ bgColor }) => bgColor};
  color: white;
  text-align: left !important;
  padding: 2px 10px;
  margin: 0 2px;
  border-radius: 10px;
  font-size: 13px;
  cursor: move;
  text-transform: capitalize;
`;

export const SevenColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  ${(props) => props.fullheight && `height: calc(100% - 75px);`}
  ${(props) =>
    props.fullheight &&
    `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(7, minmax(40px, 1fr));
  }

  div {
    display: grid;
    border: 1px solid;
    ${StyledEvent} {
      display: none;
    }
    ${StyledEvent}:nth-child(-n + 3) {
      display: block;
    }

    span {
      text-align: right;
      padding-right: 15px;
      height: fit-content;
    }

    span.active {
      background-color: pink;
      border-bottom: 2px solid red;
      position: relative;
    }
    span.active::before {
      content: "Today ";
      font-size: 14px;
    }
  }
`;

export const HeadDays = styled.span`
  text-align: center;
  height: 30px;
  padding: 5px;
  background: darkolivegreen;
  color: white;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DateControls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;

  ion-icon {
    font-size: 1.6rem;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    width: auto;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const SeeMore = styled.p`
  font-size: 14px;
  padding: 0 5px;
  margin-bottom: 0;
  cursor: pointer;
`;

export const PortalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 90%;
  max-width: 350px;
  height: auto;
  top: 50%;
  left: 50%;
  border: 1px solid;
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 20px;

  h2 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 15px;
    font-size: 14px;
  }

  ion-icon[name="close-outline"] {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: lightblue;
    font-size: 1.2rem;
  }
`;

// ChatGPT's response for a better Mobile view... 
// still a little off, but removing the borders definitely helps! Thanks AI, don't steal my job please!