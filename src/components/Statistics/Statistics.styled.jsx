import styled from 'styled-components';

export const StatisticsResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 300px;
  background: rgb(238, 237, 237);
  border-radius: 5px;
   box-shadow: -6px -6px 14px rgba(255, 254, 254, 0.8),
    -6px -6px 10px rgba(93, 93, 93, 0.2), 6px 6px 8px rgba(69, 68, 68, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
 
`;

export const StatisticsItem = styled.li`
  color: #242323;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-shadow: 8px 8px 12px rgba(96, 95, 95, 0.3),
    -8px -8px 12px rgba(12, 11, 11, 0.04);
`;
