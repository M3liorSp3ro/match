import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 17px 40px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #EB0237;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #A01131;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export const Loader = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;