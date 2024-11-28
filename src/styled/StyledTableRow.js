import styled from "styled-components";

export const Row = styled.tr`
  height: 25px;
  font-size: 16px;
`;

export const TD = styled.td`
  text-align: center;
  vertical-align: middle;
  width: 5%;
  overflow-x: hidden;
`;

export const CheckBox = styled.input`
  width: 23px;
  height: 23px;
`;

export const Cell = styled.input`
  height: 25px;
  width: 95%;
  padding: 4px 15px;
  margin: 0 10px;
  border: none;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
