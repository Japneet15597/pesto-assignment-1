import styled from "styled-components";

export const Container = styled.div`
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 16px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.bgColor};
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  padding: 6px;
`;

export const DetailCard = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 40%;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0px 2px 5px #e2e8f0;
`;
