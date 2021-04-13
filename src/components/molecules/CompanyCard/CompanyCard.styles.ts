import styled from 'styled-components';

export const Card = styled.li`
  padding: 15px 0;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;

  border-left: 4px solid transparent;
  transition: 0.5s;

  &:hover {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 7px 7px 7px #ddd;
  }
`;

export const Img = styled.img`
  width: 70px;
  margin-left: 20px;
  border-radius: 50%;
`;
