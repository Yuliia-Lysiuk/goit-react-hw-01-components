import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatsList = styled.ul`
  margin-top: -10px;
  margin-left: -10px;

  display: flex;
  flex-wrap: wrap;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000`

export const StatsItem = styled.li`
  padding-top:10px;
  padding-bottom:10px;
    margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5 - 15px);
 background-color: ${props => {
    return `${getRandomHexColor()}`
  }
  }
  
  
  `