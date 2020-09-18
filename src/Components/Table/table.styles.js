import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px;
  min-height: 100%;
  background-color: #0e1a1b;
`;

export const GridTemplate = styled.div`
  display: grid;
  width: 100%;
  min-height: 100%;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #132526;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.disabled ? "transparent" : "#" + props.color)};
  align-items: center;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};

  & > p {
    width: 100%;
    font-size: 0.6em;
    padding: 3px;
  }
  & > h3 {
    width: 100%;
    text-align: center;
    font-size: 2em;
  }
  & > p:nth-last-child(1) {
    text-align: center;
    font-size: 0.7em;
  }
`;
