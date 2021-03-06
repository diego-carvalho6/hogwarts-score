import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  min-width: 280px;
  display: flex;
  background-color: #e5edf2;
  padding: 1rem;
  box-sizing: border-box;
`;
export const Windown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  height: 180vh;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
`;
export const Image = styled.img`
  width: 45px;
  padding-left: 0.7rem;
`;

export const HouseName = styled.h3`
  width: 50%;
  color: #3461a4;
  padding-left: 0.7rem;
`;
export const StudantName = styled.h2`
  width: 100%;
  color: #3461a4;
  font-size: 20px;
  box-sizing: border-box;
  padding-left: 1rem;
  text-align: center;
  align-self: center;
  justify-self: center;
  margin: 0;
`;
export const Input = styled.input`
  width: 70%;

  align-self: center;
`;
export const Lose = styled.button`
  width: 30%;
`;
export const Gain = styled.button`
  width: 30%;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-left: 1rem;
`;
export const BoxContent = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;
export const BoxImage = styled.div`
  width: 40%;
`;
export const StudantImage = styled.img`
  width: 100%;
`;
