import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;
  padding: 20px 0;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.modal.bg};
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.modal.text};
  font-weight: bold;
  font-size: 18px;
`;

export const NavCommand = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${({ theme }) => theme.colors.modal.text};
  border: 1px solid ${({ theme }) => theme.colors.modal.hl};
  border-radius: 6px;
  padding: 6px;

  font-size: 16px;
  cursor: pointer;
  background: none;

  > svg {
    width: 18px;
    height: 18px;
    stroke-width: 2px;
  }

  :disabled {
    cursor: not-allowed;
    > svg {
      margin-top: 1px;
    }
  }

  :hover {
    opacity: 0.8;
  }
`;

export const Warning = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 30px;

  color: ${({ theme }) => theme.colors.modal.text};
  font-weight: bold;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  width: 150px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;

  color: white;
  background-color: ${({ theme }) => theme.colors.modal.button};

  :hover {
    opacity: 0.8;
  }
`;
