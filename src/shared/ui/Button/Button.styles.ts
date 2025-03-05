import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 40px;
  font-size: 18px;
  color: #fff;
  background: #eb0237;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #a01131;
  }

  &:disabled {
    background: #701328;
    cursor: not-allowed;
  }
`;
