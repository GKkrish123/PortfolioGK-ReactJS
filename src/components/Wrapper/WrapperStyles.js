import styled from "styled-components";
import { starsBackground } from "./starsBackground";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 2px;
    top: -2px;
    background: white;
    box-shadow: ${starsBackground};
    border-radius: 100px;
  }
`;
