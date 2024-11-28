import styled from "styled-components";

export const Wrap = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #f8f9fa;
`;

export const BtnDelete = styled.button`
  width: 184px;
  height: 50px;
  background-color: #fa6334;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  align-items: center;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const BtnAdd = styled(BtnDelete)`
  background-color: #6899d8;
  color: #fff;
`;
