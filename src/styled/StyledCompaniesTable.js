import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #303e4c;
`;

export const Container = styled.div`
  width: 90vw;
  height: 83vh;
  overflow: auto;
  border: 1px solid black;
  margin: 0;
  padding: 10px;
  background-color: #ecebe9;
  overflow-y: auto;
`;

export const THead = styled.thead`
  height: 40px;
`;

export const TR = styled.tr`
  width: 100%;
  margin-bottom: 5px;
`;

export const THCheck = styled.th`
  width: 4%;
  max-width: 150px;
`;

export const CheckBox = styled.input`
  width: 23px;
  height: 23px;
`;

export const TH = styled.th`
  width: 48%;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableBody = styled.tbody`
  margin-top: 15px;
`;
