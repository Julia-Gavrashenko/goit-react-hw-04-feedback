import styled from 'styled-components';

export const OptionWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  justify-content: center;
`;

export const OptionButton = styled.button`
  margin: 0;
  width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: rgb(238, 237, 237);
  border-radius: 0.5rem;
  outline: none;

  color: #0b0b0b;
  font-weight: 700;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-shadow: 8px 8px 12px rgba(96, 95, 95, 0.3),
    -8px -8px 12px rgba(12, 11, 11, 0.04);

  transition: 0.2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(251, 249, 249, 0.8),
    -6px -6px 10px rgba(93, 93, 93, 0.2), 6px 6px 8px rgba(69, 68, 68, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);

  :hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.7),
      -2px -2px 4px rgba(255, 255, 255, 0.4),
      2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
