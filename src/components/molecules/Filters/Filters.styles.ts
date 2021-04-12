import styled from 'styled-components';

export const Wrapper = styled.ul`
  height: 100%;
  margin-left: auto;
  margin-right: 15px;
  display: flex;
  justify-content: space-evenly;
  li {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightCyan_2};
    font-weight: 700;
    font-size: 12px;
    padding: 0 10px;
    margin-left: 15px !important;
    display: flex;
    align-items: center;
  }
`;
