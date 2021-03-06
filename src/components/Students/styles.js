import styled from "styled-components";

export const List = styled.table`
  width: 90%;
  height: 200px;
  margin: 0 auto;
  background: #e5edf2;
  text-align: left;
  color: #5777a8;
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  & > td {
    margin: 10px;
    padding: 20px 0;
    border-top: 1px solid #5777a8;
    border-collapse: collapse;
  }
  & > th {
    padding: 20px 0;
  }
`;
