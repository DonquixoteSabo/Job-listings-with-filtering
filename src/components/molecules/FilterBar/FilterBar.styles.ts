import styled from 'styled-components';

export const Bar = styled.ul`
  width: 100%;
  display: flex;
  background-color: #fff;
  box-shadow: 5px 5px 5px #ddd;
  border-radius: 8px;
  align-items: center;
  .clear {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: auto;
    margin-right: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Filter = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.lightCyan_2};
  font-weight: 700;
  font-size: 16px;
  padding-left: 7px;
  margin-left: 15px !important;
  display: flex;
  align-items: center;
  transition: 0.5s;
  button {
    height: 100%;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    padding: 5px 7px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkCyan_2};
    }
  }
`;
