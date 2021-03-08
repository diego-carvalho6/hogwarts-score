import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { CardHeader, Card } from "@material-ui/core";

export const CardHeaderStyled = styled.div`
  height: 383px;
  background-color: #81d4f7;
  position: absolute;
  width: 100%;
  z-index: -1;
  padding: 0;
  margin: 0;
  ${() => css`
    ${console.log(CardHeaderStyled)}
  `}
`;
export const StyledPaper = styled.div`
  background-color: #e5edf2;
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  color: #5777a8;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  max-width: 247px;
  max-height: 448px;
  width: 100%;
  font-size: 30px;

  height: 100vh;
  margin: 2rem;
`;
export const CardStyled = styled.div`
  width: 100%;
  height: 118px;
  background-color: #3461a4;
  margin-top: 88px;
  z-index: 1;
  position: absolute;
  top: 0;
  color: white;
  display: flex;
  align-items: center;
`;
export const Box = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  padding-top: 286px;
  min-width: 280px;
  justify-content: space-evenly;
`;
export const ShieldImage = styled.img`
  background: #3461a4;
  margin: 0 10px;
`;
export const Title = styled.h1`
  width: 500px;
  margin: 0.7rem;
  font-size: 30px;
`;

export const AnimalImage = styled.img`
  background-color: black;
  ${({ link }) => css`
    background-image: url("${link}");
  `};
`;
export const BoxName = styled.div`
  width: 95%;
  margin: 17px auto;
  background-color: #e5edf2;
  min-height: 30vh;
  height: 900px;
  overflow: auto;
`;
